// src/components/BrewedDrinks.js
import React from 'react';
import { recipes } from '../data/drinksData';

function BrewedDrinks({ brewedDrinks }) {
  const getImageUrl = (drinkName) => {
    return recipes[drinkName]?.imageUrl || '/images/placeholder.png';
  };

  const groupedDrinks = brewedDrinks.reduce((acc, drink) => {
    acc[drink] = (acc[drink] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <h4 className="mt-4">Đồ Uống Đã Pha Chế:</h4>
      {brewedDrinks.length === 0 ? (
        <p className="text-muted">Chưa có đồ uống nào được pha chế.</p>
      ) : (
        <div className="row">
          {Object.entries(groupedDrinks).map(([drink, count], index) => (
            <div className="col-md-2" key={index}>
              <div className="card mb-3">
                <div className="card-body">
                  <h6 className="card-title">
                    {drink}
                    <span className="badge bg-primary ms-2">{count}</span>
                  </h6>
                  <img 
                    src={getImageUrl(drink)} 
                    className="card-img-top" 
                    alt={drink} 
                    style={{ width: '90px', height: '90px', objectFit: 'cover' }} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <h4 className="mt-4">Tổng Số Đồ Uống Đã Pha: {brewedDrinks.length}</h4>
    </>
  );
}

export default BrewedDrinks;