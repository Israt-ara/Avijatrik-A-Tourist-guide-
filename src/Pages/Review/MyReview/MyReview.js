import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import MyReviewUpdate from './MyReviewUpdate';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useTitle("reviewadded")

    // https://abbvvv-e4xf.vercel.app
    useEffect(() => {
        fetch(`https://avijatrik-2tlb.vercel.app/reviews?email=${user?.email}`)


            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if (proceed) {
            fetch(`https://avijatrik-2tlb.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.displayName.value;
        const email = user?.email || 'Please Login First'
        const message = form.message.value;
        // const message = form.message.value;


        const review = {

            serviceName: name,
            Name: name,
            email,
            message,
            time: new Date()


        }
        //review send in database

        fetch('https://avijatrik-2tlb.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)

                if (data.acknowledged
                ) {
                    alert('review added')
                    form.reset()
                }
            })
            .catch(err => console.error(err))

    }

    const handleInputChange = event => {
        const name = event.target.displayName;
        const email = event.target.email;
        const message = event.target.mesage;
        const value = event.target.value;
        const newReview = { ...user }
        newReview[message] = value;
        setReviews(newReview)
    }






    return (
        <div>


            <form onSubmit={handleReview}>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                    <input name="displayName" type="text" placeholder="Name" className="input input-bordered input-primary w-full " required />

                    <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered input-primary w-full " readOnly />


                </div>
                <textarea name='mesage' className="textarea textarea-primary mt-10 text-part" placeholder="Review" required></textarea>
                <input className='btn review-btn' type="submit" value="Update-Review" />

            </form>



            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            reviews.map(review => <MyReviewUpdate
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                handleReview={handleReview}


                            ></MyReviewUpdate>)
                        }


                    </tbody>



                </table>

            </div>
        </div>
    );
};

export default MyReview;