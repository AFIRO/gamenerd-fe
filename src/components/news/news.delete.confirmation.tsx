import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as newsService from '../../api/news/news.service';
import ErrorMessage from "../navigation/error";
import Loader from "../navigation/loading";
import { News } from "../../api/news/model/news.model";

export default function NewsDeleteConfirmationComponent() {
  const [error, setError] = useState<Error>(null);
  const [news, setNews] = useState<News>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const newsId = useParams().id;
  const navigate = useNavigate()

  useEffect(()=>{
    const getNews = async () => {
      try{
      setLoading(true);
      setError(null)
      const data = await newsService.getById(newsId)    
      setNews(data)}
      catch (error) {
        console.log(error);
        setError(new Error(error.response.data.message));
      } finally {
        setLoading(false);
      }
    }
    getNews()
  },[newsId])
  
  const handleDelete = useCallback(async () => {
    try {
      await newsService.deleteById(newsId);
      navigate('/news',{replace:true})
    } catch (error) {
      console.log(error);
      setError(new Error(error.response.data.message));
    }
  }, [newsId,navigate])

  return (
    <div>
      <Loader loading={loading} />
      <ErrorMessage error={error} />
      {!loading && !error ?
        <div className="m-5">
          <h1 className="text-light">Je staat op het punt om een nieuws item over {news.game.name} te verwijderen.</h1>
          <h2 className="text-light">Dit item is geschreven door {news.writer.name}.</h2>
          <button className="btn btn-danger m-5" onClick={handleDelete}>Bevestigen</button>
          <Link to={`/games`}><button className="btn btn-warning">Annuleren</button></Link>
        </div>
        : null}
    </div>
  )
}