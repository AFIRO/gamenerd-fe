import  { useEffect, useState } from "react"
import { Review } from "../../api/review/model/review.model"
import ReviewListItemComponent from "./review.list.item.component"
import * as reviewService from '../../api/review/review.service';
import Loader from "../navigation/loading";
import ErrorMessage from "../navigation/error";

export default function ReviewListComponent() {

  const [reviews, setReviews] = useState<Review[]>([])
  const [error, setError] = useState<Error>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await reviewService.getAll();
        setReviews(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      };
    }
    fetchReviews();
  }, [],);

  return (
    <div>
    <Loader loading={loading} />
    <ErrorMessage error={error} />
    {!loading && !error ?
    <div>   <h1 className="text-light">Overzicht van alle reviews</h1>
      <div className="row justify-content-center p-4">
        <div className="col-6">
          <table className="table table-bordered table-striped table-dark">
            <thead>
            <tr>
              <td>Game</td>
              <td>Schrijver</td>
              <td>Korte inhoud</td>
              <td>Score</td>
              <td></td>
              </tr>
            </thead>
            <tbody>
            {reviews.map(review => <ReviewListItemComponent key={review.id} {...review}></ReviewListItemComponent>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
     : null}
     </div>
  )
}