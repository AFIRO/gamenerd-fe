import { Link } from "react-router-dom";
import { Review } from "../../api/review/model/review.model";

export default function ReviewListItemComponent(props: Review) {

  return (
      <tr>
        <td>{props.game.name}</td>
        <td>{props.writer.name}</td>
        <td>{props.content.slice(0, 15).concat("...")}</td>
        <td>{props.score}</td>
        <td><Link to={`/reviews/${props.id}`}><button type="button" className="btn btn-secondary">Link</button></Link></td>
      </tr>
  )

}