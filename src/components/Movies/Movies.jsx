import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';

import { moviesApi } from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import * as constants from '../../constants/constants';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

function Movies() {
    const token = constants.token;
    const [films, setFilms] = useState([]);
    const [renderedCards, setRenderedCards] = useState([]);
    const [preloader, setPreloader] = useState(false);
    const [isFailConnect, setIsFailConnect] = useState(false);
    const [noMovies, setNoMovies] = useState(false);
    const location = useLocation();


    useEffect(() => {
        const localMovies = JSON.parse(localStorage.getItem('saveLocal') || '[]');
        if (localStorage.getItem('saveLocal') !== null) {
            setRenderedCards(localMovies)
        }
        Promise.all([moviesApi.getMovies(), mainApi.getSaveCards(token)])
            .then(([movieApiCards, { data: localCards }]) => {
                const allCards = movieApiCards.map(card => {
                    const localCard = localCards.find((localCard) => localCard.movieId === card.id);
                    card._id = localCard !== undefined ? localCard._id : '';
                    card.movieId = card.id;
                    card.thumbnail = `https://api.nomoreparties.co/${card.image.url}`;
                    card.saved = localCard !== undefined;
                    return card;
                });
                console.log(allCards)
                setFilms(allCards);
            }).catch((err) => {
                console.error(err);
                setIsFailConnect(true);
            });
    }, [])

    function filter(nameRU = '', isShorts) {
        setPreloader(true);
        const film = films.filter((films) => {
            if (isShorts) {
                return films.duration <= 40 && films.nameRU.toLowerCase().includes(nameRU.toLowerCase());
            }
            return films.nameRU.toLowerCase().includes(nameRU.toLowerCase());
        })
        if (location.pathname === '/movies') {
            localStorage.setItem('saveLocal', JSON.stringify(film));
        }
        setPreloader(false);
        setRenderedCards(film);
        setNoMovies(true);
    }

    const handleCardLike = (card) => {
        if (card.saved === false) {
            const film = {};
            film.country = card.country;
            film.director = card.director;
            film.duration = card.duration;
            film.year = card.year;
            film.description = card.description;
            film.image = `https://api.nomoreparties.co/${card.image.url}`;
            film.trailerLink = card.trailerLink;
            film.thumbnail = `https://api.nomoreparties.co/${card.image.url}`;
            film.movieId = card.id;
            film.nameRU = card.nameRU;
            film.nameEN = card.nameEN;
            mainApi.changeLikeCardStatus(film, token)
                .then((serverCard) => {
                    setRenderedCards((beatCards) => {
                        const editedCards = beatCards.map(beatCard => {
                            if (beatCard.id === serverCard.movieId) {
                                beatCard.saved = true;
                                beatCard._id = serverCard._id;
                                beatCard.movieId = serverCard.movieId;
                                beatCard.thumbnail = serverCard.thumbnail;
                            }
                            return beatCard;
                        })
                        localStorage.setItem('saveLocal', JSON.stringify(editedCards));
                        return editedCards;
                    })
                    localStorage.removeItem('saveLocal');
                })
                .catch((err) => {
                    console.error(err);

                });
        }
        else {

            mainApi.changeLikeCardStatus(card, token)
                .then(card => console.log(card))

                .catch((err) => {
                    console.error(err);

                });
            const newCard = card;
            newCard.saved = false;
            const cardsArray = [...renderedCards];
            const index = cardsArray.findIndex(el => el.id === card.id);
            cardsArray[index] = newCard;
            setRenderedCards([...cardsArray]);
            localStorage.removeItem('saveLocal');
        }
    }

    return (<>
        <Header />
        <SearchForm
            filter={filter}
        />
        <main className='Movies'>
            <MoviesCardList
                films={renderedCards}
                noMovies={noMovies}
                isFailConnect={isFailConnect}
                handleCardLike={handleCardLike}
            />
        </main>
        {preloader && <Preloader />}
        <Footer />
    </>
    )
}
export default Movies; 