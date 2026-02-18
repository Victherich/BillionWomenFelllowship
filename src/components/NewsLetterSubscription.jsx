import React, { useState } from 'react';
import '../CSS/NewsLetterSubscription.css';
import { useForm} from '@formspree/react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import Swal from 'sweetalert2';

const NewsletterSubscription = () => {
    const [ handleSubmit] = useForm("mblrdnak");
    const [submitting, setSubmitting] = useState(false);
    // const [error, setError] = useState(null);
    const [email, setEmail] = useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setSubmitting(true);
        handleSubmit(e)
          .then(() => {
            Swal.fire({
              icon: "success",
              text: "Subscribed Successfully. Thanks",
              showConfirmButton: true
            }).then(() => {
              
              setEmail('');
            
              setSubmitting(false);
            });
          })
          .catch((err) => {
            setSubmitting(false);
            // setError("An error occurred. Please try again later.");
          });
      };
    
      const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
      `;
    

    return (
        <div className='NewsLetterContainer'>
            <div className="newsletter-container">
            <p>Subscribe for Latest Updates</p>
            <form onSubmit={handleSubmitForm} className="newsletter-form">
                <input 
                    type="email" 
                    value={email}
                    name="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter your email" 
                    required 
                />
                <button type="submit">
          {submitting ? (
            <ClipLoader color={"#ffffff"} loading={submitting} css={override} size={15} />
          ) : (
            "Subscribe"
          )}
        </button>
            </form>
        </div>
        </div>
        
    );
};

export default NewsletterSubscription;
