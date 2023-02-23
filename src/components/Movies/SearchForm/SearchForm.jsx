import './searchform.css';
import { Formik, Field, Form, useField } from "formik";
import { SchemaForSearch } from '../../../validation/SchemaForSearch';
import { useState } from 'react';
import { useAuth } from '../../../hook/useAuth';

function SearchForm({ filter }) {
    const { location } = useAuth();

    const [stateInput, setStateInput] = useState('');
    const valueCheckBox = location.pathname === '/movies' && localStorage.getItem('valueCheck') === 'true';
    const valueInput = location.pathname === '/movies' && localStorage.getItem('valueSubmit');

    const onSubmit = (values) => {

        if (location.pathname === '/movies') {
            localStorage.setItem('valueSubmit', values.filmName);
        }

        setStateInput(values.filmName);
        filter(values.filmName, values.acceptedTerms);
    }

    const handleChange = (values) => {

        if (location.pathname === '/movies') {
            localStorage.setItem('valueCheck', values.target.checked);
        }


        filter(stateInput, values.target.checked);

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
        <Formik
            initialValues={{
                filmName: valueInput || '',
                acceptedTerms: valueCheckBox || false
            }}
            validationSchema={SchemaForSearch}
            onSubmit={onSubmit}
            onChange={(e, event) => {
                handleChange({ ...event, target: { name: 'acceptedTerms', value: e } })
            }}
        >
            {({ errors, touched }) => (

                <Form className="searchform" >
                    <section className='searchform__container'>
                        <div className="SearchForm__error" >
                            {errors.filmName &&
                                touched.filmName && <div className="SearchForm__error">{errors.filmName}</div>}
                        </div>
                        <Field className='searchform__input' type="text" name='filmName' placeholder="Фильм" />
                        <button className='searchform__button' type="submit"></button>
                    </section >
                    <CheckBox name="acceptedTerms"  >
                        <div className="searchform__toggle-switch"></div>
                        <span className="searchform__toggle-label">Короткометражки</span>
                    </CheckBox>
                </Form>)}
        </ Formik>
    )
}

export default SearchForm;


