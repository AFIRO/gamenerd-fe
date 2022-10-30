import { Link } from "react-router-dom";
import { Game } from "../../api/game/models/game.model";

export default function GameListItemComponent(props: Game) {

      return (
        <tr className="align-middle">
          <td>{props.name}</td>
          <td><img src={props.boxart} alt="" className="small-image"/></td>
          <td><Link to={`/games/news/${props.id}`}><button type="button" className="btn btn-secondary">News</button></Link></td>
          <td><Link to={`/reviews/${props.id}`}><button type="button" className="btn btn-secondary">Review</button></Link></td>
        </tr>
      )
      
}