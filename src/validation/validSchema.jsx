import * as Yup from "yup";

const SchemaForRegister = Yup.object().shape({
    email: Yup.string()
        //Проверяем, корректный ли адрес.
        //Если нет, то выводится сообщение в скобках
        .email("Е-mail адрес не корректен")

        .required("Пожалуйста, введите E-mail"),
    username: Yup.string()
        .required("Пожалуйста, введите имя")
        .min(2, (obj) => {
            const valueLength = obj.value.length;
            return `Введено ${valueLength} из 2 необходимых символов.`;
        })
        //максимальная длина - 20 символов
        .max(20, "Максимум 20 символов"),
    password: Yup.string()
        .min(8, (obj) => {
            const valueLength = obj.value.length;
            return `Введено ${valueLength} из 8 необходимых символов.`;
        })
        .required("Пожалуйста, введите пароль"),

});
export default SchemaForRegister;


