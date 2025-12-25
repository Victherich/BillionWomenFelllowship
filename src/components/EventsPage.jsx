// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import '../CSS/UpcomingEventsComponent.css';
// import eImg1 from "../images/eImg1.jpeg"
// import {FaShareAlt} from "react-icons/fa"
// import { useNavigate } from 'react-router-dom';
// import BackButton from './BackButton';
// import MinistersTrainingr from "../images/MinistersTraining.jpeg"

// const events = [
//     { id: 2,pic:MinistersTrainingr, },
//     { id: 1,pic:eImg1, title: 'PRAYER & BREAKTHROUGH BREAKFAST', convener:"with: PASTOR SADE KUKU",description: 'For such a time as this...Esther 4:14', date: 'Date: 2024-08-24', time:"Time: 10AM", venue:"Venue: 1, OPA ARO CLOSE, OFF TUNJI ADEBAYO STREET, BESIDE AP FILLING STATION, FAGBA LAGOS." },
//     // { id: 2,pic:eImg1, title: 'PRAYER & BREAKTHROUGH BREAKFAST2', convener:"PASTOR SADE KUKU",description: 'For such a time as this...Esther 4:14', date: '2024-08-24', time:"10AM", venue:"1, OPA ARO CLOSE, OFF TUNJI ADEBAYO STREET, BESIDE AP FILLING STATION, FAGBA LAGOS." },
  
// ];

// const EventsPage = () => {
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
//         <div className="events-container" 
//         style={{display:"flex",
//         justifyContent:"center",
//         alignItems:"center",
//         flexDirection:"column",
//         gap:"30px",
//         paddingTop:"100px",
//         width:"100%"}}>
//             <h2>EVENTS</h2>
//                 {events.map(event => (
//                     <div key={event.id} className="event-card" style={{width:"300px"}}>
//                         <img src={event.pic} alt="event image" />
//                         <h3>{event.title}</h3>
//                         <p></p>
//                         <p style={{fontWeight:"bold"}}>{event.convener}</p>
//                         <br/>
//                         <p>{event.description}</p>
//                         <br/>
//                         <p><span style={{fontWeight:"500"}}></span> {event.date}</p>
//                         <p><span style={{fontWeight:"500"}}></span> {event.time}</p>
//                         <br/>
//                         <p><span style={{fontWeight:"500"}}></span> {event.venue}</p>
                        
//                         <button onClick={(e) => { e.stopPropagation(); handleShare(event)}} style={{marginLeft:"10px"}} className='BlogDetailShare'>
//         <FaShareAlt /> Share
//       </button>
//                     </div>
//                 ))}
//             <div className='events-containerButtonWrap'>
        
//             </div>
//             <BackButton/>
//         </div>
//     );
// };

// export default EventsPage;


import React from 'react';
import styled from 'styled-components';
import { FaShareAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';
import eImg1 from '../images/eImg1.jpeg';
import MinistersTrainingr from '../images/MinistersTraining.jpeg';

/* ================= EVENT DATA ================= */

const events = [
  { id: 2, pic: MinistersTrainingr },
  {
    id: 1,
    pic: eImg1,
    title: 'PRAYER & BREAKTHROUGH BREAKFAST',
    convener: 'with: PASTOR SADE KUKU',
    description: 'For such a time as this... Esther 4:14',
    date: 'Date: 2024-08-24',
    time: 'Time: 10AM',
    venue:
      'Venue: 1, OPA ARO CLOSE, OFF TUNJI ADEBAYO STREET, BESIDE AP FILLING STATION, FAGBA LAGOS.',
  },
];

/* ================= STYLED COMPONENTS ================= */

const Section = styled.section`
  width: 100%;
  padding: 120px 20px 80px;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 43, 0.05),
    rgba(74, 20, 140, 1)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 50px;
  background: linear-gradient(
    90deg,
    rgba(255, 0, 43, 0.9),
    #4a148c
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

const Grid = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 35px;
  margin-bottom: 60px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.1);
  transition: all 0.35s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 28px 60px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrap = styled.div`
  width: 100%;
//   height: 220px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.08);
  }
`;

const Content = styled.div`
  padding: 30px;
  text-align: center;
`;

const EventTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #4a148c;
  margin-bottom: 8px;
`;

const Convener = styled.p`
  font-weight: 600;
  color: rgba(255, 0, 43, 0.9);
  margin-bottom: 16px;
`;

const Text = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const Meta = styled.p`
  font-size: 0.9rem;
  color: #444;
  margin-bottom: 6px;
`;

const ShareButton = styled.button`
  margin-top: 18px;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 43, 0.9),
    #4a148c
  );
  border: none;
  color: white;
  padding: 10px 22px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(255, 0, 43, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 35px rgba(255, 0, 43, 0.4);
  }
`;

/* ================= COMPONENT ================= */

const EventsPage = () => {
  const navigate = useNavigate();

  const handleShare = (event) => {
    const shareText = `
${event.title}
${event.description}

${event.date}
${event.time}
${event.venue}

${window.location.origin}/eventspage
`;

    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: shareText,
        url: window.location.origin + '/eventspage',
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Event details copied to clipboard');
    }
  };

  return (
    <Section>
      <Title>Our Events</Title>

      <Grid>
        {events.map((event) => (
          <Card key={event.id}>
            <ImageWrap>
              <img src={event.pic} alt={event.title || 'Event'} />
            </ImageWrap>

            {/* {event.title && (
              <Content>
                <EventTitle>{event.title}</EventTitle>
                <Convener>{event.convener}</Convener>
                <Text>{event.description}</Text>

                <Meta>{event.date}</Meta>
                <Meta>{event.time}</Meta>
                <Meta>{event.venue}</Meta>

                <ShareButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(event);
                  }}
                >
                  <FaShareAlt /> Share
                </ShareButton>
              </Content>
            )} */}
          </Card>
        ))}
      </Grid>

      <BackButton />
    </Section>
  );
};

export default EventsPage;
