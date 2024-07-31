import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../CSS/Galleries.css';
import galleries from "./GalleriesPhoto"
import BackButton from './BackButton';

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
            </div>
            <BackButton/>
        </div>
    );
};

export default GalleriesPage;
