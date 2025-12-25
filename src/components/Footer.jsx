// import React from 'react';
// import '../CSS/Footer.css';
// // import {Link, useLocation} from 'react-router-dom'
// import Logo1 from "../images/logo.jpeg"
// import { FaCcMastercard, FaCcVisa, FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube,} from 'react-icons/fa';
// // import visaCardImg from "../Images/visa card image.png"
// // import masterCardImg from "../Images/master card image.png"
// // import paypalImg from "../Images/paypal image.png"
// import {useNavigate,useLocation} from "react-router-dom"

// const Footer = () => {
//   const location = useLocation()
//   const navigate = useNavigate()


//   const handleAbout = (about) => {
        
//     if (about) {
//       const element = document.getElementById('about');
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-container">
        
//         <div className="footer-contact">
     
//           <img src={Logo1} alt="logo1" style={{width:"50px",height:"50px",marginBottom:"10px",borderRadius:"50%"}} onClick={()=>navigate("/")}/>

//           <h4>BILLION WOMEN <br/>
//           GLOBAL<br/>
//           FELLOWSHIP</h4>

//           <p style={{fontSize:"0.8rem"}}>
//           No more struggling alone, <br/>
//           join Billion Women Global <br/>
//           Fellowship. 
//           <br/><br/>
//           A fellowship for women from all walks of life. 
//           </p>
  
//         </div>
//         <div className="footer-links">
//           <h4>Quick Links</h4>
//           <p style={{cursor:"pointer"}} className="footer-link" onClick={()=>navigate("/")}>Home</p>
//           <p style={{cursor:"pointer"}} className="footer-link" onClick={()=>navigate("/about")}>About</p>
//           <p style={{cursor:"pointer"}} className="footer-link" onClick={()=>navigate("/eventspage")}>Events</p>
//           <p style={{cursor:"pointer"}} className="footer-link" onClick={()=>navigate("/testimoniespage")}>Testimonies</p>
//           <p style={{cursor:"pointer"}} className="footer-link" onClick={()=>navigate("/getinspiredpage")}>Get Inspired</p>
//           <p style={{cursor:"pointer"}} className="footer-link" onClick={()=>navigate("/contact")}>Contact</p>
//           <p style={{cursor:"pointer"}} className="footer-link" onClick={()=>navigate("/booking")}>Booking</p>
//         </div>
//         <div className="footer-contact">
     

//           <h4 style={{textDecoration:"underline"}}>Contact</h4>
//           <p>Address: 3771 Floyd Rd, Marietta, GA 30060</p>
//           <p>Address: 1, Opa Aro Close,<br/>
//            Off Tunji Adebayo Street,<br/>
//             Beside AP Filling Station, Fagba Lagos.</p>
//           <p>Email: billionwomenfellowship@gmail.com</p>
//           <p>Phone: +1 (770) 310-2914</p>
//           {/* <p>Phone: +233 54 827 6687</p> */}
//         </div>
//         {/* <div className="footer-payment">
//           <h4>Payment Methods:</h4>
//           <ul>
//             <img src={visaCardImg} alt="paymentMethod" onClick={()=>window.open(`https://www.visa.com.ng/pay-with-visa/promotions/olympics-paris-2024.html?gad_source=1&gclid=Cj0KCQjwsuSzBhCLARIsAIcdLm6zBk2qZjr6TqVIt4NCJ95P1B-x1OinDI9Ja4jlLckfC7Jw-gM5Y9waAnIOEALw_wcB`,"_blank")}/><br/>
// <img src={masterCardImg} alt="paymentMethod" onClick={()=>window.open(`https://www.mastercard.com/global/en.html`,"_blank")}/><br/>
//             <img src={paypalImg} alt="paymentMethod" onClick={()=>window.open(`https://www.paypal.com/ng/home`,"_blank")}/>
//           </ul>
//         </div> */}
//         <div className="footer-social">
//           <FaFacebook className="social-link" onClick={()=>window.open("https://www.facebook.com/propheticpastorsade?mibextid=ZbWKwL","_blank")}/>
//           <FaYoutube className='social-link' onClick={()=>window.open("https://youtube.com/@sadek4001?si=n9KSICy5O8qtNQnF","_blank")}/>
//           <FaInstagram className="social-link" onClick={()=>window.open("https://www.instagram.com/pastorsadekuku?igsh=OGQ5ZDc2ODk2ZA==","_blank")}/>
//           <FaTiktok className='social-link' onClick={()=>window.open("https://www.tiktok.com/@pastorsadekuku?_t=8o91Ugagxpu&_r=1","_blank")}/>
          
//         </div>
//       </div>
//       <div className='CopyRight'><p>© Copyright {new Date().getFullYear()} Billion Women Global Fellowship. All Rights Reserved</p>
//         <p style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.6)"}}><span style={{color:"rgba(0,100,255,0.7)"}}>POWERED BY</span> ECHOBYTE CONCEPT</p>
//       </div>
      

//     </footer>
//   );
// };

// export default Footer;






import React from 'react';
import styled from 'styled-components';
import Logo1 from '../images/logo.jpeg';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

/* ================= STYLED COMPONENTS ================= */

const FooterWrap = styled.footer`
  background: linear-gradient(
    135deg,
    #2b0038,
    #4a148c
  );
  color: white;
  padding: 80px 20px 25px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-bottom: 12px;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  }

  h4 {
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 0.8rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
  }
`;

const Column = styled.div`
  h4 {
    font-size: 1rem;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 0.6px;
  }

  p {
    font-size: 0.85rem;
    margin-bottom: 10px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.85);
    transition: all 0.25s ease;

    &:hover {
      color: #ff3b6a;
      transform: translateX(4px);
    }
  }
`;

const Contact = styled.div`
  h4 {
    text-decoration: underline;
  }

  p {
    font-size: 0.8rem;
    line-height: 1.6;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.85);
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 15px;

  svg {
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    color: white;

    &:hover {
      color: #ff3b6a;
      transform: translateY(-3px);
    }
  }
`;

const CopyRight = styled.div`
  margin-top: 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 18px;
  text-align: center;

  p {
    font-size: 0.75rem;
    margin-bottom: 6px;
    color: rgba(255, 255, 255, 0.8);
  }

  span {
    color: rgba(0, 100, 255, 0.85);
  }
`;

/* ================= COMPONENT ================= */

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <FooterWrap>
      <Container>
        <Brand>
          <img src={Logo1} alt="BWGF Logo" onClick={() => navigate('/')} />
          <h4>
            BILLION WOMEN <br />
            GLOBAL <br />
            FELLOWSHIP
          </h4>
          <p>
            No more struggling alone,
            <br />
            join Billion Women Global
            <br />
            Fellowship.
            <br />
            <br />
            A fellowship for women from all walks of life.
          </p>
        </Brand>

        <Column>
          <h4>Quick Links</h4>
          <p onClick={() => navigate('/')}>Home</p>
          <p onClick={() => navigate('/about')}>About</p>
          <p onClick={() => navigate('/eventspage')}>Events</p>
          <p onClick={() => navigate('/testimoniespage')}>Testimonies</p>
          <p onClick={() => navigate('/getinspiredpage')}>Get Inspired</p>
          <p onClick={() => navigate('/contact')}>Contact</p>
          <p onClick={() => navigate('/booking')}>Booking</p>
        </Column>

        <Contact>
          <h4>Contact</h4>
          <p>Address: 3771 Floyd Rd, Marietta, GA 30060</p>
          <p>
            Address: 1, Opa Aro Close,
            <br />
            Off Tunji Adebayo Street,
            <br />
            Beside AP Filling Station, Fagba Lagos.
          </p>
          <p>Email: billionwomenfellowship@gmail.com</p>
          <p>Phone: +1 (770) 310-2914</p>

          <Socials>
            <FaFacebook onClick={() => window.open('https://www.facebook.com/propheticpastorsade?mibextid=ZbWKwL', '_blank')} />
            <FaYoutube onClick={() => window.open('https://youtube.com/@sadek4001?si=n9KSICy5O8qtNQnF', '_blank')} />
            <FaInstagram onClick={() => window.open('https://www.instagram.com/pastorsadekuku?igsh=OGQ5ZDc2ODk2ZA==', '_blank')} />
            <FaTiktok onClick={() => window.open('https://www.tiktok.com/@pastorsadekuku?_t=8o91Ugagxpu&_r=1', '_blank')} />
          </Socials>
        </Contact>
      </Container>

      <CopyRight>
        <p>
          © Copyright {new Date().getFullYear()} Billion Women Global Fellowship.
          All Rights Reserved
        </p>
        <p>
          <span>POWERED BY</span> ECHOBYTE CONCEPT
        </p>
      </CopyRight>
    </FooterWrap>
  );
};

export default Footer;
