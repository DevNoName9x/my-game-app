// src/components/BrewableDrinks.js
import React from "react";

function BrewableDrinks({ recipes, collectedCards, brewDrink }) {
  const canBrew = (recipeIngredients) => {
    return recipeIngredients.every((ingredient) => collectedCards.includes(ingredient));
  };

  return (
    <>
      <h4>Đồ Uống Có Thể Pha Chế:</h4>
      <div className="row">
        {Object.entries(recipes).map(([drinkName, { ingredients, imageUrl }]) => {
          const canMake = canBrew(ingredients);
          return (
            <div className="col-md-3" key={drinkName}>
              <div className={`card mb-3 ${canMake ? "border-success" : ""}`}>
                <div className="card-body">
                  <h5 className="card-title">{drinkName}</h5>
                  <img src={imageUrl} className="card-img-top" alt={drinkName} />
                  <p className="card-text">Cần: {ingredients.join(", ")}</p>
                  <button
                    className={`btn ${canMake ? "btn-success" : "btn-secondary"}`}
                    onClick={() => brewDrink(drinkName, ingredients)}
                    disabled={!canMake}
                  >
                    Pha Chế
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BrewableDrinks;
