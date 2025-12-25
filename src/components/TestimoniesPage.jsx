// import React from 'react';
// import '../CSS/TestimoniesComponent.css';
// import { FaShareAlt } from "react-icons/fa";
// import testimonies from './TestimoniesContents';
// import BackButton from './BackButton';


// const TestimoniesPage = () => {

    
//     const handleShare = (testimony) => {
//                 if (navigator.share) {
//                   navigator.share({
//                     title: testimony.name,
//                     text: testimony.testimony,
//                     url: window.location.origin + '/testimoniespage',
//                   }).catch(error => console.error('Error sharing', error));
//                 } else {
//                   navigator.clipboard.writeText(window.location.origin + '/testimoniespage' );
//                   alert("URL copied to clipboard");
//                 }
//               };


//     return (
//        <div>
//              <div className='TestimoniesHeader'>
//         <h2>TESTIMONIES</h2>
//     </div>
        
//        <div className='TestimoniesWrap'>
//             <p style={{marginBottom:"50px",textAlign:"center",color:"#4a148c",fontWeight:"400"}}>Psalms  9:11  Sing praises to the LORD, which dwelleth in Zion: declare among the people his doings. <br/>
//               Psalms  22:22  I will declare thy name unto my brethren: in the midst of the congregation will I praise thee. <br/>
//               Psalms  66:16  Come and hear, all ye that fear GOD, and I will declare what he hath done for my soul.<br/>
//               Psalms  150:6 Let every thing that hath breath praise the LORD. Praise ye the LORD.</p>
//              <div className="testimonies-container">
//             {testimonies.map(testimony => (
//                 <div key={testimony.id} className="testimony-card">
//                     <p>"{testimony.testimony}"</p>
//                     <p style={{fontWeight:"500"}}>- {testimony.name}</p>
//                     <button className='BlogDetailShare' onClick={(e) => { e.stopPropagation(); handleShare(testimony); }}>
//                             <FaShareAlt /> Share
//                         </button>
//                 </div>
//             ))}
//         </div>
    
//        </div>
//        <BackButton/>
//        </div>
//     );
// };

// export default TestimoniesPage;




import React from 'react';
import styled from 'styled-components';
import { FaShareAlt } from 'react-icons/fa';
import testimonies from './TestimoniesContents';
import BackButton from './BackButton';
import heroImage from '../images/testimonyImg.png'; // replace with your hero image

/* ================= STYLED COMPONENTS ================= */

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Hero = styled.section`
  width: 100%;
  height: 350px;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.45);
  }
`;

const HeroText = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  z-index: 1;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.7);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const IntroText = styled.p`
  max-width: 900px;
  text-align: center;
  color: #4a148c;
  font-size: 1rem;
  line-height: 1.7;
  margin: 50px auto 30px;
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  }
`;

const TestimonyText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #333;
  font-style: italic;
  text-align: center;
`;

const Author = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #4a148c;
  text-align: center;
`;

const ShareButton = styled.button`
  background: linear-gradient(135deg, rgba(255,0,43,0.9), #4a148c);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 25px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 auto;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255,0,43,0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 35px rgba(255,0,43,0.4);
  }
`;

const ExploreMoreWrap = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
`;

/* ================= COMPONENT ================= */

const TestimoniesPage = () => {
  const handleShare = (testimony) => {
    const url = window.location.origin + '/testimoniespage';

    if (navigator.share) {
      navigator.share({
        title: testimony.name,
        text: testimony.testimony,
        url,
      }).catch(error => console.error('Error sharing', error));
    } else {
      navigator.clipboard.writeText(url);
      alert("URL copied to clipboard");
    }
  };

  return (
    <PageContainer>
      <Hero>
        <HeroText>TESTIMONIES</HeroText>
      </Hero>

      <IntroText>
        Psalms 9:11 Sing praises to the LORD, which dwelleth in Zion: declare among the people his doings. <br />
        Psalms 22:22 I will declare thy name unto my brethren: in the midst of the congregation will I praise thee. <br />
        Psalms 66:16 Come and hear, all ye that fear GOD, and I will declare what he hath done for my soul. <br />
        Psalms 150:6 Let every thing that hath breath praise the LORD. Praise ye the LORD.
      </IntroText>

      <CardsGrid>
        {testimonies.map((testimony) => (
          <Card key={testimony.id}>
            <TestimonyText>"{testimony.testimony}"</TestimonyText>
            <Author>- {testimony.name}</Author>
            <ShareButton onClick={(e) => { e.stopPropagation(); handleShare(testimony); }}>
              <FaShareAlt /> Share
            </ShareButton>
          </Card>
        ))}
      </CardsGrid>

      <ExploreMoreWrap>
        <BackButton />
      </ExploreMoreWrap>
    </PageContainer>
  );
};

export default TestimoniesPage;
