import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import HomeDataCard from './HomeDataCard';

const HomeData = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://avijatrik-2tlb.vercel.app/homeData')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>



            <div className='services-part'>
                <div> <h2 className='popular-services'>My Tour Package</h2></div>
                <div className='services-data grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    {
                        services.map(service => <HomeDataCard
                            key={service._id}
                            service={service}
                        ></HomeDataCard>)
                    }
                    <Link to='/services'> <button className=" detail-btn btn btn-primary">SEE All</button></Link>

                </div>
            </div>






        </div>
    );
};

export default HomeData;