import React from "react";
import './style.scss';

interface ImageProp {
    img: string,
    alt: string,
    classNames?: string,
}

export const ImageWrap = ({img, alt, classNames}: ImageProp) => {
    return (
        <div className={`image-wrapper ${classNames}`}>
            <img className="image" src={img} alt={alt} />
        </div>
    )
};