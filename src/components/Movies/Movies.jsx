import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';
import { useAuth } from '../../hook/useAuth';

function Movies() {
    const { filter, renderedCards, noMovies, isFailConnect, preloader } = useAuth();
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