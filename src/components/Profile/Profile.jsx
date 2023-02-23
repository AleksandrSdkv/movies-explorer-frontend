import './Profile.css'
import Header from '../Header/Header';
import { Formik, Field, Form } from "formik";
import { useAuth } from '../../hook/useAuth';
import { SchemaForProfile } from '../../validation/SchemaForProfile'
import { useState} from 'react';
function Profile() {
    const { userData, handleUpdateUser, signOut } = useAuth();
    const { name, email } = userData;
    const [valid, isValid] = useState({ name: name, email: email })
    const [success, setSuccess] = useState('Profile__success_hidden');
    
    const onSubmit = (values) => {
        const btn = document.querySelector('.Profile__input-btn');
        btn.setAttribute('disabled', true);
        isValid(values.username, values.email);
        handleUpdateUser(values, app);
    };
    const a = (values) => {
        console.log(values)
        const btn = document.querySelector('.Profile__input-btn');
        btn.setAttribute('disabled', false);
    };
    const handlerLogOut = () => {
        signOut();
    };
    const app = () => {
        setSuccess('Profile__success_visible');
    };
    return (<>
        <Header />
        <Formik
            initialValues={{
                username: valid.name,
                email: valid.email
            }}
            validationSchema={SchemaForProfile}
            onSubmit={onSubmit}
            handleChange={a}
        >
            {({ errors, touched, isValid, dirty }) => (
                <div className="Profile">
                    <Form className='Profile__form' >
                        <fieldset className='Profile__fieldset'>
                            <h2 className='Profile__header'>Привет, {name}!</h2>
                            <label className='Profile__label Profile__label-name'>
                                Имя
                                <Field className='Profile__input' type="text" name='username' />
                            </label>
                            <span className='Profile__input-error'>
                                {errors.username &&
                                    touched.username && <div className="Profile__input-error">{errors.username}</div>}
                            </span>
                            <label className='Profile__label'>
                                E-mail
                                <Field className='Profile__input' type="email" name='email' />
                            </label>
                            <span className='Profile__input-error'>
                                {errors.email &&
                                    touched.email && <div className="Profile__input-error">{errors.email}</div>}
                            </span>
                            <button type='submit' disabled={!(dirty && isValid)} className={'Profile__input-btn'}>Редактировать</button>
                            <span className={success}>Данные успешно обновленны!</span>
                            <button onClick={handlerLogOut} className='Profile__out-btn' type='button'>Выйти из аккаунта</button>
                        </fieldset>
                    </Form>
                </div>
            )}
        </Formik>
    </>
    )
}
export default Profile; 