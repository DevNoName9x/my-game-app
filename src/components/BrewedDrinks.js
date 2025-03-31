import React from "react";

function BrewedDrinks({ brewedDrinks }) {
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
                  <p className="card-text">Successfully brewed!</p>
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
