// src/components/BrewedDrinks.js
import React from "react";
import CardItem from "./CardItem";

function BrewedDrinks({ brewedDrinks }) {
  const drinksList = Object.entries(brewedDrinks);
  return (
    <div>
      <h4 style={{ height: "33px" }}>
        Đồ Uống Đã Pha Chế:{" "}
        <span className="badge bg-success ms-2"> {drinksList.length} </span>
      </h4>
      {drinksList.length === 0 ? (
        <p className="text-muted">Chưa có đồ uống nào được pha chế.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            overflowY: "auto",
            maxHeight: "500px",
          }}
        >
          {drinksList.map(([index, drink]) => (
            <div
              key={index}
              style={{
                flex: "0 0 32%", // Luôn 3 ô/dòng
                minWidth: "100px",
                margin: "2px",
              }}
            >
              <CardItem cardName={drink.name} count={1} imageUrl={drink.imageUrl} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BrewedDrinks;
