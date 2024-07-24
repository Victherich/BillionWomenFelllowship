import React from 'react';
import "../CSS/Video.css";



const Video = () => {
  return (
    <div className="VideoContainer">
      {/* <img src={BottleAncCup} alt="bottle and cup"/> */}
      <video className="VideoPlayer" controls autoPlay loop muted>
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <img src={BottleAncCup2} alt="bottle and cup"/> */}
    </div>
  );
}

export default Video;
