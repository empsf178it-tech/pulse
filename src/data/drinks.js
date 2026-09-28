export const DRINKS = [
  {
    id: 'citrus-pulse',
    name: 'CITRUS PULSE',
    tagline: 'Bright · Crisp · Sparkling',
    category: 'Citrus',
    accentColor: '#EAF900',
    accentDark: '#B8C400',
    accentBg: 'rgba(234, 249, 0, 0.08)',
    heroImage: '/images/pulse_citrus_hero.jpg',
    flavorNotes: ['Sicilian Lemon', 'Blood Orange', 'Crushed Citrus Peel'],
    tastingProfile: {
      sweetness: 2,
      acidity: 4,
      fizz: 5,
      aroma: 5
    },
    description: 'A vivid, electrifying burst of cold-pressed Sicilian lemons and sun-ripened oranges, balanced with fine effervescence.',
    bestMoment: 'Afternoon energy reset & golden hour sun.',
    calories: '42 kcal / 100ml',
    ingredients: ['Filtered Carbonated Water', 'Organic Sicilian Lemon Juice', 'Blood Orange Extract', 'Crushed Citrus Oil'],
    featured: true
  },
  {
    id: 'berry-wave',
    name: 'BERRY WAVE',
    tagline: 'Juicy · Fruity · Vibrant',
    category: 'Berry',
    accentColor: '#FF2E75',
    accentDark: '#C70048',
    accentBg: 'rgba(255, 46, 117, 0.08)',
    heroImage: '/images/pulse_berry_hero.jpg',
    flavorNotes: ['Wild Strawberry', 'Raspberry Tartness', 'Blueberry Zest'],
    tastingProfile: {
      sweetness: 3,
      acidity: 3,
      fizz: 4,
      aroma: 5
    },
    description: 'Deep ruby nectar infused with wild forest strawberries, tart raspberries, and crisp carbonation for an intense fruity crash.',
    bestMoment: 'Weekend vibes & social gatherings.',
    calories: '46 kcal / 100ml',
    ingredients: ['Filtered Carbonated Water', 'Cold-Pressed Strawberry Puree', 'Raspberry Essence', 'Blueberry Extract'],
    featured: true
  },
  {
    id: 'tropic',
    name: 'TROPIC',
    tagline: 'Sweet · Fresh · Exotic',
    category: 'Tropical',
    accentColor: '#FF7E27',
    accentDark: '#D45B06',
    accentBg: 'rgba(255, 126, 39, 0.08)',
    heroImage: '/images/pulse_tropic_hero.jpg',
    flavorNotes: ['Golden Pineapple', 'Purple Passionfruit', 'Tahitian Lime'],
    tastingProfile: {
      sweetness: 4,
      acidity: 3,
      fizz: 4,
      aroma: 4
    },
    description: 'Sun-drenched golden pineapple and rich purple passionfruit harmonized with a sharp twist of lime.',
    bestMoment: 'Beachside cooling & afternoon chill.',
    calories: '45 kcal / 100ml',
    ingredients: ['Filtered Carbonated Water', 'Golden Pineapple Concentrate', 'Passionfruit Juice', 'Tahitian Lime Oil'],
    featured: true
  },
  {
    id: 'botanic',
    name: 'BOTANIC',
    tagline: 'Cool · Herbal · Clean',
    category: 'Botanical',
    accentColor: '#10B981',
    accentDark: '#047857',
    accentBg: 'rgba(16, 185, 129, 0.08)',
    heroImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
    flavorNotes: ['Crushed Garden Mint', 'Key Lime', 'Elderflower Extract'],
    tastingProfile: {
      sweetness: 1,
      acidity: 4,
      fizz: 4,
      aroma: 5
    },
    description: 'Ultra-crisp herbal notes of hand-picked mint leaves fused with key lime and subtle elderflower undertones.',
    bestMoment: 'Post-workout clarity & mindful evenings.',
    calories: '32 kcal / 100ml',
    ingredients: ['Filtered Carbonated Water', 'Key Lime Juice', 'Spearmint Infusion', 'Elderflower Distillate'],
    featured: false
  },
  {
    id: 'peach-spark',
    name: 'PEACH SPARK',
    tagline: 'Soft · Juicy · Refreshing',
    category: 'Soft',
    accentColor: '#FF9A76',
    accentDark: '#E0623A',
    accentBg: 'rgba(255, 154, 118, 0.08)',
    heroImage: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=1200&auto=format&fit=crop',
    flavorNotes: ['Yellow Peach', 'White Peach Blossom', 'Sparkling Finish'],
    tastingProfile: {
      sweetness: 3,
      acidity: 2,
      fizz: 4,
      aroma: 4
    },
    description: 'Silky smooth yellow peach nectar lifted by tiny sparkling micro-bubbles and a delicate citrus lift.',
    bestMoment: 'Lazy brunch & sunset wind-down.',
    calories: '38 kcal / 100ml',
    ingredients: ['Filtered Carbonated Water', 'Yellow Peach Puree', 'White Peach Blossom Extract', 'Lemon Acid'],
    featured: false
  },
  {
    id: 'zero-citrus',
    name: 'ZERO CITRUS',
    tagline: 'Light · Crisp · Sugar-free',
    category: 'Zero Sugar',
    accentColor: '#00E5FF',
    accentDark: '#00A3B5',
    accentBg: 'rgba(0, 229, 255, 0.08)',
    heroImage: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop',
    flavorNotes: ['Yuzu Zest', 'White Grapefruit', 'Zero Sugar'],
    tastingProfile: {
      sweetness: 0,
      acidity: 5,
      fizz: 5,
      aroma: 4
    },
    description: 'Zero sugar, pure hydration energy. Sharp Japanese yuzu citrus meets white grapefruit for zero-calorie purity.',
    bestMoment: 'All-day hydration & deep focus work.',
    calories: '0 kcal / 100ml',
    ingredients: ['Sparkling Water', 'Yuzu Juice Essence', 'Natural Grapefruit Flavoring', 'Stevia Leaf Extract'],
    featured: false
  }
];

export const FLAVOUR_MOODS = [
  {
    id: 'bright',
    name: 'BRIGHT',
    tagline: 'Citrus · Lemon · Orange',
    accent: '#EAF900',
    drinkId: 'citrus-pulse',
    description: 'High energy, sharp, clean citrus notes that instantly wake up your palate and spark clarity.',
    notes: ['Lemon Zest', 'Blood Orange', 'Sparkling Crispness'],
    moment: 'Morning start & afternoon reset'
  },
  {
    id: 'juicy',
    name: 'JUICY',
    tagline: 'Strawberry · Raspberry · Berry',
    accent: '#FF2E75',
    drinkId: 'berry-wave',
    description: 'Deep, rich berry infusions bursting with natural fruit sweetness and lively fizz.',
    notes: ['Wild Strawberry', 'Raspberry Tart', 'Red Berry Crush'],
    moment: 'Weekend celebrations & creative hours'
  },
  {
    id: 'tropical',
    name: 'TROPICAL',
    tagline: 'Pineapple · Passionfruit · Mango',
    accent: '#FF7E27',
    drinkId: 'tropic',
    description: 'Sun-kissed exotic fruit extracts that transport you straight to warm coastal breezes.',
    notes: ['Golden Pineapple', 'Passionfruit Pulp', 'Tahitian Lime'],
    moment: 'Sun-filled afternoons & pool days'
  },
  {
    id: 'cool',
    name: 'COOL',
    tagline: 'Mint · Lime · Botanical',
    accent: '#10B981',
    drinkId: 'botanic',
    description: 'Herbal freshness crafted with crushed spearmint and key lime for a crisp, mindful cooldown.',
    notes: ['Crushed Mint', 'Key Lime', 'Botanical Extract'],
    moment: 'Post-workout & evening unwind'
  },
  {
    id: 'soft',
    name: 'SOFT',
    tagline: 'Peach · Citrus',
    accent: '#FF9A76',
    drinkId: 'peach-spark',
    description: 'Velvety fruit peach nectar with gentle carbonation that lingers smoothly on the palate.',
    notes: ['Yellow Peach', 'Citrus Peel', 'Floral Blossom'],
    moment: 'Brunch chats & relaxed twilight'
  }
];

export const INGREDIENT_GROUPS = [
  {
    title: 'CITRUS',
    subtitle: 'Bright, cold-pressed citrus harvested at peak ripeness for explosive flavor clarity.',
    color: '#EAF900',
    items: [
      {
        name: 'SICILIAN LEMON',
        origin: 'Sicily, Italy',
        desc: 'Hand-harvested lemons grown in volcanic soil, giving sharp acidity and aromatic essential oils.',
        image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=1200&auto=format&fit=crop',
        leadsTo: 'CITRUS PULSE'
      },
      {
        name: 'BLOOD ORANGE',
        origin: 'Catania Plain',
        desc: 'Rich anthocyanin-packed oranges providing deep crimson color and complex ruby sweetness.',
        image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=1200&auto=format&fit=crop',
        leadsTo: 'CITRUS PULSE'
      },
      {
        name: 'TAHITIAN LIME',
        origin: 'Veracruz, Mexico',
        desc: 'Unmatched floral tartness that anchors our citrus and botanical flavor balances.',
        image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=1200&auto=format&fit=crop',
        leadsTo: 'PULSE BOTANIC'
      },
      {
        name: 'JAPANESE YUZU',
        origin: 'Kochi Prefecture, Japan',
        desc: 'Fragrant rare yuzu cold-pressed for floral citrus zest, deep aroma, and electric sharpness.',
        image: 'https://images.unsplash.com/photo-1608181114410-db2bb2153245?q=80&w=1200&auto=format&fit=crop',
        leadsTo: 'CITRUS PULSE'
      }
    ]
  },
  {
    title: 'BERRIES',
    subtitle: 'Wild, mountain-grown berries bursting with intense natural antioxidants.',
    color: '#FF2E75',
    items: [
      {
        name: 'WILD STRAWBERRY',
        origin: 'Bavarian Hills',
        desc: 'Small, incredibly fragrant wild berries with concentrated nectar.',
        image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop',
        leadsTo: 'BERRY WAVE'
      },
      {
        name: 'TART RASPBERRY',
        origin: 'Pacific Northwest',
        desc: 'Bright ruby red raspberries extracted for their vibrant acidity and aroma.',
        image: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?q=80&w=1200&auto=format&fit=crop',
        leadsTo: 'BERRY WAVE'
      }
    ]
  },
  {
    title: 'TROPICAL',
    subtitle: 'Sun-drenched fruits cultivated in nutrient-rich equatorial soils.',
    color: '#FF7E27',
    items: [
      {
        name: 'GOLDEN PINEAPPLE',
        origin: 'Costa Rica',
        desc: 'Cold-pressed Queen pineapple offering tropical sweetness with zero added sugars.',
        image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1200&auto=format&fit=crop',
        leadsTo: 'PULSE TROPIC'
      },
      {
        name: 'PURPLE PASSIONFRUIT',
        origin: 'Ecuador',
        desc: 'Exotic tangy aromatic pulp providing complex tropical high notes.',
        image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1200&auto=format&fit=crop',
        leadsTo: 'PULSE TROPIC'
      }
    ]
  },
  {
    title: 'BOTANICAL',
    subtitle: 'Hand-picked herbs and flower distillates for subtle herbal complexity.',
    color: '#10B981',
    items: [
      {
        name: 'SPEARMINT & MINT LEAVES',
        origin: 'Oregon, USA',
        desc: 'Distilled fresh mint leaves providing crisp cooling sensations without artificial synthetics.',
        image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=1200&auto=format&fit=crop',
        leadsTo: 'PULSE BOTANIC'
      },
      {
        name: 'ATLAS ROSEMARY & THYME',
        origin: 'Atlas Mountains, Morocco',
        desc: 'High-altitude aromatic herbs steam-distilled for crisp pine undertones and herbal clarity.',
        image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?q=80&w=1200&auto=format&fit=crop',
        leadsTo: 'PULSE BOTANIC'
      }
    ]
  }
];

export const DISCOVER_MOMENTS = [
  {
    time: 'MORNING',
    title: 'A Fresh Start',
    tagline: 'Awaken your senses with cold, crisp citrus notes.',
    accent: '#EAF900',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    recommendedDrink: 'CITRUS PULSE'
  },
  {
    time: 'WORK BREAK',
    title: 'A Reset Between Tasks',
    tagline: 'Clear your mind with zero-sugar yuzu spark.',
    accent: '#00E5FF',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    recommendedDrink: 'ZERO CITRUS'
  },
  {
    time: 'AFTERNOON',
    title: 'A Cold Burst of Energy',
    tagline: 'Juicy wild berry wave when the day peaks.',
    accent: '#FF2E75',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
    recommendedDrink: 'BERRY WAVE'
  },
  {
    time: 'WEEKEND',
    title: 'Good People. Good Weather. Good Drinks.',
    tagline: 'Tropical golden pineapple to share under the sun.',
    accent: '#FF7E27',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    recommendedDrink: 'TROPIC'
  },
  {
    time: 'NIGHT',
    title: 'A Chilled Moment After a Long Day',
    tagline: 'Herbal key lime and mint to wind down mindfully.',
    accent: '#10B981',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop',
    recommendedDrink: 'BOTANIC'
  },
  {
    time: 'GOLDEN HOUR',
    title: 'Sunset Relaxation & Twilight Chats',
    tagline: 'Silky yellow peach nectar & sparkling bubbles as the sun sets.',
    accent: '#FF9A76',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1200&auto=format&fit=crop',
    recommendedDrink: 'PEACH SPARK'
  }
];
