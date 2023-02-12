import React from 'react';
import './more-movie.css';

function MoreMovies({ showMovies }) {
    return (
        <div className="more-movie">
            <button className="more-movie__btn" onClick={showMovies}>Ещё</button>
        </div>
    )
}

export default MoreMovies; 