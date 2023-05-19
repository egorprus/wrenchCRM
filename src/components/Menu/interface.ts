export interface MenuText {
    id?: number,
    text: string,
    img: string,
    url?: string,
    children?: MenuText[]
};

export interface MenuItemProps {
    data: MenuText,
    isActive: boolean,
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
};