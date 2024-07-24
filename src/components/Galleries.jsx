import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../CSS/Galleries.css';
import gpic1 from "../images/gpic1.jpeg";
import gpic2 from "../images/gpic2.jpeg";
import gpic3 from "../images/gpic3.jpeg";
import gpic4 from "../images/gpic4.jpeg";
import { useNavigate } from 'react-router-dom';

const galleries = [
    {
        id: 1,
        title: 'Event Photos',
        image: gpic1
    },
    {
        id: 2,
        title: 'Workshop Videos',
        image: gpic2
    },
    {
        id: 3,
        title: 'Event Photos',
        image: gpic3
    },
    {
        id: 4,
        title: 'Workshop Videos',
        image: gpic4
    },
    // Add more galleries here
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Galleries = () => {
    const navigate=useNavigate()
    return (
        <div className="galleries">
            <h2>GALLERY</h2>
            <Carousel 
                 responsive={responsive}
                 infinite={true}
                 autoPlay={true}
                 autoPlaySpeed={2000}
                 keyBoardControl={true}
                //  showDots={true}
                 renderButtonGroupOutside={true}
            >
                {galleries.map(gallery => (
                    <div key={gallery.id} className="gallery-card">
                        <img src={gallery.image} alt={gallery.title} />
                        <p>{gallery.title}</p>
                    </div>
                ))}
            </Carousel>
            <div className='GalleryButtonWrap'>
            <button className='GalleryButton' onClick={()=>navigate("/galleriespage")}>View more</button>
            </div>
            
        </div>
    );
};

export default Galleries;
