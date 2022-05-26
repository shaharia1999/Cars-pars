import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Revew.css';
import img1 from "../images/quote (1).png"
import img2 from '../images/1(2).jpg'
import img3 from '../images/2.jpg'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Revew = () => {
  const user=useAuthState(auth);
  const [products,setProducts]=useState([])
  useEffect(()=>{
    fetch('https://thawing-brushlands-77698.herokuapp.com/revew')
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
      console.log(products);
    })
},[user]);
    return (
      
        <div> 
            
<section id="theam">
  <div className="theam-container owl-carousel">
  <OwlCarousel className='owl-theme' items={1} autoplay={true} loop={true} margin={10} 
  >
   
    {/* <div className="theam-row">
      <div className="them-img-box">
      <div className="theam-img">
        <img src={img1} alt=""/>
      </div>
    </div>
      <div className="theam-p"><p>
        These guys are awesome! Each time I needed their help, their response was quick and very helpful to us Also, the theme is very flexible. Five stars from me for everything!
         I truly recommend !!                       
      </p></div>
      <div className="them-img">
        <div className="them-img-box1">
        <div className="them-img-img">
          <img src={img2} alt=""/>
        </div>
      </div>
        <div className="them-img-img-title"> <p> <span className="them-img-img-title">Megan Fox</span> <br/>CEO,Bring Consalting</p></div>
      </div>
      <div className="theam-border">
        <div className="them-border-bot"></div></div>
    </div> */}
       {
         products.map(revew=>
          <div className="theam-row">
             <h1 className=' text-4xl text-center text-white py-3'>Revews : {revew?.revew}</h1> 
          <div className="them-img-box">
          <div className="theam-img">
            <img src={img1} alt=""/>
          </div>
        </div>
          <div className="theam-p"><p>
          {revew?.description}
            {/* These guys are awesome! Each time I needed their help, their response was quick and very helpful to us Also, the theme is very flexible. Five stars from me for everything!
             I truly recommend !!                        */}
          </p></div>
          <div className="them-img">
            <div className="them-img-box1">
            <div className="them-img-img">
              <img src= {revew?.picture} alt=""/>
            </div>
          </div>
            <div className="them-img-img-title"> <p> <span className="them-img-img-title"> {revew?.name}</span> <br/>CEO,Bring Consalting</p></div>
          </div>
          <div className="theam-border">
            <div className="them-border-bot"></div></div>
        </div>)
       }
   
    {/* <div className="theam-row">
      <div className="them-img-box">
      <div className="theam-img">
        <img src={img1} alt=""/>
      </div>
    </div>
      <div className="theam-p"><p>
        These guys are awesome! Each time I needed their help, their response was quick and very helpful. Also, the theme is very flexible. Five stars from me for everything!
         I truly recommend this theme!!!                        
      </p></div>
      <div className="them-img">
        <div className="them-img-box1">
        <div className="them-img-img">
          <img src={img3} alt=""/>
        </div>
      </div>
        <div className="them-img-img-title"> <p> <span className="them-img-img-title">Megan Fox</span> <br/>CEO,Bring Consalting</p></div>
      </div>
      <div className="theam-border">
        <div className="them-border-bot"></div></div>
    </div> */}
    </OwlCarousel>
    </div>
    
</section>



{/* <OwlCarousel className='owl-theme' loop margin={10} nav>
    <div className='item'>
        
        <h4>hrftrhefghdf1</h4>
    </div>
    <div className='item'>
        <h4>2</h4>
    </div>
    <div className='item'>
        <h4>3</h4>
    </div>
    <div className='item'>
        <h4>4</h4>
    </div>
    <div className='item'>
        <h4>5</h4>
    </div>
    <div className='item'>
        <h4>6</h4>
    </div>
    <div className='item'>
        <h4>7</h4>
    </div>
    <div className='item'>
        <h4>8</h4>
    </div>
    <div className='item'>
        <h4>9</h4>
    </div>
    <div className='item'>
        <h4>10</h4>
    </div>
    <div className='item'>
        <h4>11</h4>
    </div>
    <div className='item'>
        <h4>12</h4>
    </div>
</OwlCarousel>; */}
            {/*  */}
            
        </div>
    );
};

export default Revew;