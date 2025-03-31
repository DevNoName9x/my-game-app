// src/components/IngredientList.js
import React from 'react';
import CardItem from './CardItem';
import { cardTypes } from '../data/drinksData';

function IngredientList({ collectedCards }) {
  const getImageUrl = (cardName) => {
    const card = cardTypes.find(item => item.name === cardName);
    return card ? card.imageUrl : '';
  };

  const groupedCards = collectedCards.reduce((acc, card) => {
    acc[card] = (acc[card] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h4>Nguyên Liệu:</h4>
      {collectedCards.length === 0 ? (
        <p className="text-muted">Chưa có thẻ nào được thu thập.</p>
      ) : (
        <div className="row">
          {Object.entries(groupedCards).map(([card, count], index) => (
            <div className="col-md-2" key={index}>
              <CardItem 
                card={
                  <span>
                    {card} <span className="badge bg-primary ms-2">{count}</span>
                  </span>
                } 
                imageUrl={getImageUrl(card)} 
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default IngredientList;