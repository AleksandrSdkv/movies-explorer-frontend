import MoviesCard from '../../SavedMovies/MoviesCard/MoviesCard';
import '../../Movies/MoviesCardList/movies-card-list.css';

function MoviesCardList({ films, noMovies, isFailConnect, handleCardLike }) {

    console.log(films)
    return (
        <>
            {noMovies && films.length === 0 && <p className='more-movie__nothing-search'>Ничего не найдено</p>}
            <ul className="movies-card-list__list" >
                {films.map((item) =>
                    < MoviesCard key={item.movieId} film={item} handleCardLike={handleCardLike} />
                )}
            </ul>
            {isFailConnect && <p className="movies-card-list__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
        </>
    )
}
export default MoviesCardList; 