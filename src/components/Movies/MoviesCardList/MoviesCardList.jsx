import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './movies-card-list.css';



function MoviesCardList({ renderFilm }) {
    console.log(renderFilm)


    return (
        <>
            <ul className="movies-card-list__list" >

                {renderFilm === [] ? console.log('nothing') : renderFilm.map((item, index) =>
                    index < 10 && <MoviesCard key={item.id} film={item} />
                )}
            </ul>

        </>
    )
}

export default MoviesCardList; 