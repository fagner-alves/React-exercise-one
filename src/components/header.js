import React from 'react';
import {Img} from './img.js';
import {Nav} from './nav.js';
import myLogo from './../logo.svg';
import { Button } from './button.js';
import { Input } from './input.js';

export const Header = () => {
   const topicList = ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'];

    return (
        <header class="header-top">
            <div class="container">
               <nav class="nav-bar">          
                  <Img src={myLogo} className="logo navbar-brand" alt="React"/>
                  <div class="nav-bar">
                     <div>
                        <Nav list={topicList} className="nav nav-links justify-content-end"/>
                        <form class="search justify-content-end">
                           <Input name="search" placeholder="Pesquise"/>
                           <Button text="Buscar"/>
                        </form>
                     </div>
                  </div>
               </nav>
            </div>
        </header>        
    )
}