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
];
