import React from "react";
import { truncateByWords } from "../utils/stringUtils";

function PoolDisplay({
  ingredientPool,
  recipePool,
}) {
 const getTotalIngredient = () => {
   return ingredientPool.reduce((acc, card) => acc + card.quantity, 0);
 }
 const getTotalRecipe = () => {
  return recipePool.length 
 }

  return (
    <div className="row mb-4">
      {/* Pool Thẻ Nguyên Liệu - col-9 */}
      <div className="col-8">
        <h5>Pool Thẻ Nguyên Liệu: {getTotalIngredient()} thẻ</h5>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            overflowY: "auto",
            maxHeight: "100px",
            padding: "10px",
          }}
        >
          {Object.entries(ingredientPool).map(([index,card]) => (
            <div
              key={index}
              style={{
                flex: "0 0 25%",
                minWidth: "150px",
                marginBottom: "10px",
                padding: "5px",
                // border: "1px solid #ccc",
                // borderRadius: "4px",
                textAlign: "center",
              }}
            >
              <p style={{ margin: "0" }}>{card.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Pool Công Thức - col-3 */}
      <div className="col-4">
        <h5>Pool Công Thức: {getTotalRecipe()} công thức</h5>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            overflowY: "auto",
            maxHeight: "100px",
            padding: "10px",
          }}
        >
          {recipePool.map(([index,recipe]) => (
            <div
              key={index}
              style={{
                flex: "0 0 33%",
                minWidth: "150px",
                marginBottom: "10px",
                padding: "5px",
                // border: "1px solid #ccc",
                // borderRadius: "4px",
                textAlign: "center",
              }}
            >
              <p style={{ margin: "0" }}>{ truncateByWords(recipe.name, 20)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PoolDisplay;
