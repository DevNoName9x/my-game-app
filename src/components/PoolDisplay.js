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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", // Cho phép xuống dòng
            overflowY: "auto", // Cuộn dọc
            maxHeight: "100px", // Giới hạn chiều cao để hiển thị 2 dòng
            padding: "10px",
            border: "1px solid #ddd", // Viền để rõ khu vực
            borderRadius: "4px",
          }}
        >
          {Object.entries(ingredientGrouped).map(([card, count]) => (
            <div
              key={card}
              style={{
                flex: "0 0 25%", // Mỗi ô chiếm 25% (4 ô trên 1 dòng)
                minWidth: "150px", // Chiều rộng tối thiểu để nội dung rõ ràng
                marginBottom: "10px", // Khoảng cách giữa các dòng
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
