import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/GetInspired.css';
import { Context } from './Context';
import {FaShareAlt} from "react-icons/fa"
import BackButton from './BackButton';


const GetInspiredPage = () => {
    const { blogs } = useContext(Context);

    const handleShare = (blog) => {
        if (navigator.share) {
          navigator.share({
            title: blog.title,
            text: blog.excerpt,
            url: window.location.origin + '/getinspired/' + blog.id,
          }).catch(error => console.error('Error sharing', error));
        } else {
          navigator.clipboard.writeText(window.location.origin + '/getinspired/' + blog.id);
          alert("URL copied to clipboard");
        }
      };

    return (
        <div>
            <div className='getInspiredHeader'>
                <h2>GET INSPIRED</h2>
            </div>
            <div className="get-inspired">
                <p className='get-inspiredP'>Get inspired with insightful contents and material to help you scale through heights in your walk and endeavours</p>
                <div className="blog-list">
                    {blogs.map(blog => (
                        <div key={blog.id} className="blog-card">
                            <img src={blog.image} alt={blog.title} />
                            <div className='blog-cardText'>
                                <h3>{blog.title}</h3>
                                <p>{blog.excerpt}</p>
                            </div>
                            <Link to={`/getinspired/${blog.id}`}>
                                <button>Read More</button>
                            </Link>
                            <button className='ShareButton' onClick={(e) => { e.stopPropagation(); handleShare(blog); }}>
                <FaShareAlt /> Share
              </button>
                        </div>
                    ))}
                </div>
            </div>
            <br/>
            <BackButton/>
        </div>
    );
};

export default GetInspiredPage;
