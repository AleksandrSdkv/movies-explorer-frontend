import React from 'react';
import '../../delete-button/_type/delete-button_type_movie.css';
import '../../Movies/MoviesCard/movies-card.css';

function MoviesCard({ film, handleCardLike }) {
    const url = film.image;
    const hours = `${Math.floor(film.duration / 60) === 0 ? '0' : Math.floor(film.duration / 60)}.${Math.floor(film.duration % 60)}ч.`;

    function handleLikeClick() {
        film.saved = true;
        handleCardLike(film);
    }

    return (
        <>
            <li className="movies-card__group">
                <a href={film.trailerLink} target="_blank" rel="noreferrer">
                    <img className='movies-card__mask movies-card__text' src={url} alt={film.nameRU} />
                </a>
                <div className='movies-card__container'>
                    <p className="movies-card__name movies-card__text">{film.nameRU}</p>
                    <button type="button" onClick={() => handleLikeClick()} className='delete-button_type_movie' >
                        <div className='delete-button_type_movie-svg'></div>
                    </button>
                </div>
                <p className="movies-card__time movies-card__text">{hours}</p>
            </li >
        </>
    )
}

export default MoviesCard; 