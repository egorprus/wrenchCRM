import React from "react";
import { Link } from "react-router-dom";

interface AddressItemProp {
    text: string
};

export const AddressItem = ({text}: AddressItemProp) => {
    return (
        <li className="result__item">
            <Link className="result__link" to="/">
                {text} 
            </Link>
        </li>
    )
};