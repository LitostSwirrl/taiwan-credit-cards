import type { CreditCard } from '../types';

export const creditCards: CreditCard[] = [
  {
    id: 'ctbc-cashback',
    name: 'CTBC Cash Back Card',
    bank: 'CTBC Bank',
    tier: 'gold',
    network: 'visa',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fees: {
      annual: 3000,
      firstYearWaived: true,
      waiverCondition: 'Spend 120,000 TWD annually',
      foreignTransaction: 0.015,
    },
    cashback: {
      dining: {
        baseRate: 0.01,
        monthlyCap: 300,
      },
      convenienceStore: {
        baseRate: 0.012,
        monthlyCap: 200,
      },
      onlineShopping: {
        baseRate: 0.01,
        platformBonus: {
          shopee: 0.005,
          momo: 0.005,
        },
        monthlyCap: 400,
      },
      departmentStore: {
        baseRate: 0.015,
        monthlyCap: 500,
      },
      hypermarket: {
        baseRate: 0.015,
        monthlyCap: 500,
      },
      drugstore: {
        baseRate: 0.01,
      },
      gas: {
        baseRate: 0.012,
        monthlyCap: 300,
      },
      parking: {
        baseRate: 0.005,
      },
      publicTransport: {
        baseRate: 0.01,
      },
      electricity: {
        baseRate: 0.005,
      },
      water: {
        baseRate: 0.005,
      },
      gasUtility: {
        baseRate: 0.005,
      },
      internet: {
        baseRate: 0.005,
      },
      mobilePhone: {
        baseRate: 0.005,
      },
      domesticTravel: {
        baseRate: 0.01,
      },
      internationalTravel: {
        baseRate: 0.01,
      },
      entertainment: {
        baseRate: 0.01,
      },
      streaming: {
        baseRate: 0.008,
      },
      other: {
        baseRate: 0.005,
      },
    },
    perks: {
      purchaseProtection: {
        coverageAmount: 100000,
        daysOfCoverage: 90,
      },
      extendedWarranty: {
        additionalMonths: 12,
      },
      conciergeService: false,
      zeroInstallment: {
        availableMonths: [3, 6, 12],
        minimumAmount: 3000,
      },
    },
    requirements: {
      minimumMonthlySpend: 10000,
      minimumIncome: 300000,
      applicationMethod: 'both',
    },
    welcomeBonus: {
      description: 'Get 1,000 TWD cashback',
      conditions: 'Spend 30,000 TWD within first 3 months',
      value: 1000,
    },
    lastUpdated: '2026-01-13',
    sourceUrl: 'https://www.ctbcbank.com',
    notes: 'Great for grocery and convenience store spending',
  },
  {
    id: 'cathay-cube',
    name: 'Cathay Cube Card',
    bank: 'Cathay United Bank',
    tier: 'platinum',
    network: 'mastercard',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    fees: {
      annual: 2000,
      firstYearWaived: false,
      waiverCondition: 'Spend 120,000 TWD annually',
      foreignTransaction: 0.015,
    },
    cashback: {},
    points: {
      baseRate: 0.05,
      value: 0.3,
      minimumRedemption: 1000,
      expirationMonths: 36,
      transferPartners: [
        {
          name: 'Asia Miles',
          ratio: 1,
          minimumTransfer: 5000,
        },
        {
          name: 'Cathay Pacific',
          ratio: 1.2,
          minimumTransfer: 5000,
        },
      ],
      categoryMultipliers: {
        dining: 1.5,
        internationalTravel: 2,
        domesticTravel: 1.5,
        entertainment: 1.3,
      },
      monthlyCap: 10000,
    },
    perks: {
      airportLounge: {
        provider: 'DragonPass',
        visitsPerYear: 6,
        guestAllowed: true,
        domesticAirports: ['TPE', 'TSA', 'KHH'],
      },
      travelInsurance: {
        overseas: 30000000,
        domestic: 5000000,
        rentalCarCDW: true,
      },
      purchaseProtection: {
        coverageAmount: 300000,
        daysOfCoverage: 90,
      },
      conciergeService: true,
      zeroInstallment: {
        availableMonths: [3, 6, 12, 18],
        minimumAmount: 5000,
      },
    },
    requirements: {
      minimumMonthlySpend: 15000,
      minimumIncome: 500000,
      applicationMethod: 'both',
    },
    lastUpdated: '2026-01-13',
    sourceUrl: 'https://www.cathaybk.com.tw',
    notes: 'Best for travel and points accumulation',
  },
  {
    id: 'esun-flygo',
    name: 'E.SUN FlyGo Card',
    bank: 'E.SUN Bank',
    tier: 'infinite',
    network: 'visa',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    fees: {
      annual: 6000,
      firstYearWaived: false,
      foreignTransaction: 0,
    },
    cashback: {},
    points: {
      baseRate: 0.04,
      value: 0.4,
      minimumRedemption: 2000,
      expirationMonths: 60,
      transferPartners: [
        {
          name: 'EVA Air Infinity MileageLands',
          ratio: 1,
          minimumTransfer: 10000,
        },
        {
          name: 'China Airlines Dynasty Flyer',
          ratio: 1,
          minimumTransfer: 10000,
        },
      ],
      categoryMultipliers: {
        internationalTravel: 3,
        domesticTravel: 2,
        dining: 1.5,
        onlineShopping: 1.3,
      },
      monthlyCap: 15000,
    },
    perks: {
      airportLounge: {
        provider: 'Priority Pass',
        visitsPerYear: 12,
        guestAllowed: true,
        domesticAirports: ['TPE', 'TSA', 'KHH', 'RMQ', 'TNN'],
      },
      travelInsurance: {
        overseas: 50000000,
        domestic: 10000000,
        rentalCarCDW: true,
      },
      purchaseProtection: {
        coverageAmount: 500000,
        daysOfCoverage: 120,
      },
      mobilePhoneInsurance: {
        coverageAmount: 30000,
        deductible: 3000,
      },
      conciergeService: true,
      freeDelivery: ['Foodpanda', 'Uber Eats'],
      zeroInstallment: {
        availableMonths: [3, 6, 12, 18, 24],
        minimumAmount: 10000,
      },
    },
    requirements: {
      minimumMonthlySpend: 30000,
      minimumIncome: 1000000,
      applicationMethod: 'both',
    },
    lastUpdated: '2026-01-13',
    sourceUrl: 'https://www.esunbank.com.tw',
    notes: 'Premium travel card with no foreign transaction fees',
  },
  {
    id: 'scb-smart',
    name: 'Standard Chartered Smart Card',
    bank: 'Standard Chartered Bank',
    tier: 'general',
    network: 'mastercard',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    fees: {
      annual: 0,
      foreignTransaction: 0.015,
    },
    cashback: {
      dining: {
        baseRate: 0.015,
        mobilePaymentBonus: {
          linePay: 0.01,
          jkopay: 0.008,
        },
        monthlyCap: 400,
      },
      convenienceStore: {
        baseRate: 0.01,
        mobilePaymentBonus: {
          linePay: 0.01,
        },
        monthlyCap: 200,
      },
      onlineShopping: {
        baseRate: 0.02,
        platformBonus: {
          shopee: 0.01,
          momo: 0.01,
          pchome: 0.008,
        },
        mobilePaymentBonus: {
          linePay: 0.005,
        },
        monthlyCap: 500,
      },
      departmentStore: {
        baseRate: 0.01,
      },
      hypermarket: {
        baseRate: 0.008,
      },
      drugstore: {
        baseRate: 0.012,
      },
      gas: {
        baseRate: 0.008,
      },
      parking: {
        baseRate: 0.005,
      },
      publicTransport: {
        baseRate: 0.01,
      },
      electricity: {
        baseRate: 0.005,
      },
      water: {
        baseRate: 0.005,
      },
      gasUtility: {
        baseRate: 0.005,
      },
      internet: {
        baseRate: 0.008,
      },
      mobilePhone: {
        baseRate: 0.008,
      },
      domesticTravel: {
        baseRate: 0.01,
      },
      internationalTravel: {
        baseRate: 0.008,
      },
      entertainment: {
        baseRate: 0.015,
        monthlyCap: 300,
      },
      streaming: {
        baseRate: 0.01,
      },
      other: {
        baseRate: 0.005,
      },
    },
    perks: {
      purchaseProtection: {
        coverageAmount: 50000,
        daysOfCoverage: 60,
      },
      conciergeService: false,
      discounts: [
        {
          merchant: 'Shopee',
          description: '5% off on selected items',
          value: '5%',
          category: 'online-shopping',
        },
      ],
    },
    requirements: {
      minimumIncome: 240000,
      applicationMethod: 'online',
    },
    welcomeBonus: {
      description: 'Get 500 TWD cashback',
      conditions: 'Spend 10,000 TWD within first month',
      value: 500,
    },
    lastUpdated: '2026-01-13',
    sourceUrl: 'https://www.sc.com/tw',
    notes: 'Best for online shopping and mobile payments',
  },
  {
    id: 'fubon-jcard',
    name: 'Fubon J Card',
    bank: 'Fubon Bank',
    tier: 'gold',
    network: 'jcb',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    fees: {
      annual: 1500,
      firstYearWaived: true,
      foreignTransaction: 0.015,
    },
    cashback: {
      dining: {
        baseRate: 0.02,
        mobilePaymentBonus: {
          linePay: 0.005,
          jkopay: 0.005,
        },
        monthlyCap: 600,
      },
      convenienceStore: {
        baseRate: 0.01,
      },
      onlineShopping: {
        baseRate: 0.01,
        platformBonus: {
          momo: 0.008,
        },
      },
      departmentStore: {
        baseRate: 0.012,
      },
      hypermarket: {
        baseRate: 0.01,
      },
      drugstore: {
        baseRate: 0.01,
      },
      gas: {
        baseRate: 0.01,
      },
      parking: {
        baseRate: 0.005,
      },
      publicTransport: {
        baseRate: 0.01,
      },
      electricity: {
        baseRate: 0.005,
      },
      water: {
        baseRate: 0.005,
      },
      gasUtility: {
        baseRate: 0.005,
      },
      internet: {
        baseRate: 0.005,
      },
      mobilePhone: {
        baseRate: 0.005,
      },
      domesticTravel: {
        baseRate: 0.012,
      },
      internationalTravel: {
        baseRate: 0.01,
      },
      entertainment: {
        baseRate: 0.015,
        monthlyCap: 400,
      },
      streaming: {
        baseRate: 0.012,
      },
      other: {
        baseRate: 0.005,
      },
    },
    perks: {
      purchaseProtection: {
        coverageAmount: 150000,
        daysOfCoverage: 90,
      },
      conciergeService: false,
      freeDelivery: ['Uber Eats'],
      discounts: [
        {
          merchant: 'Movie theaters',
          description: 'Buy 1 get 1 free on weekdays',
          value: '50%',
          category: 'entertainment',
        },
      ],
      zeroInstallment: {
        availableMonths: [3, 6, 12],
        minimumAmount: 3000,
      },
    },
    requirements: {
      minimumMonthlySpend: 8000,
      minimumIncome: 300000,
      applicationMethod: 'both',
    },
    welcomeBonus: {
      description: 'Get 800 TWD cashback',
      conditions: 'Spend 20,000 TWD within first 2 months',
      value: 800,
    },
    lastUpdated: '2026-01-13',
    sourceUrl: 'https://www.fubon.com',
    notes: 'Best for dining and entertainment',
  },
  {
    id: 'esun-ubear',
    name: '玉山 U Bear 卡',
    bank: '玉山銀行',
    tier: 'general',
    network: 'visa',
    gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
    fees: {
      annual: 0,
      foreignTransaction: 0.015,
    },
    cashback: {
      dining: {
        baseRate: 0.025,
        mobilePaymentBonus: {
          linePay: 0.015,
        },
        monthlyCap: 500,
      },
      convenienceStore: {
        baseRate: 0.02,
        monthlyCap: 300,
      },
      onlineShopping: {
        baseRate: 0.015,
        platformBonus: {
          shopee: 0.01,
          momo: 0.01,
        },
        monthlyCap: 400,
      },
      departmentStore: {
        baseRate: 0.01,
      },
      hypermarket: {
        baseRate: 0.01,
      },
      drugstore: {
        baseRate: 0.015,
      },
      gas: {
        baseRate: 0.01,
      },
      parking: {
        baseRate: 0.005,
      },
      publicTransport: {
        baseRate: 0.015,
      },
      electricity: {
        baseRate: 0.005,
      },
      water: {
        baseRate: 0.005,
      },
      gasUtility: {
        baseRate: 0.005,
      },
      internet: {
        baseRate: 0.01,
      },
      mobilePhone: {
        baseRate: 0.01,
      },
      domesticTravel: {
        baseRate: 0.015,
      },
      internationalTravel: {
        baseRate: 0.01,
      },
      entertainment: {
        baseRate: 0.02,
        monthlyCap: 400,
      },
      streaming: {
        baseRate: 0.015,
      },
      other: {
        baseRate: 0.005,
      },
    },
    perks: {
      purchaseProtection: {
        coverageAmount: 100000,
        daysOfCoverage: 90,
      },
      conciergeService: false,
      discounts: [
        {
          merchant: '威秀影城',
          description: '週一至週四電影票85折',
          value: '15%',
          category: 'entertainment',
        },
      ],
    },
    requirements: {
      minimumIncome: 240000,
      applicationMethod: 'both',
    },
    welcomeBonus: {
      description: '新戶首刷禮 600元',
      conditions: '核卡後30天內首刷',
      value: 600,
    },
    lastUpdated: '2026-01-13',
    sourceUrl: 'https://www.esunbank.com.tw',
    notes: '小資族首選，免年費高回饋',
  },
  {
    id: 'taishin-gogo',
    name: '台新 @GoGo 卡',
    bank: '台新銀行',
    tier: 'general',
    network: 'mastercard',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    fees: {
      annual: 0,
      foreignTransaction: 0.015,
    },
    cashback: {
      dining: {
        baseRate: 0.03,
        mobilePaymentBonus: {
          linePay: 0.005,
        },
        monthlyCap: 800,
      },
      convenienceStore: {
        baseRate: 0.02,
        monthlyCap: 300,
      },
      onlineShopping: {
        baseRate: 0.02,
        platformBonus: {
          momo: 0.015,
        },
        monthlyCap: 600,
      },
      departmentStore: {
        baseRate: 0.015,
      },
      hypermarket: {
        baseRate: 0.01,
      },
      drugstore: {
        baseRate: 0.015,
      },
      gas: {
        baseRate: 0.015,
        monthlyCap: 400,
      },
      parking: {
        baseRate: 0.005,
      },
      publicTransport: {
        baseRate: 0.01,
      },
      electricity: {
        baseRate: 0.005,
      },
      water: {
        baseRate: 0.005,
      },
      gasUtility: {
        baseRate: 0.005,
      },
      internet: {
        baseRate: 0.01,
      },
      mobilePhone: {
        baseRate: 0.01,
      },
      domesticTravel: {
        baseRate: 0.02,
      },
      internationalTravel: {
        baseRate: 0.015,
      },
      entertainment: {
        baseRate: 0.025,
        monthlyCap: 500,
      },
      streaming: {
        baseRate: 0.015,
      },
      other: {
        baseRate: 0.005,
      },
    },
    perks: {
      purchaseProtection: {
        coverageAmount: 150000,
        daysOfCoverage: 90,
      },
      conciergeService: false,
      freeDelivery: ['Foodpanda'],
      zeroInstallment: {
        availableMonths: [3, 6, 12],
        minimumAmount: 3000,
      },
    },
    requirements: {
      minimumIncome: 250000,
      applicationMethod: 'online',
    },
    welcomeBonus: {
      description: '新戶享最高 1,200元 回饋',
      conditions: '核卡後60天內累積消費滿3萬元',
      value: 1200,
    },
    lastUpdated: '2026-01-13',
    sourceUrl: 'https://www.taishinbank.com.tw',
    notes: '網購、餐廳消費神卡',
  },
  {
    id: 'sinopac-dawho',
    name: '永豐大戶 DAWHO 數位卡',
    bank: '永豐銀行',
    tier: 'gold',
    network: 'jcb',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    fees: {
      annual: 0,
      foreignTransaction: 0.015,
    },
    cashback: {
      dining: {
        baseRate: 0.02,
        mobilePaymentBonus: {
          linePay: 0.01,
          jkopay: 0.01,
        },
        monthlyCap: 600,
      },
      convenienceStore: {
        baseRate: 0.015,
        monthlyCap: 250,
      },
      onlineShopping: {
        baseRate: 0.025,
        platformBonus: {
          shopee: 0.015,
          momo: 0.015,
          pchome: 0.01,
        },
        monthlyCap: 800,
      },
      departmentStore: {
        baseRate: 0.015,
      },
      hypermarket: {
        baseRate: 0.015,
      },
      drugstore: {
        baseRate: 0.015,
      },
      gas: {
        baseRate: 0.01,
      },
      parking: {
        baseRate: 0.005,
      },
      publicTransport: {
        baseRate: 0.015,
      },
      electricity: {
        baseRate: 0.01,
      },
      water: {
        baseRate: 0.01,
      },
      gasUtility: {
        baseRate: 0.01,
      },
      internet: {
        baseRate: 0.015,
      },
      mobilePhone: {
        baseRate: 0.015,
      },
      domesticTravel: {
        baseRate: 0.015,
      },
      internationalTravel: {
        baseRate: 0.01,
      },
      entertainment: {
        baseRate: 0.02,
        monthlyCap: 400,
      },
      streaming: {
        baseRate: 0.015,
      },
      other: {
        baseRate: 0.01,
      },
    },
    perks: {
      purchaseProtection: {
        coverageAmount: 200000,
        daysOfCoverage: 90,
      },
      conciergeService: false,
      discounts: [
        {
          merchant: '蝦皮購物',
          description: '每月享95折優惠碼',
          value: '5%',
          category: 'online-shopping',
        },
      ],
      zeroInstallment: {
        availableMonths: [3, 6, 12],
        minimumAmount: 3000,
      },
    },
    requirements: {
      minimumIncome: 300000,
      applicationMethod: 'online',
    },
    welcomeBonus: {
      description: '新戶首刷禮 800元',
      conditions: '核卡後45天內累積消費滿8,888元',
      value: 800,
    },
    lastUpdated: '2026-01-13',
    sourceUrl: 'https://www.sinopac.com',
    notes: '數位消費回饋高',
  },
  {
    id: 'citi-cashback-plus',
    name: '花旗現金回饋 PLUS 卡',
    bank: '花旗銀行',
    tier: 'platinum',
    network: 'visa',
    gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    fees: {
      annual: 3000,
      firstYearWaived: true,
      waiverCondition: '年消費滿24萬元',
      foreignTransaction: 0.015,
    },
    cashback: {
      dining: {
        baseRate: 0.015,
        monthlyCap: 500,
      },
      convenienceStore: {
        baseRate: 0.01,
      },
      onlineShopping: {
        baseRate: 0.02,
        platformBonus: {
          momo: 0.01,
        },
        monthlyCap: 600,
      },
      departmentStore: {
        baseRate: 0.02,
        monthlyCap: 800,
      },
      hypermarket: {
        baseRate: 0.02,
        monthlyCap: 600,
      },
      drugstore: {
        baseRate: 0.015,
      },
      gas: {
        baseRate: 0.015,
        monthlyCap: 400,
      },
      parking: {
        baseRate: 0.005,
      },
      publicTransport: {
        baseRate: 0.01,
      },
      electricity: {
        baseRate: 0.01,
      },
      water: {
        baseRate: 0.01,
      },
      gasUtility: {
        baseRate: 0.01,
      },
      internet: {
        baseRate: 0.01,
      },
      mobilePhone: {
        baseRate: 0.01,
      },
      domesticTravel: {
        baseRate: 0.015,
      },
      internationalTravel: {
        baseRate: 0.015,
      },
      entertainment: {
        baseRate: 0.015,
      },
      streaming: {
        baseRate: 0.01,
      },
      other: {
        baseRate: 0.01,
      },
    },
    perks: {
      purchaseProtection: {
        coverageAmount: 300000,
        daysOfCoverage: 120,
      },
      extendedWarranty: {
        additionalMonths: 12,
      },
      conciergeService: true,
      zeroInstallment: {
        availableMonths: [3, 6, 12, 18],
        minimumAmount: 5000,
      },
    },
    requirements: {
      minimumMonthlySpend: 12000,
      minimumIncome: 400000,
      applicationMethod: 'both',
    },
    welcomeBonus: {
      description: '新戶最高享 2,000元 回饋',
      conditions: '核卡後3個月內累積消費滿5萬元',
      value: 2000,
    },
    lastUpdated: '2026-01-13',
    sourceUrl: 'https://www.citibank.com.tw',
    notes: '百貨通路回饋優',
  },
  {
    id: 'ubot-line-pay',
    name: '聯邦賴點卡',
    bank: '聯邦銀行',
    tier: 'general',
    network: 'mastercard',
    gradient: 'linear-gradient(135deg, #06ffa5 0%, #00d4ff 100%)',
    fees: {
      annual: 0,
      foreignTransaction: 0.015,
    },
    cashback: {},
    points: {
      baseRate: 0.03,
      value: 0.5,
      minimumRedemption: 1000,
      expirationMonths: 36,
      transferPartners: [
        {
          name: 'LINE Points',
          ratio: 1,
          minimumTransfer: 100,
        },
      ],
      categoryMultipliers: {
        dining: 3,
        onlineShopping: 2.5,
        convenienceStore: 2,
        entertainment: 2,
      },
      monthlyCap: 12000,
    },
    perks: {
      purchaseProtection: {
        coverageAmount: 100000,
        daysOfCoverage: 90,
      },
      conciergeService: false,
      freeDelivery: ['LINE 購物', 'LINE TAXI'],
      discounts: [
        {
          merchant: 'LINE MUSIC',
          description: '首3個月免費',
          value: '100%',
          category: 'streaming',
        },
      ],
      zeroInstallment: {
        availableMonths: [3, 6, 12],
        minimumAmount: 3000,
      },
    },
    requirements: {
      minimumIncome: 240000,
      applicationMethod: 'online',
    },
    welcomeBonus: {
      description: '新戶享 1,000 LINE Points',
      conditions: '核卡後60天內累積消費滿6,000元',
      value: 500,
    },
    lastUpdated: '2026-01-13',
    sourceUrl: 'https://www.ubot.com.tw',
    notes: 'LINE 生態圈必備卡',
  },
  {
    id: 'hsbc-cashback',
    name: '滙豐匯鑽卡',
    bank: '滙豐銀行',
    tier: 'platinum',
    network: 'visa',
    gradient: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
    fees: {
      annual: 2000,
      firstYearWaived: true,
      waiverCondition: '年消費滿15萬元',
      foreignTransaction: 0,
    },
    cashback: {
      dining: {
        baseRate: 0.022,
        monthlyCap: 600,
      },
      convenienceStore: {
        baseRate: 0.015,
      },
      onlineShopping: {
        baseRate: 0.02,
        platformBonus: {
          shopee: 0.01,
          momo: 0.01,
        },
        monthlyCap: 500,
      },
      departmentStore: {
        baseRate: 0.018,
      },
      hypermarket: {
        baseRate: 0.015,
      },
      drugstore: {
        baseRate: 0.015,
      },
      gas: {
        baseRate: 0.015,
      },
      parking: {
        baseRate: 0.005,
      },
      publicTransport: {
        baseRate: 0.015,
      },
      electricity: {
        baseRate: 0.01,
      },
      water: {
        baseRate: 0.01,
      },
      gasUtility: {
        baseRate: 0.01,
      },
      internet: {
        baseRate: 0.015,
      },
      mobilePhone: {
        baseRate: 0.015,
      },
      domesticTravel: {
        baseRate: 0.02,
      },
      internationalTravel: {
        baseRate: 0.025,
      },
      entertainment: {
        baseRate: 0.018,
      },
      streaming: {
        baseRate: 0.015,
      },
      other: {
        baseRate: 0.01,
      },
    },
    perks: {
      airportLounge: {
        provider: 'LoungeKey',
        visitsPerYear: 4,
        guestAllowed: false,
        domesticAirports: ['TPE', 'TSA'],
      },
      travelInsurance: {
        overseas: 30000000,
        domestic: 5000000,
        rentalCarCDW: true,
      },
      purchaseProtection: {
        coverageAmount: 250000,
        daysOfCoverage: 90,
      },
      conciergeService: true,
      zeroInstallment: {
        availableMonths: [3, 6, 12],
        minimumAmount: 5000,
      },
    },
    requirements: {
      minimumMonthlySpend: 10000,
      minimumIncome: 500000,
      applicationMethod: 'both',
    },
    lastUpdated: '2026-01-13',
    sourceUrl: 'https://www.hsbc.com.tw',
    notes: '海外消費免手續費',
  },
  {
    id: 'ctbc-linepay',
    name: '中信 LINE Pay 卡',
    bank: '中國信託',
    tier: 'general',
    network: 'visa',
    gradient: 'linear-gradient(135deg, #00c851 0%, #007e33 100%)',
    fees: {
      annual: 0,
      foreignTransaction: 0.015,
    },
    cashback: {
      dining: {
        baseRate: 0.01,
        mobilePaymentBonus: {
          linePay: 0.02,
        },
        monthlyCap: 500,
      },
      convenienceStore: {
        baseRate: 0.01,
        mobilePaymentBonus: {
          linePay: 0.02,
        },
        monthlyCap: 300,
      },
      onlineShopping: {
        baseRate: 0.01,
        platformBonus: {
          shopee: 0.005,
        },
        mobilePaymentBonus: {
          linePay: 0.02,
        },
        monthlyCap: 600,
      },
      departmentStore: {
        baseRate: 0.01,
        mobilePaymentBonus: {
          linePay: 0.02,
        },
      },
      hypermarket: {
        baseRate: 0.01,
        mobilePaymentBonus: {
          linePay: 0.02,
        },
      },
      drugstore: {
        baseRate: 0.01,
      },
      gas: {
        baseRate: 0.01,
      },
      parking: {
        baseRate: 0.005,
      },
      publicTransport: {
        baseRate: 0.01,
      },
      electricity: {
        baseRate: 0.005,
      },
      water: {
        baseRate: 0.005,
      },
      gasUtility: {
        baseRate: 0.005,
      },
      internet: {
        baseRate: 0.01,
      },
      mobilePhone: {
        baseRate: 0.01,
      },
      domesticTravel: {
        baseRate: 0.01,
      },
      internationalTravel: {
        baseRate: 0.01,
      },
      entertainment: {
        baseRate: 0.01,
        mobilePaymentBonus: {
          linePay: 0.02,
        },
      },
      streaming: {
        baseRate: 0.01,
      },
      other: {
        baseRate: 0.005,
      },
    },
    perks: {
      purchaseProtection: {
        coverageAmount: 100000,
        daysOfCoverage: 90,
      },
      conciergeService: false,
      freeDelivery: ['LINE 購物'],
      discounts: [
        {
          merchant: 'LINE Points',
          description: 'LINE Pay 綁定享點數回饋',
          value: '3%',
          category: 'mobile-payment',
        },
      ],
    },
    requirements: {
      minimumIncome: 240000,
      applicationMethod: 'online',
    },
    welcomeBonus: {
      description: '新戶享 500 LINE Points',
      conditions: '核卡後30天內使用 LINE Pay 消費',
      value: 250,
    },
    lastUpdated: '2026-01-13',
    sourceUrl: 'https://www.ctbcbank.com',
    notes: 'LINE Pay 專屬高回饋',
  },
  {
    id: 'taishin-rose',
    name: '台新玫瑰卡',
    bank: '台新銀行',
    tier: 'gold',
    network: 'visa',
    gradient: 'linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)',
    fees: {
      annual: 2000,
      firstYearWaived: true,
      waiverCondition: '年消費滿12萬元',
      foreignTransaction: 0.015,
    },
    cashback: {},
    points: {
      baseRate: 0.04,
      value: 0.35,
      minimumRedemption: 1000,
      expirationMonths: 60,
      transferPartners: [
        {
          name: 'Richart 點數',
          ratio: 1,
          minimumTransfer: 500,
        },
      ],
      categoryMultipliers: {
        departmentStore: 2.5,
        onlineShopping: 2,
        dining: 1.8,
        drugstore: 2,
      },
      monthlyCap: 15000,
    },
    perks: {
      airportLounge: {
        provider: 'Plaza Premium',
        visitsPerYear: 2,
        guestAllowed: false,
      },
      travelInsurance: {
        overseas: 20000000,
        domestic: 3000000,
        rentalCarCDW: false,
      },
      purchaseProtection: {
        coverageAmount: 200000,
        daysOfCoverage: 90,
      },
      conciergeService: false,
      discounts: [
        {
          merchant: '新光三越',
          description: '週年慶享額外95折',
          value: '5%',
          category: 'department-store',
        },
        {
          merchant: '誠品',
          description: '全館9折優惠',
          value: '10%',
          category: 'shopping',
        },
      ],
      zeroInstallment: {
        availableMonths: [3, 6, 12, 18, 24],
        minimumAmount: 3000,
      },
    },
    requirements: {
      minimumMonthlySpend: 8000,
      minimumIncome: 350000,
      applicationMethod: 'both',
    },
    welcomeBonus: {
      description: '新戶享 3,000 點數',
      conditions: '核卡後60天內累積消費滿3萬元',
      value: 1050,
    },
    lastUpdated: '2026-01-13',
    sourceUrl: 'https://www.taishinbank.com.tw',
    notes: '百貨購物點數回饋高',
  },
  {
    id: 'cathay-costco',
    name: '國泰 Costco 聯名卡',
    bank: '國泰世華銀行',
    tier: 'general',
    network: 'visa',
    gradient: 'linear-gradient(135deg, #0057b8 0%, #0072ce 100%)',
    fees: {
      annual: 0,
      foreignTransaction: 0.015,
    },
    cashback: {
      dining: {
        baseRate: 0.008,
      },
      convenienceStore: {
        baseRate: 0.008,
      },
      onlineShopping: {
        baseRate: 0.01,
      },
      departmentStore: {
        baseRate: 0.008,
      },
      hypermarket: {
        baseRate: 0.03,
        monthlyCap: 1000,
      },
      drugstore: {
        baseRate: 0.008,
      },
      gas: {
        baseRate: 0.025,
        monthlyCap: 600,
      },
      parking: {
        baseRate: 0.005,
      },
      publicTransport: {
        baseRate: 0.008,
      },
      electricity: {
        baseRate: 0.005,
      },
      water: {
        baseRate: 0.005,
      },
      gasUtility: {
        baseRate: 0.005,
      },
      internet: {
        baseRate: 0.008,
      },
      mobilePhone: {
        baseRate: 0.008,
      },
      domesticTravel: {
        baseRate: 0.01,
      },
      internationalTravel: {
        baseRate: 0.015,
      },
      entertainment: {
        baseRate: 0.008,
      },
      streaming: {
        baseRate: 0.008,
      },
      other: {
        baseRate: 0.005,
      },
    },
    perks: {
      purchaseProtection: {
        coverageAmount: 150000,
        daysOfCoverage: 90,
      },
      conciergeService: false,
      discounts: [
        {
          merchant: 'Costco 好市多',
          description: '加油站汽油每公升降 1.5元',
          value: '1.5 TWD/L',
          category: 'gas',
        },
      ],
    },
    requirements: {
      minimumIncome: 300000,
      applicationMethod: 'both',
    },
    welcomeBonus: {
      description: '新戶享 800元 Costco 購物金',
      conditions: '核卡後45天內於 Costco 消費滿6,000元',
      value: 800,
    },
    lastUpdated: '2026-01-13',
    sourceUrl: 'https://www.cathaybk.com.tw',
    notes: 'Costco 會員專屬優惠',
  },
  {
    id: 'rakuten-card',
    name: '樂天信用卡',
    bank: '樂天銀行',
    tier: 'general',
    network: 'mastercard',
    gradient: 'linear-gradient(135deg, #bf0000 0%, #e20000 100%)',
    fees: {
      annual: 0,
      foreignTransaction: 0.015,
    },
    cashback: {},
    points: {
      baseRate: 0.05,
      value: 0.25,
      minimumRedemption: 100,
      expirationMonths: 12,
      transferPartners: [
        {
          name: '樂天點數',
          ratio: 1,
          minimumTransfer: 1,
        },
      ],
      categoryMultipliers: {
        onlineShopping: 3,
        convenienceStore: 1.5,
        dining: 1.5,
      },
      monthlyCap: 20000,
    },
    perks: {
      purchaseProtection: {
        coverageAmount: 100000,
        daysOfCoverage: 60,
      },
      conciergeService: false,
      discounts: [
        {
          merchant: '樂天市場',
          description: '最高享10倍點數',
          value: '10x',
          category: 'online-shopping',
        },
        {
          merchant: '樂天旅遊',
          description: '訂房享額外5%回饋',
          value: '5%',
          category: 'travel',
        },
      ],
      zeroInstallment: {
        availableMonths: [3, 6, 12],
        minimumAmount: 3000,
      },
    },
    requirements: {
      minimumIncome: 220000,
      applicationMethod: 'online',
    },
    welcomeBonus: {
      description: '新戶享 2,000 樂天點數',
      conditions: '核卡後60天內累積消費滿5,000元',
      value: 500,
    },
    lastUpdated: '2026-01-13',
    sourceUrl: 'https://card.rakuten.com.tw',
    notes: '樂天生態圈點數回饋',
  },
];
