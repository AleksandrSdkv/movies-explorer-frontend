import './Profile.css'
import Header from '../Header/Header';
import { Formik, Field, Form } from "formik";
import { useAuth } from '../../hook/useAuth';

function Profile() {
    const { userData, handleUpdateUser } = useAuth();
    const { name, email } = userData;
    console.log(name)
    // console.log(setUserData())
    const onSubmit = (values) => {

        console.log(values)

        handleUpdateUser(values);
    }

    return (<>
        <Header />

        <Formik

            initialValues={{
                username: name,
                email: email,
            }}
            // validationSchema={SchemaForLogin}
            onSubmit={onSubmit}
        >
            {props => (
                <div className="Profile">
                    <Form className='Profile__form' >
                        <fieldset className='Profile__fieldset'>
                            <h2 className='Profile__header'>Привет, {name}!</h2>
                            <label className='Profile__label Profile__label-name'>
                                Имя
                                <Field className='Profile__input' type="text" name='username' />
                            </label>

                            <label className='Profile__label'>
                                E-mail
                                <Field className='Profile__input' type="email" name='email' />

                            </label>
                            <button type='submit' disabled={!props.isValid} className={'Profile__input-btn'}>Редактировать</button>
                            <button className='Profile__out-btn' type='button'>Выйти из аккаунта</button>
                        </fieldset>
                    </Form>
                </div>
            )}
        </Formik>
    </>
    )
}
export default Profile; 