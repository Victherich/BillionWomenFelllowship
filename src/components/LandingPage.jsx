import React from 'react'
import Hero from './Hero'
import Intro from './Intro'
import Video from './Video'
import Faq from './Faq'
import NewsletterSubscription from './NewsLetterSubscription'
import UpcomingEventsComponent from './UpcomingEventsComponent'
import TestimoniesComponent from './TestimoniesComponent'
import Galleries from './Galleries'
import GetInspired from './GetInspired'
import GetInvolved from './GetInvolved'
import FounderMessage from './FounderMessage'
import A1 from "../videos/video1.mp4"
import A2 from "../videos/video2.mp4"
import A3 from "../videos/video3.mp4"
import A4 from "../videos/video4.mp4"

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <Intro/>
      <Video video={A1}/>
      <FounderMessage/>
      <Video video={A2}/>
      <UpcomingEventsComponent/>
      <Video video={A3}/>
      <GetInspired/>
      <Video video={A4}/>
      <TestimoniesComponent/>
      <NewsletterSubscription/>
      <Galleries/>
      <GetInvolved/>
      <Faq/>
    </div>
  )
}

export default LandingPage
