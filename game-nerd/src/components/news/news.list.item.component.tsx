import { Link } from "react-router-dom";

interface Props {
  id: string,
  gameName: string,
  content: string,
  writer: string
}

export default function NewsListItemComponent(props: Props) {

  return (
      <tr>
        <td>{props.gameName}</td>
        <td>{props.writer}</td>
        <td>{props.content.slice(0, 15).concat("...")}</td>
        <td><Link to={`/news/${props.id}`}><button type="button" className="btn btn-secondary">Link</button></Link></td>
      </tr>
  )

}