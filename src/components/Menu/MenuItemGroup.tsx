import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuItem";
import triangle from '../../assets/triangle.svg';
import { MenuText } from "./interface";

interface MenuItemGroupProps {
    data: MenuText,
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
    currentIndex: number
}

export const MenuItemGroup = ({data, currentIndex, setCurrentIndex}: MenuItemGroupProps) => {
    const [showGroup, setShowGroup] = useState<boolean>(true);

    const handleClick = () => {
        setShowGroup(showGroup => !showGroup);
    };

    return (
        <li className={`menu__item group-wrapper ${showGroup && 'menu__item--open'}`}>
            <button className="menu__link" onClick={handleClick}>
                <div className="menu__link--left">
                    <div className="menu__icon">
                        <img src={data.img} alt="menu item icon" />
                    </div>
                    <h2 className="menu__text">
                        {data.text}
                    </h2>
                </div>
                <img className="menu__item-icon" src={triangle} alt="status open group" />
            </button>
            {data.children &&
                <ul className="group">
                    {data.children.map(item =>
                        <MenuItem data={item} key={item.id} isActive={item.id === currentIndex} setCurrentIndex={setCurrentIndex} />
                    )}
                </ul>
            }
        </li>
    )
};