import { useState, useEffect } from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import Preloader from '../Preloader/Preloader'
import * as mainApi from '../../utils/MainApi';

function SavedMovies() {
    const [cards, setCards] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {

        mainApi.checkTokenValid(token)

        mainApi.getSaveCards(token)
            .then(({ data: localCards }) => {
                console.log(localCards)
                const saveFilms = localCards.map(card => {
                    card.thumbnail = card.image;
                    card.saved = true;
                    return card;
                })
                setCards(saveFilms);
            })
    }, [])
    const handleCardLike = (card) => {

        mainApi.changeDelete(card._id, token)

    }

    return (
        <>
            <Header />
            <SearchForm

            />
            <main className='Movies'>
                <MoviesCardList
                    films={cards}
                    handleCardLike={handleCardLike}
                // noMovies={noMovies}
                // isFailConnect={isFailConnect}
                />
            </main>
            {/* {preloader && <Preloader />} */}
            <Footer />
        </>
    )
}
export default SavedMovies; 