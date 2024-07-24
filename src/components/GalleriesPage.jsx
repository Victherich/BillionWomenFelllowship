import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../CSS/Galleries.css';
import gpic1 from "../images/gpic1.jpeg";
import gpic2 from "../images/gpic2.jpeg";
import gpic3 from "../images/gpic3.jpeg";
import gpic4 from "../images/gpic4.jpeg";
import gpic5 from "../images/gpic5.jpeg";
import gpic6 from "../images/gpic6.jpeg";
import gpic7 from "../images/gpic7.jpeg";
import gpic8 from "../images/gpic8.jpeg";
import gpic9 from "../images/gpic9.jpeg";
import gpic10 from "../images/gpic10.jpeg";
import gpic11 from "../images/gpic11.jpeg";
import gpic12 from "../images/gpic12.jpeg";
import gpic13 from "../images/gpic13.jpeg";
import gpic14 from "../images/gpic14.jpeg";
import gpic15 from "../images/gpic15.jpeg";
import gpic16 from "../images/gpic16.jpeg";

const galleries = [
    {
        id: 1,
        title: 'Women’s Retreat',
        image: gpic1
    },
    {
        id: 2,
        title: 'Faith and Wellness Workshop',
        image: gpic2
    },
    {
        id: 3,
        title: 'Charity Fundraiser Gala',
        image: gpic3
    },
    {
        id: 4,
        title: 'Youth Mentorship Program',
        image: gpic4
    },
    {
        id: 5,
        title: 'Bible Study Group',
        image: gpic5
    },
    {
        id: 6,
        title: 'Community Outreach',
        image: gpic6
    },
    {
        id: 7,
        title: 'Prayer Breakfast',
        image: gpic7
    },
    {
        id: 8,
        title: 'Holiday Celebration',
        image: gpic8
    },
    {
        id: 9,
        title: 'Volunteer Appreciation Night',
        image: gpic9
    },
    {
        id: 10,
        title: 'Mother’s Day Luncheon',
        image: gpic10
    },
    {
        id: 11,
        title: 'Christmas Caroling',
        image: gpic11
    },
    {
        id: 12,
        title: 'Leadership Training Seminar',
        image: gpic12
    },
];

const GalleriesPage = () => {
    return (
        <div>
            <div className='GalleryPageHeaderWrap'>
                <h2>GALLERY</h2>
            </div>
        <div className="galleries">

            <div className='GalleryPageCardsWrap'>
                {galleries.map(gallery => (
                    <div key={gallery.id} className="gallery-card">
                        <img src={gallery.image} alt={gallery.title} />
                        <p>{gallery.title}</p>
                    </div>
                ))}
            </div>
                {/* <div className='GalleryButtonWrap'>
                <button className='GalleryButton'>View more</button>
                </div> */}
            
        </div>
        </div>
    );
};

export default GalleriesPage;
