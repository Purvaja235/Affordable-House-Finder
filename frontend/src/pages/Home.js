import React, { useState } from 'react';
import Listing from '../components/Listing';
import './Home.css';

const listings = [
  {
    id: 1,
    title: 'Comfortable 1 BHK Flat',
    location: 'Kothrud, Pune',
    price: '$1500/month',
    image: '/images/background image1.jpg', 
  },
  {
    id: 2,
    title: 'Spacious 3 BHK Flat',
    location: 'Vanaj Corner, Pune',
    price: '$2000/month',
    image: '/images/background image2.jpg',
  },
  {
    id: 3,
    title: '4 BHK Stylish Flat',
    location: 'Shivaji Nagar, Pune',
    price: '$2500/month',
    image: '/images/background image3.jpg',
  },
  {
    id: 4,
    title: 'Roomy 2 BHK Flat',
    location: 'Gokale Colony, Pune',
    price: 'Rs.1700/month',
    image: '/images/background image4.jpg',
  },
  {
    id: 5,
    title: 'Bright 3 BHK Flat',
    location: 'Pratap Nagar, Pune',
    price: '$2100/month',
    image: '/images/background image5.jpg',
  },
  {
    id: 6,
    title: 'Grand 5 BHK Flat ',
    location: 'Punawale Corner, Pune',
    price: '$3000/month',
    image: '/images/background image6.jpg',
  },
  {
    id: 7,
    title: 'Compact 1 BHK Flat',
    location: 'Mandiwale Colony, Pune',
    price: '$1600/month',
    image: '/images/background image7.jpg',
  },
  {
    id: 8,
    title: 'Cozy 2 BHK Flat',
    location: 'Mukai Chauk, Pune',
    price: '$2200/month',
    image: '/images/background image8.jpg',
  },
  {
    id: 9,
    title: 'Roomy 5 BHK Flat',
    location: 'Deccan Gymkhana, Pune',
    price: '$3200/month',
    image: '/images/background image9.jpg',
  },
  {
    id: 10,
    title: 'Elegant 3 BHK Flat',
    location: 'Andheri West, Mumbai',
    price: '$3200/month',
    image: '/images/background image10.jpg'
  },
  {
    id: 11,
    title: 'Luxury 4 BHK Flat',
    location: 'Marine Drive, Mumbai',
    price: '$4500/month',
    image: '/images/background image11.jpg'
  },
  {
    id: 12,
    title: 'Modern 4 BHK Flat',
    location: 'Bandra, Mumbai',
    price: '$2800/month',
    image: '/images/background image12.jpg'
  },
  {
    id: 13,
    title: 'Spacious 3 BHK Flat',
    location: 'Tarabai Park, Kolhapur',
    price: '$1500/month',
    image: '/images/background image13.jpg'
  },
  {
    id: 14,
    title: 'Charming 5 BHK Flat',
    location: 'Shivaji Park, Kolhapur',
    price: '$3500/month',
    image: '/images/background image14.jpg'
  },
  {
    id: 15,
    title: 'Stylish 3 BHK Flat',
    location: 'Gangapur Road, Nashik',
    price: '$1800/month',
    image: '/images/background image15.jpg'
  },
  {
    id: 16,
    title: 'Gorgeous 2 BHK Flat',
    location: 'College Road, Nashik',
    price: '$4000/month',
    image: '/images/background image16.jpg'
  },
  {
    id: 17,
    title: 'Elegant 1 BHK Flat',
    location: 'Indira Nagar, Nashik',
    price: '$1400/month',
    image: '/images/background image17.jpg'
  },
  {
    id: 18,
    title: 'Comfortable 1 BHK Flat',
    location: 'Bandra West, Mumbai',
    price: '$3000/month',
    image: '/images/background image18.jpg'
  },
  {
    id: 19,
    title: 'Cozy 2 BHK Flat',
    location: 'Andheri East, Mumbai',
    price: '$2500/month',
    image: '/images/background image19.jpg'
  },
  {
    id: 20,
    title: 'Bright 4 BHK Flat',
    location: 'Colaba, Mumbai',
    price: '$4000/month',
    image: '/images/background image20.jpg'
  }
  
  
];

function Home() {
  const [filteredProperties, setFilteredProperties] = useState(listings);
  const [filters, setFilters] = useState({
    bhk: '',
    price: '',
    location: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    const filtered = listings.filter((listing) => {
      
      const bhkMatch = filters.bhk ? listing.title.toLowerCase().includes(filters.bhk.toLowerCase()) : true;
      
      const priceMatch = filters.price ? parseInt(listing.price.replace(/\$/g, '')) <= parseInt(filters.price) : true;
      
      const locationMatch = filters.location ? listing.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
      
      return bhkMatch && priceMatch && locationMatch;
    });
    
    setFilteredProperties(filtered);
  };
  

  return (
    <div className="container">

      
      <div className="filter-container">
        <input
          type="text"
          name="bhk"
          placeholder="BHK (e.g., 1 BHK)"
          value={filters.bhk}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Max Price"
          value={filters.price}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleFilterChange}
        />
        <button className="filter-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="flex-container">
        {filteredProperties.map((listing) => (
          <Listing key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}

export default Home;