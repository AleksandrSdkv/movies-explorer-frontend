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
import { useState } from 'react'


import { CurrentContext } from '../../context/context';


export default function App() {

  // const [isFilms, setIsFilm] = useState([]);
  // const [preloader, setPreloader] = useState(false)
  // const [isLoad, setIsload] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // //Объ. функцию которая, 
  // async function showFilm(values) { //  Вызывается  по submit в компоненте SearchForm
  //   setPreloader(true);
  //   await loadJson()             //      запрашивает API фильмов здаесь
  //     .then(data => {      //     и передает в state фильмов
  //       const filterFilms = data.filter(film =>
  //         film.nameRU.toLowerCase().includes(values.filmName.toLowerCase()));
  //       return filterFilms;

  //     }).then((filterFilms) => {
  //       if (filterFilms.length === 0) {
  //         setIsFilm([])
  //         return setIsload(true);
  //       }
  //       setReload(!reload)
  //       setIsFilm(filterFilms)
  //       setIsload(false);
  //     }).catch((err) => {
  //       console.log(`"Ошибка"${err}`)
  //     });
  //   setPreloader(false);
  // };

  return (

    <CurrentContext.Provider value={currentUser}>
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