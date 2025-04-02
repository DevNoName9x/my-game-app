// src/components/CardCollection.js
import React, { useState, useEffect } from "react";
import IngredientList from "./IngredientList";
import BrewableDrinks from "./BrewableDrinks";
import BrewedDrinks from "./BrewedDrinks";
import PoolDisplay from "./PoolDisplay";
import Controls from "./Controls";
import { cardTypes, recipes } from "../data/drinksData";

function CardCollection() {
  const [collectedCards, setCollectedCards] = useState([]);
  const [brewedDrinks, setBrewedDrinks] = useState([]);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  const [ingredientPool, setIngredientPool] = useState([]);
  const [recipePool, setRecipePool] = useState([]);

  // Khởi tạo pool nguyên liệu dựa trên quantity của cardTypes
  useEffect(() => {
    const initialPool = cardTypes.reduce((acc, card) => {
      return acc.concat(Array(card.quantity).fill(card.name));
    }, []);
    setIngredientPool(initialPool);
  }, []);

  // Khởi tạo pool công thức và 3 công thức ban đầu
  useEffect(() => {
    const initialRecipePool = Object.entries(recipes);
    setRecipePool(initialRecipePool);
    setDisplayedRecipes(getSortedUnusedRecipes(initialRecipePool, brewedDrinks));
  }, []);

  // Hàm lấy tối đa 3 công thức chưa dùng, sắp xếp theo tên
  const getSortedUnusedRecipes = (pool, usedRecipes) => {
    const unusedRecipes = pool.filter(([name]) => !usedRecipes.includes(name));
    const sorted = unusedRecipes.sort((a, b) => a[0].localeCompare(b[0], "vi"));
    return sorted.slice(0, Math.min(3, unusedRecipes.length));
  };

  const collectCards = () => {
    if (ingredientPool.length < 2) {
      alert("Không còn đủ thẻ nguyên liệu để thu thập!");
      return;
    }

    const newCards = [];
    let newPool = [...ingredientPool];

    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * newPool.length);
      newCards.push(newPool[randomIndex]);
      newPool.splice(randomIndex, 1);
    }

    setCollectedCards([...collectedCards, ...newCards]);
    setIngredientPool(newPool);
  };

  const sortDrinks = () => {
    const sortedDrinks = [...brewedDrinks].sort((a, b) => a.localeCompare(b, "vi"));
    setBrewedDrinks(sortedDrinks);
    const sortedCards = [...collectedCards].sort((a, b) => a.localeCompare(b, "vi"));
    setCollectedCards(sortedCards);
  };

  const brewDrink = (drinkName, ingredients, index) => {
    const canBrew = ingredients.every((ingredient) => collectedCards.includes(ingredient));
    if (canBrew) {
      let newCards = [...collectedCards];
      ingredients.forEach((ingredient) => {
        const idx = newCards.indexOf(ingredient);
        if (idx !== -1) {
          newCards.splice(idx, 1);
        }
      });
      setCollectedCards(newCards);
      const newBrewedDrinks = [...brewedDrinks, drinkName];
      setBrewedDrinks(newBrewedDrinks);
      alert(`Bạn đã pha chế thành công ${drinkName}!`);

      const usedRecipes = [...newBrewedDrinks, ...displayedRecipes.map(([name]) => name).filter((name) => name !== drinkName)];
      const newDisplayedRecipes = getSortedUnusedRecipes(recipePool, usedRecipes);
      setDisplayedRecipes(newDisplayedRecipes);
    }
  };

  return (
    <div className="container-fluid my-4">
      <div className="card my-4">
        <div className="card-body">
          <PoolDisplay
            ingredientPool={ingredientPool}
            recipePool={recipePool}
            brewedDrinks={brewedDrinks}
            displayedRecipes={displayedRecipes}
          />
          <Controls onCollectCards={collectCards} onSortDrinks={sortDrinks} />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-4">
              <IngredientList collectedCards={collectedCards} />
            </div>
            <div className="col-lg-4">
              <BrewableDrinks
                recipes={recipes}
                collectedCards={collectedCards}
                brewDrink={brewDrink}
                displayedRecipes={displayedRecipes}
                setDisplayedRecipes={setDisplayedRecipes}
              />
            </div>
            <div className="col-lg-4">
              <BrewedDrinks brewedDrinks={brewedDrinks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCollection;
