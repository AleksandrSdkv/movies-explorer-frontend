import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './movies-card-list.css';
import { useState } from 'react';
import MoreMovies from '../MoreMovies/MoreMovies'
import { useEffect } from 'react';
function MoviesCardList({ renderFilm, isLoad }) {
    console.log(renderFilm.length)
    const [showCard, setShowCard] = useState();

    useEffect(() => {
        const windowScreen = document.documentElement.clientWidth;
        if (windowScreen > 801) {
            setShowCard(12)
        } else if (windowScreen > 481 && windowScreen <= 800) {
            setShowCard(8)
        } else if (windowScreen > 320 && windowScreen <= 480) {
            console.log(1)
            setShowCard(1)
        }
    }, [isLoad]);

    function count() {
        setShowCard(showCard + 1)
    }

    return (
        <>
            {isLoad && <p className='more-movie__nothing-search'>Ничего не найдено</p>}
            <ul className="movies-card-list__list" >
                {renderFilm.length !== 0 && renderFilm.map((item, index) =>
                    index < showCard && <MoviesCard key={item.id} film={item} />
                )}
            </ul>
            {renderFilm.length !== 0 && <MoreMovies count={count} />}
        </>
    )
}

export default MoviesCardList; 