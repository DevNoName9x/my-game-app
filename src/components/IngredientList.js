// src/components/IngredientList.js
import React from "react";
import CardItem from "./CardItem";
import { useResponsiveHeight } from "../utils/screenUtils";

function IngredientList({ collectedCards }) {
  // Sử dụng hook với tỷ lệ 0.5 (50% chiều cao màn hình)
  const maxHeight = useResponsiveHeight(React, 0.5);

  // Nhóm các thẻ theo tên và đếm số lượng
  const groupedCard = [];

  collectedCards.forEach((item) => {
    const existing = groupedCard.find(
      (x) => x.name === item.name && x.imageUrl === item.imageUrl
    );
    if (existing) {
      existing.count++;
    } else {
      groupedCard.push({ ...item, count: 1 });
    }
  });

  const cardsList = Object.entries(groupedCard);
  return (
    <div>
      <h4 style={{ height: "33px" }}>
        Thẻ Nguyên Liệu:{" "}
        <span className="badge bg-success ms-2">{collectedCards.length} </span>
      </h4>
      {collectedCards.length === 0 ? (
        <p className="text-muted">Chưa có thẻ nào được thu thập.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            overflowY: "auto",
            maxHeight: maxHeight,
          }}
        >
          {cardsList.map(([index, card]) => {
            // Tách name và imageUrl từ key

            return (
              <div
                key={index}
                style={{
                  flex: "0 0 32%", // Luôn 3 ô/dòng
                  minWidth: "100px",
                  margin: "2px",
                }}
              >
                <CardItem
                  cardName={card.name}
                  count={card.count}
                  imageUrl={card.imageUrl}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default IngredientList;
