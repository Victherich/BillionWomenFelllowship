// // Intro.js
// import React from 'react';
// import '../CSS/Intro.css';
// import {useNavigate} from "react-router-dom"

// const Intro = () => {
//   const navigate = useNavigate()
//   return(
// <div className="intro-container">
//     <h1 className="intro-heading">Billion Women Global Fellowship (BWGF)</h1>
//     <div className="intro-responsive-container">
//       <p className="intro-content">
//         Billion Women Global Fellowship (BWGF) is a women's fellowship that provides comprehensive solutions and supports through emotional and mental health programs, holistic health and wellness initiatives, spiritual guidance, career and financial empowerment, marital and relationship counseling, personal development workshops, and strong community building efforts.<br/> These solutions are designed to help women overcome loneliness, suppression, depression, betrayal, and to help women achieve breakthroughs in various aspects of their lives.
//       </p>
//       <button onClick={()=>navigate("/about")}>More About BWGF</button>
//     </div>
//   </div>
//   )
  
// }; 

// export default Intro;



// Intro.jsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

/* ================= STYLED COMPONENTS ================= */

const Section = styled.section`
  width: 100%;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 43, 0.05),
    rgba(74, 20, 140, 0.08)
  );

  @media (max-width: 480px) {
    padding: 70px 15px;
  }
`;

const Card = styled.div`
  max-width: 900px;
  width: 100%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 60px 50px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  text-align: center;

  @media (max-width: 768px) {
    padding: 45px 25px;
  }
`;

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 25px;
  background: linear-gradient(
    90deg,
    rgba(255, 0, 43, 0.85),
    #4a148c
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #4a148c;
  line-height: 1.8;
  max-width: 780px;
  margin: 0 auto 35px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const Button = styled.button`
  background: linear-gradient(
    135deg,
    rgba(255, 0, 43, 0.85),
    #4a148c
  );
  color: white;
  border: none;
  padding: 14px 34px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.35s ease;
  box-shadow: 0 10px 25px rgba(255, 0, 43, 0.25);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 35px rgba(255, 0, 43, 0.35);
  }

  &:active {
    transform: scale(0.98);
  }
`;

/* ================= COMPONENT ================= */

const Intro = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Card>
        <Title>Billion Women Global Fellowship (BWGF)</Title>

        <Description>
          Billion Women Global Fellowship (BWGF) is a women’s fellowship
          dedicated to holistic transformation. We provide emotional and
          mental health support, wellness initiatives, spiritual guidance,
          career and financial empowerment, marital and relationship counseling,
          personal development workshops, and a strong global community.
          <br /><br />
          Our mission is to help women overcome loneliness, suppression,
          depression, betrayal, and to experience lasting breakthroughs in
          every area of life.
        </Description>

        <Button onClick={() => navigate('/about')}>
          More About BWGF
        </Button>
      </Card>
    </Section>
  );
};

export default Intro;
