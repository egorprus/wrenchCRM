import { MenuText } from "./interface";
import triangle from '../../assets/triangle.svg';
import { ImageWrap } from "../ImageWrap/ImageWrap";

interface MenuButtonContentProp {
    data: MenuText,
}
export const MenuButtonContent = ({data}: MenuButtonContentProp) => {
    return (
        <>
            <div className="menu__link--left">
                <ImageWrap img={data.img} alt="menu item icon" classNames="menu__icon" />
                <h2 className="menu__text">
                    {data.text}
                </h2>
            </div>
            {data.children && <img className="menu__item-icon" src={triangle} alt="status open group" />}
        </>
    )
};