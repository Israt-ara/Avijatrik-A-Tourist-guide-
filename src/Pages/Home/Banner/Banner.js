import React from 'react';
import './Banner.css'
import image from '../../../images/Rangamati-banner.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Banner = () => {
    return (
        <div>
            <div className='banner-img'> <PhotoProvider>
                <PhotoView src={image}>
                    <img src={image} alt="" />
                </PhotoView>
            </PhotoProvider></div>
            <div className='banner-para'>
                <h3 className='headline'>Experience The Whole World</h3>
                <p >Accompanying us, you have a trip full of experiences. With Avijatrik,  <br /> Hello I am Asif.As as tourist guide I have knowledge about every Place</p>
            </div>
        </div >
    );
};

export default Banner;