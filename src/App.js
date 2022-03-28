
import postImg from './post.jpg';
import './App.css';
import { Header } from './components/header.js';
import { NavBar } from './components/navBar.js';
import { Nav } from './components/nav';
import { SideBar } from './components/sideBar.js';
import { Post } from './components/post';

const sectionList = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];
const postsList =   [{
   'img': postImg,
   'text': `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
},{
   'img': postImg,
   'text': `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
},{
   'img': postImg,
   'text': `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
}];

function App() {
    return (
      <div class="app">
        <Header/>
        <div class="container">
           <NavBar  className="nav-sections">
               <Nav list={sectionList} className="nav nav-links justify-content-center"/>
           </NavBar>
            <div class="grid"> 
               <div class="box-posts">
                  {postsList.map((post) => <Post post={post} className=""/>)}                 
               </div> 
               <SideBar  className="sidebar">
                  <Nav list={sectionList} className="nav-list"/>
               </SideBar>
            </div>     
        </div>
      </div>
    );
}

export default App;
