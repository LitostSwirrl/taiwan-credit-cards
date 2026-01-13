import type { BenefitCalculation } from '../types';
import { useEffect } from 'react';

interface Props {
  calculation: BenefitCalculation;
  onClose: () => void;
}

export default function BenefitsBreakdown({ calculation, onClose }: Props) {
  const { card, breakdown, totalCashback, pointsValue, netAnnualBenefit, warnings } =
    calculation;

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const topCategories = [...breakdown]
    .filter((b) => b.cashback + b.points > 0)
    .sort((a, b) => b.cashback + b.points - (a.cashback + a.points))
    .slice(0, 5);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-scale-in">
        {/* Header with Card Design */}
        <div
          className="relative p-8 text-white"
          style={{ background: card.gradient }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors"
          >
            <span className="text-2xl">×</span>
          </button>

          <div className="max-w-2xl">
            <h2 className="text-3xl font-display font-bold mb-2">{card.name}</h2>
            <p className="text-white/90 text-lg">{card.bank}</p>
            <div className="flex items-center gap-3 mt-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                {card.tier.toUpperCase()}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                {card.network.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
              <p className="text-sm font-medium text-navy-600 mb-2">年度淨收益</p>
              <p className={`text-3xl font-display font-bold ${
                netAnnualBenefit >= 0 ? 'text-primary-700' : 'text-red-600'
              }`}>
                {netAnnualBenefit >= 0 ? '+' : ''}
                {netAnnualBenefit.toLocaleString()}
                <span className="text-lg ml-1">TWD</span>
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-navy-50 to-navy-100 rounded-xl">
              <p className="text-sm font-medium text-navy-600 mb-2">總現金回饋</p>
              <p className="text-3xl font-display font-bold text-navy-700">
                {totalCashback.toLocaleString()}
                <span className="text-lg ml-1">TWD</span>
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-gold-50 to-gold-100 rounded-xl">
              <p className="text-sm font-medium text-navy-600 mb-2">點數價值</p>
              <p className="text-3xl font-display font-bold text-gold-700">
                {pointsValue.toLocaleString()}
                <span className="text-lg ml-1">TWD</span>
              </p>
              {card.points && (
                <p className="text-xs text-pearl-600 mt-1">
                  {calculation.totalPoints.toLocaleString()} 點 @ 每點 {card.points.value} 元
                </p>
              )}
            </div>
          </div>

          {/* Warnings */}
          {warnings.length > 0 && (
            <div className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded-lg">
              <p className="font-semibold text-amber-800 mb-2">⚠️ 重要注意事項</p>
              {warnings.map((warning, i) => (
                <p key={i} className="text-sm text-amber-700">
                  • {warning}
                </p>
              ))}
            </div>
          )}

          {/* Top Earning Categories */}
          <div>
            <h3 className="text-xl font-display font-semibold text-navy-900 mb-4">
              回饋最高類別
            </h3>
            <div className="space-y-3">
              {topCategories.map((category) => {
                const total = category.cashback + category.points;
                const maxTotal = topCategories[0].cashback + topCategories[0].points;
                const percentage = (total / maxTotal) * 100;

                return (
                  <div key={category.category} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-navy-800">{category.category}</span>
                      <span className="font-semibold text-primary-700">
                        +{total.toLocaleString()} TWD
                      </span>
                    </div>
                    <div className="w-full h-3 bg-pearl-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-pearl-600">
                      <span>消費：{category.spent.toLocaleString()} TWD</span>
                      {category.hitCap && category.capAmount && (
                        <span className="text-amber-600 font-medium">
                          ⚠️ 已達到每月上限 {category.capAmount.toLocaleString()} 元
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Breakdown Table */}
          <div>
            <h3 className="text-xl font-display font-semibold text-navy-900 mb-4">
              完整明細
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-pearl-200">
                    <th className="text-left py-3 px-4 font-semibold text-navy-800">類別</th>
                    <th className="text-right py-3 px-4 font-semibold text-navy-800">消費</th>
                    <th className="text-right py-3 px-4 font-semibold text-navy-800">現金回饋</th>
                    <th className="text-right py-3 px-4 font-semibold text-navy-800">點數</th>
                    <th className="text-right py-3 px-4 font-semibold text-navy-800">總計</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pearl-100">
                  {breakdown
                    .filter((b) => b.spent > 0)
                    .map((category) => (
                      <tr key={category.category} className="hover:bg-pearl-50">
                        <td className="py-3 px-4 text-navy-700">{category.category}</td>
                        <td className="py-3 px-4 text-right text-pearl-600">
                          {category.spent.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-right text-primary-700 font-medium">
                          {category.cashback.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-right text-navy-700 font-medium">
                          {category.points.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-right font-semibold text-navy-900">
                          {(category.cashback + category.points).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  <tr className="font-bold bg-pearl-50">
                    <td className="py-3 px-4 text-navy-900">總計</td>
                    <td className="py-3 px-4 text-right text-navy-900">
                      {breakdown.reduce((sum, b) => sum + b.spent, 0).toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right text-primary-700">
                      {totalCashback.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right text-navy-700">
                      {pointsValue.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-right text-navy-900">
                      {(totalCashback + pointsValue).toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Fees */}
          <div className="p-6 bg-pearl-50 rounded-xl">
            <h3 className="text-lg font-display font-semibold text-navy-900 mb-3">費用</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-navy-700">年費：</span>
                <span className="font-semibold text-navy-900">
                  {card.fees.annual === 0 ? (
                    <span className="text-primary-600">免費</span>
                  ) : (
                    `${card.fees.annual.toLocaleString()} TWD`
                  )}
                </span>
              </div>
              {card.fees.firstYearWaived && (
                <p className="text-xs text-primary-600">✓ 首年免年費</p>
              )}
              {card.fees.waiverCondition && (
                <p className="text-xs text-pearl-600">免年費條件：{card.fees.waiverCondition}</p>
              )}
              <div className="flex justify-between">
                <span className="text-navy-700">國外交易手續費：</span>
                <span className="font-semibold text-navy-900">
                  {card.fees.foreignTransaction === 0
                    ? <span className="text-primary-600">免費</span>
                    : `${(card.fees.foreignTransaction * 100).toFixed(1)}%`}
                </span>
              </div>
            </div>
          </div>

          {/* Perks */}
          <div>
            <h3 className="text-xl font-display font-semibold text-navy-900 mb-4">優惠與權益</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {card.perks.airportLounge && (
                <PerkCard
                  icon="✈️"
                  title="機場貴賓室"
                  details={[
                    `提供商：${card.perks.airportLounge.provider}`,
                    `每年 ${card.perks.airportLounge.visitsPerYear} 次`,
                    card.perks.airportLounge.guestAllowed ? '可攜賓客' : '不可攜賓客',
                  ]}
                />
              )}

              {card.perks.travelInsurance && (
                <PerkCard
                  icon="🛡️"
                  title="旅遊保險"
                  details={[
                    `海外：${(card.perks.travelInsurance.overseas / 1000000).toFixed(0)}百萬元`,
                    `國內：${(card.perks.travelInsurance.domestic / 1000000).toFixed(0)}百萬元`,
                    card.perks.travelInsurance.rentalCarCDW && '租車碰撞險',
                  ].filter(Boolean) as string[]}
                />
              )}

              {card.perks.purchaseProtection && (
                <PerkCard
                  icon="🛒"
                  title="購物保障"
                  details={[
                    `保障額度：${card.perks.purchaseProtection.coverageAmount.toLocaleString()} 元`,
                    `${card.perks.purchaseProtection.daysOfCoverage} 天`,
                  ]}
                />
              )}

              {card.perks.zeroInstallment && (
                <PerkCard
                  icon="💳"
                  title="零利率分期"
                  details={[
                    `可分期：${card.perks.zeroInstallment.availableMonths.join('、')} 期`,
                    card.perks.zeroInstallment.minimumAmount &&
                      `最低金額：${card.perks.zeroInstallment.minimumAmount.toLocaleString()} 元`,
                  ].filter(Boolean) as string[]}
                />
              )}

              {card.perks.conciergeService && (
                <PerkCard icon="🎩" title="禮賓服務" details={['24/7 禮賓服務']} />
              )}
            </div>
          </div>

          {/* Data Attribution */}
          <div className="pt-6 border-t border-pearl-200 text-xs text-pearl-500 space-y-1">
            <p>資料更新日期：{card.lastUpdated}</p>
            {card.sourceUrl && (
              <p>
                資料來源：{' '}
                <a
                  href={card.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  {card.bank} 官方網站
                </a>
              </p>
            )}
            {card.notes && <p className="text-navy-600 font-medium">備註：{card.notes}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

interface PerkCardProps {
  icon: string;
  title: string;
  details: string[];
}

function PerkCard({ icon, title, details }: PerkCardProps) {
  return (
    <div className="p-4 bg-white border border-pearl-200 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{icon}</span>
        <h4 className="font-semibold text-navy-800">{title}</h4>
      </div>
      <ul className="space-y-1 text-sm text-pearl-700">
        {details.map((detail, i) => (
          <li key={i}>• {detail}</li>
        ))}
      </ul>
    </div>
  );
}
