import React from 'react';
import '../CSS/TestimoniesComponent.css';
import { FaShareAlt } from "react-icons/fa";
import testimonies from './TestimoniesContents';
import BackButton from './BackButton';


const TestimoniesPage = () => {

    
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
       <div>
             <div className='TestimoniesHeader'>
        <h2>TESTIMONIES</h2>
    </div>
        
       <div className='TestimoniesWrap'>
            <p style={{marginBottom:"50px",textAlign:"center",color:"#4a148c",fontWeight:"400"}}>Psalms  9:11  Sing praises to the LORD, which dwelleth in Zion: declare among the people his doings. <br/>
              Psalms  22:22  I will declare thy name unto my brethren: in the midst of the congregation will I praise thee. <br/>
              Psalms  66:16  Come and hear, all ye that fear GOD, and I will declare what he hath done for my soul.<br/>
              Psalms  150:6 Let every thing that hath breath praise the LORD. Praise ye the LORD.</p>
             <div className="testimonies-container">
            {testimonies.map(testimony => (
                <div key={testimony.id} className="testimony-card">
                    <p>"{testimony.testimony}"</p>
                    <p style={{fontWeight:"500"}}>- {testimony.name}</p>
                    <button className='BlogDetailShare' onClick={(e) => { e.stopPropagation(); handleShare(testimony); }}>
                            <FaShareAlt /> Share
                        </button>
                </div>
            ))}
        </div>
    
       </div>
       <BackButton/>
       </div>
    );
};

export default TestimoniesPage;
