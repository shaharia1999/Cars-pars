import React from 'react';
import './Banner.css'
import img1 from '../images/car1.jpg'
import img2 from '../images/car2.jpg'
import img3 from '../images/car3.jpg'
import img4 from '../images/car1.jpg'

const Banner = () => {
    return (
        <div class="carousel w-full banner">
        <div id="slide1" class="carousel-item relative w-full ">
          <img src={img1} class="w-full "/> 
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a> 
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
          <img src={img2} class="w-full"/>  
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">❮</a> 
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
          <img src={img3} class="w-full"/>  
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">❮</a> 
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" class="carousel-item relative w-full">
          <img src={img4} class="w-full"/>  
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">❮</a> 
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;