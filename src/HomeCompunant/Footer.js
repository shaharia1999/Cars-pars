import React from 'react';
import './Footer.css'
import facebook from '../images/Black-icon-facebook-logo-PNG.png'
import tweter from '../images/Black-icon-Twitter-logo-transparent-PNG.png'
import linkin from '../images/png-transparent-linkedin-icon-linkedin-text-rectangle-logo.png'
import  inst from '../images/images.png'
import {MailIcon,LocationMarkerIcon,PhoneIcon} from '@heroicons/react/solid'
import FooterEnd from './FooterEnd';

const Footer = () => {
    return (
        <div>
        <section id="footer">
    <div className="footer-container">
            <div className="footer-row">
    <div className="footer-row-fast-div">
            <div className="footer-row-fast-div-img">
                    <img src="images/logo-light.png" alt=""/>
            </div>
            <div className="footer-row-fast-div-p">
                    <p>One of the main benefits of using Lorem Ipsum is that it can be easily generated, and it takes the pressure off designers to create meaningful text. Instead, they can focus on crafting the best website data</p>
            </div>
                            <div className='footer-row-fast-div-socal-link'>
                                            <a href=""> <i><img src={facebook} alt="" /></i></a>
                                            <a href=""><i><img src={tweter} alt="" /></i></a>
                                            <a href=""><i ><img src={linkin} alt="" /></i></a>
                                            <a href=""><i ><img src={inst } alt="" /></i></a>
                                            
                                    </div>

                        </div>
                        {/* add manual */}
                        <div className="footer-row-fast-div">
                        <h6 className="footer-h6">CONTRACT INFO</h6>
                        <div className="footer-span"> </div>
                        <div className='footer-contract-link'>
                        <div className="overly-address">
                            <i><LocationMarkerIcon className="h-10 w-10 text-rose-700"/></i>
                                                <h6>Address <br/><p>05 kandi BR .Brahmanbaria</p><br/></h6>
                            </div>
                            <div className="overly-email">
                                <i > <MailIcon className="h-10 w-10 text-rose-700"/></i>
                                              <h6>Email <br/><p>adeptshaharia@gmail.com</p><br/></h6>
                            </div>
                            <div className=" overly-phone">
                                <i> <PhoneIcon className="h-10 w-10 text-rose-700"/></i>
                                                <h6>Phone <br/><p>0996879598</p><br/></h6>
                            </div>

                        </div>

                        </div>
                        
                        <div className="footer-row-fast-div">
                                    <h6 className="footer-h6">NEWS LETTER</h6>
                                    <div className="footer-span"> </div>
                                     <div className="footer-row-fast-div-p">
                                      We denounce with righteous and in and dislike men who are so beguiled and demo realized.
                                     </div>
                                     <div> <input  className="footer-input"type="text"/></div> 
                                     <button className="footer-btn">SUBMIT</button>

                             </div>
                             {/* 
                             
                             */}
                             
                            {/*  */}
                        
                        
            </div>

    </div>
</section>  
<FooterEnd/>

</div>
    );
};

export default Footer;

    // 
    
    // 