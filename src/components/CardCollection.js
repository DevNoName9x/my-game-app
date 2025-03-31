// src/components/CardCollection.js
import React, { useState } from "react";
import IngredientList from "./IngredientList";
import BrewableDrinks from "./BrewableDrinks";
import BrewedDrinks from "./BrewedDrinks";
import { cardTypes, recipes } from "../data/drinksData";

function CardCollection() {
  const [collectedCards, setCollectedCards] = useState([]);
  const [brewedDrinks, setBrewedDrinks] = useState([]);

  const collectCards = () => {
    const newCards = [];
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * cardTypes.length);
      newCards.push(cardTypes[randomIndex].name); // Lấy name từ object
    }
    setCollectedCards([...collectedCards, ...newCards]);
  };

  const sortDrinks = () => {
    const sortedDrinks = [...brewedDrinks].sort((a, b) => a.localeCompare(b, "vi"));
    setBrewedDrinks(sortedDrinks);
    const sortedCard = [...collectedCards].sort((a, b) => a.localeCompare(b, "vi"));
    setCollectedCards(sortedCard);
  };

  const brewDrink = (drinkName, ingredients) => {
    const canBrew = ingredients.every((ingredient) => collectedCards.includes(ingredient));
    if (canBrew) {
      let newCards = [...collectedCards];
      ingredients.forEach((ingredient) => {
        const index = newCards.indexOf(ingredient);
        if (index !== -1) {
          newCards.splice(index, 1);
        }
      });
      setCollectedCards(newCards);
      setBrewedDrinks([...brewedDrinks, drinkName]);
      alert(`Bạn đã pha chế thành công ${drinkName}!`);
    }
  };

  return (
    <div className="container-fluid my-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Your Card Collection</h2>

          <div className="mb-4">
            <button className="btn btn-primary me-2" onClick={collectCards}>
              Collect Cards
            </button>
            <button className="btn btn-secondary" onClick={sortDrinks}>
              Sort by Name
            </button>
          </div>

          <div className="mb-4">
            <h4>Total Cards: {collectedCards.length}</h4>
            <h4>Total Drinks Brewed: {brewedDrinks.length}</h4>
          </div>

          <div className="row">
            <IngredientList collectedCards={collectedCards} />
            <div className="col-md-6">
              <BrewableDrinks recipes={recipes} collectedCards={collectedCards} brewDrink={brewDrink} />
              <BrewedDrinks brewedDrinks={brewedDrinks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCollection;
