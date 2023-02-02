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
    useEffect(() => {
        moviesApi.getMovies().then((serverCards) => {
            setCards(serverCards);
        })
    }, [])
    function filter(nameRU = '', isShorts = false) {
        setPreloader(true);
        let promise = new Promise((resolve, reject) => {
            resolve(cards.filter((card) => {
                if (isShorts) {
                    return card.duration <= 40 && card.nameRU.toLowerCase().includes(nameRU.toLowerCase())
                }
                return card.nameRU.toLowerCase().includes(nameRU.toLowerCase())
            })
            )
        });
        promise.then(result => {
            setPreloader(false);
            setRenderedCards(result)
        }, error => {
            console.log(`'Произошла ошибка ${error}'`)
        })
    }

    return (<>
        <Header />
        <SearchForm
            filter={filter}
        />

        <MoviesCardList
            cards={renderedCards}
        />
        {preloader && <Preloader />}
        <Footer />
    </>
    )
}

export default Movies; 