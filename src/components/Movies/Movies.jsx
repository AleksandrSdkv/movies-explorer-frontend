import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { moviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import * as mainApi from '../../utils/MainApi';
import { useAuth } from '../../hook/useAuth';

function Movies() {
    const { loggedIn } = useAuth();
    console.log(loggedIn)
    const [films, setFilms] = useState([]);
    const [renderedCards, setRenderedCards] = useState([]);

    const [preloader, setPreloader] = useState(false);
    const [noMovies, setNoMovies] = useState(false);
    const [isFailConnect, setIsFailConnect] = useState(false);


    useEffect(() => {
        const localFilm = JSON.parse(localStorage.getItem('valueFilm'))
        if (localStorage.getItem('valueFilm') !== null) {
            setRenderedCards(localFilm);
            console.log(localFilm)
        }
        const token = localStorage.getItem('token');
        Promise.all([moviesApi.getMovies(), mainApi.getSaveCards(token)])
            .then(([movieApiCards, { data: localCards }]) => {
                console.log(movieApiCards, localCards)
                const allCards = movieApiCards.map(card => {
                    const localCard = localCards.find((localCard) => localCard.movieId === card.id);
                    card._id = localCard !== undefined ? localCard._id : '';
                    card.movieId = card.id;
                    card.thumbnail = `https://api.nomoreparties.co/${card.image.url}`;
                    card.saved = localCard !== undefined;
                    return card;
                })

                setFilms(allCards);
                console.log(renderedCards)
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
        localStorage.setItem('valueFilm', JSON.stringify(film));
        setPreloader(false);

        console.log(film)
        setRenderedCards(film);
        setNoMovies(true);
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
            />
        </main>
        {preloader && <Preloader />}
        <Footer />
    </>
    )
}

export default Movies; 