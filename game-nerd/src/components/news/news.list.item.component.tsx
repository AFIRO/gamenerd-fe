import { Link } from "react-router-dom";
import { News } from "../../api/news/model/news.model";

export default function NewsListItemComponent(props: News) {

  return (
      <tr>
        <td>{props.game.name}</td>
        <td>{props.writer.name}</td>
        <td>{props.content.slice(0, 15).concat("...")}</td>
        <td><Link to={`/news/${props.id}`}><button type="button" className="btn btn-secondary">Link</button></Link></td>
      </tr>
  )

}