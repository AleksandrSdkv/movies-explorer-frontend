import React from 'react';
import FormIdentify from '../FormIdentify/FormIdentify';
import './Register.css';
import { Link } from 'react-router-dom';
import { Formik, Form, } from "formik";
import BasicFormSchema from '../../validation/validSchema';
const Register = (values) => {

    return (
        <main className="Register">

            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',

                }}
                validationSchema={BasicFormSchema}
                onSubmit={
                    console.log('Form data', values)
                }
            >

                <Form className='FormIdentify__form'>
                    <div className='Register__header'>
                        <Link to='/' > <div className='Register__logo'></div> </Link> <h1 className='Register__header-text'>Добро пожаловать!</h1></div>
                    <FormIdentify
                        label="Имя"
                        name="username"
                        type="text"
                        placeholder="Введите имя"
                        className='FormIdentify__input'
                        value={values.username}
                    />
                    <FormIdentify
                        label="E-mail"
                        name="email"
                        type="email"
                        placeholder="Введите почту"
                        className='FormIdentify__input'
                    />

                    <FormIdentify
                        label="Пароль"
                        name="password"
                        type="text"
                        placeholder="Введите пароль"
                        className='FormIdentify__input'
                    />
                    <button type='submit' className={`FormIdentify__button `}>Зарегистрироваться</button>
                    <Link to='/signin' className="FormIdentify__link-text">Уже зарегистрированы? <p className="FormIdentify__move-text">Войти</p> </Link>
                </Form>


            </Formik>
        </main>
    );
};
export default Register;
// /*
//                 <FormIdentify
//                 link='/signin'
//                 linkText='Уже зарегистрированы?'
//                 moveText='Войти'
//                 btn='Зарегистрироваться'
//                 headerText='Добро пожаловать!'
//                 error="-t"
//             >
//                 <label className='FormIdentify__label'><p className='FormIdentify__label-text'> Имя</p>
//                     <Field className='FormIdentify__input' type="text" name="username" placeholder="Username" />

//                 </label>
//             </FormIdentify>

//         </div >
//     )
// }

// export default Register; * /
