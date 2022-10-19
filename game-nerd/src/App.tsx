import React from 'react';
import './App.css';
import GameCreateComponentForm from './components/game/game.create.form';
import GameListComponent from './components/game/game.list';

function App() {
  
  return (
    <div className="App">

      <GameListComponent></GameListComponent>
      <GameCreateComponentForm></GameCreateComponentForm>
      
    </div>
  );
}

export default App;
