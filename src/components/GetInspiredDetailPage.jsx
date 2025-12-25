// import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import { Context } from './Context';
// import '../CSS/GetInspiredDetailPage.css';
// import {FaShareAlt} from "react-icons/fa"

// const GetInspiredDetailPage = () => {
//     const { id } = useParams();
//     const { blogs } = useContext(Context);
//     const blog = blogs.find(blog => blog.id === parseInt(id));


//     const handleShare = () => {
//         if (navigator.share) {
//           navigator.share({
//             title: blog.title,
//             text: blog.excerpt,
//             url: window.location.href,
//           }).catch(error => console.error('Error sharing', error));
//         } else {
//           navigator.clipboard.writeText(window.location.href);
//           alert("URL copied to clipboard");
//         }
//       };

//     if (!blog) {
//         return <div>Content not found</div>;
//     }

//     return (
//         <div className="blog-detail">
//             <img src={blog.image} alt={blog.title} className="blog-detail-image" />
//             <h2>{blog.title}</h2>
//             <h3 style={{color:"pink"}}>{blog.excerpt}</h3>
//             <p>{blog.content}</p>
//             <button onClick={handleShare} style={{marginLeft:"10px"}} className='BlogDetailShare'>
//         <FaShareAlt /> Share
//       </button>
//             <div className='GalleryButtonWrap'>
//             <button className='GalleryButton' onClick={()=>window.history.back()}>Back</button>
//             </div>
//         </div>
//     );
// };

// export default GetInspiredDetailPage;




import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from './Context';
import { FaShareAlt } from 'react-icons/fa';

/* ================= STYLED COMPONENTS ================= */

const Container = styled.div`
  // max-width: 900px;
  // margin: 60px auto 80px;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;

    background: linear-gradient(
    135deg,
    rgba(255, 0, 43, 0.05),
    rgba(74, 20, 140, 0.5)
  );
`;

const BlogImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  object-position:top;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #4a148c;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const Excerpt = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: #ff005b;
  text-align: center;
`;

const Content = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #333;
  text-align: justify;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Button = styled.button`
  background: linear-gradient(135deg, rgba(255,0,43,0.9), #4a148c);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 25px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(255,0,43,0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 35px rgba(255,0,43,0.4);
  }
`;

/* ================= COMPONENT ================= */

const GetInspiredDetailPage = () => {
  const { id } = useParams();
  const { blogs } = useContext(Context);
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) return <div>Content not found</div>;

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url,
      }).catch(error => console.error('Error sharing', error));
    } else {
      navigator.clipboard.writeText(url);
      alert("URL copied to clipboard");
    }
  };

  return (
    <Container>
      <BlogImage src={blog.image} alt={blog.title} />
      <Title>{blog.title}</Title>
      <Excerpt>{blog.excerpt}</Excerpt>
      <Content>{blog.content}</Content>

      <ButtonRow>
        <Button onClick={handleShare}>
          <FaShareAlt /> Share
        </Button>
        <Button onClick={() => window.history.back()}>
          Back
        </Button>
      </ButtonRow>
    </Container>
  );
};

export default GetInspiredDetailPage;

