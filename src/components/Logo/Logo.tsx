import React from "react";
import './style.scss';
import logo from '../../assets/logo.svg';
import { Link } from "react-router-dom";
import { ImageWrap } from "../ImageWrap/ImageWrap";

export const Logo = () => {
    return (
        <div className="logo">
            <Link className="header__link" to="/">
                <ImageWrap classNames={'logo__img'} img={logo} alt="wrench logo" />
                <h2 className="logo__text">Wrench CRM</h2>
            </Link>
        </div>
    );
};