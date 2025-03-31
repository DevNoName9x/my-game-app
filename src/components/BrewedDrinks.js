// src/components/BrewedDrinks.js
import React from "react";
import { recipes } from "../data/drinksData";

function BrewedDrinks({ brewedDrinks }) {
  const getImageUrl = (drinkName) => {
    return recipes[drinkName]?.imageUrl || "/images/placeholder.png";
  };

  // Nhóm các đồ uống và đếm số lượng
  const groupedDrinks = brewedDrinks.reduce((acc, drink) => {
    acc[drink] = (acc[drink] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <h4 className="mt-4">Đồ Uống Đã Pha Chế:</h4>
      {brewedDrinks.length === 0 ? (
        <p className="text-muted">No drinks brewed yet.</p>
      ) : (
        <div className="row">
          {Object.entries(groupedDrinks).map(([drink, count], index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">
                    {drink}
                    <span className="badge bg-primary ms-2">{count}</span>
                  </h5>
                  <img src={getImageUrl(drink)} className="card-img-top" alt={drink} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default BrewedDrinks;
