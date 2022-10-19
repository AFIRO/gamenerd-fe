import React from 'react';
import './App.css';
import GameCreateComponentForm from './components/game/game.create.form';
import GameListComponent from './components/game/game.list';
import NavigationBar from './components/navigation/navbar';

function App() {
  
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <GameListComponent></GameListComponent>
      <GameCreateComponentForm></GameCreateComponentForm>
      
    </div>
  );
}

export default App;
