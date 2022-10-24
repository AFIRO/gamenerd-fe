import  { useState } from "react"
import NEWS_DATA from "../../api/mock-news"
import NewsListItemComponent from "./news.list.item.component"


export default function GameListComponent() {

  const [news, setNews] = useState(NEWS_DATA)

  return (
    <div>   <h1 className="text-light">Overzicht van alle news</h1>
      <div className="row justify-content-center p-4">
        <div className="col-auto">
          <table className="table table-bordered table-striped table-dark">
            <thead>
              <td>Game</td>
              <td>Schrijver</td>
              <td>Korte inhoud</td>
              <td></td>
            </thead>
            {news.map(news => <NewsListItemComponent {...news}></NewsListItemComponent>)}
          </table>
        </div>
      </div>
    </div>
  )
}