import { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './movies-card-list.css';

import MoreMovies from '../MoreMovies/MoreMovies'

function MoviesCardList({ films, noMovies, isFailConnect }) {
    const [more, setMore] = useState(0);

    const [hiddenBtn, setHiddenBtn] = useState(false);
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
    let displayMovies = showMovies();

    const showMore = () => {
        const hiddenShowBtn = displayMovies.init + more;
        if (hiddenShowBtn > films.length) {
            setHiddenBtn(true);
        }
        setMore(more + displayMovies.more);
    }

    return (
        <>
            {noMovies && films.length === 0 && <p className='more-movie__nothing-search'>Ничего не найдено</p>}
            <ul className="movies-card-list__list" >

                {films.map((item, index) =>
                    index < displayMovies.init + more && < MoviesCard key={item.id} film={item} />
                )}

            </ul>
            {isFailConnect && <p className="movies-card-list__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>}
            {!hiddenBtn && films.length !== 0 && < MoreMovies showMovies={showMore} />}

        </>
    )
}

export default MoviesCardList; 