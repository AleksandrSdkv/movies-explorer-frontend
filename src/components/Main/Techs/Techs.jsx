import React from 'react';
import './Techs.css';


function Techs() {
    return (

        <article className='Techs'>
            <h2 className='Techs__heading'>Технологии </h2>

            <p className='Techs__group-title'>7 технологий</p>
            <p className='Techs__group-paragraph'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

            <ul className='Techs__tech-group'>
                <li className='Techs__tech'>HTML</li>
                <li className='Techs__tech'>CSS</li>
                <li className='Techs__tech'>JS</li>
                <li className='Techs__tech'>React</li>
                <li className='Techs__tech'>Git</li>
                <li className='Techs__tech'>Express.js</li>
                <li className='Techs__tech'>mongoDB</li>
            </ul>
        </article>

    )
}

export default Techs; 