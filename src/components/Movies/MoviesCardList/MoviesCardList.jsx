import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './movies-card-list.css';
import { useState, useEffect } from 'react';
import MoreMovies from '../MoreMovies/MoreMovies'
function MoviesCardList({ cards }) {
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
    }, []);

    return (
        <>
            {<p className='more-movie__nothing-search'>Ничего не найдено</p>}
            <ul className="movies-card-list__list" >

                {cards.map((item, index) =>
                    index < showCard && < MoviesCard key={item.id} film={item} />
                )}
            </ul>

            {cards.length !== 0 && cards.length >= showCard && <MoreMovies />}
        </>
    )
}

export default MoviesCardList; 