import React from 'react';
import './about-project.css';
import './__heading/about-project__heading.css';
import './__info/about-project__info.css';
import './__part/about-project__part.css';

function AboutProject() {
    return (
        <section className="about-project">

            <h2 className='about-project__heading'>О проекте </h2>

            <div className='about-project__info'>
                <div className='about-project__info-part'>
                    <h1 className='about-project__info-heading'>Дипломный проект включал 5 этапов</h1>
                    <p className='about-project__info-paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__info-part'>
                    <h1 className='about-project__info-heading'>На выполнение диплома ушло 5 недель</h1>
                    <p className='about-project__info-paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className='about-project__part'>
                <div className='about-project__part-front'>
                    <p className='about-project__part-week about-project__part-week_type_back'>1 неделя</p>
                    <p className='about-project__part-stage'>Back-end</p>
                </div>
                <div className='about-project__part-back'>
                    <p className='about-project__part-week about-project__part-week_type_front'>4 недели</p>
                    <p className='about-project__part-stage'>Front-end</p>
                </div>
            </div>

        </section >
    )
}

export default AboutProject; 