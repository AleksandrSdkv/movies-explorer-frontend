import React from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab';

function Promo() {
    return (

        <article className="Promo">
            <div className='Promo_backgraund'></div>
            <h1 className="Promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <NavTab />
        </article>
    )
}

export default Promo; 