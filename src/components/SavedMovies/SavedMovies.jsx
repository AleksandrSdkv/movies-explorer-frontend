import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoreMovies from '../Movies/MoreMovies/MoreMovies'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader'
import { useState } from 'react';
function SavedMovies() {
    const [preloader, setPreloader] = useState(false);
    return (
        <>
            <Header />
            <SearchForm />
            <main className='Movies'>
                <MoviesCardList />
                <MoreMovies />
            </main>
            <Footer />
            {preloader && <Preloader />}
        </>
    )
}

export default SavedMovies; 