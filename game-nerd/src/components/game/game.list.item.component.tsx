import { Link } from "react-router-dom";
import { Game } from "../../api/game/models/game.model";
import { useSession } from "../../contexts/AuthProvider";

export default function GameListItemComponent(props: Game) {
  const {hasRoles}: { isAuthed: boolean, hasRoles: string[] } = useSession();

      return (
        <tr className="align-middle">
          <td>{props.name}</td>
          <td><img src={props.boxart} alt="" className="small-image"/></td>
          <td><Link to={`/news/games/${props.id}`}><button type="button" className="btn btn-secondary">News</button></Link></td>
          <td><Link to={`/reviews/${props.id}`}><button type="button" className="btn btn-secondary">Review</button></Link></td>
          {hasRoles.includes("ADMIN")? <td><Link to={`/games/delete/${props.id}`}><button type="button" className="btn btn-danger">DELETE</button></Link></td>: null}
        </tr>
      )
      
}