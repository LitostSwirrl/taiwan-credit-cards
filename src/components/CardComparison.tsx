import { useState } from 'react';
import type { BenefitCalculation, SortOption } from '../types';
import BenefitsBreakdown from './BenefitsBreakdown';

interface Props {
  calculations: BenefitCalculation[];
}

export default function CardComparison({ calculations }: Props) {
  const [sortBy, setSortBy] = useState<SortOption>('netBenefit');
  const [showAll, setShowAll] = useState(false);
  const [selectedCard, setSelectedCard] = useState<BenefitCalculation | null>(null);

  const sortedCalculations = [...calculations].sort((a, b) => {
    switch (sortBy) {
      case 'totalBenefits':
        return b.totalBenefits - a.totalBenefits;
      case 'netBenefit':
        return b.netAnnualBenefit - a.netAnnualBenefit;
      case 'cashback':
        return b.totalCashback - a.totalCashback;
      case 'points':
        return b.totalPoints - a.totalPoints;
      case 'annualFee':
        return a.annualFee - b.annualFee;
      default:
        return b.netAnnualBenefit - a.netAnnualBenefit;
    }
  });

  const displayedCalculations = showAll ? sortedCalculations : sortedCalculations.slice(0, 5);

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="glass glass-hover rounded-2xl p-6 animate-slide-up">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-display font-semibold text-navy-900 mb-1">
                為您推薦的信用卡
              </h2>
              <p className="text-sm text-pearl-600">
                根據您的消費模式，以下是最適合您的信用卡
              </p>
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-navy-700">排序方式：</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-2 bg-white border border-pearl-200 rounded-lg text-sm font-medium text-navy-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              >
                <option value="netBenefit">淨收益</option>
                <option value="totalBenefits">總回饋</option>
                <option value="cashback">現金回饋</option>
                <option value="points">點數價值</option>
                <option value="annualFee">年費</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {displayedCalculations.map((calc, index) => (
            <CreditCardDisplay
              key={calc.cardId}
              calculation={calc}
              rank={index + 1}
              onClick={() => setSelectedCard(calc)}
            />
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && calculations.length > 5 && (
          <button
            onClick={() => setShowAll(true)}
            className="w-full py-4 px-6 bg-white hover:bg-pearl-50 border-2 border-pearl-200 hover:border-primary-300 rounded-xl font-medium text-navy-700 transition-all duration-300"
          >
            顯示更多 {calculations.length - 5} 張卡片
          </button>
        )}
      </div>

      {/* Benefits Breakdown Modal */}
      {selectedCard && (
        <BenefitsBreakdown
          calculation={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </>
  );
}

interface CreditCardDisplayProps {
  calculation: BenefitCalculation;
  rank: number;
  onClick: () => void;
}

function CreditCardDisplay({ calculation, rank, onClick }: CreditCardDisplayProps) {
  const { card, netAnnualBenefit, totalCashback, pointsValue, warnings } = calculation;

  const isTopCard = rank <= 3;
  const rankColors = {
    1: 'from-gold-400 to-gold-600',
    2: 'from-pearl-300 to-pearl-500',
    3: 'from-amber-600 to-amber-800',
  };

  const tierBadges = {
    general: { label: '一般卡', color: 'bg-pearl-500' },
    gold: { label: '金卡', color: 'bg-gold-500' },
    platinum: { label: '白金卡', color: 'bg-pearl-400' },
    infinite: { label: '無限卡', color: 'bg-navy-900' },
  };

  const tierBadge = tierBadges[card.tier];

  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 transform hover:scale-[1.02] animate-scale-in ${
        isTopCard
          ? 'bg-gradient-to-br from-white to-primary-50/30 shadow-card-hover border-2 border-primary-200'
          : 'glass glass-hover'
      }`}
      style={{ animationDelay: `${rank * 100}ms` }}
    >
      {/* Rank Badge */}
      {isTopCard && (
        <div className="flex justify-between items-start mb-4">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${
              rankColors[rank as keyof typeof rankColors]
            } text-white font-bold shadow-lg`}
          >
            <span className="text-2xl">
              {rank === 1 ? '🏆' : rank === 2 ? '🥈' : '🥉'}
            </span>
            <span>第 {rank} 名推薦</span>
          </div>
        </div>
      )}

      {/* Credit Card Visual */}
      <div
        className="relative h-48 rounded-xl mb-6 p-6 flex flex-col justify-between overflow-hidden shadow-card group-hover:shadow-card-hover transition-all duration-300"
        style={{ background: card.gradient }}
      >
        {/* Card shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${tierBadge.color}`}>
              {tierBadge.label}
            </span>
            <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
              {card.network}
            </span>
          </div>
        </div>

        <div className="relative z-10">
          <h3 className="text-2xl font-display font-bold text-white mb-1 drop-shadow-lg">
            {card.name}
          </h3>
          <p className="text-white/90 text-sm font-medium">{card.bank}</p>
        </div>

        {/* Holographic effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Benefits Summary */}
      <div className="space-y-4">
        {/* Net Annual Benefit */}
        <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl">
          <p className="text-sm font-medium text-navy-600 mb-1">年度淨收益</p>
          <p className={`text-3xl font-display font-bold ${
            netAnnualBenefit >= 0 ? 'text-primary-700' : 'text-red-600'
          }`}>
            {netAnnualBenefit >= 0 ? '+' : ''}
            {netAnnualBenefit.toLocaleString()} TWD
          </p>
        </div>

        {/* Breakdown */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-white rounded-lg border border-pearl-200">
            <p className="text-xs text-pearl-600 mb-1">現金回饋</p>
            <p className="text-lg font-bold text-primary-700">
              {totalCashback.toLocaleString()}
            </p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-pearl-200">
            <p className="text-xs text-pearl-600 mb-1">點數價值</p>
            <p className="text-lg font-bold text-navy-700">
              {pointsValue.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Annual Fee */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-pearl-600">年費：</span>
          <span className="font-semibold text-navy-800">
            {card.fees.annual === 0 ? (
              <span className="text-primary-600">免費</span>
            ) : (
              <>
                {card.fees.annual.toLocaleString()} TWD
                {card.fees.firstYearWaived && (
                  <span className="ml-2 text-xs text-primary-600">（首年免費）</span>
                )}
              </>
            )}
          </span>
        </div>

        {/* Perks Preview */}
        <div className="flex flex-wrap gap-2">
          {card.perks.airportLounge && (
            <span className="px-2 py-1 bg-navy-100 text-navy-700 text-xs font-medium rounded">
              ✈️ 貴賓室
            </span>
          )}
          {card.perks.travelInsurance && (
            <span className="px-2 py-1 bg-navy-100 text-navy-700 text-xs font-medium rounded">
              🛡️ 旅遊保險
            </span>
          )}
          {card.perks.zeroInstallment && (
            <span className="px-2 py-1 bg-navy-100 text-navy-700 text-xs font-medium rounded">
              💳 零利率分期
            </span>
          )}
          {card.perks.conciergeService && (
            <span className="px-2 py-1 bg-navy-100 text-navy-700 text-xs font-medium rounded">
              🎩 禮賓服務
            </span>
          )}
        </div>

        {/* Warnings */}
        {warnings.length > 0 && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-xs font-medium text-amber-800 mb-1">⚠️ 注意事項</p>
            {warnings.map((warning, i) => (
              <p key={i} className="text-xs text-amber-700">
                {warning}
              </p>
            ))}
          </div>
        )}

        {/* View Details Button */}
        <button className="w-full py-3 bg-navy-800 hover:bg-navy-900 text-white font-medium rounded-lg transition-colors duration-200">
          查看完整資訊 →
        </button>
      </div>
    </div>
  );
}
