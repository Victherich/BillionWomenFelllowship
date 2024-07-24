// Intro.js
import React from 'react';
import '../CSS/Intro.css';
import {useNavigate} from "react-router-dom"

const Intro = () => {
  const navigate = useNavigate()
  return(
<div className="intro-container">
    <h1 className="intro-heading">Billion Women Global Fellowship (BWGF)</h1>
    <div className="intro-responsive-container">
      <p className="intro-content">
        Billion Women Global Fellowship (BWGF) is a women's fellowship that provides comprehensive solutions and supports through emotional and mental health programs, holistic health and wellness initiatives, spiritual guidance, career and financial empowerment, marital and relationship counseling, personal development workshops, and strong community building efforts.<br/> These solutions are designed to help women overcome loneliness, suppression, depression, betrayal, and to help women achieve breakthroughs in various aspects of their lives.
      </p>
      <button onClick={()=>navigate("/about")}>More About BWGF</button>
    </div>
  </div>
  )
  
}; 

export default Intro;
