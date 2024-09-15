const properties = [
    {
      id: 1,
      type: 'Apartment',
      location: 'Shivtirth Nagar, Kothrud, Pune',
      price: '$1500/month',
      area: '1200 sq ft',
      bedrooms: 2,
      bathrooms: 2,
      balcony: 'Yes',
      parking: 'Available',
      amenities: {
        basic: ['Water Supply', 'Electricity', 'Gas'],
        security: ['Gated Community', 'CCTV'],
        lifestyle: ['Swimming Pool', 'Gym', 'Club House'],
        additional: ['Garden', 'Playground', 'Community Hall']
      },
      photos: ['/images/Shivtirth Nagar1.jpg', '/images/Shivtirth Nagar2.jpg'],
      description: 'A beautiful 2-bedroom apartment located in Shivtirth Nagar with modern amenities and a serene environment.',
      neighborhood: 'Nearby schools, hospitals, and shopping centers.',
      transportation: 'Well-connected by public transport and close to major highways.',
      contact: {
        phone: '123-456-7890',
        email: 'agent@example.com'
      }
    },
    {
    id: 2,
    type: 'Apartment',
    location: 'Vanaj Corner, Pune',
    price: '$2000/month',
    area: '1400 sq ft',
    bedrooms: 3,
    bathrooms: 2,
    balcony: 'Yes',
    parking: 'Available',
    amenities: {
      basic: ['Water Supply', 'Electricity', 'Gas'],
      security: ['Gated Community', 'CCTV'],
      lifestyle: ['Swimming Pool', 'Gym', 'Club House'],
      additional: ['Garden', 'Playground', 'Community Hall']
    },
    photos: ['/images/vanaj1.jpg', '/images/vanaj2.jpg'],
    description: 'This spacious 3 BHK flat in Vanaj Corner offers ample space and modern amenities, ideal for a growing family.',
    neighborhood: 'Located in a vibrant area with easy access to schools, shopping centers, and parks.',
    transportation: 'Well-connected by public transport with convenient access to major roads.',
    contact: {
      phone: '123-456-7891',
      email: 'agent2@example.com'
    }
  },
  {
    id: 3,
    type: 'Apartment',
    location: 'Shivaji Nagar, Pune',
    price: '$2500/month',
    area: '2000 sq ft',
    bedrooms: 4,
    bathrooms: 3,
    balcony: 'Yes',
    parking: 'Available',
    amenities: {
      basic: ['Water Supply', 'Electricity', 'Gas'],
      security: ['Gated Community', 'CCTV'],
      lifestyle: ['Swimming Pool', 'Gym', 'Club House'],
      additional: ['Garden', 'Playground', 'Community Hall']
    },
    photos: ['/images/background image3.jpg'],
    description: 'This stylish 4 BHK flat in Shivaji Nagar features modern design and luxurious amenities for a comfortable lifestyle.',
    neighborhood: 'Close to key amenities including schools, hospitals, and shopping malls.',
    transportation: 'Excellent connectivity with public transport and proximity to major roads.',
    contact: {
      phone: '123-456-7892',
      email: 'agent3@example.com'
    }
  },
  {
    id: 4,
    type: 'Apartment',
    location: 'Gokale Colony, Pune',
    price: '$1700/month',
    area: '1600 sq ft',
    bedrooms: 2,
    bathrooms: 2,
    balcony: 'Yes',
    parking: 'Available',
    amenities: {
      basic: ['Water Supply', 'Electricity', 'Gas'],
      security: ['Gated Community', 'CCTV'],
      lifestyle: ['Swimming Pool', 'Gym', 'Club House'],
      additional: ['Garden', 'Playground', 'Community Hall']
    },
    photos: ['/images/background image4.jpg'],
    description: 'A roomy 2 BHK flat in Gokale Colony offering a comfortable living space with essential amenities.',
    neighborhood: 'Located near educational institutions, parks, and convenience stores.',
    transportation: 'Well-connected by public transport with easy access to major routes.',
    contact: {
      phone: '123-456-7893',
      email: 'agent4@example.com'
    }
  },
  {
    id: 5,
    type: 'Apartment',
    location: 'PCMC, Pune',
    price: '$2100/month',
    area: '1800 sq ft',
    bedrooms: 3,
    bathrooms: 2,
    balcony: 'Yes',
    parking: 'Available',
    amenities: {
      basic: ['Water Supply', 'Electricity', 'Gas'],
      security: ['Gated Community', 'CCTV'],
      lifestyle: ['Swimming Pool', 'Gym', 'Club House'],
      additional: ['Garden', 'Playground', 'Community Hall']
    },
    photos: ['/images/background image5.jpg'],
    description: 'Bright and spacious 3 BHK flat in Pratap Nagar with modern amenities and a welcoming atmosphere.',
    neighborhood: 'Surrounded by schools, hospitals, and shopping areas.',
    transportation: 'Convenient access to public transport and major highways.',
    contact: {
      phone: '123-456-7894',
      email: 'agent5@example.com'
    }
  },
  {
    id: 6,
    type: 'Apartment',
    location: 'Punawale Corner, Pune',
    price: '$3000/month',
    area: '2500 sq ft',
    bedrooms: 5,
    bathrooms: 4,
    balcony: 'Yes',
    parking: 'Available',
    amenities: {
      basic: ['Water Supply', 'Electricity', 'Gas'],
      security: ['Gated Community', 'CCTV'],
      lifestyle: ['Swimming Pool', 'Gym', 'Club House'],
      additional: ['Garden', 'Playground', 'Community Hall']
    },
    photos: ['/images/background image6.jpg'],
    description: 'Grand 5 BHK flat in Punawale Corner with luxurious features and ample living space for large families.',
    neighborhood: 'Located in a premium area with excellent facilities and services.',
    transportation: 'Easy access to major roads and well-connected by public transport.',
    contact: {
      phone: '123-456-7895',
      email: 'agent6@example.com'
    }
  },
  {
    id: 7,
    type: 'Apartment',
    location: 'Mandiwale Colony, Pune',
    price: '$1600/month',
    area: '1100 sq ft',
    bedrooms: 1,
    bathrooms: 1,
    balcony: 'Yes',
    parking: 'Available',
    amenities: {
      basic: ['Water Supply', 'Electricity', 'Gas'],
      security: ['Gated Community', 'CCTV'],
      lifestyle: ['Swimming Pool', 'Gym', 'Club House'],
      additional: ['Garden', 'Playground', 'Community Hall']
    },
    photos: ['/images/background image7.jpg'],
    description: 'Compact 1 BHK flat in Mandiwale Colony, perfect for individuals or couples looking for a cozy living space.',
    neighborhood: 'Close to essential services and recreational facilities.',
    transportation: 'Conveniently connected by public transport and major roads.',
    contact: {
      phone: '123-456-7896',
      email: 'agent7@example.com'
    }
  },
  {
    id: 8,
    type: 'Apartment',
    location: 'Mukai Chauk, Pune',
    price: '$2200/month',
    area: '1500 sq ft',
    bedrooms: 2,
    bathrooms: 2,
    balcony: 'Yes',
    parking: 'Available',
    amenities: {
      basic: ['Water Supply', 'Electricity', 'Gas'],
      security: ['Gated Community', 'CCTV'],
      lifestyle: ['Swimming Pool', 'Gym', 'Club House'],
      additional: ['Garden', 'Playground', 'Community Hall']
    },
    photos: ['/images/background image8.jpg'],
    description: 'Cozy 2 BHK flat in Mukai Chauk offering a comfortable and well-designed living space.',
    neighborhood: 'In proximity to schools, markets, and entertainment options.',
    transportation: 'Well-connected by public transport and easily accessible by major roads.',
    contact: {
      phone: '123-456-7897',
      email: 'agent8@example.com'
    }
  },
  {
    id: 9,
    type: 'Apartment',
    location: 'Deccan Gymkhana, Pune',
    price: '$3200/month',
    area: '3000 sq ft',
    bedrooms: 5,
    bathrooms: 4,
    balcony: 'Yes',
    parking: 'Available',
    amenities: {
      basic: ['Water Supply', 'Electricity', 'Gas'],
      security: ['Gated Community', 'CCTV'],
      lifestyle: ['Swimming Pool', 'Gym', 'Club House'],
      additional: ['Garden', 'Playground', 'Community Hall']
    },
    photos: ['/images/background image9.jpg'],
    description: 'Roomy 5 BHK flat in Deccan Gymkhana with luxurious amenities and ample space for a large family.',
    neighborhood: 'Located in a prestigious area with easy access to high-end services and facilities.',
    transportation: 'Excellent connectivity with public transport and major highways.',
    contact: {
      phone: '123-456-7898',
      email: 'agent9@example.com'
    }
  },
  {
    id: 10,
    type: 'Apartment',
    location: 'Andheri West, Mumbai',
    price: '$3200/month',
    area: '1800 sq ft',
    bedrooms: 3,
    bathrooms: 2,
    balcony: 'Yes',
    parking: 'Available',
    amenities: {
      basic: ['Water Supply', 'Electricity', 'Gas'],
      security: ['Gated Community', '24/7 Security'],
      lifestyle: ['Swimming Pool', 'Gym', 'Multiplex'],
      additional: ['Garden', 'Jogging Track', 'Banquet Hall']
    },
    photos: ['/images/mumbai_image1.jpg'],
    description: 'This luxurious 3 BHK apartment in Andheri West offers a spacious living area, modern amenities, and scenic views.',
    neighborhood: 'Located near reputed schools, hospitals, and entertainment hubs.',
    transportation: 'Well-connected to metro stations and major highways for easy commuting.',
    contact: {
      phone: '987-654-3210',
      email: 'agent10@example.com'
    }
},
{
    id: 11,
    type: 'Penthouse',
    location: 'Marine Drive, Mumbai',
    price: '$4500/month',
    area: '2500 sq ft',
    bedrooms: 4,
    bathrooms: 4,
    balcony: 'Yes',
    parking: 'Available',
    amenities: {
      basic: ['Water Supply', 'Electricity', 'Gas'],
      security: ['Gated Community', 'CCTV Surveillance'],
      lifestyle: ['Infinity Pool', 'Gym', 'Private Terrace'],
      additional: ['Sea View', 'Garden', 'Home Theater']
    },
    photos: ['/images/mumbai_image2.jpg'],
    description: 'This exclusive 4 BHK penthouse on Marine Drive provides stunning sea views and high-end amenities for an ultra-luxury lifestyle.',
    neighborhood: 'In close proximity to luxury hotels, fine dining restaurants, and high-end retail stores.',
    transportation: 'Well-connected to major roadways and a short drive to Mumbai airport.',
    contact: {
      phone: '123-987-6543',
      email: 'agent11@example.com'
    }
},
{
    id: 12,
    type: 'Apartment',
    location: 'Bandra, Mumbai',
    price: '$2800/month',
    area: '1600 sq ft',
    bedrooms: 4,
    bathrooms: 2,
    balcony: 'Yes',
    parking: 'Available',
    amenities: {
      basic: ['Water Supply', 'Electricity', 'Gas'],
      security: ['Gated Community', 'CCTV'],
      lifestyle: ['Gym', 'Playground', 'Community Hall'],
      additional: ['Garden', 'Terrace', 'Yoga Room']
    },
    photos: ['/images/mumbai_image3.jpg'],
    description: 'A well-designed 3 BHK apartment in the heart of Bandra, offering comfort, convenience, and modern amenities.',
    neighborhood: 'Close to popular cafes, shopping centers, and renowned educational institutions.',
    transportation: 'Easy access to Bandra railway station and key roads for travel.',
    contact: {
      phone: '555-789-1234',
      email: 'agent12@example.com'
    }
},
{
  id: 13,
  type: 'Apartment',
  location: 'Tarabai Park, Kolhapur',
  price: '$1500/month',
  area: '1400 sq ft',
  bedrooms: 3,
  bathrooms: 2,
  balcony: 'Yes',
  parking: 'Available',
  amenities: {
    basic: ['Water Supply', 'Electricity', 'Gas'],
    security: ['CCTV', 'Security Guard'],
    lifestyle: ['Gym', 'Club House', 'Garden'],
    additional: ['Playground', 'Community Hall', 'Parking']
  },
  photos: ['/images/kolhapur_image1.jpg'],
  description: 'A 3 BHK apartment in the upscale Tarabai Park with a spacious layout and greenery views.',
  neighborhood: 'Located near reputed schools, hospitals, and shopping centers.',
  transportation: 'Well-connected by road and public transport, close to the city center.',
  contact: {
    phone: '444-333-1111',
    email: 'agent13@example.com'
  }
},
{
  id: 14,
  type: 'Villa',
  location: 'Shivaji Park, Kolhapur',
  price: '$3500/month',
  area: '2400 sq ft',
  bedrooms: 5,
  bathrooms: 4,
  balcony: 'Yes',
  parking: 'Available',
  amenities: {
    basic: ['Water Supply', 'Electricity', 'Gas'],
    security: ['Gated Community', 'CCTV'],
    lifestyle: ['Private Garden', 'Swimming Pool', 'Gym'],
    additional: ['Parking', 'Terrace', 'Playground']
  },
  photos: ['/images/kolhapur_image2.jpg'],
  description: 'A luxurious 5 BHK villa with a private garden and pool in a peaceful neighborhood.',
  neighborhood: 'Close to key facilities including schools, markets, and restaurants.',
  transportation: 'Well-connected with major roads and public transport services.',
  contact: {
    phone: '555-444-2222',
    email: 'agent14@example.com'
  }
},
{
  id: 15,
  type: 'Apartment',
  location: 'Gangapur Road, Nashik',
  price: '$1800/month',
  area: '1600 sq ft',
  bedrooms: 3,
  bathrooms: 2,
  balcony: 'Yes',
  parking: 'Available',
  amenities: {
    basic: ['Water Supply', 'Electricity', 'Gas'],
    security: ['Gated Community', 'CCTV'],
    lifestyle: ['Gym', 'Community Hall', 'Terrace Garden'],
    additional: ['Jogging Track', 'Kids Play Area', 'Parking']
  },
  photos: ['/images/nashik_image1.jpg'],
  description: 'This 3 BHK apartment on Gangapur Road offers modern living with proximity to all essential amenities.',
  neighborhood: 'Located near schools, shopping centers, and healthcare facilities.',
  transportation: 'Close to public transport and major roads for easy commute.',
  contact: {
    phone: '666-555-3333',
    email: 'agent15@example.com'
  }
},
{
  id: 16,
  type: 'Penthouse',
  location: 'College Road, Nashik',
  price: '$4000/month',
  area: '2600 sq ft',
  bedrooms: 2,
  bathrooms: 4,
  balcony: 'Yes',
  parking: 'Available',
  amenities: {
    basic: ['Water Supply', 'Electricity', 'Gas'],
    security: ['Gated Community', 'CCTV'],
    lifestyle: ['Swimming Pool', 'Gym', 'Private Terrace'],
    additional: ['Party Hall', 'Terrace Garden', 'Private Parking']
  },
  photos: ['/images/nashik_image2.jpg'],
  description: 'A lavish 4 BHK penthouse with private terrace and top-tier amenities in the prime College Road area.',
  neighborhood: 'Near renowned schools, shopping malls, and entertainment centers.',
  transportation: 'Easy access to major roads and public transport.',
  contact: {
    phone: '777-888-4444',
    email: 'agent16@example.com'
  }
},
{
  id: 17,
  type: 'Apartment',
  location: 'Indira Nagar, Nashik',
  price: '$1400/month',
  area: '1200 sq ft',
  bedrooms: 1,
  bathrooms: 2,
  balcony: 'Yes',
  parking: 'Available',
  amenities: {
    basic: ['Water Supply', 'Electricity', 'Gas'],
    security: ['Gated Community', 'Security Guard'],
    lifestyle: ['Gym', 'Park', 'Club House'],
    additional: ['Community Hall', 'Playground', 'Parking']
  },
  photos: ['/images/nashik_image3.jpg'],
  description: 'A cozy 2 BHK apartment in Indira Nagar, perfect for small families, offering comfortable amenities.',
  neighborhood: 'Near schools, supermarkets, and hospitals.',
  transportation: 'Well-connected with public transportation and major highways.',
  contact: {
    phone: '888-777-5555',
    email: 'agent17@example.com'
  }
},
{
  id: 18,
  type: 'Apartment',
  location: 'Bandra West, Mumbai',
  price: '$3000/month',
  area: '1500 sq ft',
  bedrooms: 1,
  bathrooms: 1,
  balcony: 'Yes',
  parking: 'Available',
  amenities: {
    basic: ['Water Supply', 'Electricity', 'Gas'],
    security: ['Gated Community', 'CCTV', '24/7 Security'],
    lifestyle: ['Gym', 'Swimming Pool', 'Club House'],
    additional: ['Children\'s Play Area', 'Garden', 'Jogging Track'],
  },
  photos: ['/images/bandra1.jpg', '/images/bandra2.jpg'],
  description:
    'A spacious and modern 3 BHK apartment located in Bandra West, featuring luxurious amenities and stunning city views.',
  neighborhood:
    'Located in a posh area with close proximity to popular cafes, restaurants, and shopping malls.',
  transportation:
    'Well-connected by public transport including buses and trains, and close to major highways.',
  contact: {
    phone: '987-654-3210',
    email: 'agent6@example.com',
  },
},
{
  id: 19,
  type: 'Apartment',
  location: 'Andheri East, Mumbai',
  price: '$2500/month',
  area: '1300 sq ft',
  bedrooms: 2,
  bathrooms: 2,
  balcony: 'Yes',
  parking: 'Available',
  amenities: {
    basic: ['Water Supply', 'Electricity', 'Gas'],
    security: ['Gated Community', 'CCTV', '24/7 Security'],
    lifestyle: ['Gym', 'Club House'],
    additional: ['Children\'s Play Area', 'Garden'],
  },
  photos: ['/images/andheri1.jpg', '/images/andheri2.jpg'],
  description:
    'A cozy and comfortable 2 BHK apartment located in Andheri East, ideal for small families or working professionals.',
  neighborhood:
    'Conveniently located near business hubs, shopping areas, and recreational spots.',
  transportation:
    'Well-connected to the airport, metro stations, and other public transport.',
  contact: {
    phone: '987-654-3211',
    email: 'agent7@example.com',
  },
},
{
  id: 20,
  type: 'Apartment',
  location: 'Colaba, Mumbai',
  price: '$4000/month',
  area: '1800 sq ft',
  bedrooms: 4,
  bathrooms: 3,
  balcony: 'Yes',
  parking: 'Available',
  amenities: {
    basic: ['Water Supply', 'Electricity', 'Gas'],
    security: ['Gated Community', 'CCTV', '24/7 Security'],
    lifestyle: ['Gym', 'Swimming Pool', 'Club House', 'Spa'],
    additional: ['Children\'s Play Area', 'Garden', 'Terrace'],
  },
  photos: ['/images/colaba1.jpg', '/images/colaba2.jpg'],
  description:
    'A luxurious 4 BHK apartment in the heart of Colaba with a breathtaking view of the Arabian Sea.',
  neighborhood:
    'Close to iconic landmarks, high-end shopping districts, and elite schools.',
  transportation:
    'Easily accessible via roadways and public transport with nearby metro stations and bus stops.',
  contact: {
    phone: '987-654-3212',
    email: 'agent8@example.com',
  },
}

];
 
  export default properties;
  