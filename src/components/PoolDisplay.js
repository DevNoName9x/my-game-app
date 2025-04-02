// src/components/PoolDisplay.js
import React from "react";

function PoolDisplay({ ingredientPool, recipePool, brewedDrinks, displayedRecipes }) {
  // Tính số lượng thẻ trong ingredientPool
  const getIngredientPoolStats = () => {
    const total = ingredientPool.length;
    const grouped = ingredientPool.reduce((acc, card) => {
      acc[card] = (acc[card] || 0) + 1;
      return acc;
    }, {});
    return { total, grouped };
  };

  const { total: ingredientTotal, grouped: ingredientGrouped } = getIngredientPoolStats();
  const recipeTotal = recipePool.length - brewedDrinks.length - displayedRecipes.length;

  return (
    <div className="row mb-4">
      {/* Pool Thẻ Nguyên Liệu - col-9 */}
      <div className="col-9">
        <h5>Pool Thẻ Nguyên Liệu: {ingredientTotal} thẻ</h5>
        <div className="row">
          {Object.entries(ingredientGrouped).map(([card, count]) => (
            <div className="col-3" key={card}>
              <p>
                {card}: {count}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Pool Công Thức - col-3 */}
      <div className="col-3">
        <h5>Pool Công Thức: {recipeTotal} công thức</h5>
      </div>
    </div>
  );
}

export default PoolDisplay;
