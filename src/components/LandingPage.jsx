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

const LandingPage = () => {
  return (
    <div>
      <Hero/>
      <Intro/>
      <FounderMessage/>
      <Video/>
      <UpcomingEventsComponent/>
      <GetInspired/>
      <TestimoniesComponent/>
      <NewsletterSubscription/>
      <Galleries/>
      <GetInvolved/>
      <Faq/>
    </div>
  )
}

export default LandingPage
