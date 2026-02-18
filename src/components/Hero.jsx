
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroPic1 from "../images/heropic1.png";
import HeroPic2 from "../images/heropic22.png";
import HeroPic3 from "../images/heropic3.png";

import "../CSS/Hero.css";

const Hero = () => {
  return (
    <div className='Hero'>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={4000}
      >
        <div>
          <img src={HeroPic2} alt="HeroPic1" className='heroImg'/>
        </div>
        <div>
          <img src={HeroPic1} alt="HeroPic2" className='heroImg'/>
        </div>
        <div>
          <img src={HeroPic3} alt="HeroPic3" />
        </div>
    
        
      </Carousel>
      <h1>BILLION WOMEN<br/> GLOBAL<br/> FELLOWSHIP (BWGF)</h1>
    </div>
  );
}

export default Hero;

