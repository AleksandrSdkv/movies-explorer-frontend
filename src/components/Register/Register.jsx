import React from 'react';
import FormIdentify from '../FormIdentify/FormIdentify';
import './Register.css';
import { Link } from 'react-router-dom';
import { Formik, Form, } from "formik";
import SchemaForRegister from '../../validation/validSchema';

const Register = () => {
    const onSubmit = (values, submitProps) => {
        console.log(values)
        submitProps.resetForm()
    }
    return (
        <main className="Register">
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                }}
                validationSchema={SchemaForRegister}
                onSubmit={onSubmit}
            >
                {props => (

                    <Form className='FormIdentify__form' >
                        <div className='Register__header'>
                            <Link to='/' > <div className='Register__logo'></div> </Link> <h1 className='Register__header-text'>Добро пожаловать!</h1></div>
                        <FormIdentify
                            label="Имя"
                            name="username"
                            type="text"
                            placeholder="Введите имя"
                            className='FormIdentify__input'
                            {...props.getFieldProps('username')}
                        />
                        <FormIdentify
                            label="E-mail"
                            name="email"
                            type="email"
                            placeholder="Введите почту"
                            className='FormIdentify__input'
                            {...props.getFieldProps('email')}
                        />
                        <FormIdentify
                            label="Пароль"
                            name="password"
                            type="text"
                            placeholder="Введите пароль"
                            className='FormIdentify__input'
                            {...props.getFieldProps('password')}
                        />
                        <button type='submit' disabled={!props.isValid} className={!(props.dirty && props.isValid) ? `${'FormIdentify__button_inactive'}` : `${'FormIdentify__button'}`}>Зарегистрироваться</button>
                        <Link to='/signin' className="FormIdentify__link-text">Уже зарегистрированы? <p className="FormIdentify__move-text">Войти</p> </Link>
                    </Form>
                )}
            </Formik>
        </main >
    );
};
export default Register;
