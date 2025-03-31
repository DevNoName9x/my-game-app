// src/components/CardItem.js
import React from 'react';

function CardItem({ card, imageUrl }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h6 className="card-title">{card}</h6>
        <img 
          src={imageUrl} 
          className="card-img-top" 
          alt="Card" 
          style={{ width: '90px', height: '90px', objectFit: 'cover' }} 
        />
      </div>
    </div>
  );
}

export default CardItem;