import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from './Context';
import '../CSS/GetInspiredDetailPage.css';

const GetInspiredDetailPage = () => {
    const { id } = useParams();
    const { blogs } = useContext(Context);
    const blog = blogs.find(blog => blog.id === parseInt(id));

    if (!blog) {
        return <div>Content not found</div>;
    }

    return (
        <div className="blog-detail">
            <img src={blog.image} alt={blog.title} className="blog-detail-image" />
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <div className='GalleryButtonWrap'>
            <button className='GalleryButton' onClick={()=>window.history.back()}>Back</button>
            </div>
        </div>
    );
};

export default GetInspiredDetailPage;
