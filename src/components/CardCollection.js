import React, { useState } from "react";
import IngredientList from "./IngredientList";
import BrewableDrinks from "./BrewableDrinks";
import BrewedDrinks from "./BrewedDrinks";
import PoolDisplay from "./PoolDisplay";
import Controls from "./Controls";
import { cardTypes, recipes } from "../data/drinksData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CardCollection() {
  const [collectedCards, setCollectedCards] = useState([]);
  const [brewedDrinks, setBrewedDrinks] = useState([]);
  const [ingredientPool, setIngredientPool] = useState(cardTypes);

  const initialRecipePool = Object.entries(recipes);

  // Xáo trộn danh sách initialRecipePool
  const shuffled = [...initialRecipePool].sort(() => Math.random() - 0.5);
  // Lấy 3 phần tử đầu tiên từ danh sách đã xáo trộn
  const randomRecipes = shuffled.slice(0, 3);
  const [displayedRecipes, setDisplayedRecipes] = useState(randomRecipes);

  // Tính danh sách số lượng công thức còn lại
  const remainingRecipes = initialRecipePool.filter(
    ([name]) => !randomRecipes.some(([recipeName]) => recipeName === name)
  );
  const [recipePool, setRecipePool] = useState(remainingRecipes);

  /**
   * Hàm thu thập thẻ ngẫu nhiên từ ingredientPool
   * Lấy ngẫu nhiên 2 thẻ từ tổng số thẻ trong ingredientPool
   * Sau khi lấy, giảm số lượng của các thẻ đã lấy trong ingredientPool
   */
  const collectCards = () => {
    // Tính tổng số lượng thẻ trong ingredientPool
    const total = ingredientPool.reduce((acc, card) => acc + card.quantity, 0);

    // Kiểm tra nếu không còn thẻ nào
    if (total === 0) {
      toast.error("Không còn đủ thẻ nguyên liệu để thu thập!");
      return;
    }

    // Tạo danh sách thẻ mới để thu thập
    const newCards = [];
    // Tạo bản sao của ingredientPool để không ảnh hưởng đến state gốc
    let newPool = [...ingredientPool];

    // Nếu chỉ còn 1 thẻ, lấy nốt thẻ đó
    if (newPool.length === 1) {
      newCards.push({ ...newPool[0] });
      newPool = []; // Xóa thẻ khỏi pool
    } else {
      // Lấy ngẫu nhiên 2 thẻ
      for (let i = 0; i < 2; i++) {
        // Tính tổng số lượng thẻ còn lại
        const remainingTotal = newPool.reduce(
          (acc, card) => acc + card.quantity,
          0
        );

        // Nếu không còn thẻ nào, thoát vòng lặp
        if (remainingTotal === 0) break;

        // Tạo số ngẫu nhiên từ 0 đến remainingTotal - 1
        const randomValue = Math.floor(Math.random() * remainingTotal);

        // Tìm thẻ tương ứng với số ngẫu nhiên
        let currentSum = 0;
        let selectedCard = null;
        let selectedIndex = -1;

        for (let j = 0; j < newPool.length; j++) {
          currentSum += newPool[j].quantity;
          if (randomValue < currentSum) {
            selectedCard = { ...newPool[j] };
            selectedIndex = j;
            break;
          }
        }

        // Nếu tìm thấy thẻ, thêm vào danh sách mới và giảm số lượng trong pool
        if (selectedCard && selectedIndex !== -1) {
          newCards.push(selectedCard);
          newPool[selectedIndex].quantity -= 1;

          // Nếu số lượng thẻ còn lại là 0, xóa thẻ đó khỏi pool
          if (newPool[selectedIndex].quantity === 0) {
            newPool.splice(selectedIndex, 1);
          }
        }
      }
    }

    // Cập nhật state
    setCollectedCards([...collectedCards, ...newCards]);
    setIngredientPool(newPool);
  };

  const sortDrinks = () => {
    const sortedDrinks = [...brewedDrinks].sort((a, b) =>
      a.name.localeCompare(b.name, "vi")
    );
    setBrewedDrinks(sortedDrinks);
    const sortedCards = [...collectedCards].sort((a, b) =>
      a.name.localeCompare(b.name, "vi")
    );
    setCollectedCards(sortedCards);
  };

  const brewDrink = (drinkName, ingredients) => {
    const canBrew = ingredients.every((ingredient) =>
      collectedCards.map((card) => card.name).includes(ingredient)
    );
    if (canBrew) {

      // Tạo map đếm số lần cần loại bỏ
      const excludeCount = {};
      for (const name of ingredients) {
        excludeCount[name] = (excludeCount[name] || 0) + 1;
      }

      const result = [];

      for (const card of collectedCards) {
        if (excludeCount[card.name]) {
          excludeCount[card.name]--;
          continue; // bỏ qua phần tử này
        }
        result.push(card);
      }
      setCollectedCards(result);

      // Loại bỏ thẻ có tên drinkName trong displayedRecipes
      let updatedDisplayedRecipes = displayedRecipes.filter(
        ([index, card]) => card.name !== drinkName
      );
      // Xáo trộn danh sách initialRecipePool
      const shuffled = [...recipePool].sort(() => Math.random() - 0.5);
      const randomRecipes = shuffled.slice(0, 1);
      // Thêm công thức mới vào danh sách
      updatedDisplayedRecipes = [...updatedDisplayedRecipes, ...randomRecipes];
      setDisplayedRecipes(updatedDisplayedRecipes);

      // Loại bỏ công thức đã pha chế
      const remainingRecipes = recipePool.filter(
        ([name]) => !randomRecipes.some(([recipeName]) => recipeName === name)
      );
      setRecipePool(remainingRecipes);

      // Thêm thẻ có tên drinkName vào brewedDrinks
      const drink = recipes.find((recipe) => recipe.name === drinkName);
      const newBrewedDrinks = [...brewedDrinks, drink];
      setBrewedDrinks(newBrewedDrinks);

      toast.success(`Bạn đã pha chế thành công ${drinkName}!`);

      // Gọi hàm thay thế công thức tại vị trí vừa pha chế
      // replaceRecipeCallback(index, newBrewedDrinks);
    }
  };

  return (
    <div className="container-fluid my-2">
      <div className="my-4">
        <PoolDisplay ingredientPool={ingredientPool} recipePool={recipePool} />
        <Controls onCollectCards={collectCards} onSortDrinks={sortDrinks} />
      </div>
      <hr />
      <div className="row">
        <div className="col-lg-4">
          <IngredientList collectedCards={collectedCards} />
        </div>
        <div className="col-lg-4">
          <BrewableDrinks
            collectedCards={collectedCards}
            brewDrink={brewDrink}
            recipePool={recipePool}
            displayedRecipes={displayedRecipes}
            setDisplayedRecipes={setDisplayedRecipes}
          />
        </div>
        <div className="col-lg-4">
          <BrewedDrinks brewedDrinks={brewedDrinks} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CardCollection;
