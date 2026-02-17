// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import '../CSS/UpcomingEventsComponent.css';
// import eImg1 from "../images/eImg1.jpeg"
// import {FaShareAlt} from "react-icons/fa"
// import { useNavigate } from 'react-router-dom';
// import MinistersTraining from "../images/p1.jpeg"

// const events = [
//     { id: 1,pic:MinistersTraining, title: '', convener:"PASTOR SADE KUKU",description: 'For such a time as this...Esther 4:14', date: '2024-08-24', time:"10AM", venue:"1, OPA ARO CLOSE, OFF TUNJI ADEBAYO STREET, BESIDE AP FILLING STATION, FAGBA LAGOS." },
//     { id: 2,pic:MinistersTraining, title: '', convener:"PASTOR SADE KUKU",description: 'For such a time as this...Esther 4:14', date: '2024-08-24', time:"10AM", venue:"1, OPA ARO CLOSE, OFF TUNJI ADEBAYO STREET, BESIDE AP FILLING STATION, FAGBA LAGOS." },
//     { id: 3,pic:MinistersTraining, title: '', convener:"PASTOR SADE KUKU",description: 'For such a time as this...Esther 4:14', date: '2024-08-24', time:"10AM", venue:"1, OPA ARO CLOSE, OFF TUNJI ADEBAYO STREET, BESIDE AP FILLING STATION, FAGBA LAGOS." },
 
// ];

// const UpcomingEventsComponent = () => {
//     const navigate = useNavigate()
//     const responsive = {
//         desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
//         tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
//         mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
//     };

  
//     const handleShare = (event) => {
//         const shareText = `
//             ${event.title}
//             ${event.description}

//             Date: ${event.date}
//             Time: ${event.time}
//             Venue: ${event.venue}

//             ${window.location.origin}/eventspage
//         `;

//         if (navigator.share) {
//             navigator.share({
//                 title: event.title,
//                 text: shareText,
//                 url: window.location.origin + '/eventspage',
//             }).catch(error => console.error('Error sharing', error));
//         } else {
//             navigator.clipboard.writeText(shareText);
//             alert("Event details copied to clipboard");
//         }
//     };

//     return (
//         <div className="events-container">
//             <h2>UPCOMING EVENTS</h2>
//             <Carousel 
//               responsive={responsive}
//               infinite={true}
//               autoPlay={true}
//               autoPlaySpeed={5000}
//               keyBoardControl={true}
//              //  showDots={true}
//               renderButtonGroupOutside={true}
//             >
//                 {events.map(event => (
//                     <div key={event.id} className="event-card" >
//                         <img src={event.pic} alt="event image"/>
//                         <h3>{event.title}</h3>
//                         {/* <p>with</p> */}
//                         {/* <p style={{fontWeight:"bold"}}>{event.convener}</p> */}
//                         <br/>
//                         {/* <p>{event.description}</p> */}
//                         <br/>
//                         {/* <p><span style={{fontWeight:"500"}}>Date:</span> {event.date}</p> */}
//                         {/* <p><span style={{fontWeight:"500"}}>Time:</span> {event.time}</p> */}
//                         <br/>
//                         {/* <p><span style={{fontWeight:"500"}}>Venue:</span> {event.venue}</p> */}
                        
//                         <button onClick={(e) => { e.stopPropagation(); handleShare(event)}} style={{marginLeft:"10px"}} className='BlogDetailShare'>
//         <FaShareAlt /> Share
//       </button>
//                     </div>
//                 ))}
//             </Carousel>
//             <div className='events-containerButtonWrap'>
//             <button onClick={()=>navigate("/eventspage")}>See More Events</button>
//             </div>
            
//         </div>
//     );
// };

// export default UpcomingEventsComponent;



import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaShareAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MinistersTraining from '../images/p1.jpeg';
import FL2026 from '../images/FL2026.jpeg'

/* ================= EVENT DATA ================= */

const events = [
  {
    id: 1,
    pic: MinistersTraining,
    title: 'For Such a Time as This',
    convener: 'Pastor Sade Kuku',
    description: 'Esther 4:14',
    date: '24 August 2024',
    time: '10:00 AM',
    venue:
      '1, Opa Aro Close, Off Tunji Adebayo Street, Beside AP Filling Station, Fagba, Lagos.',
  },
  {
    id: 2,
    pic: MinistersTraining,
    title: 'For Such a Time as This',
    convener: 'Pastor Sade Kuku',
    description: 'Esther 4:14',
    date: '24 August 2024',
    time: '10:00 AM',
    venue:
      '1, Opa Aro Close, Off Tunji Adebayo Street, Beside AP Filling Station, Fagba, Lagos.',
  },
  {
    id: 3,
    pic: MinistersTraining,
    title: 'For Such a Time as This',
    convener: 'Pastor Sade Kuku',
    description: 'Esther 4:14',
    date: '24 August 2024',
    time: '10:00 AM',
    venue:
      '1, Opa Aro Close, Off Tunji Adebayo Street, Beside AP Filling Station, Fagba, Lagos.',
  },
];

const events2 = [
  {
    id: 1,
    pic: FL2026,
    title: 'For Such a Time as This',
    convener: 'Pastor Sade Kuku',
    description: 'Esther 4:14',
    date: '24 August 2024',
    time: '10:00 AM',
    venue:
      '1, Opa Aro Close, Off Tunji Adebayo Street, Beside AP Filling Station, Fagba, Lagos.',
  },
  {
    id: 2,
    pic: FL2026,
    title: 'For Such a Time as This',
    convener: 'Pastor Sade Kuku',
    description: 'Esther 4:14',
    date: '24 August 2024',
    time: '10:00 AM',
    venue:
      '1, Opa Aro Close, Off Tunji Adebayo Street, Beside AP Filling Station, Fagba, Lagos.',
  },
  {
    id: 3,
    pic: FL2026,
    title: 'For Such a Time as This',
    convener: 'Pastor Sade Kuku',
    description: 'Esther 4:14',
    date: '24 August 2024',
    time: '10:00 AM',
    venue:
      '1, Opa Aro Close, Off Tunji Adebayo Street, Beside AP Filling Station, Fagba, Lagos.',
  },
];


/* ================= STYLED COMPONENTS ================= */

const Section = styled.section`
  width: 100%;
  padding: 110px 20px;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 43, 0.05),
    rgba(74, 20, 140, 0.08)
  );
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  margin-bottom: 50px;
  font-weight: 700;
  background: linear-gradient(
    90deg,
    rgba(255, 0, 43, 0.9),
    #4a148c
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const EventCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(14px);
  border-radius: 20px;
  margin: 0 15px;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 65px rgba(0, 0, 0, 0.18);
  }
`;

const Image = styled.img`
  width: 100%;
//   height: 240px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 25px;
  text-align: center;
`;

const EventTitle = styled.h3`
  font-size: 1.25rem;
  color: #4a148c;
  margin-bottom: 10px;
`;

const Convener = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 0, 43, 0.85);
  font-weight: 600;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 20px;
`;

const Meta = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
`;

const ShareButton = styled.button`
  margin-top: 20px;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 43, 0.85),
    #4a148c
  );
  color: white;
  border: none;
  padding: 10px 22px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(255, 0, 43, 0.35);
  }
`;

const BottomButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const ViewMoreButton = styled.button`
  background: transparent;
  border: 2px solid rgba(255, 0, 43, 0.8);
  color: rgba(255, 0, 43, 0.9);
  padding: 14px 40px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.35s ease;

  &:hover {
    background: rgba(255, 0, 43, 0.9);
    color: white;
  }
`;

/* ================= COMPONENT ================= */

const UpcomingEventsComponent = () => {
  const navigate = useNavigate();
  const show = false;

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const handleShare = (event) => {
    const text = `
${event.title}
${event.description}

Date: ${event.date}
Time: ${event.time}
Venue: ${event.venue}

${window.location.origin}/eventspage
`;

    if (navigator.share) {
      navigator.share({
        title: event.title,
        text,
        url: window.location.origin + '/eventspage',
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Event details copied to clipboard');
    }
  };

  return (
    <Section>
      <Title>Our Events</Title>

      
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        keyBoardControl
      >
        {events2.map((event) => (
          <EventCard key={event.id}>
            <Image src={event.pic} alt={event.title} />

            <Content>
              <EventTitle>Register Now</EventTitle>
              <Convener 
              onClick={()=>window.open('https://forms.gle/ELRweeJpWGCAXyvw5','_blank')}
              style={{cursor:"pointer", color:"blue", textDecoration:"underline"}}>https://forms.gle/ELRweeJpWGCAXyvw5</Convener>
              {/* <Description>{event.description}</Description> */}

              {/* <Meta><strong>Date:</strong> {event.date}</Meta> */}
              {/* <Meta><strong>Time:</strong> {event.time}</Meta> */}
              {/* <Meta><strong>Venue:</strong> {event.venue}</Meta> */}

              {/* <ShareButton onClick={() => handleShare(event)}>
                <FaShareAlt /> Share
              </ShareButton> */}
            </Content>
          </EventCard>
        ))}
      </Carousel>


     {show && <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        keyBoardControl
      >
        {events.map((event) => (
          <EventCard key={event.id}>
            <Image src={event.pic} alt={event.title} />

            <Content>
              {/* <EventTitle>{event.title}</EventTitle>
              <Convener>Convener: {event.convener}</Convener>
              <Description>{event.description}</Description>

              <Meta><strong>Date:</strong> {event.date}</Meta>
              <Meta><strong>Time:</strong> {event.time}</Meta>
              <Meta><strong>Venue:</strong> {event.venue}</Meta> */}

              <ShareButton onClick={() => handleShare(event)}>
                <FaShareAlt /> Share
              </ShareButton>
            </Content>
          </EventCard>
        ))}
      </Carousel>
}
      {/* <BottomButtonWrap>
        <ViewMoreButton onClick={() => navigate('/eventspage')}>
          See More Events
        </ViewMoreButton>
      </BottomButtonWrap> */}
    </Section>
  );
};

export default UpcomingEventsComponent;
