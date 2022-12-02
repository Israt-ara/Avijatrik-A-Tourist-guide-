import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const HomeDataCard = ({ service }) => {
    const { _id, ratings, image, price, details, name } = service;
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            {/* <figure><img src={image} alt="Shoes" /></figure> */}
            <PhotoProvider>
                <PhotoView src={image}>
                    <img src={image} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p>Price: {price}</p>
                <p>Ratings: {ratings}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}> <button className=" detail-btn btn btn-primary">Detail</button></Link>
                </div>
            </div>

        </div>




    );
};

export default HomeDataCard;