// import React, { useContext } from 'react';
// import '../CSS/GetInspired.css';
// import { Context } from './Context';
// import { useNavigate } from 'react-router-dom';
// import {FaShareAlt} from "react-icons/fa"

// const GetInspired = () => {
//     const { blogs } = useContext(Context);
//     const navigate = useNavigate()

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
//                 {blogs.slice(0,4).map(blog => (
//                     <div key={blog.id} className="blog-card">
//                         <img src={blog.image} alt={blog.title} />
//                         <div className='blog-cardText'>
//                             <h3>{blog.title}</h3>
//                             <p>{blog.excerpt}</p>
//                         </div>
//                         <button onClick={() => navigate(`/getinspired/${blog.id}`)}>Read More</button>
//                         <button className='ShareButton' onClick={(e) => { e.stopPropagation(); handleShare(blog); }}>
//                 <FaShareAlt />
//               </button>
//                     </div>
//                 ))}
//                 <div className='events-containerButtonWrap'>
//                     <button onClick={()=>navigate("/getinspiredpage")}>Explore More ...</button>
                    
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GetInspired;

import React, { useContext } from 'react';
import '../CSS/GetInspired.css';
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';
import { FaShareAlt } from "react-icons/fa";

const GetInspired = () => {
    const { blogs } = useContext(Context);
    const navigate = useNavigate();

    const handleShare = (blog) => {
        if (navigator.share) {
            navigator.share({
                title: blog.title,
                text: blog.excerpt,
                url: window.location.origin + '/getinspired/' + blog.id,
                files: [new File([blog.image], 'image.jpg', { type: 'image/jpeg' })], // Sharing image file
            }).catch(error => console.error('Error sharing', error));
        } else {
            navigator.clipboard.writeText(window.location.origin + '/getinspired/' + blog.id);
            alert("URL copied to clipboard");
        }
    };

    return (
        <div className="get-inspired">
            <h2>GET INSPIRED</h2>
            <div className="blog-list">
                {blogs.slice(0, 4).map(blog => (
                    <div key={blog.id} className="blog-card">
                        <img src={blog.image} alt={blog.title} />
                        <div className='blog-cardText'>
                            <h3>{blog.title}</h3>
                            <p>{blog.excerpt}</p>
                        </div>
                        <button onClick={() => navigate(`/getinspired/${blog.id}`)}>Read More</button>
                        <button className='ShareButton' onClick={(e) => { e.stopPropagation(); handleShare(blog); }}>
                            <FaShareAlt /> Share
                        </button>
                    </div>
                ))}
                <div className='events-containerButtonWrap'>
                    <button onClick={() => navigate("/getinspiredpage")}>Explore More ...</button>
                </div>
            </div>
        </div>
    );
};

export default GetInspired;

