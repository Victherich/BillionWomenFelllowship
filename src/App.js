import React from 'react'
import Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import wp from "./images/whatsapplogo.png"
import "./App.css"
import ScrollToTop from './components/ScrollToTop'
import ContactForm from './components/ContactUs'
import GetInspiredPage from './components/GetInspiredPage'
import GetInspiredDetailPage from './components/GetInspiredDetailPage'
import GalleriesPage from './components/GalleriesPage'
import TestimoniesPage from './components/TestimoniesPage'
import About from './components/About'
import EventsPage from './components/EventsPage'
import ContactForm2 from './components/Contact2'
import HostingRenewal from './components/HostingRenewal'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    
    <Header/>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/contact" element={<ContactForm/>}/>
            <Route path="/getinspiredpage" element={<GetInspiredPage/>}/>
            <Route path="/getinspired/:id" element={<GetInspiredDetailPage/>}/>
            <Route path="/galleriespage" element={<GalleriesPage/>}/>
            <Route path="/testimoniespage" element={<TestimoniesPage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/eventspage" element={<EventsPage/>}/>
            <Route path="/booking" element={<ContactForm2/>}/>
            <Route path='/hostingrenewalandreg' element = {<HostingRenewal/>}/>
        </Routes>
        <a ><img src={wp} alt="logo" className="WhatsAppIcon" onClick={()=>window.open("https://wa.me/17703102914","_blank")}/></a>
    <Footer/>    
    </BrowserRouter>
  )
}

export default App
