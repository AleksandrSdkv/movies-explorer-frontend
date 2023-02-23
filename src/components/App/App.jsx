import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../HOC/ProtectedRoute';

import { AuthProvider } from '../HOC/AuthProvaider';
import Preloader from '../Preloader/Preloader';
export default function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/signup" element={<Register
        />} />

        <Route path="/signin" element={<Login

        />} />

        <Route path="/movies" element={
          <ProtectedRoute >
            <Movies />
          </ProtectedRoute>} />

        <Route path="/saved-movies" element={
          <ProtectedRoute >
            <SavedMovies />
          </ProtectedRoute>} />

        <Route path="/profile" element={
          <ProtectedRoute >
            <Profile />
          </ProtectedRoute>} />

        <Route path="/" element={<Main />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
      <Preloader />
    </AuthProvider>

  );
}