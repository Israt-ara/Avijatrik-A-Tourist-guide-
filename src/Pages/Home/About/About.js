import React from 'react';
import './AboutUs.css'


const About = () => {
    return (
        <div className="hero my-20 about-us">
            <div className="hero-content flex-col lg:flex-row">
                {/* <div className='relative w-1/2'>
                    <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={parts} alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                </div> */}
                <div className='w-1/2'>
                    <p className="text-2xl font-bold text-orange-600">About Avijatrik</p>
                    <h1 className="my-5 text-5xl font-bold">
                        Avijatrik(A tourist guide) </h1>

                    <p className="py-6">Avijatrik  Tour Operator is an award winning local tourist guide & your travel solution in Bangladesh determined to provide a unique and satisfying travel experience. Here you find high qualified services, comfortable tour planning, guides with spacious knowledge of local information and the affordable price will make your trip enjoyable and special. If you want to explore Bangladesh completely rich, I am  here with experiences to make it memorable </p>
                    <p className="py-6">I am a tourist Guide  in Bangladesh.I have knowledge about all the place of Bangladesh. With My accompany you never feel bored. </p>
                    {/* <button className="btn btn-primary">Get More Info</button> */}
                </div>
            </div>
        </div>
    );
};

export default About;