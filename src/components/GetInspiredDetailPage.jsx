import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from './Context';
import '../CSS/GetInspiredDetailPage.css';
import {FaShareAlt} from "react-icons/fa"

const GetInspiredDetailPage = () => {
    const { id } = useParams();
    const { blogs } = useContext(Context);
    const blog = blogs.find(blog => blog.id === parseInt(id));


    const handleShare = () => {
        if (navigator.share) {
          navigator.share({
            title: blog.title,
            text: blog.excerpt,
            url: window.location.href,
          }).catch(error => console.error('Error sharing', error));
        } else {
          navigator.clipboard.writeText(window.location.href);
          alert("URL copied to clipboard");
        }
      };

    if (!blog) {
        return <div>Content not found</div>;
    }

    return (
        <div className="blog-detail">
            <img src={blog.image} alt={blog.title} className="blog-detail-image" />
            <h2>{blog.title}</h2>
            <h3 style={{color:"pink"}}>{blog.excerpt}</h3>
            <p>{blog.content}</p>
            <button onClick={handleShare} style={{marginLeft:"10px"}} className='BlogDetailShare'>
        <FaShareAlt /> Share
      </button>
            <div className='GalleryButtonWrap'>
            <button className='GalleryButton' onClick={()=>window.history.back()}>Back</button>
            </div>
        </div>
    );
};

export default GetInspiredDetailPage;
