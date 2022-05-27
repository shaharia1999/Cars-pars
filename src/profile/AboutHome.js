import React from 'react';
import img from'../images/i3(2).png';
import './AboutHome.css';

const AboutHome = () => {
    return (
        <section id="home">
    <div class="container home-container">
         <div class="row">
              <div>
                 <h4>hello,my name is.... </h4>
                 <h1>mehadi shaharia</h1>
                 <h3>and i'm <span class="animated">freelancer</span></h3>
                 <button class="btn">Hire Me</button>
               </div>
                <div><img  class="ani"src={img} alt=""/></div>
         </div>
    </div>

</section>
    );
};

export default AboutHome;