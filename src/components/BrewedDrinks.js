// src/components/BrewedDrinks.js
import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { useResponsiveHeight } from "../utils/screenUtils";
import { priceDisplay } from "../utils/numberUtils";

function BrewedDrinks({ brewedDrinks }) {
  const drinksList = Object.entries(brewedDrinks);
  // Sử dụng hook với tỷ lệ 0.5 (50% chiều cao màn hình)
  const maxHeight = useResponsiveHeight(React, 0.5);
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Sử dụng useEffect để tính lại tổng khi brewedDrinks thay đổi
  useEffect(() => {
    const calculateTotal = () => {
      // Lấy giá trị trong mảng [index, drink]
      const total = drinksList.reduce((acc, [_, drink]) => acc + (drink.price || 0), 0);
      setTotalPrice(total);
    };
    
    calculateTotal();
  }, [drinksList]);

  return (
    <div>
      <h4 style={{ marginBottom: "15px" }}>
        Đồ Uống Đã Pha Chế:{" "}
        <span className="badge bg-success ms-2"> {drinksList.length} </span>
        {totalPrice > 0 && (
          <div className="mt-2">
            Tổng số tiền kiếm được: <span className="badge bg-warning text-dark">{priceDisplay(totalPrice)}</span>
          </div>
        )}
      </h4>
      {drinksList.length === 0 ? (
        <p className="text-muted">Chưa có đồ uống nào được pha chế.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            overflowY: "auto",
            maxHeight: maxHeight,
          }}
        >
          {drinksList.map(([index, drink]) => (
            <div
              key={index}
              style={{
                flex: "0 0 32%", // Luôn 3 ô/dòng
                // minWidth: "100px",
                margin: "2px",
              }}
            >
              <CardItem cardName={drink.name} count={1} imageUrl={drink.imageUrl} price={drink.price} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BrewedDrinks;
