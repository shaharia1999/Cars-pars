import React from 'react';
import './Aboutprofile.css';
import img from '../images/about.jpeg';

const AboutProfile = () => {
    return (
        <section id="about">
        <div class="container">
          <div class="row">
            <center><h1><span class="desh"></span>about us<span class="desh"></span></h1></center>
            <div class="col-md-5 images">
              <img src={img} alt=""/>
            </div>
            <div class="col-md-7">
              <h2>i'm shaharia and i'm a <span class="autuplay2"> web developer </span></h2>
              <p>Hi! I am Mehedi Shaharia, a web designer/developer focused on crafting great web experiences. I Live in Brahmanbaria and study in BBA 3 rd Year   Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2019. I enjoy creating beautifully designed, intuitive and functional websites.

              For over past 2 years, I have worked for some of the best digital agencies and wonderful clients to create some award winning works. And, I can make this happen for your business as well.</p>
              <h1 className='text-2xl'>React Project</h1>
              <div className='mt-5 text-blue-700'>
              <a href='https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-shaharia1999'>https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-shaharia1999</a>
              <br />
              <a href=' https://jim-trainer.web.app/'> https://jim-trainer.web.app/</a>
               <br />
              <a href=' https://bejewelled-kashata-6f3f85.netlify.app/'> https://bejewelled-kashata-6f3f85.netlify.app/</a>
              </div>
              <h1 className='text-2xl'>React Project</h1>
              <div className='mt-5 text-blue-700'>
              <a href=' https://shaharia1999.github.io/exam/'> https://shaharia1999.github.io/exam/</a>
               <br />
              </div>
              <button>download cv</button>
            </div>
          </div>
        </div>
   
   </section>
    );
};

export default AboutProfile;