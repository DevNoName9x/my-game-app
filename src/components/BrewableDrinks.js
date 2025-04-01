// src/components/BrewableDrinks.js
import React from "react";

function BrewableDrinks({ recipes, collectedCards, brewDrink }) {
  const canBrew = (recipeIngredients) => {
    return recipeIngredients.every((ingredient) => collectedCards.includes(ingredient));
  };

  return (
    <>
      <h4 className="mt-4">Đồ Uống Có Thể Pha Chế:</h4>
      <h4 className="mt-4">
        <br></br>
      </h4>
      <div className="row">
        {Object.entries(recipes).map(([drinkName, { ingredients, imageUrl }]) => {
          const canMake = canBrew(ingredients);
          return (
            <div className="col-md-4" key={drinkName}>
              <div className={`card mb-3 ${canMake ? "border-success" : ""}`}>
                <img src={imageUrl} className={`card-img-top border-bottom ${canMake ? "border-success" : ""}`} alt={drinkName} />
                <div className="card-body">
                  <h6 className="card-title" style={{ height: "40px" }}>
                    {drinkName}
                  </h6>
                  <p className="card-text" style={{ height: "120px" }}>
                    Cần:
                    <br />
                    {ingredients.map((ingredient, index) => (
                      <span key={index}>
                        {ingredient}
                        <br />
                      </span>
                    ))}
                  </p>
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
