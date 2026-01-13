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
          <h2 className="text-2xl font-display font-semibold text-navy-900">您的每月消費</h2>
          <p className="text-sm text-pearl-600">輸入您的平均每月支出</p>
        </div>
      </div>

      {/* Essential Categories */}
      <div className="space-y-4 mb-6">
        <h3 className="text-sm font-semibold text-navy-700 uppercase tracking-wide">基本類別</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            icon={ICONS.dining}
            label="餐飲"
            value={spending.dining}
            onChange={(v) => updateSpending('dining', v)}
            hint="餐廳、咖啡廳、外送"
          />

          <InputField
            icon={ICONS.convenienceStore}
            label="便利商店"
            value={spending.convenienceStore}
            onChange={(v) => updateSpending('convenienceStore', v)}
            hint="7-11、全家、OK、萊爾富"
          />

          <InputField
            icon={ICONS.hypermarket}
            label="量販超市"
            value={spending.hypermarket}
            onChange={(v) => updateSpending('hypermarket', v)}
            hint="好市多、家樂福、大潤發"
          />

          <InputField
            icon={ICONS.gas}
            label="加油"
            value={spending.gas}
            onChange={(v) => updateSpending('gas', v)}
          />
        </div>
      </div>

      {/* Online Shopping with Platform Breakdown */}
      <div className="space-y-4 mb-6">
        <h3 className="text-sm font-semibold text-navy-700 uppercase tracking-wide flex items-center gap-2">
          {ICONS.onlineShopping} 網路購物
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <InputField
            label="蝦皮購物 Shopee"
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
            label="PChome 購物"
            value={spending.onlineShopping.pchome || 0}
            onChange={(v) => updateOnlineShopping('pchome', v)}
            small
          />
          <InputField
            label="其他平台"
            value={spending.onlineShopping.other || 0}
            onChange={(v) => updateOnlineShopping('other', v)}
            small
          />
        </div>
        <div className="text-right">
          <span className="text-sm text-pearl-600">總計： </span>
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
          <span className="text-sm font-semibold text-navy-700">📱 行動支付使用比例（%）</span>
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
          <span className="text-sm font-semibold text-navy-700">進階類別</span>
          <span className="text-2xl">{showAdvanced ? '−' : '+'}</span>
        </button>

        {showAdvanced && (
          <div className="mt-4 space-y-4 animate-slide-down">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                icon={ICONS.departmentStore}
                label="百貨公司"
                value={spending.departmentStore}
                onChange={(v) => updateSpending('departmentStore', v)}
                hint="SOGO、新光三越、微風"
              />
              <InputField
                icon={ICONS.drugstore}
                label="藥妝店"
                value={spending.drugstore}
                onChange={(v) => updateSpending('drugstore', v)}
                hint="屈臣氏、康是美"
              />
              <InputField
                icon={ICONS.parking}
                label="停車費"
                value={spending.parking}
                onChange={(v) => updateSpending('parking', v)}
              />
              <InputField
                icon={ICONS.publicTransport}
                label="大眾運輸"
                value={spending.publicTransport}
                onChange={(v) => updateSpending('publicTransport', v)}
                hint="悠遊卡自動加值"
              />
            </div>

            <h4 className="text-sm font-semibold text-navy-700 uppercase tracking-wide mt-6">
              {ICONS.utilities} 水電瓦斯與帳單
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <InputField
                label="電費"
                value={spending.electricity}
                onChange={(v) => updateSpending('electricity', v)}
                small
              />
              <InputField
                label="水費"
                value={spending.water}
                onChange={(v) => updateSpending('water', v)}
                small
              />
              <InputField
                label="瓦斯費"
                value={spending.gasUtility}
                onChange={(v) => updateSpending('gasUtility', v)}
                small
              />
              <InputField
                label="網路費"
                value={spending.internet}
                onChange={(v) => updateSpending('internet', v)}
                small
              />
              <InputField
                label="手機費"
                value={spending.mobilePhone}
                onChange={(v) => updateSpending('mobilePhone', v)}
                small
              />
            </div>

            <h4 className="text-sm font-semibold text-navy-700 uppercase tracking-wide mt-6">
              {ICONS.travel} 旅遊與娛樂
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="國內旅遊"
                value={spending.domesticTravel}
                onChange={(v) => updateSpending('domesticTravel', v)}
              />
              <InputField
                label="國外旅遊"
                value={spending.internationalTravel}
                onChange={(v) => updateSpending('internationalTravel', v)}
              />
              <InputField
                icon={ICONS.entertainment}
                label="娛樂活動"
                value={spending.entertainment}
                onChange={(v) => updateSpending('entertainment', v)}
                hint="電影、演唱會、活動"
              />
              <InputField
                label="串流服務"
                value={spending.streaming}
                onChange={(v) => updateSpending('streaming', v)}
                hint="Netflix、Spotify 等"
              />
            </div>

            <InputField
              label="其他支出"
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
        <span className="text-lg">計算最佳信用卡</span>
      </button>

      <p className="text-xs text-pearl-500 text-center mt-4">
        所有金額為每月新台幣
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
