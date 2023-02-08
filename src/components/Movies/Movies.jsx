import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { moviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
function Movies() {
    const [films, setFilms] = useState([]);
    const [renderedCards, setRenderedCards] = useState([]);
    const [preloader, setPreloader] = useState(false);
    const [noMovies, setNoMovies] = useState(false);
    const [isFailConnect, setIsFailConnect] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('valueFilm') !== null) {
            const localFilm = JSON.parse(localStorage.getItem('valueFilm'))

            setRenderedCards(localFilm)
        }
        moviesApi.getMovies().then((serverCards) => {
            setFilms(serverCards);

        }).catch((err) => {
            console.error(err);
            setIsFailConnect(true);
        });
    }, [])
    function filter(nameRU = '', isShorts) {

        setPreloader(true);
        const film = films.filter((films) => {
            if (isShorts) {
                return films.duration <= 40 && films.nameRU.toLowerCase().includes(nameRU.toLowerCase())
            }
            return films.nameRU.toLowerCase().includes(nameRU.toLowerCase())
        })
        localStorage.setItem('valueFilm', JSON.stringify(film));
        setPreloader(false);
        setRenderedCards(film)
        setNoMovies(true)
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