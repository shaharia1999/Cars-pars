import React from 'react';
import { PlusIcon ,TableIcon,ArchiveIcon,BriefcaseIcon} from '@heroicons/react/solid'
import './AboutService.css';

const AboutService = () => {
    return (
        <section id="services">
        <div class="container">
          <center><span className='text-2xl'>my services</span></center>
          <div class="row">
             <div class="col-lg-4 col-md-6  ">
               <div class="service-col bg-primary">
            <h1>
               <TableIcon className="h-32 w-36 text-rose-500"/>
            </h1>
               <h2 className='text-2xl'>web design</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda dignissimos eaque numquam maiores ea accusantium natus fuga obcaecati et!</p>
              </div>
             </div>
             <div class="col-lg-4 col-md-6">
              <div class="service-col ">
              <h1>
               <PlusIcon className="h-32 w-36 text-rose-500"/>
            </h1>
                <h2 className='text-2xl'>web development</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda dignissimos eaque numquam maiores ea accusantium natus fuga obcaecati et!</p>
               </div>
             </div>
             <div class="col-lg-4 col-md-6 ">
              <div class="service-col ">
              <h1>
               <BriefcaseIcon className="h-32 w-36 text-rose-500"/>
            </h1>
                <h2 className='text-2xl'>apps design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda dignissimos eaque numquam maiores ea accusantium natus fuga obcaecati et!</p>
               </div>
             </div>
          </div>
        </div>
      
      </section>
    );
};

export default AboutService;