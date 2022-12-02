import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ReviewRow = ({ review, handleDelete }) => {
    const { user } = useContext(AuthContext)
    const { _id, Name, email, message, service } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`https://avijatrik-2tlb.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])



    return (


        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">X</button>
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

            </th>
        </tr>

    );
};

export default ReviewRow;