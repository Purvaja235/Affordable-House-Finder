import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import properties from '../data/propertiesData'; 
import './PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 


  const property = properties.find(property => property.id === parseInt(id));

  if (!property) {
    return <div>Property not found!</div>;
  }

  const handleScheduleClick = () => {
    navigate(`/schedule/${property.id}`); 
  };

  return (
    <div className="property-detail">
      <h1>{property.type} in {property.location}</h1>
      <p className="price">{property.price}</p>
      <div className="property-images">
        {property.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Property ${index}`} />
        ))}
      </div>
      <div className="property-info">
        <h2>Property Details</h2>
        <p>Area: {property.area}</p>
        <p>Bedrooms: {property.bedrooms}</p>
        <p>Bathrooms: {property.bathrooms}</p>
        <p>Balcony/Terrace: {property.balcony}</p>
        <p>Parking: {property.parking}</p>
      </div>
      <div className="amenities">
        <h2>Amenities</h2>
        <ul>
          <li><strong>Basic:</strong> {property.amenities.basic.join(', ')}</li>
          <li><strong>Security:</strong> {property.amenities.security.join(', ')}</li>
          <li><strong>Lifestyle:</strong> {property.amenities.lifestyle.join(', ')}</li>
          <li><strong>Additional:</strong> {property.amenities.additional.join(', ')}</li>
        </ul>
      </div>
      <div className="description">
        <h2>Description</h2>
        <p>{property.description}</p>
        <p>{property.neighborhood}</p>
        <p>{property.transportation}</p>
      </div>
      <div className="contact">
        <h2>Contact Information</h2>
        <p>Phone: {property.contact.phone}</p>
        <p>Email: <a href={`mailto:${property.contact.email}`}>{property.contact.email}</a></p>
        <button onClick={handleScheduleClick}>Schedule a Viewing</button>
      </div>
    </div>
  );
};

export default PropertyDetail;
