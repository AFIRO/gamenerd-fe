import  { useState } from "react"
import REVIEW_DATA from "../../api/mock-reviews"
import ReviewListItemComponent from "./news.list.item.component"

export default function GameListComponent() {

  const [reviews, setReviews] = useState(REVIEW_DATA)

  return (
    <div>   <h1 className="text-light">Overzicht van alle news</h1>
      <div className="row justify-content-center p-4">
        <div className="col-auto">
          <table className="table table-bordered table-striped table-dark">
            <thead>
              <td>Game</td>
              <td>Schrijver</td>
              <td>Korte inhoud</td>
              <td>Score</td>
              <td></td>
            </thead>
            {reviews.map(review => <ReviewListItemComponent {...review}></ReviewListItemComponent>)}
          </table>
        </div>
      </div>
    </div>
  )
}