import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './movies-card-list.css';

import film from '../../../images/img'

function MoviesCardList() {
    return (
        <>
            <ul className="movies-card-list__list" >
                {film.map((item, index) =>
                    <MoviesCard key={index} card={item} />)
                }
            </ul>

        </>
    )
}

export default MoviesCardList; 