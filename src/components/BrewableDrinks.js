import React, { useMemo } from "react";

function BrewableDrinks({
  recipes,
  collectedCards,
  brewDrink,
  recipePool,
  brewedDrinks,
  displayedRecipes,
  setDisplayedRecipes,
}) {
  const canBrew = (recipeIngredients) => {
    return recipeIngredients.every((ingredient) =>
      collectedCards.includes(ingredient)
    );
  };

  // Nếu displayedRecipes là null hoặc rỗng, chọn ngẫu nhiên 3 công thức ban đầu
  const initialRecipes = useMemo(() => {
    if (!displayedRecipes || displayedRecipes.length === 0) {
      const unusedRecipes = recipePool.filter(
        ([name]) => !brewedDrinks.includes(name)
      );
      const shuffled = [...unusedRecipes].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, Math.min(3, unusedRecipes.length));
    }
    return displayedRecipes;
  }, [recipePool, brewedDrinks, displayedRecipes]);

  // Hàm thay thế công thức tại vị trí đã pha chế
  const replaceRecipeAtIndex = (index, newBrewedDrinks) => {
    const unusedRecipes = recipePool.filter(
      ([name]) =>
        !newBrewedDrinks.includes(name) &&
        !displayedRecipes.some(([dName]) => dName === name)
    );
    if (unusedRecipes.length > 0) {
      const shuffled = [...unusedRecipes].sort(() => Math.random() - 0.5);
      const newRecipe = shuffled[0]; // Lấy công thức ngẫu nhiên đầu tiên
      const newDisplayedRecipes = [...displayedRecipes];
      newDisplayedRecipes[index] = newRecipe; // Thay thế tại vị trí index
      setDisplayedRecipes(newDisplayedRecipes);
    } else {
      // Nếu không còn công thức nào, xóa công thức tại vị trí đó
      const newDisplayedRecipes = [...displayedRecipes];
      newDisplayedRecipes.splice(index, 1);
      setDisplayedRecipes(newDisplayedRecipes);
    }
  };

  return (
    <>
      <h4 style={{ height: "33px" }}>Đồ Uống Có Thể Pha Chế:</h4>
      {initialRecipes.length === 0 ? (
        <p className="text-muted mt-4">Không còn công thức nào để hiển thị.</p>
      ) : (
        <div className="row">
          {initialRecipes.map(
            ([drinkName, { ingredients, imageUrl }], index) => {
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
                        alt={drinkName}
                      />
                      <h6 className="card-title" style={{ height: "40px" }}>
                        {drinkName}
                      </h6>
                      <p className="card-text" style={{ height: "120px" }}>
                        {ingredients.map((ingredient, idx) => (
                          <span key={idx}>
                            {ingredient}{" "}
                            {collectedCards.includes(ingredient) && (
                              <span className="text-success">✔</span>
                            )}
                            <br />
                          </span>
                        ))}
                      </p>
                      <button
                        className={`btn ${
                          canMake ? "btn-success" : "btn-secondary"
                        }`}
                        onClick={() =>
                          brewDrink(
                            drinkName,
                            ingredients,
                            index,
                            replaceRecipeAtIndex
                          )
                        }
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
