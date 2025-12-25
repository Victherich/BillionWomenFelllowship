// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import '../CSS/Galleries.css';
// import galleries from './GalleriesPhoto';

// import { useNavigate } from 'react-router-dom';



// const responsive = {
//     superLargeDesktop: {
//         breakpoint: { max: 4000, min: 3000 },
//         items: 5
//     },
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 4
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1
//     }
// };

// const Galleries = () => {
//     const navigate=useNavigate()
//     return (
//         <div className="galleries">
//             <h2>GALLERY</h2>
//             <Carousel 
//                  responsive={responsive}
//                  infinite={true}
//                  autoPlay={true}
//                  autoPlaySpeed={2000}
//                  keyBoardControl={true}
//                 //  showDots={true}
//                  renderButtonGroupOutside={true}
//             >
//                 {galleries.map(gallery => (
//                     <div key={gallery.id} className="gallery-card">
//                         <img src={gallery.image} alt={gallery.title} />
//                         <p>{gallery.title}</p>
//                     </div>
//                 ))}
//             </Carousel>
//             <div className='GalleryButtonWrap'>
//             <button className='GalleryButton' onClick={()=>navigate("/galleriespage")}>View more</button>
//             </div>
            
//         </div>
//     );
// };

// export default Galleries;



import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import galleries from './GalleriesPhoto';
import { useNavigate } from 'react-router-dom';

/* ================= CAROUSEL RESPONSIVE ================= */

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

/* ================= STYLED COMPONENTS ================= */

const Section = styled.section`
  width: 100%;
  padding: 90px 20px 70px;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 43, 0.05),
    rgba(74, 20, 140, 0.08)
  );
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 45px;
  background: linear-gradient(
    90deg,
    rgba(255, 0, 43, 0.9),
    #4a148c
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-radius: 22px;
  overflow: hidden;
  margin: 0 12px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
  transition: all 0.35s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 28px 60px rgba(0, 0, 0, 0.18);
  }
`;

const ImageWrap = styled.div`
  height: 220px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.08);
  }
`;

const Caption = styled.p`
  padding: 16px 18px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #4a148c;
`;

const ButtonWrap = styled.div`
  margin-top: 50px;
`;

const Button = styled.button`
  background: linear-gradient(
    135deg,
    rgba(255, 0, 43, 0.9),
    #4a148c
  );
  border: none;
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(255, 0, 43, 0.35);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 40px rgba(255, 0, 43, 0.45);
  }
`;

/* ================= COMPONENT ================= */

const Galleries = () => {
  const navigate = useNavigate();

  return (
    <Section>
      <Title>GALLERY</Title>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={2000}
        keyBoardControl
        renderButtonGroupOutside
      >
        {galleries.map((gallery) => (
          <Card key={gallery.id}>
            <ImageWrap>
              <img src={gallery.image} alt={gallery.title} />
            </ImageWrap>
            {/* <Caption>{gallery.title}</Caption> */}
          </Card>
        ))}
      </Carousel>

      <ButtonWrap>
        <Button onClick={() => navigate('/galleriespage')}>
          View More
        </Button>
      </ButtonWrap>
    </Section>
  );
};

export default Galleries;

