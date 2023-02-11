import FormIdentify from '../FormIdentify/FormIdentify';
import './Login.css';
import { Link } from 'react-router-dom';
import { Formik, Form, } from "formik";
import { useAuth } from '../../hook/useAuth';
import { SchemaForLogin } from '../../validation/SchemaForLogin'

function Login() {
    const { handleLogin } = useAuth();

    const onSubmit = (values, submitProps) => {
        const { email, password } = values;
        handleLogin(email, password);
        submitProps.resetForm();
    }
    return (
        <main className="Login">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={SchemaForLogin}
                onSubmit={onSubmit}
            >
                {props => (

                    <Form className='FormIdentify__form' >
                        <div className='Register__header'>
                            <Link to='/' > <div className='Register__logo'></div> </Link> <h1 className='Register__header-text'>Добро пожаловать!</h1></div>

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
                            type="password"
                            placeholder="Введите пароль"
                            className='FormIdentify__input'
                            {...props.getFieldProps('password')}
                        />
                        <button type='submit' disabled={!props.isValid} className={!(props.dirty && props.isValid) ? `${'FormIdentify__button_inactive'}` : `${'FormIdentify__button'}`}>Войти</button>
                        <Link to='/signup' className="FormIdentify__link-text">Ещё не зарегистрированы? <p className="FormIdentify__move-text">Регистрация</p> </Link>
                    </Form>
                )}
            </Formik>
        </main >
    )
}
export default Login; 