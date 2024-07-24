import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../CSS/UpcomingEventsComponent.css';
import eImg1 from "../images/eImg1.jpeg"

const events = [
    { id: 1,pic:eImg1, title: 'PRAYER & BREAKTHROUGH BREAKFAST', convener:"PASTOR SADE KUKU",description: 'For such a time as this...Esther 4:14', date: '2024-08-24', time:"10AM", venue:"1, OPA ARO CLOSE, OFF TUNJI ADEBAYO STREET, BESIDE AP FILLING STATION, FAGBA LAGOS." },
    { id: 2,pic:eImg1, title: 'PRAYER & BREAKTHROUGH BREAKFAST', convener:"PASTOR SADE KUKU",description: 'For such a time as this...Esther 4:14', date: '2024-08-24', time:"10AM", venue:"1, OPA ARO CLOSE, OFF TUNJI ADEBAYO STREET, BESIDE AP FILLING STATION, FAGBA LAGOS." },
    { id: 3,pic:eImg1, title: 'PRAYER & BREAKTHROUGH BREAKFAST', convener:"PASTOR SADE KUKU",description: 'For such a time as this...Esther 4:14', date: '2024-08-24', time:"10AM", venue:"1, OPA ARO CLOSE, OFF TUNJI ADEBAYO STREET, BESIDE AP FILLING STATION, FAGBA LAGOS." },
    // { id: 2, title: 'Event 2', date: '2024-09-15', description: 'Description for event 2' },
    // { id: 3, title: 'Event 3', date: '2024-09-15', description: 'Description for event 2' },
    // Add more events here
];

const UpcomingEventsComponent = () => {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        <div className="events-container">
            <h2>UPCOMING EVENTS</h2>
            <Carousel 
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
             //  showDots={true}
              renderButtonGroupOutside={true}
            >
                {events.map(event => (
                    <div key={event.id} className="event-card">
                        <img src={event.pic} alt="event image"/>
                        <h3>{event.title}</h3>
                        <p>with</p>
                        <p style={{fontWeight:"bold"}}>{event.convener}</p>
                        <br/>
                        <p>{event.description}</p>
                        <br/>
                        <p><span style={{fontWeight:"500"}}>Date:</span> {event.date}</p>
                        <p><span style={{fontWeight:"500"}}>Time:</span> {event.time}</p>
                        <br/>
                        <p><span style={{fontWeight:"500"}}>Venue:</span> {event.venue}</p>
                        
                        
                    </div>
                ))}
            </Carousel>
            <div className='events-containerButtonWrap'>
            <button>See More Events</button>
            </div>
            
        </div>
    );
};

export default UpcomingEventsComponent;
