import type {
  CreditCard,
  SpendingInput,
  BenefitCalculation,
  CategoryBreakdown,
  OnlineShoppingBreakdown,
} from '../types';

function calculateTieredCashback(
  spending: number,
  tiers: Array<{ minSpend: number; maxSpend?: number; rate: number }>
): number {
  let cashback = 0;
  for (const tier of tiers) {
    const tierSpending = Math.min(
      Math.max(0, spending - tier.minSpend),
      (tier.maxSpend || Infinity) - tier.minSpend
    );
    if (tierSpending > 0) {
      cashback += tierSpending * tier.rate;
    }
  }
  return cashback;
}

function applyCap(
  earnedAmount: number,
  cap: number | undefined,
  period: 'monthly' | 'quarterly' | 'annual',
  calculationPeriod: 'monthly' | 'annual'
): { capped: number; hitCap: boolean } {
  if (!cap) return { capped: earnedAmount, hitCap: false };

  const periodMultiplier =
    calculationPeriod === 'annual' && period === 'monthly'
      ? 12
      : calculationPeriod === 'annual' && period === 'quarterly'
      ? 4
      : 1;

  const effectiveCap = cap * periodMultiplier;
  const hitCap = earnedAmount > effectiveCap;

  return {
    capped: Math.min(earnedAmount, effectiveCap),
    hitCap,
  };
}

function applyMobilePaymentBonus(
  baseEarning: number,
  spending: number,
  mobilePaymentUsage: SpendingInput['mobilePaymentUsage'],
  bonusRates?: {
    linePay?: number;
    jkopay?: number;
    piWallet?: number;
    easyWallet?: number;
  }
): number {
  if (!mobilePaymentUsage || !bonusRates) return baseEarning;

  let bonus = 0;

  if (mobilePaymentUsage.linePay && bonusRates.linePay) {
    const linePaySpending = (spending * mobilePaymentUsage.linePay) / 100;
    bonus += linePaySpending * bonusRates.linePay;
  }

  if (mobilePaymentUsage.jkopay && bonusRates.jkopay) {
    const jkopaySpending = (spending * mobilePaymentUsage.jkopay) / 100;
    bonus += jkopaySpending * bonusRates.jkopay;
  }

  if (mobilePaymentUsage.piWallet && bonusRates.piWallet) {
    const piWalletSpending = (spending * mobilePaymentUsage.piWallet) / 100;
    bonus += piWalletSpending * bonusRates.piWallet;
  }

  if (mobilePaymentUsage.easyWallet && bonusRates.easyWallet) {
    const easyWalletSpending =
      (spending * mobilePaymentUsage.easyWallet) / 100;
    bonus += easyWalletSpending * bonusRates.easyWallet;
  }

  return baseEarning + bonus;
}

function applyPlatformBonus(
  shopping: OnlineShoppingBreakdown,
  bonusRates?: {
    shopee?: number;
    momo?: number;
    pchome?: number;
    rakuten?: number;
  }
): number {
  if (!bonusRates) return 0;

  let platformBonus = 0;

  if (shopping.shopee && bonusRates.shopee) {
    platformBonus += shopping.shopee * bonusRates.shopee;
  }
  if (shopping.momo && bonusRates.momo) {
    platformBonus += shopping.momo * bonusRates.momo;
  }
  if (shopping.pchome && bonusRates.pchome) {
    platformBonus += shopping.pchome * bonusRates.pchome;
  }
  if (shopping.rakuten && bonusRates.rakuten) {
    platformBonus += shopping.rakuten * bonusRates.rakuten;
  }

  return platformBonus;
}

function checkRequirements(
  totalSpending: number,
  card: CreditCard
): { met: boolean; warnings: string[] } {
  const warnings: string[] = [];

  if (card.requirements.minimumMonthlySpend) {
    const monthlySpending = totalSpending / 12;
    if (monthlySpending < card.requirements.minimumMonthlySpend) {
      warnings.push(
        `Requires ${card.requirements.minimumMonthlySpend.toLocaleString()} TWD/month (you spend ${monthlySpending.toFixed(0)} TWD/month)`
      );
    }
  }

  return { met: warnings.length === 0, warnings };
}

const CATEGORY_LABELS: Record<string, string> = {
  dining: 'Dining',
  convenienceStore: 'Convenience Stores',
  onlineShopping: 'Online Shopping',
  departmentStore: 'Department Stores',
  hypermarket: 'Hypermarkets',
  drugstore: 'Drugstores',
  gas: 'Gas',
  parking: 'Parking',
  publicTransport: 'Public Transport',
  electricity: 'Electricity',
  water: 'Water',
  gasUtility: 'Gas Utility',
  internet: 'Internet',
  mobilePhone: 'Mobile Phone',
  domesticTravel: 'Domestic Travel',
  internationalTravel: 'International Travel',
  entertainment: 'Entertainment',
  streaming: 'Streaming',
  other: 'Other',
};

export function calculateBenefits(
  card: CreditCard,
  spending: SpendingInput,
  options: {
    calculationPeriod?: 'monthly' | 'annual';
    includeWelcomeBonus?: boolean;
  } = { calculationPeriod: 'annual', includeWelcomeBonus: false }
): BenefitCalculation {
  const breakdown: CategoryBreakdown[] = [];
  let totalCashback = 0;
  let totalPoints = 0;
  const warnings: string[] = [];

  // Calculate for each category
  for (const [category, value] of Object.entries(spending)) {
    if (category === 'mobilePaymentUsage') continue;

    let amount: number;
    if (category === 'onlineShopping') {
      amount = (value as OnlineShoppingBreakdown).total;
    } else {
      amount = value as number;
    }

    if (amount === 0) continue;

    // Cashback calculation
    const categoryConfig = card.cashback[category];
    if (categoryConfig) {
      let cashback = categoryConfig.tiers
        ? calculateTieredCashback(amount, categoryConfig.tiers)
        : amount * categoryConfig.baseRate;

      // Apply mobile payment bonus
      if (spending.mobilePaymentUsage && categoryConfig.mobilePaymentBonus) {
        cashback = applyMobilePaymentBonus(
          cashback,
          amount,
          spending.mobilePaymentUsage,
          categoryConfig.mobilePaymentBonus
        );
      }

      // Apply platform bonus for online shopping
      if (category === 'onlineShopping' && categoryConfig.platformBonus) {
        cashback += applyPlatformBonus(
          spending.onlineShopping,
          categoryConfig.platformBonus
        );
      }

      // Apply caps
      const { capped: cappedCashback, hitCap } = applyCap(
        cashback,
        categoryConfig.monthlyCap,
        'monthly',
        options.calculationPeriod || 'annual'
      );

      totalCashback += cappedCashback;

      breakdown.push({
        category: CATEGORY_LABELS[category] || category,
        spent: amount,
        cashback: cappedCashback,
        points: 0,
        hitCap,
        capAmount: categoryConfig.monthlyCap,
      });
    }

    // Points calculation
    if (card.points) {
      let points = amount * card.points.baseRate;

      // Apply category multipliers
      if (
        card.points.categoryMultipliers &&
        card.points.categoryMultipliers[category]
      ) {
        points *= card.points.categoryMultipliers[category];
      }

      // Apply mobile payment bonus for points
      if (spending.mobilePaymentUsage && categoryConfig?.mobilePaymentBonus) {
        points = applyMobilePaymentBonus(
          points,
          amount,
          spending.mobilePaymentUsage,
          categoryConfig.mobilePaymentBonus
        );
      }

      // Apply caps on points
      const { capped: cappedPoints } = applyCap(
        points,
        card.points.monthlyCap,
        'monthly',
        options.calculationPeriod || 'annual'
      );

      totalPoints += cappedPoints;

      // Update breakdown with points
      const existingBreakdown = breakdown.find(
        (b) => b.category === (CATEGORY_LABELS[category] || category)
      );
      if (existingBreakdown) {
        existingBreakdown.points = cappedPoints;
      } else {
        breakdown.push({
          category: CATEGORY_LABELS[category] || category,
          spent: amount,
          cashback: 0,
          points: cappedPoints,
          hitCap: false,
        });
      }
    }
  }

  // Check requirements
  const totalSpending = Object.entries(spending).reduce((sum, [key, value]) => {
    if (key === 'mobilePaymentUsage') return sum;
    if (key === 'onlineShopping') {
      return sum + (value as OnlineShoppingBreakdown).total;
    }
    return sum + (value as number);
  }, 0);

  const { warnings: reqWarnings } = checkRequirements(totalSpending, card);
  warnings.push(...reqWarnings);

  // Calculate net benefit
  const annualFee = card.fees.firstYearWaived ? 0 : card.fees.annual;
  const pointsValue = card.points ? totalPoints * card.points.value : 0;
  let totalBenefits = totalCashback + pointsValue;

  // Add welcome bonus if applicable
  if (options.includeWelcomeBonus && card.welcomeBonus?.value) {
    totalBenefits += card.welcomeBonus.value;
  }

  const netBenefit = totalBenefits - annualFee;

  return {
    cardId: card.id,
    card,
    totalCashback,
    totalPoints,
    pointsValue,
    totalBenefits,
    netAnnualBenefit: netBenefit,
    breakdown,
    perks: card.perks,
    warnings,
    annualFee,
  };
}

export function calculateAllCards(
  cards: CreditCard[],
  spending: SpendingInput,
  options?: {
    calculationPeriod?: 'monthly' | 'annual';
    includeWelcomeBonus?: boolean;
  }
): BenefitCalculation[] {
  return cards.map((card) => calculateBenefits(card, spending, options));
}
