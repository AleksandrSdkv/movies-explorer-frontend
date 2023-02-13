import * as Yup from 'yup'

export const SchemaForProfile = Yup.object().shape({
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
});