import React from 'react';
import './about-me.css';
import './__about/about-me__about.css';
import './__photo/about-me__photo.css';
import './__wrapper/about-me__wrapper.css';
import avatar from '../../../images/imgonline.png';

function AboutMe() {
    return (

        <section className='about-me'>
            <div className='about-me__heading'>Студент</div>
            <div className='about-me__wrapper'>
                <div className='about-me__container'>
                    <h3 className='about-me__about-name'>Александр</h3>
                    <p className='about-me__about-age'>Фронтенд-разработчик, 25 лет</p>
                    <p className='about-me__about-about'>Живу в Казани. Однажды решил в отрыве от основной работы расширить свой кругозор и углубиться в
                        сферу IT-технологий ознакомившись с языками программирования и СУБД.
                        Определившись с направлением и осознав, что интерес не пропал, продолжаю обучение в
                        Я.Практикуме, читаю профильные книги, участвую в создании реальных проектов
                        совместно с другими студентами Я.Практикума, посещаю онлайн конференции.</p>
                    <a href='https://github.com/AleksandrSdkv' target="_blank" rel="noopener noreferrer" className='about-me__about-git'>Github</a>

                </div>
                <div className='about-me__photo-wrapper'>
                    <img className='about-me__photo' src={avatar} alt="Фото студента" />
                </div>
            </div>


        </section>

    )
}

export default AboutMe; 