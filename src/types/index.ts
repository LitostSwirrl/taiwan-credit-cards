export interface CreditCard {
  id: string;
  name: string;
  bank: string;
  tier: 'general' | 'gold' | 'platinum' | 'infinite';
  network: 'visa' | 'mastercard' | 'jcb' | 'unionpay';
  imageUrl?: string;
  gradient: string; // CSS gradient for card visual

  fees: {
    annual: number;
    firstYearWaived?: boolean;
    waiverCondition?: string;
    foreignTransaction: number;
  };

  cashback: {
    [category: string]: {
      baseRate: number;
      tiers?: Array<{
        minSpend: number;
        maxSpend?: number;
        rate: number;
      }>;
      monthlyCap?: number;
      quarterlyCap?: number;
      annualCap?: number;
      mobilePaymentBonus?: {
        linePay?: number;
        jkopay?: number;
        piWallet?: number;
        easyWallet?: number;
      };
      platformBonus?: {
        shopee?: number;
        momo?: number;
        pchome?: number;
        rakuten?: number;
      };
    };
  };

  points?: {
    baseRate: number;
    value: number;
    minimumRedemption?: number;
    expirationMonths?: number;
    transferPartners?: Array<{
      name: string;
      ratio: number;
      minimumTransfer?: number;
    }>;
    categoryMultipliers?: {
      [category: string]: number;
    };
    monthlyCap?: number;
  };

  perks: {
    airportLounge?: {
      provider: string;
      visitsPerYear: number;
      guestAllowed: boolean;
      domesticAirports?: string[];
    };
    travelInsurance?: {
      overseas: number;
      domestic: number;
      rentalCarCDW: boolean;
    };
    purchaseProtection?: {
      coverageAmount: number;
      daysOfCoverage: number;
    };
    extendedWarranty?: {
      additionalMonths: number;
    };
    mobilePhoneInsurance?: {
      coverageAmount: number;
      deductible: number;
    };
    conciergeService: boolean;
    freeDelivery?: string[];
    discounts?: Array<{
      merchant: string;
      description: string;
      value: string;
      category?: string;
    }>;
    zeroInstallment?: {
      availableMonths: number[];
      merchants?: string[];
      minimumAmount?: number;
    };
  };

  requirements: {
    minimumMonthlySpend?: number;
    minimumIncome?: number;
    applicationMethod?: 'online' | 'branch' | 'both';
  };

  welcomeBonus?: {
    description: string;
    conditions: string;
    value?: number;
  };

  lastUpdated: string;
  sourceUrl?: string;
  notes?: string;
}

export interface OnlineShoppingBreakdown {
  total: number;
  shopee?: number;
  momo?: number;
  pchome?: number;
  rakuten?: number;
  other?: number;
}

export interface MobilePaymentUsage {
  linePay?: number;
  jkopay?: number;
  piWallet?: number;
  easyWallet?: number;
}

export interface SpendingInput {
  dining: number;
  convenienceStore: number;
  onlineShopping: OnlineShoppingBreakdown;
  departmentStore: number;
  hypermarket: number;
  drugstore: number;
  gas: number;
  parking: number;
  publicTransport: number;
  electricity: number;
  water: number;
  gasUtility: number;
  internet: number;
  mobilePhone: number;
  domesticTravel: number;
  internationalTravel: number;
  entertainment: number;
  streaming: number;
  other: number;
  mobilePaymentUsage?: MobilePaymentUsage;
}

export interface CategoryBreakdown {
  category: string;
  spent: number;
  cashback: number;
  points: number;
  hitCap: boolean;
  capAmount?: number;
}

export interface BenefitCalculation {
  cardId: string;
  card: CreditCard;
  totalCashback: number;
  totalPoints: number;
  pointsValue: number;
  totalBenefits: number;
  netAnnualBenefit: number;
  breakdown: CategoryBreakdown[];
  perks: CreditCard['perks'];
  warnings: string[];
  annualFee: number;
}

export type SortOption =
  | 'totalBenefits'
  | 'netBenefit'
  | 'cashback'
  | 'points'
  | 'annualFee';

export interface FilterOptions {
  banks: string[];
  minFee: number;
  maxFee: number;
  tiers: Array<'general' | 'gold' | 'platinum' | 'infinite'>;
  networks: Array<'visa' | 'mastercard' | 'jcb' | 'unionpay'>;
}
