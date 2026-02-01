// src/data/hotels.js
import spbanner from './sp_banner.jpeg';

// Hotel 1
import hot1_img1 from './hot1_img1.jpeg';
import hot1_img2 from './hot1_img2.jpeg';
import hot1_img3 from './hot1_img3.jpeg';
import hot1_img4 from './hot1_img4.jpeg';

// Hotel 2
import hot2_img1 from './hot2_img1.avif';
import hot2_img2 from './hot2_img2.avif';
import hot2_img3 from './hot2_img3.avif';
import hot2_img4 from './hot2_img4.webp';

// Hotel 3
import hot3_img1 from './hot3_img1.avif';
import hot3_img2 from './hot3_img2.avif';
import hot3_img3 from './hot3_img3.avif';
import hot3_img4 from './hot3_img4.avif';

// Hotel 4
import hot4_img1 from './hot4_img1.avif';
import hot4_img2 from './hot4_img2.avif';
import hot4_img3 from './hot4_img3.avif';
import hot4_img4 from './hot4_img4.webp';

// Hotel 5
import hot5_img1 from './hot5_img1.avif';
import hot5_img2 from './hot5_img2.avif';
import hot5_img3 from './hot5_img3.avif';
import hot5_img4 from './hot5_img4.avif';

// Hotel 6
import hot6_img1 from './hot6_img1.avif';
import hot6_img2 from './hot6_img2.webp';
import hot6_img3 from './hot6_img3.webp';
import hot6_img4 from './hot6_img4.webp';

// Hotel 7
import hot7_img1 from './hot7_img1.avif';
import hot7_img2 from './hot7_img2.avif';
import hot7_img3 from './hot7_img3.avif';
import hot7_img4 from './hot7_img4.avif';

// Hotel 8
import hot8_img1 from './hot8_img1.avif';
import hot8_img2 from './hot8_img2.avif';
import hot8_img3 from './hot8_img3.webp';
import hot8_img4 from './hot8_img4.avif';

// Hotel 9
import hot9_img1 from './hot9_img1.avif';
import hot9_img2 from './hot9_img2.avif';
import hot9_img3 from './hot9_img3.avif';
import hot9_img4 from './hot9_img4.avif';

// Hotel 10
import hot10_img1 from './hot10_img1.avif';
import hot10_img2 from './hot10_img2.avif';
import hot10_img3 from './hot10_img3.avif';
import hot10_img4 from './hot10_img4.avif';

export const assets = {
  spbanner,
  hotels: {
    hot1: [hot1_img1, hot1_img2, hot1_img3, hot1_img4],
    hot2: [hot2_img1, hot2_img2, hot2_img3, hot2_img4],
    hot3: [hot3_img1, hot3_img2, hot3_img3, hot3_img4],
    hot4: [hot4_img1, hot4_img2, hot4_img3, hot4_img4],
    hot5: [hot5_img1, hot5_img2, hot5_img3, hot5_img4],
    hot6: [hot6_img1, hot6_img2, hot6_img3, hot6_img4],
    hot7: [hot7_img1, hot7_img2, hot7_img3, hot7_img4],
    hot8: [hot8_img1, hot8_img2, hot8_img3, hot8_img4],
    hot9: [hot9_img1, hot9_img2, hot9_img3, hot9_img4],
    hot10: [hot10_img1, hot10_img2, hot10_img3, hot10_img4],
  },
};

export const hotelsData = [
  {
    id: 1,
    name: "Hotel caribbean",
    location: "Near Punit Super Bazar, Dharampeth, Nagpur.",
    rating: 4.5,
    reviews: 1243,
    price: 4999,
    originalPrice: 6999,
    image: assets.hotels.hot1[0],
    images: assets.hotels.hot1,
    amenities: ['Free WiFi', 'Parking', 'Breakfast', 'Swimming Pool', 'Gym', 'Spa', 'Restaurant', 'Elevator', 'AC', 'TV'],
    discount: '28% OFF',
    category: 'STAY Premium',
    collection: 'Family STAYs',
    isWizardMember: true,
    companyServiced: true,
    urgencyText: '19 people booked this hotel in last 6 hours',
    description: 'Luxury accommodation with premium amenities',
    address: 'Near Punit Super Bazar, Dharampeth, Nagpur.',
    taxes: 134,
    checkInTime: '12:00 PM',
    checkOutTime: '11:00 AM',
    checkInRating: 5.0,
    hotelPolicies: [
      'Check-in: After 12:00 PM',
      'Check-out: Before 11:00 AM',
      'Couples are welcome',
      'Guests can check in using any local or outstation ID proof (PAN card not accepted).'
    ],
    nearbyPlaces: [
      { name: 'Gayatri Bhojnalaya', distance: '0.3kms' },
      { name: "Children's Traffic Park", distance: '0.7kms'},
      { name: 'Trikoni Park', distance: '0.5kms' }
    ],
    roomTypes: [
      {
        id: 'classic',
        name: 'Classic',
        description: 'Room size: 9 sqm approx',
        price: 1302,
        originalPrice: 6964,
        discount: '81% off',
        amenities: ['AC', 'TV', 'Free WiFi'],
        image: assets.hotels.hot1[1],
        selected: true
      },
      {
        id: 'deluxe',
        name: 'Deluxe',
        description: 'Room size: 12 sqm approx',
        price: 1800,
        originalPrice: 8500,
        discount: '79% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Mini Bar'],
        image: assets.hotels.hot1[2]
      }
    ]
  },
  {
    id: 2,
    name: "STAY Budget Hotel",
    location: "MG Road, Bangalore",
    rating: 4.2,
    reviews: 856,
    price: 3299,
    originalPrice: 4599,
    image: assets.hotels.hot2[0],
    images: assets.hotels.hot2,
    amenities: ['Free WiFi', 'AC', 'TV', 'Breakfast', 'Parking'],
    discount: '30% OFF',
    category: 'STAY Rooms',
    collection: 'Local IDs accepted',
    isWizardMember: false,
    companyServiced: true,
    urgencyText: '12 people booked this hotel in last 6 hours',
    description: 'Affordable comfortable stay',
    address: 'MG Road, Bangalore',
    taxes: 98,
    checkInTime: '2:00 PM',
    checkOutTime: '12:00 PM',
    checkInRating: 4.5,
    hotelPolicies: [
      'Check-in: After 2:00 PM',
      'Check-out: Before 12:00 PM',
      'Local IDs accepted',
      'Non-vegetarian food allowed'
    ],
    nearbyPlaces: [
      { name: 'MG Road Shopping District', distance: '0.1kms' },
      { name: 'Cubbon Park Metro Station', distance: '0.8kms' },
      { name: 'Bangalore Palace', distance: '3.2kms' }
    ],
    roomTypes: [
      {
        id: 'standard',
        name: 'Standard Room',
        description: 'Room size: 10 sqm approx',
        price: 900,
        originalPrice: 2500,
        discount: '64% off',
        amenities: ['AC', 'TV', 'Free WiFi'],
        image: assets.hotels.hot2[1],
        selected: true
      },
      {
        id: 'superior',
        name: 'Superior Room',
        description: 'Room size: 14 sqm approx',
        price: 1200,
        originalPrice: 3200,
        discount: '62% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Breakfast'],
        image: assets.hotels.hot2[2]
      }
    ]
  },
  {
    id: 3,
    name: "STAY Business Hotel",
    location: "Bandra, Mumbai",
    rating: 4.7,
    reviews: 2156,
    price: 7999,
    originalPrice: 9999,
    image: assets.hotels.hot3[0],
    images: assets.hotels.hot3,
    amenities: ['Free WiFi', 'Swimming Pool', 'Gym', 'Breakfast', 'Conference Room', 'Parking', 'AC', 'TV'],
    discount: '20% OFF',
    category: 'Capital STAY',
    collection: 'Business Ready',
    isWizardMember: true,
    companyServiced: true,
    urgencyText: '32 people booked this hotel in last 6 hours',
    description: 'Perfect for business travelers',
    address: 'Bandra Kurla Complex, Mumbai',
    taxes: 456,
    checkInTime: '12:00 PM',
    checkOutTime: '11:00 AM',
    checkInRating: 4.8,
    hotelPolicies: [
      'Check-in: After 12:00 PM',
      'Check-out: Before 11:00 AM',
      'Early check-in available on request',
      'Business center access included'
    ],
    nearbyPlaces: [
      { name: 'Bandra Kurla Complex', distance: '0.5kms' },
      { name: 'Bandra Railway Station', distance: '2.3kms' },
      { name: 'Phoenix Marketcity', distance: '3.0kms' }
    ],
    roomTypes: [
      {
        id: 'executive',
        name: 'Executive Room',
        description: 'Room size: 20 sqm approx',
        price: 2200,
        originalPrice: 5500,
        discount: '60% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Work Desk'],
        image: assets.hotels.hot3[1],
        selected: true
      },
      {
        id: 'suite',
        name: 'Business Suite',
        description: 'Room size: 35 sqm approx',
        price: 3500,
        originalPrice: 8500,
        discount: '59% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Work Desk', 'Mini Bar', 'Living Area'],
        image: assets.hotels.hot3[2]
      }
    ]
  },
  {
    id: 4,
    name: "STAY Resort & Spa",
    location: "Goa Beachfront",
    rating: 4.8,
    reviews: 1892,
    price: 11999,
    originalPrice: 15999,
    image: assets.hotels.hot4[0],
    images: assets.hotels.hot4,
    amenities: ['Spa', 'Beach Access', 'Pool', 'Free WiFi', 'Restaurant', 'Bar', 'Parking', 'AC', 'TV', 'Gym'],
    discount: '25% OFF',
    category: 'STAY Palette',
    collection: 'Luxury Collection',
    isWizardMember: true,
    companyServiced: true,
    urgencyText: '8 people booked this hotel in last 6 hours',
    description: 'Premium beachfront resort experience',
    address: 'Calangute Beach, Goa',
    taxes: 789,
    checkInTime: '3:00 PM',
    checkOutTime: '12:00 PM',
    checkInRating: 4.9,
    hotelPolicies: [
      'Check-in: After 3:00 PM',
      'Check-out: Before 12:00 PM',
      'Beach access 24/7',
      'Spa services available from 9 AM to 9 PM'
    ],
    nearbyPlaces: [
      { name: 'Calangute Beach', distance: '0.1kms' },
      { name: 'Baga Beach', distance: '1.5kms' },
      { name: 'Anjuna Flea Market', distance: '5.0kms' }
    ],
    roomTypes: [
      {
        id: 'seaview',
        name: 'Sea View Room',
        description: 'Room size: 25 sqm approx',
        price: 2800,
        originalPrice: 7200,
        discount: '61% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Balcony', 'Sea View'],
        image: assets.hotels.hot4[1],
        selected: true
      },
      {
        id: 'villa',
        name: 'Beach Villa',
        description: 'Room size: 45 sqm approx',
        price: 4500,
        originalPrice: 12000,
        discount: '62% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Private Pool', 'Kitchenette', 'Garden'],
        image: assets.hotels.hot4[2]
      }
    ]
  },
  {
    id: 5,
    name: "STAY City Inn",
    location: "City Center, Pune",
    rating: 4.3,
    reviews: 945,
    price: 2599,
    originalPrice: 3599,
    image: assets.hotels.hot5[0],
    images: assets.hotels.hot5,
    amenities: ['Free WiFi', 'AC', 'TV', 'Parking', 'Restaurant'],
    discount: '28% OFF',
    category: 'STAY Townhouse',
    collection: 'Your friendly neighbourhood stay',
    isWizardMember: false,
    companyServiced: false,
    urgencyText: '15 people booked this hotel in last 6 hours',
    description: 'Comfortable city stay',
    address: 'Shivaji Nagar, Pune',
    taxes: 123,
    checkInTime: '1:00 PM',
    checkOutTime: '11:00 AM',
    checkInRating: 4.4,
    hotelPolicies: [
      'Check-in: After 1:00 PM',
      'Check-out: Before 11:00 AM',
      '24-hour reception',
      'Luggage storage available'
    ],
    nearbyPlaces: [
      { name: 'Shivaji Nagar Railway Station', distance: '0.5kms' },
      { name: 'FC Road', distance: '1.2kms' },
      { name: 'Aga Khan Palace', distance: '3.5kms' }
    ],
    roomTypes: [
      {
        id: 'basic',
        name: 'Basic Room',
        description: 'Room size: 11 sqm approx',
        price: 800,
        originalPrice: 2200,
        discount: '64% off',
        amenities: ['AC', 'TV', 'Free WiFi'],
        image: assets.hotels.hot5[1],
        selected: true
      },
      {
        id: 'family',
        name: 'Family Room',
        description: 'Room size: 18 sqm approx',
        price: 1500,
        originalPrice: 3800,
        discount: '61% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Extra Bed'],
        image: assets.hotels.hot5[2]
      }
    ]
  },
  {
    id: 6,
    name: "STAY Heritage Palace",
    location: "Jaipur, Rajasthan",
    rating: 4.9,
    reviews: 2345,
    price: 15999,
    originalPrice: 19999,
    image: assets.hotels.hot6[0],
    images: assets.hotels.hot6,
    amenities: ['Heritage View', 'Pool', 'Spa', 'Free WiFi', 'Restaurant', 'Bar', 'Parking', 'AC', 'TV', 'Gym', 'Cultural Shows'],
    discount: '20% OFF',
    category: 'STAY Heritage',
    collection: 'Luxury Collection',
    isWizardMember: true,
    companyServiced: true,
    urgencyText: '5 people booked this hotel in last 6 hours',
    description: 'Royal heritage palace experience',
    address: 'Amber Fort Road, Jaipur',
    taxes: 1200,
    checkInTime: '2:00 PM',
    checkOutTime: '12:00 PM',
    checkInRating: 4.9,
    hotelPolicies: [
      'Check-in: After 2:00 PM',
      'Check-out: Before 12:00 PM',
      'Traditional welcome ceremony',
      'Heritage walk included'
    ],
    nearbyPlaces: [
      { name: 'Amber Fort', distance: '0.8kms' },
      { name: 'Jaigarh Fort', distance: '2.5kms' },
      { name: 'Nahargarh Fort', distance: '5.0kms' }
    ],
    roomTypes: [
      {
        id: 'royal',
        name: 'Royal Room',
        description: 'Room size: 30 sqm approx',
        price: 3500,
        originalPrice: 9000,
        discount: '61% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Heritage View'],
        image: assets.hotels.hot6[1],
        selected: true
      },
      {
        id: 'suite',
        name: 'Maharaja Suite',
        description: 'Room size: 55 sqm approx',
        price: 5500,
        originalPrice: 15000,
        discount: '63% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Private Garden', 'Butler Service'],
        image: assets.hotels.hot6[2]
      }
    ]
  },
  {
    id: 7,
    name: "STAY Mountain Retreat",
    location: "Shimla, Himachal",
    rating: 4.6,
    reviews: 1678,
    price: 8999,
    originalPrice: 11999,
    image: assets.hotels.hot7[0],
    images: assets.hotels.hot7,
    amenities: ['Mountain View', 'Fireplace', 'Free WiFi', 'Restaurant', 'Parking', 'AC', 'TV', 'Indoor Games'],
    discount: '25% OFF',
    category: 'STAY Nature',
    collection: 'Family STAYs',
    isWizardMember: false,
    companyServiced: true,
    urgencyText: '18 people booked this hotel in last 6 hours',
    description: 'Scenic mountain retreat with breathtaking views',
    address: 'The Mall Road, Shimla',
    taxes: 650,
    checkInTime: '1:00 PM',
    checkOutTime: '11:00 AM',
    checkInRating: 4.7,
    hotelPolicies: [
      'Check-in: After 1:00 PM',
      'Check-out: Before 11:00 AM',
      'Bonfire arrangements available',
      'Trekking guide services'
    ],
    nearbyPlaces: [
      { name: 'The Mall Road', distance: '0.2kms' },
      { name: 'Christ Church', distance: '0.5kms' },
      { name: 'Jakhu Temple', distance: '1.5kms' }
    ],
    roomTypes: [
      {
        id: 'view',
        name: 'Mountain View Room',
        description: 'Room size: 22 sqm approx',
        price: 2000,
        originalPrice: 5200,
        discount: '62% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Fireplace'],
        image: assets.hotels.hot7[1],
        selected: true
      },
      {
        id: 'cottage',
        name: 'Wooden Cottage',
        description: 'Room size: 35 sqm approx',
        price: 3200,
        originalPrice: 8500,
        discount: '62% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Fireplace', 'Private Deck'],
        image: assets.hotels.hot7[2]
      }
    ]
  },
  {
    id: 8,
    name: "STAY Riverside Resort",
    location: "Rishikesh, Uttarakhand",
    rating: 4.4,
    reviews: 1123,
    price: 7499,
    originalPrice: 9999,
    image: assets.hotels.hot8[0],
    images: assets.hotels.hot8,
    amenities: ['River View', 'Yoga Classes', 'Adventure Sports', 'Free WiFi', 'Restaurant', 'Parking', 'AC', 'TV', 'Meditation Hall'],
    discount: '25% OFF',
    category: 'STAY Wellness',
    collection: 'For Group Travellers',
    isWizardMember: true,
    companyServiced: false,
    urgencyText: '10 people booked this hotel in last 6 hours',
    description: 'Serene riverside wellness retreat',
    address: 'Tapovan, Rishikesh',
    taxes: 550,
    checkInTime: '12:00 PM',
    checkOutTime: '10:00 AM',
    checkInRating: 4.6,
    hotelPolicies: [
      'Check-in: After 12:00 PM',
      'Check-out: Before 10:00 AM',
      'Daily yoga sessions included',
      'River rafting arrangements'
    ],
    nearbyPlaces: [
      { name: 'Laxman Jhula', distance: '1.2kms' },
      { name: 'Triveni Ghat', distance: '2.5kms' },
      { name: 'Beatles Ashram', distance: '3.0kms' }
    ],
    roomTypes: [
      {
        id: 'river',
        name: 'River View Room',
        description: 'Room size: 20 sqm approx',
        price: 1800,
        originalPrice: 4800,
        discount: '62% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'River View'],
        image: assets.hotels.hot8[1],
        selected: true
      },
      {
        id: 'tent',
        name: 'Luxury Tent',
        description: 'Room size: 25 sqm approx',
        price: 2200,
        originalPrice: 5800,
        discount: '62% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Private Garden', 'Campfire Setup'],
        image: assets.hotels.hot8[2]
      }
    ]
  },
  {
    id: 9,
    name: "STAY Beach Villa",
    location: "Kovalam, Kerala",
    rating: 4.7,
    reviews: 1987,
    price: 13999,
    originalPrice: 17999,
    image: assets.hotels.hot9[0],
    images: assets.hotels.hot9,
    amenities: ['Private Beach', 'Pool', 'Ayurveda Spa', 'Free WiFi', 'Restaurant', 'Bar', 'Parking', 'AC', 'TV', 'Gym'],
    discount: '22% OFF',
    category: 'STAY Palette',
    collection: 'STAY welcomes couples',
    isWizardMember: true,
    companyServiced: true,
    urgencyText: '7 people booked this hotel in last 6 hours',
    description: 'Luxury beachfront villa experience',
    address: 'Kovalam Beach, Kerala',
    taxes: 950,
    checkInTime: '3:00 PM',
    checkOutTime: '12:00 PM',
    checkInRating: 4.8,
    hotelPolicies: [
      'Check-in: After 3:00 PM',
      'Check-out: Before 12:00 PM',
      'Private beach access',
      'Ayurvedic treatments available'
    ],
    nearbyPlaces: [
      { name: 'Kovalam Beach', distance: '0.1kms' },
      { name: 'Lighthouse Beach', distance: '0.5kms' },
      { name: 'Hawah Beach', distance: '1.0kms' }
    ],
    roomTypes: [
      {
        id: 'beachvilla',
        name: 'Beach Villa',
        description: 'Room size: 40 sqm approx',
        price: 3800,
        originalPrice: 9800,
        discount: '61% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Private Pool', 'Garden'],
        image: assets.hotels.hot9[1],
        selected: true
      },
      {
        id: 'penthouse',
        name: 'Sea View Penthouse',
        description: 'Room size: 60 sqm approx',
        price: 5200,
        originalPrice: 13500,
        discount: '61% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Private Terrace', 'Jacuzzi', 'Kitchen'],
        image: assets.hotels.hot9[2]
      }
    ]
  },
  {
    id: 10,
    name: "STAY Urban Loft",
    location: "Cyber City, Gurgaon",
    rating: 4.5,
    reviews: 1456,
    price: 6499,
    originalPrice: 8499,
    image: assets.hotels.hot10[0],
    images: assets.hotels.hot10,
    amenities: ['Free WiFi', 'Workspace', 'Gym', 'Breakfast', 'Conference Room', 'Parking', 'AC', 'TV', 'Kitchenette'],
    discount: '24% OFF',
    category: 'Capital STAY',
    collection: 'Business Ready',
    isWizardMember: true,
    companyServiced: true,
    urgencyText: '25 people booked this hotel in last 6 hours',
    description: 'Modern urban loft for tech professionals',
    address: 'Cyber Hub, Gurgaon',
    taxes: 420,
    checkInTime: '12:00 PM',
    checkOutTime: '11:00 AM',
    checkInRating: 4.7,
    hotelPolicies: [
      'Check-in: After 12:00 PM',
      'Check-out: Before 11:00 AM',
      'High-speed internet included',
      'Conference room access'
    ],
    nearbyPlaces: [
      { name: 'Cyber Hub', distance: '0.3kms' },
      { name: 'DLF Cyber City Metro Station', distance: '0.8kms' },
      { name: 'Ambience Mall', distance: '1.5kms' }
    ],
    roomTypes: [
      {
        id: 'studio',
        name: 'Studio Loft',
        description: 'Room size: 25 sqm approx',
        price: 2200,
        originalPrice: 5800,
        discount: '62% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Work Desk', 'Kitchenette'],
        image: assets.hotels.hot10[1],
        selected: true
      },
      {
        id: 'executiveloft',
        name: 'Executive Loft',
        description: 'Room size: 35 sqm approx',
        price: 3200,
        originalPrice: 8500,
        discount: '62% off',
        amenities: ['AC', 'TV', 'Free WiFi', 'Dedicated Workspace', 'Kitchenette', 'Lounge'],
        image: assets.hotels.hot10[2]
      }
    ]
  }
];
// minor update 6314

// minor update 9962

// minor update 6721
