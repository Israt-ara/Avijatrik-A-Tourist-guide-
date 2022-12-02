import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
const MyReviewUpdate = ({ review, handleDelete, handleReview, handleInputChange }) => {

    const { user } = useContext(AuthContext)
    const { _id, Name, email, message, service } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`https://avijatrik-2tlb.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))

    }, [service])

    return (
        <div>

            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">X</button>
                    </label>
                    <label>
                        <Link to='#'>   <button className="btn btn-ghost btn-xs">Update</button> </Link>
                    </label>

                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-23 h-12">
                                {
                                    reviewService?.image &&
                                    <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{Name}</div>

                        </div>
                    </div>
                </td>
                <td>
                    {email}

                </td>
                <td>{message}</td>
                <th>
                    {/* <form onSubmit={handleReview}>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                            <input onChange={handleInputChange} name="displayName" type="text" placeholder="Name" className="input input-bordered input-primary w-full " required />




                        </div>
                        <textarea onChange={handleInputChange} name='mesage' className="textarea textarea-primary mt-10 text-part" placeholder="Review" required></textarea>
                        <input className='btn review-btn' type="submit" value="Update-Review" />

                    </form> */}
                </th>
            </tr>
        </div >
    );
};

export default MyReviewUpdate;