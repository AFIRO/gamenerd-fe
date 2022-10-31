import { Link } from "react-router-dom";
import { News } from "../../api/news/model/news.model";
import { useSession } from "../../contexts/AuthProvider";

export default function NewsListItemComponent(props: News) {
  const {hasRoles}: { hasRoles: string[] } = useSession();

  return (
      <tr>
        <td>{props.game.name}</td>
        <td>{props.writer.name}</td>
        <td>{props.content.slice(0, 15).concat("...")}</td>
        <td><Link to={`/news/${props.id}`}><button type="button" className="btn btn-secondary">Link</button></Link></td>
        {hasRoles.includes("WRITER")? <td><Link to={`/news/update/${props.id}`}><button type="button" className="btn btn-warning">EDIT</button></Link></td>: null}
        {hasRoles.includes("ADMIN")? <td><Link to={`/news/delete/${props.id}`}><button type="button" className="btn btn-danger">DELETE</button></Link></td>: null}
      </tr>
  )

}