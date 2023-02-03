import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
    email: Yup.string()
        //Проверяем, корректный ли адрес.
        //Если нет, то выводится сообщение в скобках
        .email("Е-mail адрес не корректен")
        //не сабмитим, если поле не заполнено
        .required("Required"),
    username: Yup.string()
        //минимальная длина - 2 символа
        .min(2, "Минимум 2 символа")
        //максимальная длина - 20 символов
        .max(20, "Максимум 20 символов")
        .required("Required"),
    password: Yup.string()
        .min(8, "Минимум 8 символов")
        .required("Required")
});
export default BasicFormSchema;