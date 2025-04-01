// src/components/BrewableDrinks.js
import React from "react";

function BrewableDrinks({ recipes, collectedCards, brewDrink, displayedRecipes, setDisplayedRecipes }) {
  const canBrew = (recipeIngredients) => {
    return recipeIngredients.every((ingredient) => collectedCards.includes(ingredient));
  };

  return (
    <>
      <h4 className="mt-4">Đồ Uống Có Thể Pha Chế:</h4>
      <div className="row">
        {displayedRecipes.map(([drinkName, { ingredients, imageUrl }], index) => {
          const canMake = canBrew(ingredients);
          const validImageUrl = imageUrl && imageUrl.trim() !== "" ? imageUrl : "/images/placeholder.png";
          return (
            <div className="col-lg-4" key={index}>
              <div className={`card mb-3 ${canMake ? "border-success" : ""}`}>
                <img src={validImageUrl} className={`card-img-top border-bottom ${canMake ? "border-success" : ""}`} alt={drinkName} />
                <div className="card-body">
                  <h6 className="card-title" style={{ height: "40px" }}>
                    {drinkName}
                  </h6>
                  <p className="card-text" style={{ height: "120px" }}>
                    Cần:
                    <br />
                    {ingredients.map((ingredient, idx) => (
                      <span key={idx}>
                        {ingredient}
                        <br />
                      </span>
                    ))}
                  </p>
                  <button
                    className={`btn ${canMake ? "btn-success" : "btn-secondary"}`}
                    onClick={() => brewDrink(drinkName, ingredients, index)}
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
