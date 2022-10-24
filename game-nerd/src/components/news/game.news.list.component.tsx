import { useParams } from "react-router-dom"

export default function GameNewsComponent() {
   const params = useParams();
  return (
    <div className="text-light">
      <br />
      <h1>News for game with id: {params.id}</h1>
      <p>
        Hier moet nieuws komen per game.
      </p>
    </div>
  )

}