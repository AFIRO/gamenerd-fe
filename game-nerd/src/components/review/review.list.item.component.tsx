import { Link } from "react-router-dom";
import { Review } from "../../api/review/model/review.model";
import { useSession } from "../../contexts/AuthProvider";

export default function ReviewListItemComponent(props: Review) {
  const {hasRoles}: { hasRoles: string[] } = useSession();

  return (
      <tr>
        <td>{props.game.name}</td>
        <td>{props.writer.name}</td>
        <td>{props.content.slice(0, 15).concat("...")}</td>
        <td>{props.score}</td>
        <td><Link to={`/reviews/${props.id}`}><button type="button" className="btn btn-secondary">Link</button></Link></td>
        {hasRoles.includes("ADMIN")? <td><Link to={`/reviews/delete/${props.id}`}><button type="button" className="btn btn-danger">DELETE</button></Link></td>: null}
      </tr>
  )

}