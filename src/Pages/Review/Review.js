import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const Review = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    console.log(reviews)
    useTitle("review")


    useEffect(() => {
        fetch(`https://avijatrik-2tlb.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])





    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if (proceed) {
            fetch(`https://avijatrik-2tlb.vercel.app/reviews/${id}`, {
                method: 'DELETE',

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




    return (
        <div>

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
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}

                            ></ReviewRow>)
                        }


                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Review;