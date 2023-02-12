import MoviesCard from '../../SavedMovies/MoviesCard/MoviesCard';
import '../../Movies/MoviesCardList/movies-card-list.css';
import * as constants from '../../../constants/constants';
function MoviesCardList({ films, noMovies, isFailConnect }) {
    let displayMovies = constants.showMovies();
    return (
        <>
            {noMovies && films.length === 0 && <p className='more-movie__nothing-search'>Ничего не найдено</p>}
            <ul className="movies-card-list__list" >
                {films.map((item, index) =>
                    index < displayMovies.init && < MoviesCard key={item.id} film={item} />
                )}
            </ul>
            {isFailConnect && <p className="movies-card-list__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
        </>
    )
}
export default MoviesCardList; 