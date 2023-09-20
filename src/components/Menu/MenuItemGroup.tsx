import React, { useState } from "react";
import { MenuItem } from "./MenuItem";
import { MenuText } from "./interface";
import { MenuButtonContent } from "./MenuButtonContent";

interface MenuItemGroupProps {
    data: MenuText,
    updateIndex: (index: number) => void,
    currentIndex: number
}

export const MenuItemGroup = ({data, currentIndex, updateIndex}: MenuItemGroupProps) => {
    const [showGroup, setShowGroup] = useState<boolean>(false);

    const handleClick = () => {
        setShowGroup(showGroup => !showGroup);
    };

    return (
        <li className={`menu__item group-wrapper ${showGroup && 'menu__item--open'}`}>
            <button className="menu__link" onClick={handleClick}>
                <MenuButtonContent data={data} />
            </button>
            <ul className="group">
                {data.children?.map(item =>
                    <MenuItem data={item} key={item.id} isActive={item.id === currentIndex} updateIndex={updateIndex} />
                )}
            </ul>
        </li>
    )
};