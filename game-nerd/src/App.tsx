import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GameListComponent from './components/game/game.list.component';
import Footer from './components/navigation/footer';
import Forbidden from './components/navigation/forbidden';
import NavigationBar from './components/navigation/navbar';
import NotFound from './components/navigation/notfound';
import { RequireAuth } from './components/navigation/required.auth';
import GameNewsComponent from './components/news/game.news.list.component';
import NewsItemComponent from './components/news/news.item.component';
import NewsListComponent from './components/news/news.list.component';
import ReviewItemComponent from './components/review/review.item.component';
import ReviewListComponent from './components/review/review.list.component';
import LoginFormComponent from './components/user/login';
import RegistrationFormComponent from './components/user/register';
import { AuthProvider } from './contexts/AuthProvider';

function App() {

  return (
    <AuthProvider>
      <div className="App">
        <NavigationBar></NavigationBar>
        <Routes>

          <Route index element={
            <RequireAuth>
              <GameListComponent />
            </RequireAuth>} />

          <Route path="games" element={<RequireAuth><GameListComponent /></RequireAuth>} />
          <Route path="games/create" element={<RequireAuth requiredRole='ADMIN'><GameListComponent /></RequireAuth>} />
          <Route path="games/update/:id" element={<RequireAuth requiredRole='ADMIN'><GameListComponent /></RequireAuth>} />
          <Route path="games/delete/:id" element={<RequireAuth requiredRole='ADMIN'><GameListComponent /></RequireAuth>} />
          
          <Route path="news" element={<RequireAuth><NewsListComponent /></RequireAuth>} />
          <Route path="news/games/:id" element={<RequireAuth><GameNewsComponent /></RequireAuth>} />
          <Route path="news/:id" element={<RequireAuth ><NewsItemComponent/></RequireAuth>} />
          <Route path="news/create" element={<RequireAuth requiredRole='WRITER'><GameListComponent /></RequireAuth>} />
          <Route path="news/update/:id" element={<RequireAuth requiredRole='WRITER'><GameListComponent /></RequireAuth>} />
          <Route path="news/delete/:id" element={<RequireAuth requiredRole='ADMIN'><GameListComponent /></RequireAuth>} />
          
          <Route path="reviews" element={<RequireAuth ><ReviewListComponent /></RequireAuth>} />
          <Route path="reviews/:id" element={<RequireAuth ><ReviewItemComponent/></RequireAuth>} />
          <Route path="reviews/create" element={<RequireAuth requiredRole='WRITER'><GameListComponent /></RequireAuth>} />
          <Route path="reviews/update/:id" element={<RequireAuth requiredRole='WRITER'><GameListComponent /></RequireAuth>} />
          <Route path="reviews/delete/:id" element={<RequireAuth requiredRole='ADMIN'><GameListComponent /></RequireAuth>} />
          
          <Route path="*" element={<RequireAuth><NotFound /></RequireAuth>} />
          <Route path="/forbidden" element={<Forbidden/>} />
          <Route path="login" element={<LoginFormComponent />} />
          <Route path="register" element={<RegistrationFormComponent />} />
          
        </Routes>
        <Footer></Footer>
      </div>
    </AuthProvider>
  );
}

export default App;
