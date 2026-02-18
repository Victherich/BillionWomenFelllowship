import React, { useState, useEffect } from 'react';
import '../CSS/Contact2.css';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

import { useForm } from '@formspree/react';


const ContactForm2 = () => {
  const [state, handleSubmit] = useForm("mjkbrrgz");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName:'',
    email: '',
    phone:'',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (state.succeeded) {
      setSubmitting(false);
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSubmitting(true);
    handleSubmit(e)
      .then(() => {
        // Optional: handle success, navigate or reset form
      })
      .catch((err) => {
        setSubmitting(false);
        setError("An error occurred. Please try again later.");
      });
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  if (state.succeeded) {
    return (
      <div className='ContactFormWrap2' style={{ position: "relative", color: "blue" }}>
        <div className='contact-form-container2' style={{paddingTop:"300px"}}>
          <p style={{ position: "relative", textAlign: "center", color:"white",backgroundColor:"rgba(0,0,0,0.4)" }}>
            Your request is submitted and one of our representatives shall get back to you as soon as possible
          </p>
          <button className='SubmittedButton2' style={{ marginTop: "10px" }} onClick={() => navigate("/")}>
            <FaHome /> Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='ContactFormWrap2'>
      <div className="contact-form-container2">
        <h2>Booking</h2>
        {/* <img src={Logo} alt="Logo" style={{ position: "relative", width: "70px", borderRadius: "50%" }} /> */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmitForm}>
          <div className="form-group2">
            {/* <label htmlFor="firstName">First Name</label> */}
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder='First Name'
            />
          </div>
          <div className="form-group2">
            {/* <label htmlFor="lastName">Last Name</label> */}
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder='Last Name'
            />
          </div>
          <div className="form-group2">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='Email'
            />
          </div>
          <div className="form-group2">
            {/* <label htmlFor="phone">Phone Number</label> */}
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder='Phone Number'
            />
          </div>
          <div className="form-group2">
            {/* <label htmlFor="message">Message</label> */}
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder='Type your message here...'
            ></textarea>
          </div>
          <button type="submit">
            {submitting ? (
              <ClipLoader color={"#ffffff"} loading={submitting} css={override} size={15} />
            ) : (
              "Submit"
            )}
          </button>
        </form>
        {/* <div className="footer-contact2" style={{ textAlign: "center", alignItems: "center", color: "#4a148c", position: "relative" }}>
          <br />
          <p>Address:  3771 Floyd Rd, Marietta, GA 30060</p>
          <p>Address:   1, OPA ARO CLOSE, OFF TUNJI ADEBAYO STREET, BESIDE AP FILLING STATION, FAGBA LAGOS.</p>
          <p>Email: billionwomenfellowship@gmail.com</p>
          <p>Phone: +1 (770) 310-2914</p>
        </div> */}
      </div>
      
      {/* <BackButton/> */}
    </div>
  );
};

export default ContactForm2;
