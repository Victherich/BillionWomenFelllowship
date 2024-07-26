import React, { useState } from 'react';
import '../CSS/NewsLetterSubscription.css';

const NewsletterSubscription = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Email submitted:', email);
    };

    return (
        <div className='NewsLetterContainer'>
            <div className="newsletter-container">
            <p>Subscribe for Latest Updates</p>
            <form onSubmit={handleSubmit} className="newsletter-form">
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter your email" 
                    required 
                />
                <button type="submit">Subscribe</button>
            </form>
        </div>
        </div>
        
    );
};

export default NewsletterSubscription;
