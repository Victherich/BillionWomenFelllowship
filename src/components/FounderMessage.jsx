import React from 'react'
import FounderPic from "../images/FounderPic.png"
import "../CSS/FounderMessage.css"

const FounderMessage = () => {
  return (
    <div className='FounderMessageWrap'>
      <p>Are you tired of being tired, sick of being sick. Are you lonely and weary. Do you feel alone, suppress, depress, oppress or betrayed.  Do you desire more and need a breakthrough. Do you need a Spiritual Midwife to push through to your next level Maritally, Careerly, Financially,  
Spiritually, Emotionally and so on. Do you need a midwife to help you birth your purpose. <br/><br/>
No more struggling alone, join our fellowship 
<strong> Billion Women Global Fellowship (BWGF)</strong>. A fellowship for women from all walks of life. 
<br/><br/>
<strong>Pastor Sade Kuku</strong><br/>
Founder</p>
      <img src={FounderPic} alt="FounderPics"/>
    </div>
  )
}

export default FounderMessage
