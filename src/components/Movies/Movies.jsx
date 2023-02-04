import React from 'react';

import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { moviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
function Movies() {
    const [cards, setCards] = useState([]);
    const [renderedCards, setRenderedCards] = useState([]);
    const [preloader, setPreloader] = useState(false);
    const [noMovies, setNoMovies] = useState(false);
    useEffect(() => {
        moviesApi.getMovies().then((serverCards) => {
            setCards(serverCards);
        })
    }, [])
    function filter(nameRU = '', isShorts = false) {
        setPreloader(true);
        const film = cards.filter((card) => {
            if (isShorts) {
                return card.duration <= 40 && card.nameRU.toLowerCase().includes(nameRU.toLowerCase())
            }
            return card.nameRU.toLowerCase().includes(nameRU.toLowerCase())
        })
        setPreloader(false);
        setRenderedCards(film)
        setNoMovies(true)
    }

    return (<>
        <Header />
        <SearchForm
            filter={filter}
        />

        <MoviesCardList
            cards={renderedCards}
            noMovies={noMovies}
        />
        {preloader && <Preloader />}
        <Footer />
    </>
    )
}

export default Movies; 