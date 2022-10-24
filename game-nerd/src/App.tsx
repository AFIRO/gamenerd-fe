import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GameListComponent from './components/game/game.list.component';
import Footer from './components/navigation/footer';
import NavigationBar from './components/navigation/navbar';
import NotFound from './components/navigation/notfound';
import GameNewsComponent from './components/news/game.news.list.component';
import NewsListComponent from './components/news/news.list.component';
import ReviewListComponent from './components/review/review.list.component';
import LoginFormComponent from './components/user/login';
import RegistrationFormComponent from './components/user/register';

function App() {
  
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
      
      
      <Route index element={<GameListComponent />}/>
      <Route path="games" element={<GameListComponent />}/>
      <Route path="news" element={<NewsListComponent />}/>
      <Route path="/games/news/:id" element={<GameNewsComponent />} />
      <Route path="reviews" element={<ReviewListComponent />}/>

      <Route path="login" element={<LoginFormComponent />} />
      <Route path="register" element={<RegistrationFormComponent />} />
      <Route path="*" element={<NotFound />} />
      
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
