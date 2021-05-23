import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo_mesto_img from "../images/logo_mesto.svg"

const Header = ({userEmail, onSignOut}) => {

    const location = useLocation();

    return (
        <header className="header">
            <a className="logo" href="/" target="_blank">
                <img className="logo__picture" src={logo_mesto_img} alt="Логотип Место" />
            </a>
            <div className="header__links">
                <p className="header__link header__link_email">
                    {
                        location.pathname === "/" ? userEmail : ""
                    }
                </p>
                <Link to={
                    location.pathname === "/sign-up" ? "/sign-in" : location.pathname === "/sign-in" ? "/sign-up" : "/sign-in"
                }
                className="header__link header__link_logout" onClick={location.pathname === "/" ? onSignOut : () => {}}>
                    {
                        location.pathname === "/sign-up" ? "Вход" : location.pathname === "/sign-in" ? "Регистрация" : "Выйти"
                    }
                </Link>
            </div>
        </header>
    );
}

export default Header