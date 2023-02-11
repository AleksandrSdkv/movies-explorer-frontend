import MoviesCard from '../../SavedMovies/MoviesCard/MoviesCard';

import '../../Movies/MoviesCardList/movies-card-list.css';

function MoviesCardList({ films, noMovies, isFailConnect }) {

    const showMovies = () => {
        const counter = { init: 12, more: 3 };

        if (window.innerWidth < 1040) {
            counter.init = 8;
            counter.more = 2;
        }
        if (window.innerWidth < 481) {
            counter.init = 5;
            counter.more = 1;
        }
        return counter;
    };

    let displayMovies = showMovies()

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