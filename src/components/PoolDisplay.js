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

  // Tính số công thức còn lại trong pool
  // Nếu displayedRecipes là null, coi như không có công thức đang hiển thị
  const displayedCount = displayedRecipes && displayedRecipes.length > 0 ? displayedRecipes.length : 0;
  const recipeTotal = recipePool.length - brewedDrinks.length - displayedCount;

  return (
    <div className="row mb-4">
      {/* Pool Thẻ Nguyên Liệu - col-9 */}
      <div className="col-9">
        <h5>Pool Thẻ Nguyên Liệu: {ingredientTotal} thẻ</h5>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            overflowY: "auto",
            maxHeight: "100px",
            padding: "10px",
           
          }}
        >
          {Object.entries(ingredientGrouped).map(([card, count]) => (
            <div
              key={card}
              style={{
                flex: "0 0 25%",
                minWidth: "150px",
                marginBottom: "10px",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              <p style={{ margin: "0" }}>
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