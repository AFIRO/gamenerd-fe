import { Link } from "react-router-dom";
import { Review } from "../../api/review/model/review.model";
import { User } from "../../api/user/model/user.model";
import { useSession } from "../../contexts/AuthProvider";

export default function ReviewListItemComponent(props: Review) {
  const {hasRoles, user}: { hasRoles: string[], user: User } = useSession();

  return (
      <tr>
        <td>{props.game.name}</td>
        <td>{props.writer.name}</td>
        <td>{props.content.slice(0, 15).concat("...")}</td>
        <td>{props.score}/10</td>
        <td><Link to={`/reviews/${props.id}`}><button type="button" className="btn btn-secondary">Link</button></Link></td>
        {hasRoles.includes("WRITER") ? props.writer.id === user.id? <td><Link to={`/reviews/update/${props.id}`}><button type="button" className="btn btn-warning">EDIT</button></Link></td>: <td></td>: null}
        {hasRoles.includes("ADMIN")? <td><Link to={`/reviews/delete/${props.id}`}><button type="button" className="btn btn-danger">DELETE</button></Link></td>: null}
      </tr>
  )

}