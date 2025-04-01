// src/components/BrewedDrinks.js
import React from "react";
import CardItem from "./CardItem";
import { recipes } from "../data/drinksData";

function BrewedDrinks({ brewedDrinks }) {
  const getImageUrl = (drinkName) => {
    return recipes[drinkName]?.imageUrl || "/images/placeholder.png";
  };

  const groupedDrinks = brewedDrinks.reduce((acc, drink) => {
    acc[drink] = (acc[drink] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <h4 className="mt-4">Đồ Uống Đã Pha Chế:</h4>
      <h4 className="mt-4">Tổng Số Đồ Uống Đã Pha: {brewedDrinks.length}</h4>
      {brewedDrinks.length === 0 ? (
        <p className="text-muted">Chưa có đồ uống nào được pha chế.</p>
      ) : (
        <div className="row">
          {Object.entries(groupedDrinks).map(([drink, count], index) => (
            <div className="col-lg-4" key={index}>
              <CardItem card={drink} count={count} imageUrl={getImageUrl(drink)} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default BrewedDrinks;
