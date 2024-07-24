import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/GetInspired.css';
import { Context } from './Context';

const GetInspiredPage = () => {
    const { blogs } = useContext(Context);

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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GetInspiredPage;
