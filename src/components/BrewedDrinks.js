// src/components/BrewedDrinks.js
import React from "react";
import CardItem from "./CardItem";
import { recipes } from "../data/drinksData";

function BrewedDrinks({ brewedDrinks }) {
  const getImageUrl = (drinkName) => {
    return recipes[drinkName]?.imageUrl || "";
  };

  console.table(brewedDrinks);
  const groupedDrinks = brewedDrinks.reduce((acc, drink) => {
    acc[drink] = (acc[drink] || 0) + 1;
    return acc;
  }, {});
  const drinksList = Object.entries(groupedDrinks);

  return (
    <div>
      <h4 style={{ height: "33px" }}>
        Đồ Uống Đã Pha Chế:{" "}
        <span className="badge bg-success ms-2"> {brewedDrinks.length} </span>
      </h4>
      {brewedDrinks.length === 0 ? (
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
          {drinksList.map(([drink, count], index) => (
            <div
              key={index}
              style={{
                flex: "0 0 32%", // Luôn 3 ô/dòng
                minWidth: "100px",
                margin: "2px",
              }}
            >
              <CardItem
                card={drink}
                count={count}
                imageUrl={getImageUrl(drink)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BrewedDrinks;
