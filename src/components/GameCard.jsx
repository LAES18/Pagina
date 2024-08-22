import React from 'react';

const GameCard = ({ game }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={game.image} className="card-img-top" alt={game.title} />
        <div className="card-body">
          <h5 className="card-title">{game.title}</h5>
          <p className="card-text">{game.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
