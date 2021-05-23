import React from 'react';

const ImagePopup = ({card, isOpen, onClose}) => {

    let popupIsVisible = isOpen ? 'popup_opened' : '';

    return (
        <div className={`popup popup_type_image ${popupIsVisible}`}>
            <div className="popup__image-container">
                <img className="popup__image" src={card && card.link} alt={card && card.name} />
                <h3 className="popup__image-title">{card && card.name}</h3>
                <button className="button button_type_close" type="button" aria-label="Закрыть" onClick={onClose}/>
            </div>
        </div>
    );
}

export default ImagePopup