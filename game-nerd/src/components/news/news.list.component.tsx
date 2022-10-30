import { useEffect, useState } from "react"
import NewsListItemComponent from "./news.list.item.component"
import Loader from '../navigation/loading';
import * as newsService from '../../api/news/news.service';
import { News } from "../../api/news/model/news.model";
import ErrorMessage from "../navigation/error";


export default function NewsListComponent() {
  const [error, setError] = useState<Error>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [news, setNews] = useState<News[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        let data: News[];
        data = await newsService.getAll();
        setNews(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      };
    }
    fetchNews();
  }, []);


  return (
    <div>
    <Loader loading={loading} />
    <ErrorMessage error={error} />
    {!loading && !error ?
    <div>   <h1 className="text-light">Overzicht van alle news</h1>
      <div className="row justify-content-center p-4">
        <div className="col-6">
          <table className="table table-bordered table-striped table-dark">
            <thead>
            <tr>
              <td>Game</td>
              <td>Schrijver</td>
              <td>Korte inhoud</td>
              <td></td>
              </tr>
            </thead>
            <tbody>
            {news.map(news => <NewsListItemComponent key={news.id} {...news}></NewsListItemComponent>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    : null}
    </div>
  )
}