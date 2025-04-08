import React, { useState, useCallback, useMemo } from "react";
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

  // Khởi tạo recipe pool và displayed recipes sử dụng useMemo để tránh tính toán lại
  const { initialDisplayedRecipes, initialRecipePool } = useMemo(() => {
    const allRecipes = Object.entries(recipes);
    const shuffled = [...allRecipes].sort(() => Math.random() - 0.5);
    const randomRecipes = shuffled.slice(0, 3);
    
    const remainingRecipes = allRecipes.filter(
      ([name]) => !randomRecipes.some(([recipeName]) => recipeName === name)
    );
    
    return {
      initialDisplayedRecipes: randomRecipes,
      initialRecipePool: remainingRecipes
    };
  }, []);

  const [displayedRecipes, setDisplayedRecipes] = useState(initialDisplayedRecipes);
  const [recipePool, setRecipePool] = useState(initialRecipePool);

  /**
   * Hàm thu thập thẻ ngẫu nhiên từ ingredientPool
   * Lấy ngẫu nhiên 2 thẻ từ tổng số thẻ trong ingredientPool
   * Sau khi lấy, giảm số lượng của các thẻ đã lấy trong ingredientPool
   */
  const collectCards = useCallback(() => {
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
    setCollectedCards(prevCards => [...prevCards, ...newCards]);
    setIngredientPool(newPool);
  }, [ingredientPool]);

  const sortDrinks = useCallback(() => {
    setBrewedDrinks(prevDrinks => 
      [...prevDrinks].sort((a, b) => a.name.localeCompare(b.name, "vi"))
    );
    
    setCollectedCards(prevCards => 
      [...prevCards].sort((a, b) => a.name.localeCompare(b.name, "vi"))
    );
  }, []);

  const brewDrink = useCallback((drinkName, ingredients) => {
    // Kiểm tra xem có đủ nguyên liệu không
    const hasAllIngredients = ingredients.every((ingredient) =>
      collectedCards.some((card) => card.name === ingredient)
    );
    
    if (!hasAllIngredients) {
      toast.error("Bạn không có đủ nguyên liệu để pha chế!");
      return;
    }

    // Tạo map đếm số lần cần loại bỏ
    const excludeCount = {};
    for (const name of ingredients) {
      excludeCount[name] = (excludeCount[name] || 0) + 1;
    }

    // Lọc ra các thẻ không được sử dụng trong công thức
    const remainingCards = collectedCards.filter(card => {
      if (excludeCount[card.name] && excludeCount[card.name] > 0) {
        excludeCount[card.name]--;
        return false; // Loại bỏ thẻ này
      }
      return true; // Giữ lại thẻ này
    });
    
    setCollectedCards(remainingCards);

    // Cập nhật danh sách công thức hiển thị
    const updatedDisplayedRecipes = displayedRecipes.filter(
      ([_, recipe]) => recipe.name !== drinkName
    );
    
    // Lấy công thức mới từ pool
    const shuffled = [...recipePool].sort(() => Math.random() - 0.5);
    const newRecipe = shuffled.slice(0, 1);
    
    // Cập nhật danh sách công thức hiển thị và pool
    const finalDisplayedRecipes = [...updatedDisplayedRecipes, ...newRecipe];
    setDisplayedRecipes(finalDisplayedRecipes);
    
    // Cập nhật recipe pool
    const updatedRecipePool = recipePool.filter(
      ([name]) => !newRecipe.some(([recipeName]) => recipeName === name)
    );
    setRecipePool(updatedRecipePool);

    // Thêm đồ uống đã pha chế vào danh sách
    const drink = recipes.find((recipe) => recipe.name === drinkName);
    setBrewedDrinks(prevDrinks => [...prevDrinks, drink]);

    toast.success(`Bạn đã pha chế thành công ${drinkName}!`);
  }, [collectedCards, displayedRecipes, recipePool]);

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
