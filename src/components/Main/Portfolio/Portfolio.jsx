import React from 'react';
import './Portfolio.css';


function Portfolio() {
    return (

        <section className='Portfolio'>
            <p className='Portfolio__header'>Портфолио</p>
            <div className='Portfolio__website Portfolio__website_type_border'>
                <a href='https://how-to-learn-henna-eight.vercel.app/' target="_blank" rel="noopener noreferrer" className='Portfolio__website-paragraph'>Статичный сайт <div className='Portfolio__web-svg'></div></a>

            </div>
            <div className='Portfolio__website Portfolio__website_type_border'>
                <a href='https://aleksandrsdkv.github.io/y.praktikum.russian-travel/' target="_blank" rel="noopener noreferrer" className='Portfolio__website-paragraph'>Адаптивный сайт  <div className='Portfolio__web-svg'></div></a>

            </div>
            <div className='Portfolio__website'>
                <a href='https://domainname.projmesto.nomoredomains.club/sign-in' target="_blank" rel="noopener noreferrer" className='Portfolio__website-paragraph'>Одностраничное приложение   <div className='Portfolio__web-svg'></div></a>

            </div>

        </section>

    )
}

export default Portfolio; 