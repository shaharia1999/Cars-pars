import React from 'react';
import './AboutSkill.css';

const AboutSkill = () => {
    return (
        <section id="skill">
        <div class="container">
         <center><span>my skill</span></center>
              <div class="row">
                <div class="col-md-6 skill-div1">
                  <h2>my creative  skill & exparience  :</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae est nostrum quod iure iusto odit fuga tenetur ab fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae est nostrum quod iure iusto odit fuga tenetur ab fugit!lore1
                  </p>
                  <button>Read more</button>
                </div>
                  <div class="col-md-6 skill-div2">
                       <ul>
                         <li class="html">html</li>
                         <li  class="css">css</li>
                         <li  class="bootsrap">bootstrap</li>
                         <li  class="javascript">javascript</li>
                         <li  class="php">php</li>
                         <li  class="mysquel">React</li>
                       </ul>
                  </div>
              </div>
        </div>
   
   </section>
    );
};

export default AboutSkill;