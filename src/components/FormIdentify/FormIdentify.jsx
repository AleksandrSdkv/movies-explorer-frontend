import './FormIdentify.css';

import { useField } from "formik";



const FormIdentify = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>


            <label htmlFor={props.id || props.name} className='FormIdentify__label'><p className='FormIdentify__label-text'>{label}</p></label>
            <input className='FormIdentify__input' {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="FormIdentify__input__error">{meta.error}</div>
            ) : null}
        </>
    );
    // <Formik

    //     //инициализируем значения input-ов
    //     initialValues={{
    //         email: "",
    //         username: "",
    //         password: ""
    //     }}
    //  
    // >
    //     {({ errors, touched }) => (
    //         <Form className='FormIdentify__form'>

    //            


    //             {props.children}

    //             <div className={`FormIdentify__input__error${props.error}`}>
    //                 {errors.username && touched.username && <div className="FormIdentify__input__error">{errors.username}</div>}
    //             </div>

    //             <label className='FormIdentify__label'><p className='FormIdentify__label-text'>E-mail</p>
    //                 <Field className='FormIdentify__input' type='email' name='email' placeholder="E-mail" />
    //             </label>

    //             <div className="FormIdentify__input__error-t">
    //                 {errors.email &&
    //                     touched.email && <div className="FormIdentify__input__error">{errors.email}</div>}
    //             </div>

    //             <label className='FormIdentify__label'><p className='FormIdentify__label-text'>Пароль</p>
    //                 <Field className='FormIdentify__input' type='password' name='password' placeholder="Password" />
    //             </label>

    //             <div className="FormIdentify__input__error-t">
    //                 {errors.password &&
    //                     touched.password && <div className="FormIdentify__input__error">{errors.password}</div>}
    //             </div>

    //             <button type='submit' className={`FormIdentify__button ${props.btnLog}`}>{props.btn}</button>
    //             <Link to={props.link} className="FormIdentify__link-text">{props.linkText} <p className="FormIdentify__move-text">{props.moveText}</p> </Link>

    //         </Form>
    //     )}
    // </Formik>
};
export default FormIdentify;