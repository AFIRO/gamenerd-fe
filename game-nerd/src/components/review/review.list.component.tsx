import  { useEffect, useState } from "react"
import { Review } from "../../api/review/model/review.model"
import ReviewListItemComponent from "./review.list.item.component"
import * as reviewService from '../../api/review/review.service';
import Loader from "../navigation/loading";
import ErrorMessage from "../navigation/error";
import { useSession } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";

export default function ReviewListComponent() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [error, setError] = useState<Error>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const {hasRoles}: { hasRoles: string[] } = useSession();

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
    {hasRoles.includes("WRITER") ?  <Link to={`/reviews/create`}><button className="btn btn-secondary mt-3">Review aanmaken</button></Link> : null}
      <div className="row justify-content-center p-4">
        <div className="col-6">
          <table className="table table-bordered table-striped table-dark">
            <thead>
            <tr>
              <td>Game</td>
              <td>Schrijver</td>
              <td>Korte inhoud</td>
              <td>Score</td>
              <td>Link</td>
              {hasRoles.includes("WRITER") ? <td>Writer Opties</td> : null}
              {hasRoles.includes("ADMIN") ? <td>Admin Opties</td> : null}
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