import './style.scss';
import person from '../../assets/person.svg';
import { ImageWrap } from '../ImageWrap/ImageWrap';
import { Link } from 'react-router-dom';

export const HeaderUser = () => {
    return (
        <div className="user">
            <Link className="header__link" to="/">
                <ImageWrap classNames='user__img' img={person} alt="user avatar" />
                <p className="user__text">
                    Имя Фамилия
                </p>
            </Link>
        </div>
    );
};