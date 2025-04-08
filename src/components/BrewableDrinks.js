import React from "react";

function BrewableDrinks({ collectedCards, brewDrink, displayedRecipes }) {
  const collectedIngredients = collectedCards.map((c) => c.name);
  const canBrew = (recipeIngredients) => {
    return recipeIngredients.every((ingredient) =>
      collectedIngredients.includes(ingredient)
    );
  };

  return (
    <>
      <h4 style={{ height: "33px" }}>Đồ Uống Có Thể Pha Chế:</h4>
      {displayedRecipes.length === 0 ? (
        <p className="text-muted mt-4">Không còn công thức nào để hiển thị.</p>
      ) : (
        <div className="row">
          {displayedRecipes.map(
            ([index, { id, name, ingredients, imageUrl }]) => {
              const canMake = canBrew(ingredients);
              const validImageUrl =
                imageUrl && imageUrl.trim() !== ""
                  ? imageUrl
                  : "/images/placeholder.png";
              return (
                <div className="col-lg-4" key={index}>
                  <div
                    className={`card mb-3 ${canMake ? "border-success" : ""}`}
                  >
                    <div className="card-body">
                      <img
                        src={validImageUrl}
                        className={`card-img-top `}
                        alt={id}
                      />
                      <h6 className="card-title" style={{ height: "40px" }}>
                        {name}
                      </h6>
                      <p className="card-text" style={{ height: "120px" }}>
                        {ingredients.map((ingredient) => {
                          return (
                            <span key={ingredient}>
                              {ingredient}{" "}
                              {collectedIngredients.includes(ingredient) && (
                                <span className="text-success">✔</span>
                              )}
                              <br />
                            </span>
                          );
                        })}
                      </p>
                      <button
                        className={`btn ${
                          canMake ? "btn-success" : "btn-secondary"
                        }`}
                        onClick={() => {
                          brewDrink(name, ingredients);
                        }}
                        disabled={!canMake}
                      >
                        Pha Chế
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}
    </>
  );
}

export default BrewableDrinks;
