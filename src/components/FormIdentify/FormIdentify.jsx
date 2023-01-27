import './FormIdentify.css';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from "formik";
import BasicFormSchema from '../../validation/validSchema'


const FormIdentify = (props) => (
    <Formik

        //инициализируем значения input-ов
        initialValues={{
            email: "",
            username: "",
            password: ""
        }}
        validationSchema={BasicFormSchema}
    >
        {({ errors, touched }) => (
            <Form className='FormIdentify__form'>

                <div className='Register__header'>  <Link to='/' > <div className='Register__logo'></div> </Link> <h1 className='Register__header-text'>{props.headerText}</h1></div>


                {props.children}

                <div className={`FormIdentify__input__error${props.error}`}>
                    {errors.username && touched.username && <div className="FormIdentify__input__error">{errors.username}</div>}
                </div>

                <label className='FormIdentify__label'><p className='FormIdentify__label-text'>E-mail</p>
                    <Field className='FormIdentify__input' type='email' name='email' placeholder="E-mail" />
                </label>

                <div className="FormIdentify__input__error-t">
                    {errors.email &&
                        touched.email && <div className="FormIdentify__input__error">{errors.email}</div>}
                </div>

                <label className='FormIdentify__label'><p className='FormIdentify__label-text'>Пароль</p>
                    <Field className='FormIdentify__input' type='password' name='password' placeholder="Password"/>
                </label>

                <div className="FormIdentify__input__error-t">
                    {errors.password &&
                        touched.password && <div className="FormIdentify__input__error">{errors.password}</div>}
                </div>

                <button type='submit' className={`FormIdentify__button ${props.btnLog}`}>{props.btn}</button>
                <Link to={props.link} className="FormIdentify__link-text">{props.linkText} <p className="FormIdentify__move-text">{props.moveText}</p> </Link>

            </Form>
        )}
    </Formik>
);
export default FormIdentify;