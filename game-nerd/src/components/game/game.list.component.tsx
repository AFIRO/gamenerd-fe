import  { useState } from "react"
import GAME_DATA from "../../api/mock-games"
import GameListItemComponent from "./game.list.item.component"


export default function GameListComponent() {

  const [games, setGames] = useState(GAME_DATA)

  return (
    <div>   <h1 className="text-light">Overzicht van alle games</h1>
      <div className="row justify-content-center p-4">
        <div className="col-auto">
          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <td>Name</td>
              <td>Boxart</td>
              <td>News</td>
              <td>Review</td>
            </thead>
            {games.map(game => <GameListItemComponent {...game} ></GameListItemComponent>)}
          </table>
        </div>
      </div>
    </div>
  )
}