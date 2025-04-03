// src/components/IngredientList.js
import React from "react";
import CardItem from "./CardItem";
import { cardTypes } from "../data/drinksData";

function IngredientList({ collectedCards }) {
  const getImageUrl = (cardName) => {
    const card = cardTypes.find((item) => item.name === cardName);
    return card ? card.imageUrl : "";
  };

  const groupedCards = collectedCards.reduce((acc, card) => {
    acc[card] = (acc[card] || 0) + 1;
    return acc;
  }, {});

  const cardsList = Object.entries(groupedCards);

  return (
    <div>
      <h4 style={{ height: "33px" }}>
        Thẻ Nguyên Liệu: <span className="badge bg-success ms-2">{collectedCards.length} </span>
      </h4>
      {collectedCards.length === 0 ? (
        <p className="text-muted">Chưa có thẻ nào được thu thập.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            overflowY: "auto",
            maxHeight: "500px",
          }}
        >
          {cardsList.map(([card, count], index) => (
            <div
              key={index}
              style={{
                flex: "0 0 32%", // Luôn 3 ô/dòng
                minWidth: "100px",
                margin: "2px",
              }}
            >
              <CardItem card={card} count={count} imageUrl={getImageUrl(card)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default IngredientList;