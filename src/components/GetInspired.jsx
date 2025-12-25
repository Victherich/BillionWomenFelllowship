

// import React, { useContext } from 'react';
// import '../CSS/GetInspired.css';
// import { Context } from './Context';
// import { useNavigate } from 'react-router-dom';
// import { FaShareAlt } from "react-icons/fa";

// const GetInspired = () => {
//     const { blogs } = useContext(Context);
//     const navigate = useNavigate();

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
//         <div className="get-inspired">
//             <h2>GET INSPIRED</h2>
//             <div className="blog-list">
//                 {blogs.slice(0, 4).map(blog => (
//                     <div key={blog.id} className="blog-card">
//                         <img src={blog.image} alt={blog.title} />
//                         <div className='blog-cardText'>
//                             <h3>{blog.title}</h3>
//                             <p>{blog.excerpt}</p>
//                         </div>
//                         <button onClick={() => navigate(`/getinspired/${blog.id}`)}>Read More</button>
//                         <button className='ShareButton' onClick={(e) => { e.stopPropagation(); handleShare(blog); }}>
//                             <FaShareAlt /> Share
//                         </button>
//                     </div>
//                 ))}
//                 <div className='events-containerButtonWrap'>
//                     <button onClick={() => navigate("/getinspiredpage")}>Explore More ...</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GetInspired;




import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';
import { FaShareAlt } from 'react-icons/fa';

/* ================= STYLED COMPONENTS ================= */

const Section = styled.section`
  width: 100%;
  padding: 120px 20px 90px;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 43, 0.05),
    rgba(74, 20, 140, 0.08)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 55px;
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

const Grid = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
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

const ExploreButton = styled(Button)`
  padding: 14px 36px;
  font-size: 0.95rem;
`;

/* ================= COMPONENT ================= */

const GetInspired = () => {
  const { blogs } = useContext(Context);
  const navigate = useNavigate();

  const handleShare = (blog) => {
    const url = `${window.location.origin}/getinspired/${blog.id}`;

    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url,
      }).catch(error => console.error('Error sharing', error));
    } else {
      navigator.clipboard.writeText(url);
      alert('URL copied to clipboard');
    }
  };

  return (
    <Section>
      <Title>Get Inspired</Title>

      <Grid>
        {blogs.slice(0, 4).map(blog => (
          <Card key={blog.id}>
            <ImageWrap>
              <img src={blog.image} alt={blog.title} />
            </ImageWrap>

            <Content>
              <BlogTitle>{blog.title}</BlogTitle>
              <Excerpt>{blog.excerpt}</Excerpt>
            </Content>

            <ButtonRow>
              <Button onClick={() => navigate(`/getinspired/${blog.id}`)}>
                Read More
              </Button>

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
        <ExploreButton onClick={() => navigate('/getinspiredpage')}>
          Explore More ...
        </ExploreButton>
      </ExploreWrap>
    </Section>
  );
};

export default GetInspired;
