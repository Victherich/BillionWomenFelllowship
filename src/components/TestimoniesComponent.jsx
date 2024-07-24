import React from 'react';
import '../CSS/TestimoniesComponent.css';
import { useNavigate } from 'react-router-dom';

const testimonies = [
    { id: 1, name: 'Jane Doe', testimony: 'This fellowship has changed my life!' },
    { id: 2, name: 'Mary Smith', testimony: 'A wonderful community and support system.' },
    { id: 3, name: 'Mary Smith', testimony: 'A wonderful community and support system.' }
    // Add more testimonies here
];

const TestimoniesComponent = () => {
    const navigate = useNavigate()
    return (
       <div className='TestimoniesWrap'>
             <div className="testimonies-container">
            <h2>TESTIMONIES</h2>
            {testimonies.map(testimony => (
                <div key={testimony.id} className="testimony-card">
                    <p>"{testimony.testimony}"</p>
                    <h4>- {testimony.name}</h4>
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
