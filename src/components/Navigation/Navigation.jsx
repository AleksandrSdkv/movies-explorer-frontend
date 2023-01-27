import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <>


            <nav className='Navigation__movies'>
                <Link to="/movies" className='Navigation__text Navigation__new-movies'>Фильмы</Link>
                <Link to="/saved-movies" className='Navigation__text Navigation__saved-movies'>Сохранённые фильмы</Link>
            </nav>
        </>

    )
}
export default Navigation; 