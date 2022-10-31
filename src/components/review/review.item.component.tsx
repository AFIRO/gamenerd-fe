import { useEffect, useState } from "react"
import Loader from '../navigation/loading';
import * as reviewService from '../../api/review/review.service';
import ErrorMessage from "../navigation/error";
import { useParams } from "react-router-dom";
import { Review } from "../../api/review/model/review.model";


export default function ReviewItemComponent() {
  const reviewId = useParams().id;
  const [error, setError] = useState<Error>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [review, setReview] = useState<Review>(null)

  useEffect(() => {
    const fetchReview = async () => {
      try {
        setLoading(true);
        setError(null);
        let data: Review;
        data = await reviewService.getById(reviewId);
        setReview(data);
      } catch (error) {
        console.error(error);
        setError(new Error(error.response.data.message));
      } finally {
        setLoading(false);
      };
    }
    fetchReview();
  }, [reviewId]);


  return (
    <div>
      <Loader loading={loading} />
      <ErrorMessage error={error} />
      {!loading && !error ?
        <div className="text-light">   <h1 className="text-light">News over {review.game.name}</h1>
          <h2 >Geschreven door {review.writer.name}</h2>
          <h3 >Score: {review.score}/10</h3>
          <p>{review.content}</p>
        </div>
        : null}
    </div>
  )
}