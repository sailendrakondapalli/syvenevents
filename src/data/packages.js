export const packages = [
  {
    id: 'silver',
    name: 'Silver Package',
    price: 150000,
    icon: '💍',
    popular: false,
    features: [
      'Basic Stage Decoration',
      'Sound System',
      'Basic Lighting',
      'Standard Catering (50 guests)',
      'Photography (4 hours)',
      'Basic Coordination'
    ]
  },
  {
    id: 'gold',
    name: 'Gold Package',
    price: 300000,
    icon: '💎',
    popular: true,
    features: [
      'Premium Stage Decoration',
      'LED Wall Setup',
      'Professional Photography & Videography',
      'Catering Coordination (100 guests)',
      'DJ & Sound System',
      'Lighting Effects',
      'Dedicated Event Manager'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum Package',
    price: 500000,
    icon: '👑',
    popular: false,
    features: [
      'Luxury Stage Decoration',
      'Celebrity DJ',
      'Full Event Planning',
      'Guest Management System',
      'Premium Catering (200 guests)',
      'Drone Photography',
      'Live Streaming',
      'Valet Parking',
      '24/7 Support Team'
    ]
  }
];

export const cateringPackages = [
  { id: 'basic', name: 'Basic', pricePerPlate: 500 },
  { id: 'standard', name: 'Standard', pricePerPlate: 800 },
  { id: 'premium', name: 'Premium', pricePerPlate: 1200 }
];

export const addons = [
  { id: 'led-wall', name: 'LED Wall Setup', price: 25000 },
  { id: 'celebrity-dj', name: 'Celebrity DJ', price: 40000 },
  { id: 'flower-upgrade', name: 'Flower Decoration Upgrade', price: 30000 },
  { id: 'live-counters', name: 'Live Food Counters', price: 15000 }
];
