import React from 'react';
import { useState } from 'react';


import './movies-card.css';


function MoviesCard({ film }) {

    const [isLike, setLike] = useState();
    const likeMovie = (`${!isLike ? 'movies-card__like_active' : ''}`);
    const url = `https://api.nomoreparties.co/${film.image.url}`;

    const hours = `${Math.floor(film.duration / 60) === 0 ? '0' : Math.floor(film.duration / 60)}.${Math.floor(film.duration % 60)}ч.`


    function handleLikeClick() {
        setLike(likeMovie);
    }
    return (
        <>
            <li className="movies-card__group">
                <a href={film.trailerLink} target="_blank" rel="noreferrer">
                    <img className='movies-card__mask movies-card__text' src={url} alt={film.nameRU} />
                </a>
                <div className='movies-card__container'>
                    <p className="movies-card__name movies-card__text">{film.nameRU}</p>
                    <button type="button" onClick={handleLikeClick} className='movies-card__like-button' >
                        <div id={isLike} className={`movies-card__like_inactive`} ></div>
                    </button>
                </div>
                <p className="movies-card__time movies-card__text">{hours}</p>
            </li >
        </>
    )
}

export default MoviesCard; 