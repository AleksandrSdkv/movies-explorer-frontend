import { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './movies-card-list.css';
import * as constants from '../../../constants/constants';
import MoreMovies from '../MoreMovies/MoreMovies'

function MoviesCardList({ films, noMovies, isFailConnect, handleCardLike }) {
    let displayMovies = constants.showMovies();
    const [hiddenShowBtn, setHiddenShowBtn] = useState(displayMovies.init);

    const showMore = () => {
        setHiddenShowBtn(hiddenShowBtn + displayMovies.more);
    };
    useEffect(() => {
        setHiddenShowBtn(displayMovies.init);
    }, []);
    return (
        <>
            {noMovies && films.length === 0 && <p className='more-movie__nothing-search'>Ничего не найдено</p>}
            <ul className="movies-card-list__list" >
                {films.map((item, index) =>
                    index < hiddenShowBtn && < MoviesCard key={item.id} film={item} handleCardLike={handleCardLike} />
                )}
            </ul>
            {isFailConnect && <p className="movies-card-list__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
            {films.length !== 0 && films.length > hiddenShowBtn && < MoreMovies showMovies={showMore} />}

        </>
    )
}

export default MoviesCardList; 