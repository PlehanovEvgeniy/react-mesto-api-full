import React, {useState, useEffect, useContext} from 'react';
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

const EditProfilePopup = ({isOpen, onClose, onUpdateUser}) => {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    const handleChangeName = (evt) => {
        setName(evt.target.value);
    }

    const handleChangeDescription = (evt) => {
        setDescription(evt.target.value);
    }

    const handleSubmit = (e) => {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
          name,
          about: description,
        });
      } 

    return(
        <PopupWithForm
            title={"Редактировать профиль"}
            name={"type_edit"}
            textBtn={"Сохранить"}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <fieldset className="form__content form__user-info">
                <input value={name || ''} onChange={handleChangeName} className="form__item form__item_type_name" type="text" name="name" placeholder="Имя"
                    minLength="2" maxLength="40" id="user-name" noValidate required/>
                <span id="user-name-error" className="form__item-error"/>
                <input value={description || ''} onChange={handleChangeDescription} className="form__item form__item_type_job" type="text" name="prof"
                    placeholder="Вид деятельности" minLength="2" maxLength="200" id="user-job" noValidate
                    required/>
                <span id="user-job-error" className="form__item-error"/>
            </fieldset>
        </PopupWithForm>
    );
}

export default EditProfilePopup;