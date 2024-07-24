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
        </Routes>
        <a href="https://wa.me/2348030906974" ><img src={wp} alt="logo" className="WhatsAppIcon" /></a>
    <Footer/>    
    </BrowserRouter>
  )
}

export default App
