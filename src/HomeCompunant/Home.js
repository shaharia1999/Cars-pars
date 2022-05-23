import React from 'react';
import Navber from '../Header/Navber';
import Banner from './Banner';
import Contract from './Contract';
import Footer from './Footer';
import HomeBusiness from './HomeBusiness';
import Revew from './Revew';
import Tols from './Tols';

const Home = () => {
    return (
        <div>
      <Navber/>
      <Banner/>
      <Tols></Tols>
      <HomeBusiness/>
      <Revew/>
      <Contract/>
      <Footer></Footer>
      
        </div>
    );
};


export default Home;