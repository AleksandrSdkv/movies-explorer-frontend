import React from 'react';
import './searchform.css';
import { Formik, Field, Form, useField } from "formik";
import * as Yup from 'yup'
import { useState } from 'react';


function SearchForm({ filter }) {
    const [state, setstate] = useState('');
    // Валидация с библиотекой Yup
    const SchemaForLogin = Yup.object().shape({
        filmName: Yup.string()
            .required("Пожжалуйста, введите ключевое слово"),
    });

    // Обработчик который оправляет содержание input's в App
    const onSubmit = (values) => {
        setstate(values.filmName)
        filter(values.filmName, values.acceptedTerms)
    }
    const handleChange = (values) => {
        if (state.length !== 0) {
            filter(state, values.target.checked)
        }
    }

    const CheckBox = ({ children, ...props }) => {
        const [field] = useField({ ...props, type: 'checkbox' });
        return (

            <label className="searchform__toggle">
                <input className="searchform__toggle-checkbox" type="checkbox"{...field} {...props} onClick={handleChange} />
                {children}
            </label>


        );
    };

    return (
        <section className='searchform'>

            <div className="searchform__container">
                <Formik
                    initialValues={{
                        filmName: '',
                        acceptedTerms: false,
                    }}
                    validationSchema={SchemaForLogin}
                    onSubmit={onSubmit}
                    onChange={(e, event) => {
                        handleChange({ ...event, target: { name: 'acceptedTerms', value: e } })
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className='searchform__form' >
                            <div className="SearchForm__error" >
                                {errors.filmName &&
                                    touched.filmName && <div className="SearchForm__error">{errors.filmName}</div>}
                            </div>
                            <Field className='searchform__input' type="text" name='filmName' placeholder="Фильм" />

                            <button className='searchform__button' type="submit"></button>
                            <CheckBox name="acceptedTerms">
                                <div className="searchform__toggle-switch"></div>
                                <span className="searchform__toggle-label">Короткометражки</span>
                            </CheckBox>
                        </Form>)}
                </ Formik>
            </div>
        </section >
    )
}

export default SearchForm;


