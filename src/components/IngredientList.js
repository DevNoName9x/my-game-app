import React from 'react';
import CardItem from './CardItem';

function IngredientList({ collectedCards }) {
  return (
    <div className="col-md-6">
      <h4>Nguyên Liệu:</h4>
      {collectedCards.length === 0 ? (
        <p className="text-muted">No cards collected yet.</p>
      ) : (
        <div className="row">
          {collectedCards.map((card, index) => (
            <div className="col-md-3" key={index}>
              <CardItem card={card} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default IngredientList;