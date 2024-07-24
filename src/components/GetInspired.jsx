import React, { useContext } from 'react';
import '../CSS/GetInspired.css';
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';

const GetInspired = () => {
    const { blogs } = useContext(Context);
    const navigate = useNavigate()

    return (
        <div className="get-inspired">
            <h2>GET INSPIRED</h2>
            <div className="blog-list">
                {blogs.slice(0,4).map(blog => (
                    <div key={blog.id} className="blog-card">
                        <img src={blog.image} alt={blog.title} />
                        <div className='blog-cardText'>
                            <h3>{blog.title}</h3>
                            <p>{blog.excerpt}</p>
                        </div>
                        <button onClick={() => navigate(`/getinspired/${blog.id}`)}>Read More</button>
                    </div>
                ))}
                <div className='events-containerButtonWrap'>
                    <button onClick={()=>navigate("/getinspiredpage")}>Explore More ...</button>
                </div>
            </div>
        </div>
    );
};

export default GetInspired;
