import React from 'react';
import '../CSS/TestimoniesComponent.css';
import { useNavigate } from 'react-router-dom';
import { FaShareAlt } from "react-icons/fa";
import testimonies from './TestimoniesContents';


const TestimoniesComponent = () => {
    const navigate = useNavigate()
    
    const handleShare = (testimony) => {
        if (navigator.share) {
          navigator.share({
            title: testimony.name,
            text: testimony.testimony,
            url: window.location.origin + '/testimoniespage',
          }).catch(error => console.error('Error sharing', error));
        } else {
          navigator.clipboard.writeText(window.location.origin + '/testimoniespage' );
          alert("URL copied to clipboard");
        }
      };


    return (
       <div className='TestimoniesWrap'>
             <div className="testimonies-container">
            <h2>TESTIMONIES</h2>
            {testimonies.slice(0,2).map(testimony => (
                <div key={testimony.id} className="testimony-card">
                    <p>"{testimony.testimony}"</p>
                    <h4>- {testimony.name}</h4>
                    <button className='BlogDetailShare' onClick={(e) => { e.stopPropagation(); handleShare(testimony); }}>
                            <FaShareAlt /> Share
                        </button>
                </div>
            ))}
        </div>
        <div className='events-containerButtonWrap'>
            <button onClick={()=>navigate("/testimoniespage")}>Read More Testimonies</button>
            </div>
       </div>
    );
};

export default TestimoniesComponent;
