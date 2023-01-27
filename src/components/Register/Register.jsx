import React from 'react';
import FormIdentify from '../FormIdentify/FormIdentify';
import './Register.css';
import { Field } from "formik";

function Register() {
    return (
        <div className="Register">



            <FormIdentify
                link='/signin'
                linkText='Уже зарегистрированы?'
                moveText='Войти'
                btn='Зарегистрироваться'
                headerText='Добро пожаловать!'
                error="-t"
            >
                <label className='FormIdentify__label'><p className='FormIdentify__label-text'> Имя</p>
                    <Field className='FormIdentify__input' type="text" name="username" placeholder="Username" />

                </label>
            </FormIdentify>

        </div >
    )
}

export default Register;