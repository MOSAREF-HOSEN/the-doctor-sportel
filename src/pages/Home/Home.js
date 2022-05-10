import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Info/>
           <Services></Services>
        </div>
    );
};

export default Home;