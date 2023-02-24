import confirmNO from '../../images/img-confirm-NO.png'
export default function PopupWithError(props) {
    const { popupOpen, name, title, popupClose } = props
    return (
        <div className={`popup popup_type_${name} ${popupOpen}`} >
            <div className="popup__container">
                <button className="popup__button-close popup__close" type="button" onClick={popupClose}></button>
                <img
                    className="popup__tooltip"
                    alt={'Неудачно'}
                    src={confirmNO}
                />
                <h2 className="form__title">{title}</h2>

            </div>
        </ div >
    )
}


