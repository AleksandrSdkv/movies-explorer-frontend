import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';


import { CurrentContext } from '../../context/context';


export default function App() {


  // const [currentUser, setCurrentUser] = useState({});


  return (

    <CurrentContext.Provider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/movies" element={<Movies
        />} />
        <Route path="/saved-movies" element={<SavedMovies

        />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </CurrentContext.Provider>

  );
}