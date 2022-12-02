import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Review from '../Review/Review';

const ServiceAdded = () => {
    const [services, setServices] = useState([])
    useTitle('Services')
    useEffect(() => {

        // if (data.acknowledged
        // ) {
        //     alert('Thanks for your review')
        //     form.reset()
        // }
        // .catch(err => console.error(err))
    }, [])

    const handleServiceAdded = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const details = form.details.value;
        const image = form.image.value;
        const ratings = form.ratings.value;


        const services = {


            name,

            details,

            image,

            price,



            ratings,





        }
        console.log(services)
        fetch('https://avijatrik-2tlb.vercel.app/services',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(services)
            })
            // fetch('https://avijatrik-israt-ara.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('successfully added')

            })





    }


    return (
        <div>
            <form onSubmit={handleServiceAdded}>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    <input name="name" type="text" placeholder="Name" className="input input-bordered input-primary w-full " />

                    <input type="text" name="image" placeholder="photoUrl" className="input input-bordered input-primary w-full " />
                    <input type="text" name="price" placeholder="price" className="input input-bordered input-primary w-full " />
                    <input type="text" name="ratings" placeholder="ratings" className="input input-bordered input-primary w-full " />


                </div>
                <textarea name='details' className="textarea textarea-primary mt-10 text-part" placeholder="Review"></textarea>
                <input className='btn review-btn' type="submit" value="Add service" />

            </form>
        </div>
    );
};

export default ServiceAdded;