import React from 'react';
import './RoundImage.css'; 
import DP from "/assets/Images/dp-1.jpg"
const Picture = () => {
  return (
    <div className="image-container">
        <img src={DP} alt="Background Image" className="round-image" />
      </div>
  );
};

export default Picture;