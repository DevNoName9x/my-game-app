// src/components/BrewedDrinks.js
import React from 'react';
import { recipes } from '../data/drinksData';

function BrewedDrinks({ brewedDrinks }) {
  const getImageUrl = (drinkName) => {
    return recipes[drinkName]?.imageUrl || '/images/placeholder.png';
  };

  return (
    <>
      <h4 className="mt-4">Đồ Uống Đã Pha Chế:</h4>
      {brewedDrinks.length === 0 ? (
        <p className="text-muted">No drinks brewed yet.</p>
      ) : (
        <div className="row">
          {brewedDrinks.map((drink, index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{drink}</h5>
                  <img src={getImageUrl(drink)} className="card-img-top" alt={drink} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default BrewedDrinks;