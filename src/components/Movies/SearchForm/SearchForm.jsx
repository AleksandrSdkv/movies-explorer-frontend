import React from 'react';
import './searchform.css';
import { Formik, Field, Form } from "formik";
import BasicFormSchema from '../../../validation/validSchema'

function SearchForm() {
    return (

        <section className='searchform'>

            <div className="searchform__container">
                <Formik

                    //инициализируем значения input-ов
                    initialValues={{
                        nameFilm: ""
                    }}

                    validationSchema={BasicFormSchema}
                >
                    {({ errors, touched }) => (
                        <Form className='searchform__form'>
                            <div className="SearchForm__error">
                                {errors.nameFilm &&
                                    touched.nameFilm && <div className="SearchForm__error">{errors.nameFilm}</div>}
                            </div>
                            <Field className='searchform__input' type="text" name='nameFilm' placeholder="Фильм" />

                            <button className='searchform__button' type="submit"></button>

                        </Form>)}
                </ Formik>
            </div>

            <label className="searchform__toggle">
                <input className="searchform__toggle-checkbox" type="checkbox" />

                <div className="searchform__toggle-switch"></div>
                <span className="searchform__toggle-label">Короткометражки</span>
            </label>
        </section >

    )
}

export default SearchForm; 