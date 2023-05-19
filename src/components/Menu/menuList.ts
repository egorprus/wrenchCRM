import { MenuText } from "./interface";
import mainIcon from '../../assets/main.svg';
import search from '../../assets/search.svg';
import table from '../../assets/tables.svg';
import calendar from '../../assets/calendar.svg';
import maps from '../../assets/maps.svg';
import widgets from '../../assets/widgets.svg';
import settings from '../../assets/settings.svg';
import profile from '../../assets/profile.svg';
import finance from '../../assets/finance.svg';

export const menuList: MenuText[] = [
    {
        id: 1,
        text: 'Главная',
        img: mainIcon,
    },
    {
        id: 2,
        text: 'Поиск адресов',
        img: search,
        url: 'address'
    },
    {
        id: 3,
        text: 'Таблицы',
        img: table,
    },
    {
        id: 4,
        text: 'Календарь',
        img: calendar,
    },
    {
        id: 5,
        text: 'Карты',
        img: maps,
    },
    {
        id: 6,
        text: 'Виджеты',
        img: widgets,
    },
    {
        text: 'Настройки',
        img: settings,
        children: [
            {
                id: 7,
                text: 'Настройка профиля',
                img: profile
            },
            {
                id: 8,
                text: 'Управление финансами',
                img: finance
            }
        ]
    },
    {
        id: 9,
        text: 'Выход',
        img: settings
    }
]