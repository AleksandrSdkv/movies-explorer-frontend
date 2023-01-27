import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoreMovies from '../Movies/MoreMovies/MoreMovies'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader'
function SavedMovies() {
    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList />
            <MoreMovies />
            <Footer />
            <Preloader />
        </>
    )
}

export default SavedMovies; 