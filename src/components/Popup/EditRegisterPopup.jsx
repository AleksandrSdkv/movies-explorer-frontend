
import PopupWithError from './PopupWithError';
import '../Popup/popup/popup.css'
import '../Popup/form/form__article.css'
import React from 'react';
export default function EditRegisterPopup(props) {
    const { popupOpen, popupClose } = props

    return (
        <PopupWithError
            name='Article'
            title='При регистрации произошла ошибка!'
            popupOpen={popupOpen}
            popupClose={popupClose}
        >
        </PopupWithError>
    )
}
