import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './movies-card-list.css';

import MoreMovies from '../MoreMovies/MoreMovies'
function MoviesCardList({ cards, noMovies }) {


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



    return (
        <>
            {noMovies && cards.length === 0 && <p className='more-movie__nothing-search'>Ничего не найдено</p>}
            <ul className="movies-card-list__list" >

                {cards.map((item, index) =>
                    index < displayMovies.init && < MoviesCard key={item.id} film={item} />

                )}

            </ul>

            {<MoreMovies showMovies={showMovies} />}

        </>
    )
}

export default MoviesCardList; 