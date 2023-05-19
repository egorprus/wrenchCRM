import React from "react";
import './style.scss';
import { MenuItem } from "./MenuItem";
import { MenuItemGroup } from "./MenuItemGroup";
import { menuList } from "./menuList";

interface MenuProps {
    currentIndex: number,
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
}
export const Menu = ({currentIndex, setCurrentIndex}: MenuProps) => {

    return (
        <div className="menu-container">
            <h2 className="menu__title">
                Меню
            </h2>
            <nav className="menu">
                <ul className="menu__list">
                    {menuList.map(item => {
                        return item.children ?
                            <MenuItemGroup data={item} currentIndex={currentIndex} key={item.id} setCurrentIndex={setCurrentIndex} />
                            : <MenuItem data={item} key={item.id} isActive={item.id === currentIndex} setCurrentIndex={setCurrentIndex} />
                    })}
                </ul>
            </nav>
        </div>
    );
};