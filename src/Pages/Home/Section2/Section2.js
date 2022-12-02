import React from 'react';
import './Sec.css'
import img from '../../../images/caption.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Section = () => {
    return (
        <div className="section-part card card-side bg-base-100 shadow-xl">

            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
            </PhotoProvider>


            <div className="card-body">
                <h2 className="card-title">Bangladeshi Hospotality</h2>
                <p>


                    Bangladeshi care and hospitality is outstanding.  At the time of writing this we haven’t even left Bangladesh and already I am feeling a pang of sadness knowing we will move on soon.  If you are thinking about travel in Bangladesh and wondering whether to take the leap and book that trip or not… Book it now.

                    Travel in Bangladesh is unique.  It’s not easy nor a mainstream destination to travel.  But if getting off the beaten track is the kind of travel you like, that is exactly what makes Bangladesh so special.
                    <br />

                </p>

            </div>
        </div>
    );
};

export default Section;







