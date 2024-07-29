import React from 'react'
import "../CSS/Faq.css"


const faqs = [
    { question: "What types of programs does the fellowship offer?", answer: "We offer a variety of programs including emotional and mental health support, holistic health and wellness initiatives, spiritual guidance, career and financial education, marital and relationship counseling, personal development workshops, and community building efforts." },
    { question: "How can I join the fellowship?", answer: "You can join the fellowship by attending our events, meetings and participating in our programs. You can contact us through the contact page and other provided methods on this website for more information." },
    // { question: "Where are the fellowship meetings held?", answer: "Our fellowship meetings are held at various locations. You can find the details for each event on our Events page. We also offer virtual meetings and workshops to accommodate those who cannot attend in person." },
    { question: "Do I need to be a member of a specific denomination to join?", answer: "No, we are an interdenominational fellowship welcoming women from all faith backgrounds to participate in our programs and events." },
    { question: "How can I volunteer or get involved?", answer: "You can volunteer or get involved by visiting our Get Involved page, where you'll find information on current volunteer opportunities and ways to support our mission." },
    // { question: "Can I donate to support the fellowship?", answer: "Yes, we greatly appreciate donations. You can find information on how to donate on our Donate page. Your contributions help us continue to provide valuable programs and services to women in need." },
    { question: "What if I need personal counseling or support?", answer: "If you need personal counseling or support, please contact us through the Contact Us page. We offer various counseling services and can connect you with the appropriate resources." },
    { question: "How can I stay updated on fellowship news and events?", answer: "You can stay updated by subscribing to our newsletter through the signup form on our Home page. We also regularly update our Events and Blog pages with the latest information." },
    // { question: "Do you offer resources for online learning?", answer: "Yes, we provide various online resources, including webinars, study guides, and downloadable materials. These can be accessed through our Inspirationals page." }
]

const Faq=()=>{

  return (
    <div>
      <section className="faq">
                <h2>Frequently Asked Questions</h2>
                <br/>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
    </div>
  )
}

export default Faq
