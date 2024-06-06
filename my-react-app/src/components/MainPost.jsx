import React from 'react'
import "./MainPost.css";
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WallArt from "./wallArt.jpeg";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import Person from "./pexels-imad-clicks-9810659.png"
import StarIcon from '@mui/icons-material/Star';
import Sea from './sea.jpg';
import Design from './design.jpg';
import Girl from "./girl.png";
import Arting from "./arting.png";
import JustSaved from "./justSaved.png";
import ThirdOne from "./thirdBakcground.png";
 function MainPost() {
  return (
    <div id="co">
      <div className='search'>
        <div className='searchhere'>
      <SearchIcon/>
        <input type='search' placeholder='Search here...'/>
        </div>
        <div className='filters'>
        <TuneIcon /> 
        <p>Filters</p>
        </div>
      </div>
      <div className='posts'>
        <div className='firstPost'>
            <div className='userInfo'>
            <img src={Girl} id="user"/>
            <div className='userName'>
                <h2>Lara Leones</h2>
                <p>@thewallart</p>
            </div>
            <MoreVertIcon/>
            </div>
            <p>It is a Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span>Read More</span></p>
           <div className='postWithLike'>
            <img src={WallArt} id="post"/>
            <FavoriteBorderIcon id="heart"/>
            </div>
            <hr/>
            <div className='reactions'>
              <div className='likes'>
               <FavoriteBorderIcon/>
              <p>9.8k</p>
              </div>
              <div className='comments'>
              <ModeCommentOutlinedIcon/>
              <p>8.6k</p>
              </div>
              <div className='share'>
              <ReplyOutlinedIcon/>
              <p>7.2k</p>
              </div>
            </div>
        </div>
      </div>
      <div className='posts' id="hi">
        <div className='firstPost'>
            <div className='userInfo'>
            <img src={Person} id="user"/>
            <div className='userName'>
                <h2>Thomas J</h2>
                <p>@thecustomcreater</p>
            </div>
            <MoreVertIcon/>
            </div>
            <p>It is a Long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span>Read More</span></p>
           <div className='postWithLike'>
            <img src={Arting} id="post" className='yes'/>
            <FavoriteBorderIcon id="heart"/>
            </div>
            <hr/>
            <div className='reactions'>
              <div className='likes'>
               <FavoriteBorderIcon/>
              <p>9.8k</p>
              </div>
              <div className='comments'>
              <ModeCommentOutlinedIcon/>
              <p>8.6k</p>
              </div>
              <div className='share'>
              <ReplyOutlinedIcon/>
              <p>7.2k</p>
              </div>
            </div>
        </div>
      </div>
      <div className='MainSmall'>
     
      <div className='middleOne'>
      <div className='smallPost' id="center">
        <img src={Design} id="sea"></img>
        <div className='remain'>
        <p>Modern Wall Decor Framed Painting</p>
        <div className='ratings'>
          <h2>$199.99</h2>
          <div className='stars'>
           <StarIcon id="st"/>
           <StarIcon id="st"/>
           <StarIcon id="st"/>
           <StarIcon id="st"/>
           <StarIcon id="st"/>
          </div>
        </div>
        </div>
      </div>
      <div className='smallPost' id="center">
        <img src={Sea} id="sea"></img>
        <div className='remain'>
        <p>Modern Wall Decor Framed Painting</p>
        <div className='ratings'>
          <h2>$199.99</h2>
          <div className='stars'>
           <StarIcon id="st"/>
           <StarIcon id="st"/>
           <StarIcon id="st"/>
           <StarIcon id="st"/>
           <StarIcon id="st"/>
          </div>
        </div>
        </div>
      </div>
      </div>
      <div className='smallPost' id="outside">
        <img src={JustSaved} id="sea"></img>
        <div className='remain'>
        <p>Modern Wall Decor Framed Painting</p>
        <div className='ratings'>
          <h2>$199.99</h2>
          <div className='stars'>
           <StarIcon id="st"/>
           <StarIcon id="st"/>
           <StarIcon id="st"/>
           <StarIcon id="st"/>
           <StarIcon id="st"/>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}
export default MainPost;