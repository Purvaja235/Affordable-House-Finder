import React from 'react';
import '../pages/Home.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // Ensure you are using the correct router

const Listing = ({ listing }) => {
  return (
    <div className="flex-item">
      <img src={listing.image} alt={listing.title} />
      <div className="flex-item-content">
        <h2>{listing.title}</h2>
        <p className="location">{listing.location}</p> {/* Location field */}
        <p className="price"><strong>{listing.price}</strong></p>
        <Link to={`/property/${listing.id}`}>
          <button className="view-details-button">View Details</button> {/* View Details button */}
        </Link>
      </div>
    </div>
  );
};

export default Listing;
