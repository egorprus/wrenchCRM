import React from "react";
import { Link } from "react-router-dom";
import { MenuItemProps } from "./interface";
import { MenuButtonContent } from "./MenuButtonContent";

export const MenuItem = ({data, isActive, updateIndex}: MenuItemProps) => {
    return (
        <li className={`menu__item ${isActive && 'menu__item--active'}`}>
            <Link to={data.url || '/'} className="menu__link" onClick={() => updateIndex(data.id || 0)}>
                <MenuButtonContent data={data} />
            </Link>
        </li>
    )
};