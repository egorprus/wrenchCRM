import './style.scss';
import { Logo } from "../Logo/Logo";
import { HeaderUser } from './HeaderUser';

export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <HeaderUser />
        </header>
    );
};