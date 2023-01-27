import React from 'react';
import './Profile.css'
import Header from '../Header/Header';
function Profile() {
    return (<>
        <Header />
        <div className="Profile">
            <h2 className='Profile__header'>Привет, Александр!</h2>
            <form className='Profile__form' >
                <fieldset className='Profile__fieldset'>

                    <label className='Profile__label Profile__label-name'>
                        Имя
                        <input className='Profile__input' type="name" value="Александр" />
                    </label>

                    <label className='Profile__label'>
                        E-mail
                        <input className='Profile__input' type="email" value="Exp2233@yandex.ru" />
                    </label>

                    <button className='Profile__input-btn' type='submit'>Редактировать</button>

                </fieldset>
            </form>
            <button className='Profile__out-btn' type='button'>Выйти из аккаунта</button>
        </div>

    </>
    )
}

export default Profile; 