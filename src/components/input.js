import React from 'react';

export const Input = ({name, className, placeholder}) => {
    return (<input name="{name}" class={className} placeholder={placeholder}/>)
}