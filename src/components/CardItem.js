// src/components/CardItem.js
import React from "react";

function CardItem({ card }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{card}</h5>
        <p className="card-text">A unique collectible card!</p>
      </div>
    </div>
  );
}

export default CardItem;
