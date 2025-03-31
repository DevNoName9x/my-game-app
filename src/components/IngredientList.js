// src/components/IngredientList.js
import React from "react";
import CardItem from "./CardItem";
import { cardTypes } from "../data/drinksData";

function IngredientList({ collectedCards }) {
  // Hàm tìm imageUrl dựa trên tên thẻ
  const getImageUrl = (cardName) => {
    const card = cardTypes.find((item) => item.name === cardName);
    return card ? card.imageUrl : "";
  };

  return (
    <div className="col-md-6">
      <h4>Nguyên Liệu:</h4>
      {collectedCards.length === 0 ? (
        <p className="text-muted">No cards collected yet.</p>
      ) : (
        <div className="row">
          {collectedCards.map((card, index) => (
            <div className="col-md-3" key={index}>
              <CardItem card={card} imageUrl={getImageUrl(card)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default IngredientList;
