import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Exceptional from './Exceptional';
import Footer from '../Sheard/Footer';
import Info from './Info';
import MackAppoinment from './MackAppoinment';
import Services from './Services';
import Testymoneal from './Testymoneal';

const Home = () => {
    return (
        <div className=''>
           <Banner/>
           <Info/>
           <Services></Services>
           <Exceptional></Exceptional>
           <MackAppoinment></MackAppoinment>
           <Testymoneal></Testymoneal>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;