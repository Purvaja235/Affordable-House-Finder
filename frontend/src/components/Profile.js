import React from 'react';

const Profile = ({ user }) => {
    return (
        <div className="profile">
            <h2>{user.name}'s Profile</h2>
            <p>Email: {user.email}</p>
            <h3>Saved Searches:</h3>
            <ul>
                {user.savedSearches.map((search, index) => (
                    <li key={index}>{search}</li>
                ))}
            </ul>
            <h3>Watchlist:</h3>
            <ul>
                {user.watchlist.map((listing) => (
                    <li key={listing._id}>{listing.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
