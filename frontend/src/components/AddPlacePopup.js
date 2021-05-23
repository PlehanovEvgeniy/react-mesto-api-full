import React, {useState} from 'react';
import PopupWithForm from '../components/PopupWithForm';

const AddPlacePopup = ({isOpen, onClose, onAddPlace}) => {
    
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const handleChangeName = (evt) => {
        setName(evt.target.value);
    }

    const handleChangeLink = (evt) => {
        setLink(evt.target.value);
    }

    const handleSubmit = (e) => {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        onAddPlace({
          name, link          
        });
    }

    return(
        <PopupWithForm
            title={"Новое место"}
            name={"type_add"}
            textBtn={"Создать"}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <fieldset className="form__content form__add-card">
                <input value={name || ''} onChange={handleChangeName} className="form__item form__item_type_card-name" type="text" name="name"
                    placeholder="Название" minLength="2" maxLength="30" id="card-name" noValidate required/>
                <span id="card-name-error" className="form__item-error"/>
                <input value={link || ''} onChange={handleChangeLink} className="form__item form__item_type_card-link" type="url" name="link"
                    placeholder="Ссылка на картинку" id="card-link" noValidate required/>
                <span id="card-link-error" className="form__item-error"/>
            </fieldset>
        </PopupWithForm>
    )
}

export default AddPlacePopup;