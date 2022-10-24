import { Link } from "react-router-dom";

interface Props {
  id: string
  gameName: string,
  boxart: string
}

export default function GameListItemComponent(props:Props) {

      return (
        <tr>
          <td>{props.gameName}</td>
          <td><img src={props.boxart} alt="" className="small-image"/></td>
          <td><Link to={`/games/news/${props.id}`}><button type="button" className="btn btn-secondary">News</button></Link></td>
          <td><Link to={`/reviews/${props.id}`}><button type="button" className="btn btn-secondary">Review</button></Link></td>
        </tr>
      )
      
}