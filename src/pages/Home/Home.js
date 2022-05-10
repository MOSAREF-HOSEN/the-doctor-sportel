import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Info from './Info';
import MackAppoinment from './MackAppoinment';
import Services from './Services';
import Testymoneal from './Testymoneal';

const Home = () => {
    return (
        <div className='px-12'>
           <Banner/>
           <Info/>
           <Services></Services>
           <MackAppoinment></MackAppoinment>
           <Testymoneal></Testymoneal>
           <Footer></Footer>
        </div>
    );
};

export default Home;