import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GameListComponent from './components/game/game.list.component';
import Footer from './components/navigation/footer';
import NavigationBar from './components/navigation/navbar';
import NotFound from './components/navigation/notfound';
import { RequireAuth } from './components/navigation/RequiredAuth';
import GameNewsComponent from './components/news/game.news.list.component';
import NewsListComponent from './components/news/news.list.component';
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
          <Route path="news" element={<RequireAuth><NewsListComponent /></RequireAuth>} />
          <Route path="/games/news/:id" element={<RequireAuth><GameNewsComponent /></RequireAuth>} />
          <Route path="reviews" element={<RequireAuth><ReviewListComponent /></RequireAuth>} />

          <Route path="login" element={<LoginFormComponent />} />
          <Route path="register" element={<RegistrationFormComponent />} />
          <Route path="*" element={<RequireAuth><NotFound /></RequireAuth>} />

        </Routes>
        <Footer></Footer>
      </div>
    </AuthProvider>
  );
}

export default App;
