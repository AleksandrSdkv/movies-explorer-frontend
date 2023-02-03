import React from 'react';
import { useState } from 'react';


import './movies-card.css';


function MoviesCard(props) {
    const { card } = props;
    const [isLike, setLike] = useState();
    const likeMovie = (`${!isLike ? 'movies-card__like_active' : ''}`);

    function handleLikeClick() {
        setLike(likeMovie);
    }
    return (<>


        <li className="movies-card__group">
            <img className='movies-card__mask movies-card__text' src={card.image} alt={card.name} />
            <div className='movies-card__container'>
                <p className="movies-card__name movies-card__text">{card.name}</p>
                <button type="button" onClick={handleLikeClick} className='movies-card__like-button' >
                    <div id={isLike} className={`movies-card__like_inactive`} ></div>
                </button>
            </div>
            <p className="movies-card__time movies-card__text">{card.time}</p>
        </li >
    </>
    )
}

export default MoviesCard; 