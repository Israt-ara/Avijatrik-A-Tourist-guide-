import React from 'react';
import './Section.css'

import 'react-photo-view/dist/react-photo-view.css';
import svg from '../../../images/travel.gif'

const Section = () => {
    return (
        <div className="section-part card card-side bg-base-100 shadow-xl">

            <img src={svg} className="max-w-sm rounded-lg shadow-2xl" alt='' />

            <div className="card-body">
                <h2 className="card-title">A best Tour guide for all</h2>
                <p>Mix-and-match your way to a perfect fall getaway. Hit accessible trails—and trains—for foliage views; forge new traditions at one-of-a-kind festivals; and even hit the beach, while the weather lasts.
                    <br />
                    Lean full force into fall—but this year, try things a little differently. Head to the beach. Hit trails—and trains—that offer leafy views and welcome travelers of all mobility levels and interests. Forge new traditions at quirky, one-of-a-kind festivals. And take advantage of shoulder season in Europe, where quiet towns, mountains of melted cheese, and mushroom foraging await. Read on to mix-and-match your way to a perfect fall getaway.
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Get Inspired</button>
                </div>
            </div>
        </div>
    );
};

export default Section;