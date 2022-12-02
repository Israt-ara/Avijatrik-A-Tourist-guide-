import React from 'react';

import About from './About/About';
import Banner from './Banner/Banner';
import Section from './section/Section';
import Section2 from './Section2/Section2';
import HomeData from './Services/HomeData';


const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Section></Section>

            <HomeData></HomeData>
            <Section2></Section2>
            <About></About>
        </div>
    );
};

export default Home;