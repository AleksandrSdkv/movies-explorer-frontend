import './FormIdentify.css';

import { useField } from "formik";



const FormIdentify = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}><p className='FormIdentify__label-text'>{label}</p></label>
            <input className='FormIdentify__input' {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="FormIdentify__input__error">{meta.error}</div>
            ) : null}
        </>
    );

};
export default FormIdentify;