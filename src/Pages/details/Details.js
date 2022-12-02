import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Review from '../Review/Review';
import './Details.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Details = () => {
    const { _id, name, image, tourDuration, details, price, ratings } = useLoaderData()
    const { user } = useContext(AuthContext)




    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.displayName.value;
        const email = user?.email || 'Please Login First'
        const message = form.message.value;


        const review = {
            service: _id,
            serviceName: name,
            Name: name,
            email,
            message



        }
        //review send in database

        fetch('https://avijatrik-2tlb.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

                authorization: `Bearer ${localStorage.getItem('assignment-token')}`

            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)

                if (data.acknowledged
                ) {
                    alert('Thanks for your review')
                    form.reset()
                }
            })
            .catch(err => console.error(err))

    }



    return (
        <div className='details-part'>
            <div>
                {/* <h2>Name: {name}</h2> */}
                <div className="details-card card w-96 bg-base-100 shadow-xl">
                    <figure>  <PhotoProvider>
                        <PhotoView src={image}>
                            <img src={image} alt="" />
                        </PhotoView>
                    </PhotoProvider></figure>
                    <div className="card-body">
                        <h2 className="card-title">Service Name: {name}</h2>
                        <p>Details: {details}</p>
                        <p>Tour Duration: {tourDuration}</p>
                        <p>Total cost : {price}</p>
                        <p>Rating : {ratings}</p>

                    </div>
                </div>

            </div>
            <form onSubmit={handleReview}>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    <input name="displayName" type="text" placeholder="Name" className="input input-bordered input-primary w-full " required />

                    <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered input-primary w-full " readOnly />


                </div>
                <textarea name='message' className="textarea textarea-primary mt-10 text-part" placeholder="Review"></textarea>
                <input className='btn review-btn' type="submit" value="Submit-Review" />

            </form>

            <div>
                <Review></Review>
            </div>
        </div>
    );
};

export default Details;