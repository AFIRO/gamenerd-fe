import { useEffect, useState } from "react"
import GameListItemComponent from "./game.list.item.component"
import * as gameService from '../../api/game/game.service';
import Loader from '../navigation/loading';
import { Game } from "../../api/game/models/game.model";
import ErrorMessage from "../navigation/error";


export default function GameListComponent() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState<Error>(null);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await gameService.getAll();
        setGames(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      };
    }
    fetchGames();
  }, [],);



  return (
    <div>
      <Loader loading={loading} />
      <ErrorMessage error={error} />
      {!loading && !error ?
        <div>
          <h1 className="text-light">Overzicht van alle games</h1>
          <div className="row justify-content-center p-4">
            <div className="col-6">
              <table className="table table-bordered table-striped table-dark table-hover">
                <thead>
                  <tr>
                  <td>Name</td>
                  <td>Boxart</td>
                  <td>News</td>
                  <td>Review</td>
                  </tr>
                </thead>
                <tbody>
                  {games.map(game => <GameListItemComponent key={game.id} {...game} ></GameListItemComponent>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        : null}
    </div>
  )
}