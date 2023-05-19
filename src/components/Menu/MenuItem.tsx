import React from "react";
import { Link } from "react-router-dom";
import { MenuItemProps } from "./interface";

export const MenuItem = ({data, isActive, setCurrentIndex}: MenuItemProps) => {
    return (
        <li className={`menu__item ${isActive && 'menu__item--active'}`}>
            <Link to={data.url || '/'} className="menu__link" onClick={() => setCurrentIndex(data.id || 0)}>
                <div className="menu__link--left">
                    <div className="menu__icon">
                        <img src={data.img} alt="menu item icon" />
                    </div>
                    <h2 className="menu__text">
                        {data.text}
                    </h2>
                </div>
            </Link>
        </li>
    )
};