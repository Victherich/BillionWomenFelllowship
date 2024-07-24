// // src/ContactForm.js
// import React, { useState } from 'react';
// import '../CSS/ContactUs.css';
// import { FaContao, FaElementor, FaHome } from 'react-icons/fa';
// // import Logo from "../Images/happyman Logo design.jpg"
// import bgIm from "../Images/contactusimg2.jpeg"
// import { useForm, ValidationError } from '@formspree/react';
// import { useNavigate } from 'react-router-dom';
// import { css } from '@emotion/react';
// import ClipLoader from 'react-spinners/ClipLoader';
// import Logo from "../Images/ELogo.png"

// const ContactForm = () => {
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

//   const [state, handleSubmit] = useForm("mnqerjbz");
//   if (state.succeeded) {
//       return <div className='ContactFormWrap' style={{position:"relative",color:"blue"}}>
//             <div className='contact-form-container' >
//                 <p style={{position:"relative",textAlign:"center"}} >Your request is submitted and one of our representatives shall get back to you as soon as possible</p>
//                 <button className='SubmittedButton' style={{marginTop:"10px"}}onClick={()=>navigate("/")}><FaHome/> Home</button>
//             </div>
//       </div>
//   }

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log('Form data submitted:', formData);
//   //   // Here you would typically handle form submission, e.g., send data to your backend
//   // };

//   return (
    
//       <div className='ContactFormWrap' style={{backgroundImage:`url(${bgIm})`}}>
//       {/* <FaContao style={{fontSize:"3rem"}}/> */}
//         <div className="contact-form-container" style={{backgroundImage:`url(${bgIm})`}}>
//       <h2>Contact Us</h2>
//       {/* <img src={Logo} alt="Logo"/> */}
//       <img src={Logo} alt="Logo" style={{position:"relative",width:"70px"}}/>
//       {/* <FaElementor style={{fontSize:"2.5rem",color:"rgba(0,0,255,0.5)",position:"relative"}}/> */}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button type="submit">
//         {state.submitting ? (
//           <ClipLoader color={"#ffffff"} loading={state.submitting} css={override} size={15} />
//         ) : (
//           "Submit"
//         )}
          
//           </button>
//       </form>
//       <div className="footer-contact"  style={{textAlign:"center",alignItems:"center",color:"blue",position:"relative"}}>
     

//           {/* <h4 style={{textDecoration:"underline"}}>Contact</h4> */}
//           <br/>
//           <p>Address: The old Vicarage building <br/>
//           Trinity Road Old Market Avon<br/>
//           Bristol– United Kingdom.<br/>
           
//            </p>
//           <br/>
//           <p>Email: info@elexdontech.com</p>
//           <p>Phone: +44(0)7479305003</p>
//         </div>
//     </div>

//     </div>
    
//       );
// };

// export default ContactForm;



// src/ContactForm.js
import React, { useContext, useState } from 'react';
import '../CSS/ContactUs.css';
import { FaHome } from 'react-icons/fa';
// import bgIm from "../Images/contactusimg2.jpeg";
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import Logo from "../images/logo.jpeg";
import axios from 'axios';
import { Context } from './Context';

const ContactForm = () => {
  const {contactFormUrl}=useContext(Context)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    console.log('Form data being submitted:', formData); // Log form data

    try {
      const response = await axios.post(`${contactFormUrl}`, formData);
      setSubmitting(false);

      console.log('Server response:', response.data); // Log server response

      if (response.data.status === 'success') {
        setSuccess(true);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error occurred while sending message:', error); // Log error
      setSubmitting(false);
      setError('An error occurred while sending the message.');
    }
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  if (success) {
    return (
      <div className='ContactFormWrap' style={{ position: "relative", color: "blue" }}>
        <div className='contact-form-container'>
          <p style={{ position: "relative", textAlign: "center" }}>Your request is submitted and one of our representatives shall get back to you as soon as possible</p>
          <button className='SubmittedButton' style={{ marginTop: "10px" }} onClick={() => navigate("/")}><FaHome /> Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className='ContactFormWrap'>
      <div className="contact-form-container" >
        <h2>Contact Us</h2>
        <img src={Logo} alt="Logo" style={{ position: "relative", width: "70px",borderRadius:"50%" }} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
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
        <div className="footer-contact" style={{ textAlign: "center", alignItems: "center", color: "purple", position: "relative" }}>
          <br />
         
          <br />
          <p>Email: billionwomenfellowship@gmail.com</p>
          <p>Phone: +1 (770) 310-2914</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
