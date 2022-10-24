import { Link } from "react-router-dom";

interface Props {
  id: string,
  gameName: string,
  content: string,
  writer: string,
  score: number
}

export default function ReviewListItemComponent(props: Props) {

  return (
      <tr>
        <td>{props.gameName}</td>
        <td>{props.writer}</td>
        <td>{props.content.slice(0, 15).concat("...")}</td>
        <td>{props.score}</td>
        <td><Link to={`/reviews/${props.id}`}><button type="button" className="btn btn-secondary">Link</button></Link></td>
      </tr>
  )

}