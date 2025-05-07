// src/components/CardItem.js
import React from "react";
import { truncateString } from "../utils/stringUtils";

function CardItem({ cardName, count, imageUrl }) {
  const validImageUrl = imageUrl && imageUrl.trim() !== "" ? imageUrl : "/images/placeholder.png";
  // Rút gọn tên thẻ nếu dài hơn 15 ký tự
  const displayName = truncateString(cardName, 15);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <img src={validImageUrl} className="card-img-top" alt={cardName} />
        <h6 className="card-title" style={{ height: "45px" }}>
          <span style={{ fontSize: "14px" }}>
            {displayName} {count && <span className="badge bg-primary ms-2">{count}</span>}
          </span>
        </h6>
      </div>
    </div>
  );
}

export default CardItem;
