// src/components/Controls.js
import React from "react";

function Controls({ onCollectCards, onSortDrinks }) {
  return (
    <div>
      <button className="btn btn-primary me-2" onClick={onCollectCards}>
        Thu Thập Thẻ
      </button>
      <button className="btn btn-secondary" onClick={onSortDrinks}>
        Sắp Xếp Theo Tên
      </button>
    </div>
  );
}

export default Controls;
