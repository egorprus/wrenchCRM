import React from "react";
import './style.scss';

interface ImageProp {
    img: string,
    alt: string
}

export const ImageWrap = ({img, alt}: ImageProp) => {
    return (
        <div className="image-wrapper">
            <img className="image" src={img} alt={alt} />
        </div>
    )
};