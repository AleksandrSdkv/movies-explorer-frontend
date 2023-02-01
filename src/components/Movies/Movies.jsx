import React from 'react';

import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Movies({ showFilm, renderFilm, isLoad }) {


    return (<>

        <Header />
        <SearchForm
            showFilm={showFilm}
        />
        <MoviesCardList
            renderFilm={renderFilm}
            isLoad={isLoad}
        />
      
        <Footer />

    </>
    )
}

export default Movies; 