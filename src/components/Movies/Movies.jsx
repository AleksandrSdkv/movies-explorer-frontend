import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import { moviesApi } from '../../utils/MoviesApi';
import * as mainApi from '../../utils/MainApi';
import { useState, useEffect } from "react";

function Movies() {
    const token = localStorage.getItem('token');

    const [renderedCards, setRenderedCards] = useState([]);
    const [preloader, setPreloader] = useState(false);
    const [isFailConnect, setIsFailConnect] = useState(false);
    const [noMovies, setNoMovies] = useState(false);

    useEffect(() => {
        if (!token) return;
        setRenderedCards(JSON.parse(localStorage.getItem('saveLocal') || '[]'))
    }, [])

    function filter(nameRU = '', isShorts) {
        setPreloader(true);
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
                const film = allCards.filter((films) => {
                    if (isShorts) {
                        return films.duration <= 40 && films.nameRU.toLowerCase().includes(nameRU.toLowerCase());
                    }
                    return films.nameRU.toLowerCase().includes(nameRU.toLowerCase());
                })
                localStorage.setItem('saveLocal', JSON.stringify(film));
                setRenderedCards(film);
                setNoMovies(true);
            }).catch((err) => {
                console.error(err);
                setIsFailConnect(true);
            }).finally(() => setPreloader(false))
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
                    setRenderedCards((cards) => {
                        const newArrayCards = cards.map(card => {
                            if (card.id === serverCard.movieId) {
                                card.saved = true;
                                card._id = serverCard._id;
                                card.movieId = serverCard.movieId;
                                card.thumbnail = serverCard.thumbnail;
                            }
                            return card;
                        })
                        localStorage.setItem('saveLocal', JSON.stringify(newArrayCards));
                        return newArrayCards;
                    })
                })
                .catch((err) => {
                    console.error(err);
                });
        }
        else {
            mainApi.changeLikeCardStatus(card, token)
                .then(unlikeCard => {
                    setRenderedCards(localCards => {
                        const newArrayCards = localCards.map(card => {
                            if (unlikeCard.movieId === card.id) {
                                card.saved = false
                            }
                            return card
                        })
                        localStorage.setItem('saveLocal', JSON.stringify(newArrayCards));
                        return newArrayCards
                    })
                })
                .catch((err) => {
                    console.error(err);
                });
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
        {<Preloader
            preloader={preloader}
        />}
        <Footer />
    </>
    )
}
export default Movies; 