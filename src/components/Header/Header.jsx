import React from 'react';
import { useState, useEffect } from 'react';
import './Header.css';
import './Header__profile.css';
import '../delete-button/_type/delete-button_type_nav.css'
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';


function Header() {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);


    const [buttonMenu, setButtonMenu] = useState('delete-button_type_nav-close');
    const [isChangeMenu, setIsChangeMenu] = useState('header__nav_hidden');


    function handleBurgerClick() {
        setIsNavBarOpen(!isNavBarOpen)
    }
    useEffect(() => {
        if (isNavBarOpen) {
            setIsChangeMenu('Header__menu_nav')
            setButtonMenu("delete-button_type_nav");

        } else {
            setIsChangeMenu('header__nav_hidden')
            setButtonMenu('delete-button_type_nav-close');

        }
    }, [isNavBarOpen]);
    let location = useLocation();
    return (
        <>
            {
                location.pathname === '/' ?

                    <div className='Header'>
                        <div className='Header__logo' />
                        <div className='Header__auth'>
                            <Link to="/signup" className='Header__text Header__sign-in'>Регистрация</Link>

                            <Link to="/signin" className='Header__text Header__text-sign-up'>Войти</Link>
                        </div>
                    </div>

                    : // Использован тернарный оператор для отрисовки хэдера

                    <div className='Header'>
                        <Link to='/' className='Header__logo'></Link>
                        <Navigation />
                        <div className='Header__profile'>
                            <Link className='Header__profile-link' to='/profile'>Аккаунт</Link>
                            <div className='Header__profile-svg'>
                                <div className='Header__profile-svg-svg'></div>
                            </div>

                        </div>


                        <nav className={isChangeMenu}>
                            <button className={buttonMenu} onClick={handleBurgerClick}>
                                <div className='delete-button_type_nav-svg' ></div>
                            </button>
                            <div className='Header__profile_nav-bar'>
                                <Link className='Header__profile-link_type_burger' to='/profile'>Аккаунт</Link>
                                <div className='Header__profile-svg'>
                                    <div className='Header__profile-svg-svg'></div>
                                </div>

                            </div>
                            <ul className='Header_ul_nav'>
                                <Link to={"/"} className='Header__menu-list'> Главная</Link>
                                <Link to={"/movies"} className='line Header__menu-list '>Фильмы</Link>

                                <div>
                                    <Link to={'/saved-movies'} className='Header__menu-list'>Сохраненные фильмы</Link></div></ul>
                        </nav>
                        <button className={'Header__nav-bar'} onClick={handleBurgerClick}></button>
                    </div>

            }
        </>
    )
}
export default Header; 