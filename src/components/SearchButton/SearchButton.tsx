import React from "react";
import search from '../../assets/search-white.svg';
import './style.scss';
import { ImageWrap } from "../ImageWrap/ImageWrap";

export const SearchButton = () => {
    return (
        <button className="section__button" type="submit">
            <ImageWrap img={search} alt="search icon" />
            <span className="section__button-text">
                Поиск
            </span>
        </button>
    )
};