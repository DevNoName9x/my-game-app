// src/components/CardItem.js
import React from "react";

function CardItem({ card, imageUrl }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{card}</h5>
        <img src={imageUrl} className="card-img-top" alt="Card" />
      </div>
    </div>
  );
}

export default CardItem;
