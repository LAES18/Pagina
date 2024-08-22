import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GameCard from './components/GameCard';
import games from './data/games';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          {games.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
