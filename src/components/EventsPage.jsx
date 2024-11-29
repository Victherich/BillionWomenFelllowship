import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../CSS/UpcomingEventsComponent.css';
import eImg1 from "../images/eImg1.jpeg"
import {FaShareAlt} from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';
import MinistersTraining from "../images/MinistersTraining.jpeg"

const events = [
    { id: 2,pic:MinistersTraining, },
    { id: 1,pic:eImg1, title: 'PRAYER & BREAKTHROUGH BREAKFAST', convener:"with: PASTOR SADE KUKU",description: 'For such a time as this...Esther 4:14', date: 'Date: 2024-08-24', time:"Time: 10AM", venue:"Venue: 1, OPA ARO CLOSE, OFF TUNJI ADEBAYO STREET, BESIDE AP FILLING STATION, FAGBA LAGOS." },
    // { id: 2,pic:eImg1, title: 'PRAYER & BREAKTHROUGH BREAKFAST2', convener:"PASTOR SADE KUKU",description: 'For such a time as this...Esther 4:14', date: '2024-08-24', time:"10AM", venue:"1, OPA ARO CLOSE, OFF TUNJI ADEBAYO STREET, BESIDE AP FILLING STATION, FAGBA LAGOS." },
  
];

const EventsPage = () => {
    const navigate = useNavigate()
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

  
    const handleShare = (event) => {
        const shareText = `
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
                text: shareText,
                url: window.location.origin + '/eventspage',
            }).catch(error => console.error('Error sharing', error));
        } else {
            navigator.clipboard.writeText(shareText);
            alert("Event details copied to clipboard");
        }
    };

    return (
        <div className="events-container" 
        style={{display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        gap:"30px",
        paddingTop:"100px",
        width:"100%"}}>
            <h2>EVENTS</h2>
                {events.map(event => (
                    <div key={event.id} className="event-card" style={{width:"300px"}}>
                        <img src={event.pic} alt="event image" />
                        <h3>{event.title}</h3>
                        <p></p>
                        <p style={{fontWeight:"bold"}}>{event.convener}</p>
                        <br/>
                        <p>{event.description}</p>
                        <br/>
                        <p><span style={{fontWeight:"500"}}></span> {event.date}</p>
                        <p><span style={{fontWeight:"500"}}></span> {event.time}</p>
                        <br/>
                        <p><span style={{fontWeight:"500"}}></span> {event.venue}</p>
                        
                        <button onClick={(e) => { e.stopPropagation(); handleShare(event)}} style={{marginLeft:"10px"}} className='BlogDetailShare'>
        <FaShareAlt /> Share
      </button>
                    </div>
                ))}
            <div className='events-containerButtonWrap'>
        
            </div>
            <BackButton/>
        </div>
    );
};

export default EventsPage;
