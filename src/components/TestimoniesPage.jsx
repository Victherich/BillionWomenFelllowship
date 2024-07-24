import React from 'react';
import '../CSS/TestimoniesComponent.css';

const testimonies = [
    { id: 1, name: 'Jane Doe', testimony: 'This fellowship has changed my life!' },
    { id: 2, name: 'Mary Smith', testimony: 'A wonderful community and support system.' },
    { id: 3, name: 'Mary Smith', testimony: 'A wonderful community and support system.' },
    { id: 1, name: 'Jane Doe', testimony: 'This fellowship has changed my life!' },
    { id: 2, name: 'Mary Smith', testimony: 'A wonderful community and support system.' },
    { id: 3, name: 'Mary Smith', testimony: 'A wonderful community and support system.' }
    // Add more testimonies here
];

const TestimoniesPage = () => {
    return (
       <div>
             <div className='TestimoniesHeader'>
        <h2>TESTIMONIES</h2>
    </div>
        
       <div className='TestimoniesWrap'>
            <p style={{marginBottom:"50px",textAlign:"center",color:"purple",fontWeight:"500"}}>Psalms  9:11  Sing praises to the LORD, which dwelleth in Zion: declare among the people his doings. <br/>
              Psalms  22:22  I will declare thy name unto my brethren: in the midst of the congregation will I praise thee. <br/>
              Psalms  66:16  Come and hear, all ye that fear GOD, and I will declare what he hath done for my soul.<br/>
              Psalms  150:6 Let every thing that hath breath praise the LORD. Praise ye the LORD.</p>
             <div className="testimonies-container">
            {testimonies.map(testimony => (
                <div key={testimony.id} className="testimony-card">
                    <p>"{testimony.testimony}"</p>
                    <h4>- {testimony.name}</h4>
                </div>
            ))}
        </div>
    
       </div>
       </div>
    );
};

export default TestimoniesPage;
