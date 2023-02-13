import * as Yup from 'yup'

export const SchemaForLogin = Yup.object().shape({
    email: Yup.string()
        .email("Е-mail адрес не корректен")
        .required("Пожалуйста, введите E-mail"),
    password: Yup.string()
        .min(8, (obj) => {
            const valueLength = obj.value.length;
            return `Введено ${valueLength} из 8 необходимых символов.`;
        })
        .required("Пожалуйста, введите пароль"),

});