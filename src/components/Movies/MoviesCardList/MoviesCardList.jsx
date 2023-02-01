import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './movies-card-list.css';
import { useState } from 'react';
import MoreMovies from '../MoreMovies/MoreMovies'

function MoviesCardList({ renderFilm, isLoad }) {
    console.log(renderFilm.length)
    const [moreCard, setMoreCard] = useState(8);
    console.log(isLoad)
    function count() {
        setMoreCard(moreCard + 2)
    }
   
    return (
        <>
            {isLoad && <p className='more-movie__nothing-search'>Ничего не найдено</p>}
            <ul className="movies-card-list__list" >

                {renderFilm.length !== 0 && renderFilm.map((item, index) =>
                    index < moreCard && <MoviesCard key={item.id} film={item} />
                )}

            </ul>
            {renderFilm.length !== 0 && <MoreMovies count={count} />}
        </>
    )
}

export default MoviesCardList; 