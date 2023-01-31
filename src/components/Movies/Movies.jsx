import React from 'react';

import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import MoreMovies from './MoreMovies/MoreMovies'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Movies({ showFilm, renderFilm }) {


    return (<>

        <Header />
        <SearchForm
            showFilm={showFilm}
        />
        <MoviesCardList
            renderFilm={renderFilm}
        />
        <MoreMovies />
        <Footer />

    </>
    )
}

export default Movies; 