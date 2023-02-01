import React from 'react';
import './more-movie.css';


function MoreMovies({ count }) {
    return (

        <div className="more-movie">
            <button className="more-movie__btn" onClick={count}>Ещё</button>
        </div>

    )
}

export default MoreMovies; 