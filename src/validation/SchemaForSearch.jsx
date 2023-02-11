import * as Yup from 'yup'
export const SchemaForSearch = Yup.object().shape({
    filmName: Yup.string()
        .required("Пожжалуйста, введите ключевое слово"),
});