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
      <h4>
        Thẻ Nguyên Liệu: <span style={{ color: "red" }}>{collectedCards.length} </span>{" "}
      </h4>
      {collectedCards.length === 0 ? (
        <p className="text-muted">Chưa có thẻ nào được thu thập.</p>
      ) : (
        <div className="row">
          {/* Bên trái */}
          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                overflowY: "auto",
                maxHeight: "450px", // 2 dòng CardItem
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            >
              {cardsList.map(([card, count], index) => (
                <div
                  key={index}
                  style={{
                    flex: "0 0 33.33%", // 3 ô/dòng
                    minWidth: "100px", // Chiều rộng tối thiểu
                    marginBottom: "10px",
                  }}
                >
                  <CardItem card={card} count={count} imageUrl={getImageUrl(card)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default IngredientList;
