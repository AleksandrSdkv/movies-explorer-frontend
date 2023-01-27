import React from 'react';
import './searchform.css';


function SearchForm() {
    return (

        <section className='searchform'>

            <div className="searchform__container">
                <form className='searchform__form'>
                    <input className='searchform__input' type="text" placeholder="Фильм" />
                    <button className='searchform__button' type="submit"></button>
                </form>
            </div>
            <label className="searchform__toggle">
                <input className="searchform__toggle-checkbox" type="checkbox" />

                <div className="searchform__toggle-switch"></div>
                <span className="searchform__toggle-label">Короткометражки</span>
            </label>
        </section>

    )
}

export default SearchForm; 