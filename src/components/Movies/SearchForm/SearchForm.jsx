import React from 'react';
import './searchform.css';
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup'

function SearchForm({ showFilm }) {
    // Валидация с библиотекой Yup
    const SchemaForLogin = Yup.object().shape({
        filmName: Yup.string()
            .required("Пожжалуйста, введите ключевое слово"),
    });

    // Обработчик который оправляет содержание input's в App
    const onSubmit = (values, submitProps) => {
        showFilm(values)
        submitProps.resetForm()

    }

    const onChange = () => {
        console.log('dasdasd')
    }
    return (

        <section className='searchform'>

            <div className="searchform__container">
                <Formik
                    initialValues={{
                        filmName: '',
                    }}
                    validationSchema={SchemaForLogin}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched }) => (
                        <Form className='searchform__form' >
                            <div className="SearchForm__error" >
                                {errors.filmName &&
                                    touched.filmName && <div className="SearchForm__error">{errors.filmName}</div>}
                            </div>
                            <Field className='searchform__input' type="text" name='filmName' placeholder="Фильм" />

                            <button className='searchform__button' type="submit"></button>

                        </Form>)}
                </ Formik>
            </div>

            <label className="searchform__toggle">
                <input className="searchform__toggle-checkbox" type="checkbox" onChange={onChange} />

                <div className="searchform__toggle-switch"></div>
                <span className="searchform__toggle-label">Короткометражки</span>
            </label>
        </section >
    )
}

export default SearchForm; 