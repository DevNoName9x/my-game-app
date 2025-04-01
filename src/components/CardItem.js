// src/components/CardItem.js
import React from "react";

function CardItem({ card, count, imageUrl }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <img src={imageUrl} className="card-img-top" alt="Card" />
        <h6 className="card-title">
          <span>
            {card} {count && <span className="badge bg-primary ms-2">{count}</span>}
          </span>
        </h6>
      </div>
    </div>
  );
}

export default CardItem;
