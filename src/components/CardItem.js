// src/components/CardItem.js
import React from "react";

function CardItem({ cardName, count, imageUrl }) {
  const validImageUrl = imageUrl && imageUrl.trim() !== "" ? imageUrl : "/images/placeholder.png";

  return (
    <div className="card mb-3">
      <div className="card-body">
        <img src={validImageUrl} className="card-img-top" alt={cardName} />
        <h6 className="card-title" style={{ height: "45px" }}>
          <span style={{ fontSize: "14px" }}>
            {cardName} {count && <span className="badge bg-primary ms-2">{count}</span>}
          </span>
        </h6>
      </div>
    </div>
  );
}

export default CardItem;
