import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Social Media Handle: {user.socialMediaHandle}</p>
      <div className="image-gallery">
        {user.images.map((img, index) => (
          <img
            key={index}
            src={`http://localhost:5000/uploads/${img}`} // Ensure this is correct
            alt={`Uploaded ${index}`}
            width="100"
          />
        ))}
      </div>
    </div>
  );
};

export default UserCard;
