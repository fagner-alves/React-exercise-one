import React from 'react';

export const Nav = ({list, className}) => {
    return (
        <ul class={className}>
            {list.map((item) => <li><a href="">{item}</a></li>)}
        </ul>
    )
}