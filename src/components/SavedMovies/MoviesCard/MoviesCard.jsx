import React from 'react';

import '../../delete-button/_type/delete-button_type_movie.css';

function MoviesCard(props) {
    const { card } = props;

    return (<>
        <picture className="movies-card__group">
            <img className='movies-card__mask movies-card__text' src={card.image} alt="" />
            <div className='movies-card__container'>
                <p className="movies-card__name movies-card__text">{card.name}</p>
                <button type="button" className='delete-button_type_movie' >
                    <div className='delete-button_type_movie-svg' ></div>
                </button>
            </div>
            <p className="movies-card__time movies-card__text">{card.time}</p>
        </picture >
    </>
    )
}

export default MoviesCard; 