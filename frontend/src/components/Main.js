import React from 'react';
import edit_button_img from "../images/Edit_button.svg";
import add_button_img from "../images/Add_Button-vector.svg";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) => {

    const currentUser = React.useContext(CurrentUserContext);
          
    return (
    <main className="main">
        <section className="profile">
            <button type="button" className="profile__avatar-button" onClick={onEditAvatar}>
                <div className="profile__avatar-edit-button-container">
                    <img className="profile__avatar-edit-button" src={edit_button_img} alt="Кнопка Редактировать"/>
                </div>
                <img className="profile__avatar" src={currentUser.avatar} alt="Фото пользователя" />
            </button>
            <div className="profile__info">
                <h1 id="name" className="profile__title">{currentUser.name}</h1>
                <button type="button" className="profile__edit-button" onClick={onEditProfile}>
                    <img className="profile__edit-button-image" src={edit_button_img} alt="Кнопка редактировать" />
                </button>
                <p id="prof" className="profile__subtitle">{currentUser.about}</p>
            </div>
            <button type="button" className="profile__add-button" onClick={onAddPlace}>
                <img className="profile__add-button-image" src={add_button_img} alt="Кнопка добавить" />
            </button>
        </section>
        <section className="elements">
            <ul className="elements__container">
                {cards.map((card, index) => {
                    return <Card
                        key={index}
                        card={card}
                        onCardClick={onCardClick}
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}
                    />
                })}
            </ul>
        </section>
    </main>
    );
}

export default Main