import React from 'react';
import './Contract.css';
import img1 from '../images/contact-img.jpg';

const Contract = () => {
    return (
        <div>
            <section id="contract">
               <div className="contract-container ">
                          <div className="contract-row1">
                               <img src={img1} alt=""/>
                         </div>
                          <div className='contract-row2 '>
                                 <div className="contract-titles">
                                      <p className="contract-title">LET'S TALK</p>
                                      <h3>Quick Contact</h3>
                                      <div className="contract-span"></div>
                                       <p className="contract-discription">Tempore corrupti temporibus fuga earum asperiores fugit laudantium the breakpoint for tablet devices for creative agency.</p>

                                 </div>
                                  <div className="form">
                                          <div className="name-email">
                                                 <input type="text" placeholder="Name"/>
                                                 <input type="email" placeholder="Email"/>
                                          </div>
                                          <div className="name-email">
                                            <input type="text" placeholder="phone number"/>
                                            <input type="email" placeholder="Your Website"/>
                                          </div>
                                           <textarea   cols="80" rows="8" placeholder="Write message"></textarea>
                                           <button className="contract-btn">SUBMIT NOW</button>
                                  </div>
                          </div>
               </div>
             

    </section>
            
        </div>
    );
};

export default Contract;