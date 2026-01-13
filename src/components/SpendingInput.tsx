import { useState } from 'react';
import type { SpendingInput as SpendingInputType } from '../types';

interface Props {
  onCalculate: (spending: SpendingInputType) => void;
}

const ICONS = {
  dining: '🍽️',
  convenienceStore: '🏪',
  onlineShopping: '🛒',
  departmentStore: '🏬',
  hypermarket: '🛍️',
  drugstore: '💊',
  gas: '⛽',
  parking: '🅿️',
  publicTransport: '🚇',
  utilities: '💡',
  travel: '✈️',
  entertainment: '🎬',
};

export default function SpendingInput({ onCalculate }: Props) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showMobilePayment, setShowMobilePayment] = useState(false);

  const [spending, setSpending] = useState<SpendingInputType>({
    dining: 10000,
    convenienceStore: 2000,
    onlineShopping: {
      total: 8000,
      shopee: 3000,
      momo: 3000,
      pchome: 2000,
    },
    departmentStore: 5000,
    hypermarket: 8000,
    drugstore: 1000,
    gas: 3000,
    parking: 500,
    publicTransport: 1000,
    electricity: 1500,
    water: 500,
    gasUtility: 800,
    internet: 1000,
    mobilePhone: 1200,
    domesticTravel: 5000,
    internationalTravel: 10000,
    entertainment: 3000,
    streaming: 500,
    other: 2000,
    mobilePaymentUsage: {
      linePay: 30,
      jkopay: 10,
      piWallet: 5,
      easyWallet: 5,
    },
  });

  const updateSpending = (key: keyof SpendingInputType, value: number) => {
    setSpending((prev) => ({ ...prev, [key]: value }));
  };

  const updateOnlineShopping = (platform: string, value: number) => {
    setSpending((prev) => ({
      ...prev,
      onlineShopping: {
        ...prev.onlineShopping,
        [platform]: value,
        total:
          (platform === 'shopee' ? value : prev.onlineShopping.shopee || 0) +
          (platform === 'momo' ? value : prev.onlineShopping.momo || 0) +
          (platform === 'pchome' ? value : prev.onlineShopping.pchome || 0) +
          (platform === 'rakuten' ? value : prev.onlineShopping.rakuten || 0) +
          (platform === 'other' ? value : prev.onlineShopping.other || 0),
      },
    }));
  };

  const updateMobilePayment = (method: string, value: number) => {
    setSpending((prev) => ({
      ...prev,
      mobilePaymentUsage: {
        ...prev.mobilePaymentUsage,
        [method]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(spending);
  };

  return (
    <form onSubmit={handleSubmit} className="glass glass-hover rounded-2xl p-8 animate-slide-up">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
          <span className="text-2xl">💳</span>
        </div>
        <div>
          <h2 className="text-2xl font-display font-semibold text-navy-900">Your Monthly Spending</h2>
          <p className="text-sm text-pearl-600">Enter your average monthly expenses</p>
        </div>
      </div>

      {/* Essential Categories */}
      <div className="space-y-4 mb-6">
        <h3 className="text-sm font-semibold text-navy-700 uppercase tracking-wide">Essential</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            icon={ICONS.dining}
            label="Dining"
            value={spending.dining}
            onChange={(v) => updateSpending('dining', v)}
            hint="Restaurants, cafes, food delivery"
          />

          <InputField
            icon={ICONS.convenienceStore}
            label="Convenience Stores"
            value={spending.convenienceStore}
            onChange={(v) => updateSpending('convenienceStore', v)}
            hint="7-11, FamilyMart, OK, Hi-Life"
          />

          <InputField
            icon={ICONS.hypermarket}
            label="Hypermarkets"
            value={spending.hypermarket}
            onChange={(v) => updateSpending('hypermarket', v)}
            hint="Costco, Carrefour, RT-Mart"
          />

          <InputField
            icon={ICONS.gas}
            label="Gas"
            value={spending.gas}
            onChange={(v) => updateSpending('gas', v)}
          />
        </div>
      </div>

      {/* Online Shopping with Platform Breakdown */}
      <div className="space-y-4 mb-6">
        <h3 className="text-sm font-semibold text-navy-700 uppercase tracking-wide flex items-center gap-2">
          {ICONS.onlineShopping} Online Shopping
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <InputField
            label="Shopee 蝦皮"
            value={spending.onlineShopping.shopee || 0}
            onChange={(v) => updateOnlineShopping('shopee', v)}
            small
          />
          <InputField
            label="Momo 購物網"
            value={spending.onlineShopping.momo || 0}
            onChange={(v) => updateOnlineShopping('momo', v)}
            small
          />
          <InputField
            label="PChome"
            value={spending.onlineShopping.pchome || 0}
            onChange={(v) => updateOnlineShopping('pchome', v)}
            small
          />
          <InputField
            label="Other Platforms"
            value={spending.onlineShopping.other || 0}
            onChange={(v) => updateOnlineShopping('other', v)}
            small
          />
        </div>
        <div className="text-right">
          <span className="text-sm text-pearl-600">Total: </span>
          <span className="text-lg font-semibold text-primary-700">
            {spending.onlineShopping.total.toLocaleString()} TWD
          </span>
        </div>
      </div>

      {/* Mobile Payment Usage */}
      <div className="mb-6">
        <button
          type="button"
          onClick={() => setShowMobilePayment(!showMobilePayment)}
          className="w-full flex items-center justify-between p-4 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors"
        >
          <span className="text-sm font-semibold text-navy-700">📱 Mobile Payment Usage (%)</span>
          <span className="text-2xl">{showMobilePayment ? '−' : '+'}</span>
        </button>

        {showMobilePayment && (
          <div className="mt-4 grid grid-cols-2 gap-3 animate-slide-down">
            <InputField
              label="LINE Pay"
              value={spending.mobilePaymentUsage?.linePay || 0}
              onChange={(v) => updateMobilePayment('linePay', v)}
              suffix="%"
              small
            />
            <InputField
              label="街口支付 Jkopay"
              value={spending.mobilePaymentUsage?.jkopay || 0}
              onChange={(v) => updateMobilePayment('jkopay', v)}
              suffix="%"
              small
            />
            <InputField
              label="Pi 拍錢包"
              value={spending.mobilePaymentUsage?.piWallet || 0}
              onChange={(v) => updateMobilePayment('piWallet', v)}
              suffix="%"
              small
            />
            <InputField
              label="悠遊付 EasyWallet"
              value={spending.mobilePaymentUsage?.easyWallet || 0}
              onChange={(v) => updateMobilePayment('easyWallet', v)}
              suffix="%"
              small
            />
          </div>
        )}
      </div>

      {/* Advanced Categories */}
      <div className="mb-6">
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full flex items-center justify-between p-4 rounded-lg bg-navy-50 hover:bg-navy-100 transition-colors"
        >
          <span className="text-sm font-semibold text-navy-700">Advanced Categories</span>
          <span className="text-2xl">{showAdvanced ? '−' : '+'}</span>
        </button>

        {showAdvanced && (
          <div className="mt-4 space-y-4 animate-slide-down">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                icon={ICONS.departmentStore}
                label="Department Stores"
                value={spending.departmentStore}
                onChange={(v) => updateSpending('departmentStore', v)}
                hint="SOGO, 新光三越, 微風"
              />
              <InputField
                icon={ICONS.drugstore}
                label="Drugstores"
                value={spending.drugstore}
                onChange={(v) => updateSpending('drugstore', v)}
                hint="Watsons, Cosmed"
              />
              <InputField
                icon={ICONS.parking}
                label="Parking"
                value={spending.parking}
                onChange={(v) => updateSpending('parking', v)}
              />
              <InputField
                icon={ICONS.publicTransport}
                label="Public Transport"
                value={spending.publicTransport}
                onChange={(v) => updateSpending('publicTransport', v)}
                hint="悠遊卡 auto-load"
              />
            </div>

            <h4 className="text-sm font-semibold text-navy-700 uppercase tracking-wide mt-6">
              {ICONS.utilities} Utilities & Bills
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <InputField
                label="Electricity"
                value={spending.electricity}
                onChange={(v) => updateSpending('electricity', v)}
                small
              />
              <InputField
                label="Water"
                value={spending.water}
                onChange={(v) => updateSpending('water', v)}
                small
              />
              <InputField
                label="Gas Utility"
                value={spending.gasUtility}
                onChange={(v) => updateSpending('gasUtility', v)}
                small
              />
              <InputField
                label="Internet"
                value={spending.internet}
                onChange={(v) => updateSpending('internet', v)}
                small
              />
              <InputField
                label="Mobile Phone"
                value={spending.mobilePhone}
                onChange={(v) => updateSpending('mobilePhone', v)}
                small
              />
            </div>

            <h4 className="text-sm font-semibold text-navy-700 uppercase tracking-wide mt-6">
              {ICONS.travel} Travel & Entertainment
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Domestic Travel"
                value={spending.domesticTravel}
                onChange={(v) => updateSpending('domesticTravel', v)}
              />
              <InputField
                label="International Travel"
                value={spending.internationalTravel}
                onChange={(v) => updateSpending('internationalTravel', v)}
              />
              <InputField
                icon={ICONS.entertainment}
                label="Entertainment"
                value={spending.entertainment}
                onChange={(v) => updateSpending('entertainment', v)}
                hint="Movies, concerts, events"
              />
              <InputField
                label="Streaming Services"
                value={spending.streaming}
                onChange={(v) => updateSpending('streaming', v)}
                hint="Netflix, Spotify, etc."
              />
            </div>

            <InputField
              label="Other Expenses"
              value={spending.other}
              onChange={(v) => updateSpending('other', v)}
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
      >
        <span className="text-lg">Calculate Best Cards</span>
      </button>

      <p className="text-xs text-pearl-500 text-center mt-4">
        All amounts in TWD per month
      </p>
    </form>
  );
}

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  icon?: string;
  hint?: string;
  suffix?: string;
  small?: boolean;
}

function InputField({ label, value, onChange, icon, hint, suffix, small }: InputFieldProps) {
  return (
    <div className={small ? '' : 'space-y-1'}>
      <label className={`block font-medium text-navy-800 ${small ? 'text-xs' : 'text-sm'}`}>
        {icon && <span className="mr-1">{icon}</span>}
        {label}
      </label>
      {hint && <p className="text-xs text-pearl-500">{hint}</p>}
      <div className="relative">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`w-full bg-white border border-pearl-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all ${
            small ? 'px-3 py-2 text-sm' : 'px-4 py-3'
          }`}
          min="0"
          step="100"
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-pearl-500 text-sm">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
