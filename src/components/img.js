import React from 'react';

export const Img  = ({ src, className, alt }) => {
    return (<img src={src} class={className} alt={alt}/>)
}