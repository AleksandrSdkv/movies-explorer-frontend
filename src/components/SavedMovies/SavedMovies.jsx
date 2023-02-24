import { useState, useEffect } from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader'
import * as mainApi from '../../utils/MainApi';
import { useAuth } from '../../hook/useAuth';
function SavedMovies() {
    const { isLoad } = useAuth();
    const [cards, setCards] = useState([]);
    const [filterCards, setFilterCards] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {
        mainApi.getSaveCards(token)
            .then(({ data: localCards }) => {
                const saveFilms = localCards.map(card => {
                    card.thumbnail = card.image;
                    card.saved = true;
                    return card;
                })
                setCards(saveFilms);
                setFilterCards(saveFilms);
            })
    }, []);

    function filter(nameRU = '', isShorts) {
        const film = cards.filter((films) => {

            if (nameRU === '' && isShorts === true) return films.duration <= 40;

            if (isShorts) {
                return films.duration <= 40 && films.nameRU.toLowerCase().includes(nameRU.toLowerCase());
            }
            return films.nameRU.toLowerCase().includes(nameRU.toLowerCase());
        })
        setFilterCards(film);
    }


    const handleCardLike = (card) => {
        mainApi.changeDelete(card._id, token).then(() => setCards((cards) => {
            const localCards = JSON.parse(localStorage.getItem('saveLocal'))
            localCards.map(movie => {
                if (card.movieId === movie.movieId) movie.saved = false;
                return movie;
            })
            localStorage.setItem('saveLocal', JSON.stringify(localCards))
            const newArrey = cards.filter((c) => {
                return c.movieId !== card.movieId
            })
            setFilterCards(newArrey)
            return newArrey
        }

        ))

    }

    return (
        <>
            <Header />
            <SearchForm
                filter={filter}
            />
            <main className='Movies'>
                <MoviesCardList
                    films={filterCards}
                    handleCardLike={handleCardLike}
                // noMovies={noMovies}
                // isFailConnect={isFailConnect}
                />
            </main>
            {isLoad && <Preloader />}
            <Footer />
        </>
    )
}
export default SavedMovies; 