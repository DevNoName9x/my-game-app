// src/components/BrewedDrinks.js
import React from "react";
import CardItem from "./CardItem";
import { recipes } from "../data/drinksData";

function BrewedDrinks({ brewedDrinks }) {
  const getImageUrl = (drinkName) => {
    return recipes[drinkName]?.imageUrl || "";
  };

  const groupedDrinks = brewedDrinks.reduce((acc, drink) => {
    acc[drink] = (acc[drink] || 0) + 1;
    return acc;
  }, {});

  const drinksList = Object.entries(groupedDrinks);

  return (
    <>
      <h4>
        Đồ Uống Đã Pha Chế - <span style={{ color: "red" }}> {brewedDrinks.length} </span>
      </h4>
      {brewedDrinks.length === 0 ? (
        <p className="text-muted">Chưa có đồ uống nào được pha chế.</p>
      ) : (
        <div className="row">
          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                overflowY: "auto",
                maxHeight: "450px", // 2 dòng CardItem (mỗi dòng ~150px)
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            >
              {drinksList.map(([drink, count], index) => (
                <div
                  key={index}
                  style={{
                    flex: "0 0 33.33%", // 3 ô/dòng
                    minWidth: "100px", // Chiều rộng tối thiểu
                    marginBottom: "10px",
                  }}
                >
                  <CardItem card={drink} count={count} imageUrl={getImageUrl(drink)} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BrewedDrinks;
