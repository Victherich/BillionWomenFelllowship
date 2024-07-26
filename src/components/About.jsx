import React from 'react'
import "../CSS/AboutUs.css"
import { useState } from 'react';
import Founder from "../images/FounderBWGF.jpeg"
import s3 from '../images/gpic8.jpeg'
import { useNavigate } from 'react-router-dom';



const About = () => {
  const navigate=useNavigate()

  const [showDescription, setShowDescription] = useState(false);

  // Function to toggle description visibility
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleNavigate= ()=>{
    navigate('/contactus')
  }

  const [showMore,setShowMore]=useState(false)

  return (
    <div className='AboutUsWrap'>
        <div className='AboutUsHeaderWrap'>
            <h1>About Us</h1>
        </div>
        <div className="about-us">
      <div className='WhoWeAreAndDoWrap'>
            
            <div className='WhoWeAreAndDo' id="whoweare">
                  <div className='WhoWeAreAndDoImgWrap'>
                      <img src={s3} alt="Who We are and Do"/>
                  </div>
                  <div className="WhoWeAreTextWrap">
                      <h1>Who We Are</h1>
                        <p>
                        Billion Women Interdenominational Fellowship (BWGF) is a community of faith-driven women committed to living out the virtues of the modern Proverbs 31 woman.
                        <br/><br/>
                         Founded over 20 years ago by Pastor Sade Kuku, BWGF is rooted in a vision to empower both single and married women to discover and fulfill their God-given potential. We are a diverse and inclusive fellowship, welcoming women from all walks of life who seek to deepen their spiritual journey, strengthen their relationships, and grow in various aspects of their lives. 
                         <br/><br/>
                         Our community is built on the foundation of faith, love, and support, guiding each member towards a life of purpose, passion, and influence.</p>
                  </div>
                  <br/>
            </div>



            <div className="WhatWeDo" id="whatwedo" >
                 <h1 style={{position:"relative"}}>What We Do</h1>
                 <p style={{ position: "relative"}}>
  At Billion Women Interdenominational Fellowship (BWGF), we are committed to empowering women through a holistic approach that addresses various aspects of their lives. Our initiatives are designed to inspire and equip women to reach their full potential and make a positive impact in their communities and beyond.
  <br /><br />
  <span>1. Faith and Spiritual Growth: </span>
  We provide Bible studies, prayer meetings, and spiritual workshops aimed at deepening women's relationships with God. These programs are designed to nurture spiritual growth and help women live out God's will in their everyday lives.
  <br /><br />
  <span>2. Family and Relationships: </span>
  BWGF offers counseling services and seminars that focus on building and maintaining strong, healthy relationships. Our support extends to family dynamics, helping women foster harmonious and loving family environments.
  <br /><br />
  <span>3. Health and Wellness: </span>
  We emphasize holistic health by offering wellness programs, fitness sessions, and mental health resources. Our goal is to encourage women to take care of their physical, emotional, and mental well-being.
  <br /><br />
  <span>4. Business and Career Development: </span>
  BWGF equips women with the skills and resources needed for career advancement and entrepreneurial success. Through workshops, mentorship, and networking opportunities, we support women in achieving their professional goals.
  <br /><br />
  <span>5. Education and Personal Development: </span>
  Our programs include workshops and training sessions focused on continuous learning and personal growth. We encourage women to pursue education and skills development to enhance their personal and professional lives.
  <br /><br />
  <span>6. Community Building and Outreach: </span>
  BWGF is dedicated to making a positive impact in the community. We organize service projects and outreach programs that provide opportunities for our members to give back and engage in meaningful social contributions.
  <br /><br />
  <span>7. Financial Empowerment: </span>
  We offer financial literacy workshops to help women manage their finances effectively. Our programs are designed to promote financial independence and empower women to make informed financial decisions.
  <br /><br />
</p>


{/* {showMore===false&&<p style={{width:"100px",fontWeight:"bold", color:"blue", fontStyle:"italic",cursor:"pointer"}} onClick={()=>setShowMore(true)}>Read More ...</p>
}
{showMore===true&&<p style={{width:"100px",fontWeight:"bold", color:"blue", fontStyle:"italic",cursor:"pointer"}} onClick={()=>setShowMore(false)}>Read Less ...</p>
}<br/>
{showMore&&<p >
<span>5. Innovation and Adaptability:</span>
Innovation is key to staying ahead in a rapidly evolving landscape. We continuously seek out new technologies, methodologies, and approaches to deliver innovative solutions that meet the ever-changing demands of our industry.
<br/><br/>
<span>6. Environmental Stewardship:</span>
As stewards of the environment, we are committed to safeguarding natural resources and enhancing ecological integrity. Our projects aim to minimize environmental impact while maximizing benefits for both present and future generations.
<br/><br/>
<span>7. Collaboration and Partnership:</span>
We believe in the power of collaboration and partnership. By fostering strong relationships with clients, stakeholders, and communities, we create synergies that drive positive change and create shared value for all parties involved.
<br/><br/>
<span>8. Exceptional Service:</span>
Our dedication to excellence extends beyond the completion of a project. We strive to exceed client expectations at every turn, providing responsive, reliable, and transparent service that builds trust and fosters long-term relationships.
<br/><br/>
At Nima Geoenviromental services limited, we are more than just a consulting firm. We are catalysts for progress, shaping a future where environmental sustainability and economic prosperity go hand in hand. Join us in creating a world where development is synonymous with sustainability, leaving a legacy of lasting impact for generations to come.
                  </p>     
}             */}

<br/>
{/* {showMore===true&&<p style={{width:"100px",fontWeight:"bold", color:"blue", fontStyle:"italic",cursor:"pointer"}} onClick={()=>setShowMore(false)}>Read Less ...</p>
} */}
</div>
      </div>

      <div className='OurMissionAndVision'>
        <div className='OurMission' id="ourmission">
            <h1>Our Mission</h1>
            <p>Billion Women Global Fellowship (BWGF) empowers women to embody the Proverbs 31 virtues by providing guidance in faith, family, and personal growth. Our mission is to help women deepen their relationship with God, achieve their full potential, and positively influence the world.
              </p>
        </div>

        <div className='OurVision' id="ourvision">
            <h1>Our Vision</h1>
            <p>God gave Pastor Sade Kuku BWGF vision over 20 years ago centered on proverb 31 Mandate. BWGF focus on Single and Married women becoming modern proverb 31 women. BWGF guide you to become the woman God wants you to be by giving you inspiration and practical direction to move you closer to that goal with purpose and passion.
BWGF will help you to walk the path toward better living in specific areas of your life including Faith and Spirituality, family, relationships, health, bussiness, home management, education, career, financial, ministry and more. 
BWGF will help you deepen your relationship with God, live out His will for your life, and take your faith into the world to dominate the seven mountains of influence. 
The practical teaching and action steps will help you grow in character, as you set attainable goals for the future. You will definitely become the woman God wants you to be.
</p>
        </div>

      </div>


      {/* <div className='OurMission'>
          <h1>Our Mission</h1>
          <div className='OurMissionBody'>
          <div className='OurMissionImageWrap'>
              <img src="" alt="OurMissionImg"/>
          </div>
          <div className='OurMissionTextWrap'>
              <p>
              At Nima Geo Environmental and Real Estate Services, our mission is to be a beacon of excellence in the realms of oil & gas services, environmental consultancy, waste management, project management, ecological consulting, environmental site assessments, sustainable land use planning, and real estate development. We are committed to safeguarding the environment, promoting sustainable practices, and delivering exceptional value to our clients and communities. Through innovation, collaboration, and a steadfast dedication to integrity, we aim to surpass expectations, drive positive change, and cultivate a harmonious balance between development and environmental conservation. Our mission is to be catalysts for progress, shaping a future where environmental stewardship and economic prosperity go hand in hand, leaving a lasting legacy of sustainability for generations to come.
              </p>
          </div>
          </div>
      </div> */}



      <section className="section" id="ourteam">
        <h2>About the Founder</h2>
        {/* <p>Meet our team with diverse ranges of expertise spanning environmental sciences, real estate development, ecological consulting, and sustainable land use planning. Our team is united by a shared commitment to excellence and innovation.</p> */}
        
        <div className="team-member" onClick={()=>setShowDescription(1)} onPointerEnter={()=>setShowDescription(1)} onPointerLeave={()=>setShowDescription(false)}>
            <img src={Founder} alt="Founder" />
            <h4>Pastor Sade Kuku </h4>
            <p>Founder BWGF and Co Pastor/Co Founder Faith and Miracle Center Worldwide </p>
            {/* <div className={`overlay ${showDescription===1 ? "active" : ""}`}>
              <p>..............</p>
              <p>..............</p>
              <p>.............."</p>
            </div> */}
          </div>

        <div className="team">
          <p>
          Pastor Sade kuku Co Pastor/Co Founder Faith and Miracle Center Worldwide. Certified Women Biblical Counselor. President/Founder of Women of Faith and Billion Women Interdenominational Fellowship. Registered NurseMidwife/MSNPH. Pastor Sade kuku is married to her favorite Pastor, teacher and best friend, Bishop Taiwo kuku, founder and general overseer Faith and miracle center global with headquarter in Atlanta, USA . Blessed with two children Joshua and Esther. Known for her sweet spirit, Pastor Sade is sought after to conduct seminars and conferences focusing on the growth and development of Godly purposeful women. She is a prolific writer, Biblical researcher, Empowerment specialist, agent of change, conference speaker, teacher and counselor. She is an anointed prophetess, a woman of God called by God to minister hope, encouragement, transformation and change to the people of God. Her passion is to see hurting people delivered.
          </p>
            {/* Repeat the above structure for other team members */}
        </div>
      </section>
    </div>
    {/* <div className='ContactUsNowWrap'>
                <h1 onClick={handleNavigate}>Contact us now !!!</h1>
              </div> */}
    </div>
  )
}

export default About
