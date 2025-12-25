// import React from 'react';
// import '../CSS/TestimoniesComponent.css';
// import { useNavigate } from 'react-router-dom';
// import { FaShareAlt } from "react-icons/fa";
// import testimonies from './TestimoniesContents';


// const TestimoniesComponent = () => {
//     const navigate = useNavigate()
    
//     const handleShare = (testimony) => {
//         if (navigator.share) {
//           navigator.share({
//             title: testimony.name,
//             text: testimony.testimony,
//             url: window.location.origin + '/testimoniespage',
//           }).catch(error => console.error('Error sharing', error));
//         } else {
//           navigator.clipboard.writeText(window.location.origin + '/testimoniespage' );
//           alert("URL copied to clipboard");
//         }
//       };


//     return (
//        <div className='TestimoniesWrap'>
//              <div className="testimonies-container">
//             <h2>TESTIMONIES</h2>
//             {testimonies.slice(0,2).map(testimony => (
//                 <div key={testimony.id} className="testimony-card">
//                     <p>"{testimony.testimony}"</p>
//                     <h4>- {testimony.name}</h4>
//                     <button className='BlogDetailShare' onClick={(e) => { e.stopPropagation(); handleShare(testimony); }}>
//                             <FaShareAlt /> Share
//                         </button>
//                 </div>
//             ))}
//         </div>
//         <div className='events-containerButtonWrap'>
//             <button onClick={()=>navigate("/testimoniespage")}>Read More Testimonies</button>
//             </div>
//        </div>
//     );
// };

// export default TestimoniesComponent;




import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaShareAlt } from 'react-icons/fa';
import testimonies from './TestimoniesContents';

/* ================= STYLED COMPONENTS ================= */

const Container = styled.div`
  width: 100%;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background: linear-gradient(135deg, rgba(255,0,43,0.05), rgba(74,20,140,0.08));
`;

const Header = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, rgba(255,0,43,0.9), #4a148c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  width: 100%;
  max-width: 1000px;
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

const Author = styled.h4`
  font-size: 1rem;
  color: #4a148c;
  font-weight: 600;
  text-align: center;
`;

const Button = styled.button`
  background: linear-gradient(135deg, rgba(255,0,43,0.9), #4a148c);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 25px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  transition: all 0.3s ease;
  margin: 0 auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(255,0,43,0.3);
  }
`;

const ExploreMoreWrap = styled.div`
  margin-top: 30px;
`;

/* ================= COMPONENT ================= */

const TestimoniesComponent = () => {
  const navigate = useNavigate();

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
    <Container>
      <Header>TESTIMONIES</Header>
      <CardsGrid>
        {testimonies.slice(0, 2).map((testimony) => (
          <Card key={testimony.id}>
            <TestimonyText>"{testimony.testimony}"</TestimonyText>
            <Author>- {testimony.name}</Author>
            <Button onClick={(e) => { e.stopPropagation(); handleShare(testimony); }}>
              <FaShareAlt /> Share
            </Button>
          </Card>
        ))}
      </CardsGrid>

      <ExploreMoreWrap>
        <Button onClick={() => navigate("/testimoniespage")}>
          Read More Testimonies
        </Button>
      </ExploreMoreWrap>
    </Container>
  );
};

export default TestimoniesComponent;
