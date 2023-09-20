import React from "react";
import './style.scss';
import { MenuItem } from "./MenuItem";
import { MenuItemGroup } from "./MenuItemGroup";
import { menuList } from "./menuList";

interface MenuProps {
    currentIndex: number,
    updateIndex: (index: number) => void
}
export const Menu = ({currentIndex, updateIndex}: MenuProps) => {

    return (
        <div className="menu-container">
            <h2 className="menu__title">
                Меню
            </h2>
            <nav className="menu">
                <ul className="menu__list">
                    {menuList.map(item => (
                        item.children ?
                            <MenuItemGroup data={item} currentIndex={currentIndex} key={item.id} updateIndex={updateIndex} />
                            : <MenuItem data={item} key={item.id} isActive={item.id === currentIndex} updateIndex={updateIndex} />
                    ))}
                </ul>
            </nav>
        </div>
    );
};