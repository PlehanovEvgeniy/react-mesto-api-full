import React, {useRef} from 'react';
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({isOpen, onClose, onUpdateAvatar}) => {

    const linkRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: linkRef.current.value,
        });
      } 

    return(
        <PopupWithForm
            title={"Обновить аватар"}
            name={"avatar-image"}
            textBtn={"Сохранить"}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <fieldset className="form__content form__avatar-info">
                <input name="avatar" ref={linkRef} id="user-avatar" className="form__item form__item_type_card-name" placeholder="Ссылка на картинку" type="url" noValidate required />
                <span id="user-avatar-error" className="form__item-error"/>
            </fieldset>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;