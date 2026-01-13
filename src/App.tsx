import { useState } from 'react';
import SpendingInput from './components/SpendingInput';
import CardComparison from './components/CardComparison';
import type { SpendingInput as SpendingInputType, BenefitCalculation } from './types';
import { creditCards } from './data/creditCards';
import { calculateAllCards } from './utils/calculator';

export default function App() {
  const [calculations, setCalculations] = useState<BenefitCalculation[] | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = (spending: SpendingInputType) => {
    const results = calculateAllCards(creditCards, spending, {
      calculationPeriod: 'annual',
      includeWelcomeBonus: false,
    });
    setCalculations(results);
    setShowResults(true);

    // Smooth scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleRecalculate = () => {
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-navy-700 to-navy-900 opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold-400/20 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">AI 智能計算</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
              尋找最適合您的
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-gold-400">
                台灣信用卡
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              根據您的消費模式計算真實回饋。比較台灣頂級信用卡的現金回饋、紅利點數與優惠。
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>真實台灣卡片資料</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>行動支付加碼</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>上限計算</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              className="fill-pearl-50"
            />
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Spending Input */}
        <div className="max-w-3xl mx-auto">
          <SpendingInput onCalculate={handleCalculate} />
        </div>

        {/* Results */}
        {showResults && calculations && (
          <div id="results" className="scroll-mt-8">
            <div className="mb-6 flex justify-end">
              <button
                onClick={handleRecalculate}
                className="px-6 py-3 bg-white hover:bg-pearl-50 border border-pearl-200 rounded-lg font-medium text-navy-700 transition-colors duration-200"
              >
                ← 修改消費金額
              </button>
            </div>

            <CardComparison calculations={calculations} />
          </div>
        )}

        {/* Trust Indicators */}
        {!showResults && (
          <div className="max-w-5xl mx-auto">
            <div className="glass glass-hover rounded-2xl p-8">
              <h2 className="text-2xl font-display font-semibold text-navy-900 text-center mb-8">
                為什麼使用我們的計算器？
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  icon="🎯"
                  title="精確計算"
                  description="處理台灣特有功能，如現金回饋上限、分級利率和行動支付加碼。"
                />
                <FeatureCard
                  icon="🔒"
                  title="隱私優先"
                  description="所有計算都在您的瀏覽器中進行。我們不會收集或儲存您的消費資料。"
                />
                <FeatureCard
                  icon="⚡"
                  title="即時結果"
                  description="立即比較所有卡片，查看哪些卡片能最大化您的回饋。"
                />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-white/70 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-display font-semibold text-white">
                重要聲明
              </h3>
              <div className="max-w-3xl mx-auto space-y-2 text-sm">
                <p>
                  ⚠️ 計算結果為基於 2026 年 1 月資料的估算。此為資訊用途，並非財務建議。
                </p>
                <p>
                  申請前請務必向發卡銀行確認當前條款、利率與條件。信用卡條款與優惠經常變更。
                </p>
                <p>
                  本計算器與任何銀行或發卡機構無關。卡片資料來自公開資訊，可能無法反映當前優惠。
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 text-center text-xs">
              <p>© 2026 台灣信用卡計算器。僅供教學用途。</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center space-y-3">
      <div className="text-5xl">{icon}</div>
      <h3 className="text-lg font-display font-semibold text-navy-900">{title}</h3>
      <p className="text-sm text-pearl-600">{description}</p>
    </div>
  );
}
