import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import delete_svg from "../images/delete.svg";
import like_svg from "../images/like.svg";

const Card = ({card, onCardClick, onCardLike, onCardDelete}) => {

    const currentUser = React.useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `element__delete ${isOwn ? '' : 'element__delete-hidden'}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `element__like ${isLiked ? 'button_clicked' : ''}`;

    const handleClick = () => {
        onCardClick(card);
    }

    const handleLikeClick = () => {
        onCardLike(card);
    }

    const handleDeleteClick = () => {
        onCardDelete(card);
    }



    return(
        <li className="element">
            <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}>
                <img className="element__delete-image" src={delete_svg} alt="Кнопка удалить" />
            </button>
            <img className="element__image" src={card.link} alt="Карачаево-Черкесск" onClick={handleClick}/>
            <div className="element__description">
                <h2 className="element__text">{card.name}</h2>
                <div className="element__like-conteiner">
                    <button type="button" className="element__button" onClick={handleLikeClick} >
                        <img className={cardLikeButtonClassName} src={like_svg} alt="Лайк" />
                    </button>
                    <span className="element__like-count">{card.likes.length}</span>
                </div>
            </div>
        </li>
    );
}

export default Card