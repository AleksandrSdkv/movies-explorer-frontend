import React from 'react';
import FormIdentify from '../FormIdentify/FormIdentify';
import './Login.css';


function Login() {
    return (
        <main className="Login">
            <FormIdentify
                link='/signup'
                linkText='Ещё не зарегистрированы?'
                moveText='Регистрация'
                btn='Войти'
                headerText='Рады видеть!'
                btnLog="FormIdentify__button-log"
            >
            </FormIdentify>

        </main >
    )
}

export default Login; 