import React from "react";
import './style.scss';
import logo from '../../assets/logo.svg';
import person from '../../assets/person.svg';

export const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a className="header__link" href="/">
                    <div className="logo__img">
                        <img src={logo} alt=" wrench picture" />
                    </div>
                    <h2 className="logo__text">Wrench CRM</h2>
                </a>
            </div>
            <div className="user">
                <a className="header__link" href="/">
                    <div className="user__img">
                        <img src={person} alt='picture with user' />
                    </div>
                    <p className="user__text">
                        Имя Фамилия
                    </p>
                </a>
            </div>
        </header>
    );
};