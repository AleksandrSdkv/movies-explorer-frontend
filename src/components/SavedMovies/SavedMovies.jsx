import React from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader'
import { useAuth } from '../../hook/useAuth';

function SavedMovies() {
    const { filter, renderedCards, noMovies, isFailConnect, preloader } = useAuth();
    const savedCards = renderedCards.filter((item) => {
        return item.saved === true;
    });

    return (
        <>
            <Header />
            <SearchForm
                filter={filter}
            />
            <main className='Movies'>
                <MoviesCardList
                    films={savedCards}
                    noMovies={noMovies}
                    isFailConnect={isFailConnect}
                />
            </main>
            {preloader && <Preloader />}
            <Footer />
        </>
    )
}
export default SavedMovies; 