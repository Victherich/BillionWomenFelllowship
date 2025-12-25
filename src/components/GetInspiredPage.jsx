// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import '../CSS/GetInspired.css';
// import { Context } from './Context';
// import {FaShareAlt} from "react-icons/fa"
// import BackButton from './BackButton';


// const GetInspiredPage = () => {
//     const { blogs } = useContext(Context);

//     const handleShare = (blog) => {
//         if (navigator.share) {
//           navigator.share({
//             title: blog.title,
//             text: blog.excerpt,
//             url: window.location.origin + '/getinspired/' + blog.id,
//           }).catch(error => console.error('Error sharing', error));
//         } else {
//           navigator.clipboard.writeText(window.location.origin + '/getinspired/' + blog.id);
//           alert("URL copied to clipboard");
//         }
//       };

//     return (
//         <div>
//             <div className='getInspiredHeader'>
//                 <h2>GET INSPIRED</h2>
//             </div>
//             <div className="get-inspired">
//                 <p className='get-inspiredP'>Get inspired with insightful contents and material to help you scale through heights in your walk and endeavours</p>
//                 <div className="blog-list">
//                     {blogs.map(blog => (
//                         <div key={blog.id} className="blog-card">
//                             <img src={blog.image} alt={blog.title} />
//                             <div className='blog-cardText'>
//                                 <h3>{blog.title}</h3>
//                                 <p>{blog.excerpt}</p>
//                             </div>
//                             <Link to={`/getinspired/${blog.id}`}>
//                                 <button>Read More</button>
//                             </Link>
//                             <button className='ShareButton' onClick={(e) => { e.stopPropagation(); handleShare(blog); }}>
//                 <FaShareAlt /> Share
//               </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <br/>
//             <BackButton/>
//         </div>
//     );
// };

// export default GetInspiredPage;




import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from './Context';
import { FaShareAlt } from 'react-icons/fa';
import BackButton from './BackButton';
import HeroImage from '../images/inspImg.png'; // <-- Replace with your actual hero image

/* ================= STYLED COMPONENTS ================= */

const Hero = styled.section`
  width: 100%;
  height: 350px;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45); /* Dark overlay for readability */
  }
`;

const HeroTitle = styled.h1`
  position: relative;
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  z-index: 1;
  padding: 0 20px;
  text-shadow: 0 4px 20px rgba(0,0,0,0.5);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Section = styled.section`
  width: 100%;
  padding: 60px 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 43, 0.05),
    rgba(74, 20, 140, 0.08)
  );
`;

const Header = styled.div`
  margin-bottom: 30px;

  h2 {
    font-size: 2.6rem;
    font-weight: 700;
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
  }
`;

const IntroText = styled.p`
  max-width: 900px;
  text-align: center;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #4a148c;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Grid = styled.div`
  display: grid;
  max-width: 1200px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 35px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.93);
  backdrop-filter: blur(12px);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.1);
  transition: all 0.35s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 28px 60px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrap = styled.div`
  height: 200px;
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

const Content = styled.div`
  padding: 25px;
  flex-grow: 1;
  text-align: center;
`;

const BlogTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #4a148c;
  margin-bottom: 12px;
`;

const Excerpt = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 0 20px 25px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background: linear-gradient(
    135deg,
    rgba(255, 0, 43, 0.9),
    #4a148c
  );
  border: none;
  color: white;
  padding: 10px 22px;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(255, 0, 43, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 35px rgba(255, 0, 43, 0.4);
  }
`;

const ExploreWrap = styled.div`
  margin-top: 60px;
`;

/* ================= COMPONENT ================= */

const GetInspiredPage = () => {
  const { blogs } = useContext(Context);

  const handleShare = (blog) => {
    const url = `${window.location.origin}/getinspired/${blog.id}`;

    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url,
      }).catch((error) => console.error('Error sharing', error));
    } else {
      navigator.clipboard.writeText(url);
      alert('URL copied to clipboard');
    }
  };

  return (
    <>
      <Hero>
        <HeroTitle>Get Inspired</HeroTitle>
      </Hero>

      <Section>
        <Header>
          <h2>GET INSPIRED</h2>
        </Header>

        <IntroText>
          Get inspired with insightful contents and material to help you scale
          through heights in your walk and endeavors.
        </IntroText>

        <Grid>
          {blogs.map((blog) => (
            <Card key={blog.id}>
              <ImageWrap>
                <img src={blog.image} alt={blog.title} />
              </ImageWrap>

              <Content>
                <BlogTitle>{blog.title}</BlogTitle>
                <Excerpt>{blog.excerpt}</Excerpt>
              </Content>

              <ButtonRow>
                <Link to={`/getinspired/${blog.id}`}>
                  <Button>Read More</Button>
                </Link>

                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(blog);
                  }}
                >
                  <FaShareAlt /> Share
                </Button>
              </ButtonRow>
            </Card>
          ))}
        </Grid>

        <ExploreWrap>
          <BackButton />
        </ExploreWrap>
      </Section>
    </>
  );
};

export default GetInspiredPage;
