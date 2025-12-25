// import React from 'react'
// import FounderPic from "../images/FounderMessageImg.png"
// import "../CSS/FounderMessage.css"

// const FounderMessage = () => {
//   return (
//     <div className='FounderMessageWrap'>
//       <p>Are you tired of being tired, sick of being sick. Are you lonely and weary. Do you feel alone, suppressed, depressed, oppressed or betrayed.  Do you desire more and need a breakthrough. Do you need a Spiritual Midwife to push through to your next level Maritally, Careerly, Financially,  
// Spiritually, Emotionally and so on. Do you need a midwife to help you birth your purpose. <br/><br/>
// No more struggling alone, join our fellowship 
// <strong> Billion Women Global Fellowship (BWGF)</strong>. A fellowship for women from all walks of life. 
// <br/><br/>
// <strong>Pastor Sade Kuku</strong><br/>
// Founder</p>
//       <img src={FounderPic} alt="FounderPics"/>
//     </div>
//   )
// }

// export default FounderMessage


import React from 'react';
import styled from 'styled-components';
import FounderPic from '../images/FounderMessageImg.png';

/* ================= STYLED COMPONENTS ================= */

const Section = styled.section`
  width: 100%;
  padding: 120px 20px;
  background: linear-gradient(
    135deg,
    rgba(74, 20, 140, 0.08),
    rgba(255, 0, 43, 0.05)
  );
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 80px 15px;
  }
`;

const Card = styled.div`
  max-width: 1100px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(14px);
  border-radius: 24px;
  padding: 60px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr; /* LEFT | RIGHT */
  gap: 60px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 45px 30px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

const FounderImage = styled.img`
  width: 100%;
  max-width: 280px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);
  background: white;

  @media (max-width: 900px) {
    max-width: 220px;
  }
`;

const FounderName = styled.div`
  font-weight: 700;
  font-size: 1.15rem;
  color: #2e0f59;
  margin-top: 10px;
`;

const Role = styled.div`
  font-size: 0.95rem;
  color: rgba(255, 0, 43, 0.85);
  margin-top: 4px;
`;

const RightColumn = styled.div`
  font-size: 1.1rem;
  line-height: 1.9;
  color: #4a148c;

  strong {
    color: rgba(255, 0, 43, 0.9);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

/* ================= COMPONENT ================= */

const FounderMessage = () => {
  return (
    <Section>
      <Card>
        {/* LEFT: Image + Name */}
        <LeftColumn>
          <ImageWrap>
            <FounderImage src={FounderPic} alt="Pastor Sade Kuku" />
          </ImageWrap>
          <FounderName>Pastor Sade Kuku</FounderName>
          <Role>Founder</Role>
        </LeftColumn>

        {/* RIGHT: Message */}
        <RightColumn>
          Are you tired of being tired, sick of being sick?
          Are you lonely and weary — feeling alone, suppressed, depressed,
          oppressed, or betrayed? Do you desire more and long for a breakthrough?

          <br /><br />

          Do you need a <strong>Spiritual Midwife</strong> to help push you into
          your next level — maritally, career-wise, financially, spiritually,
          and emotionally? Do you need guidance to help you birth your purpose?

          <br /><br />

          No more struggling alone. Join our fellowship —
          <strong> Billion Women Global Fellowship (BWGF)</strong>, a global
          community of women from all walks of life, rising together.
        </RightColumn>
      </Card>
    </Section>
  );
};

export default FounderMessage;
