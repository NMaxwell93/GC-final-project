import React from 'react';
import './App.css';
import Game from './components/Game';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Game />
    </div>
  );
}

export default App;
