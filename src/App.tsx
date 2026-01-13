import { useState } from 'react';
import SpendingInput from './components/SpendingInput';
import CardComparison from './components/CardComparison';
import { SpendingInput as SpendingInputType, BenefitCalculation } from './types';
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
              <span className="text-white/90 text-sm font-medium">Powered by AI Calculations</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
              Find Your Perfect
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-gold-400">
                Taiwan Credit Card
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              Calculate real benefits based on your spending patterns. Compare cashback, points, and perks
              from Taiwan's top credit cards.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Real Taiwan card data</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Mobile payment bonuses</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span>Cap calculations</span>
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
                ← Edit Spending
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
                Why Use Our Calculator?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  icon="🎯"
                  title="Accurate Calculations"
                  description="Handles Taiwan-specific features like cashback caps, tiered rates, and mobile payment bonuses."
                />
                <FeatureCard
                  icon="🔒"
                  title="Privacy First"
                  description="All calculations happen in your browser. We don't collect or store your spending data."
                />
                <FeatureCard
                  icon="⚡"
                  title="Real-Time Results"
                  description="Instantly compare all cards and see which ones maximize your benefits."
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
                Important Disclaimer
              </h3>
              <div className="max-w-3xl mx-auto space-y-2 text-sm">
                <p>
                  ⚠️ Calculations are estimates based on data as of January 2026. This is for
                  informational purposes only and is not financial advice.
                </p>
                <p>
                  Always verify current terms, rates, and conditions with the issuing bank before
                  applying. Credit card terms and promotions change frequently.
                </p>
                <p>
                  This calculator is not affiliated with any banks or card issuers. Card data is
                  sourced from public information and may not reflect current offers.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 text-center text-xs">
              <p>© 2026 Taiwan Credit Card Calculator. Built for educational purposes.</p>
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
