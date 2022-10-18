import React from 'react';
import './App.css';
import { GameComponent } from './components/game';
import GAME_DATA from './api/mock-data';
import TODO_DATA from './api/mock-doto';
import {ToDoItem} from './components/ToDoItem';

function App() {
  
  return (
    <div className="App">
      {GAME_DATA.map(game => <GameComponent  gameName={game.gameName} boxart={game.boxart}></GameComponent>)}

      {TODO_DATA.map(todo => <ToDoItem {...todo}></ToDoItem>)}
      
    </div>
  );
}

export default App;
