import React from "react";

interface AddressItem {
    text: string
};

export const AddressItem = ({text}: AddressItem) => {
    return (
        <li className="result__item">
            <a className="result__link" href="#">
                {text} 
            </a>
        </li>
    )
};