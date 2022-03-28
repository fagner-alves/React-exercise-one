import React from 'react';
import { Img } from './img';

export const Post = ({post, className}) => {
    return (
        <article>
            <Img src={post.img} className={className} alt="Post"/>
            <div class="text">{post.text}</div>
        </article>        
    )
}