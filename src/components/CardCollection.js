// src/components/CardCollection.js
import React, { useState, useEffect } from "react";
import IngredientList from "./IngredientList";
import BrewableDrinks from "./BrewableDrinks";
import BrewedDrinks from "./BrewedDrinks";
import { cardTypes, recipes } from "../data/drinksData";

function CardCollection() {
  const [collectedCards, setCollectedCards] = useState([]);
  const [brewedDrinks, setBrewedDrinks] = useState([]);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);

  // Hàm chọn ngẫu nhiên tối đa 3 công thức chưa dùng
  const getRandomUnusedRecipes = (usedRecipes) => {
    const recipeEntries = Object.entries(recipes);
    const unusedRecipes = recipeEntries.filter(([name]) => !usedRecipes.includes(name));
    const shuffled = [...unusedRecipes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(3, unusedRecipes.length));
  };

  // Khởi tạo 3 công thức ngẫu nhiên khi component mount
  useEffect(() => {
    setDisplayedRecipes(getRandomUnusedRecipes(brewedDrinks));
  }, []);

  const collectCards = () => {
    const newCards = [];
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * cardTypes.length);
      newCards.push(cardTypes[randomIndex].name);
    }
    setCollectedCards([...collectedCards, ...newCards]);
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

      // Thay thế công thức đã pha bằng một công thức chưa dùng
      const usedRecipes = [...newBrewedDrinks, ...displayedRecipes.map(([name]) => name).filter((name) => name !== drinkName)];
      const recipeEntries = Object.entries(recipes);
      const availableRecipes = recipeEntries.filter(([name]) => !usedRecipes.includes(name));

      const newDisplayedRecipes = [...displayedRecipes];
      if (availableRecipes.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableRecipes.length);
        newDisplayedRecipes[index] = availableRecipes[randomIndex];
      } else {
        newDisplayedRecipes.splice(index, 1); // Xóa công thức nếu không còn công thức khả dụng
      }
      setDisplayedRecipes(newDisplayedRecipes);
    }
  };

  return (
    <div className="container-fluid my-4">
      <div className="card my-4">
        <div className="card-body">
          <div className="mb-4">
            <button className="btn btn-primary me-2" onClick={collectCards}>
              Thu Thập Thẻ
            </button>
            <button className="btn btn-secondary" onClick={sortDrinks}>
              Sắp Xếp Theo Tên
            </button>
          </div>
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
