
// import React, { useContext, useState,useRef,useEffect } from 'react'
// import { Context } from './Context'
// import { FaArrowAltCircleDown, FaCaretRight, FaCartArrowDown, FaChevronDown, FaDashcube, FaHome, FaUserCircle } from 'react-icons/fa'
// import { FaBurger, FaCartShopping, FaElementor, FaMobileScreenButton } from 'react-icons/fa6'
// import { NavLink, useLocation, useNavigate } from 'react-router-dom'
// import "../CSS/Header.css"
// // import "animate.css"
// // import { useDispatch, useSelector } from 'react-redux'
// // import { userLogout } from '../Features/Slice'
// import Logo from "../images/logo.jpeg"
// import 'animate.css'

// const Header = () => {
//    // const userToken = useSelector(state=>state.userToken)
//    // console.log(userToken)
//    // const cart = useSelector(state=>state.cart)
//    // const dispatch=useDispatch()
//    //  const {loading,setLoading}=useContext(Context)
//    //  console.log(loading)
//     const navigate = useNavigate()
//     const location = useLocation()
//     const [menuSwitch,setMenuSwitch]=useState(false)
//    //  const userInfo = useSelector(state=>state.userInfo)

//     // handling click away
// const menuRef=useRef();
// useEffect(()=>{
//    const handleClickOutside = (event)=>{
//       if(menuRef.current&&!menuRef.current.contains(event.target)){
//          setMenuSwitch(false)
//       }
//    }
//    document.addEventListener('mousedown',handleClickOutside)
//       return ()=>{
//          document.removeEventListener('mousedown',handleClickOutside)
//       }
// },[])

// const handleNavigate = ()=>{
//    navigate("/")
//    scrollToAbout()
// }

// const scrollToAbout = ()=>{
   
//       const int = setTimeout(()=>{
//          const element = document.getElementById('about')
//    if(element)
//    element.scrollIntoView({behavior:'smooth'})
//       },500)

//       return ()=>clearInterval(int)
   
// }



//   return (
//     <div className={window.location.pathname==="/contact2"?"HeaderContact2":'Header'}>
//         <img className='HeaderImg' src={Logo} alt="Logo" onClick={()=>navigate("/")}/>
//         <div className='HeaderLeft'>
//         <NavLink to={"/"}> HOME</NavLink>
//         <NavLink to={"/about"}> ABOUT</NavLink>
//         {/* <NavLink to={"/activities"}> ACTIVITIES</NavLink> */}
//         <NavLink to={"/eventspage"}>EVENTS</NavLink>
//         <NavLink to={"/testimoniespage"}> TESTIMONIES</NavLink>
//         <NavLink to={"/getinspiredpage"}> GET INSPIRED</NavLink>
//         <NavLink to={"/galleriespage"}> GALLERY</NavLink>
        
//         <NavLink to="/contact">CONTACT</NavLink>
//         <NavLink to={"/booking"}> BOOKING</NavLink>
//         </div>
//         {/* <div className='HeaderRight'>
//         <div className='CartWrap' onClick={()=>navigate("/cartpage")}><FaCartArrowDown/>({cart.length})</div>
//         {!userToken&&<button onClick={()=>navigate("/login")}>Login</button>}
//         {!userToken&&<button onClick={()=>navigate("/signup")}>Register</button>}
//          {userToken&&<div className='CartWrap' onClick={()=>navigate("/userdashboard")}><FaUserCircle /><p> Hi, {userInfo.fullName.slice(0,5)}</p></div>}
//         </div> */}
//         {location.pathname!=="/"&&<p className={window.location.pathname==="/contact2"?'HomeMobile2':'HomeMobile'} onClick={()=>navigate("/")}><FaHome/>Home</p>}
//         <FaBurger style={{cursor:"pointer"}} className={window.location.pathname==="/contact2"?"Burger2":"Burger"} onClick={()=>setMenuSwitch(!menuSwitch)}/>
//         {menuSwitch&&<div className='Menu2 animate__animated animate__slideInRight' ref={menuRef}>
//         <NavLink to={"/"} onClick={()=>setMenuSwitch(false)}> HOME</NavLink>
//         <NavLink to={"/about"} onClick={()=>setMenuSwitch(false)}> ABOUT</NavLink>
//         {/* <NavLink to={"/activities"} onClick={()=>setMenuSwitch(false)}>ACTIVITIES</NavLink> */}
//         <NavLink to={"/eventspage"} onClick={()=>setMenuSwitch(false)}>EVENTS</NavLink>
//         <NavLink to={"/testimoniespage"} onClick={()=>setMenuSwitch(false)}>TESTIMONIES</NavLink>
//         <NavLink to={"/getinspiredpage"} onClick={()=>setMenuSwitch(false)}>GET INSPIRED</NavLink>
//         <NavLink to="/galleriespage" onClick={()=>setMenuSwitch(false)}>GALLERY</NavLink>
//         <NavLink to="/contact" onClick={()=>setMenuSwitch(false)}>CONTACT</NavLink>
//         <NavLink to={"/booking"} onClick={()=>setMenuSwitch(false)}> BOOKING</NavLink>
//         </div>}
//     </div>
//   )
// }

// export default Header



import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LogoImg from '../images/logo.jpeg';

/* ================= STYLES (UNCHANGED) ================= */

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  z-index: 300;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Inter', sans-serif;
  color: #fff;
  background-color: transparent;
  transition: background-color 0.3s ease;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 40px;
    border-radius: 50%;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  margin: 0 1rem;
  position: relative;
  padding-bottom: 5px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: #ff5722;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &.active {
    font-weight: 700;
    color: pink;
  }
`;

const NavLinkMobile = styled(NavLink)`
  color: white;
  font-size: 1.5rem;
  font-weight:900;
  margin: 0.5rem 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7); /* subtle shadow for readability */
  transition: color 0.3s ease;

  &:hover {
    color: pink; /* optional hover color */
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;
  z-index: 101;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 260px;
//   background-color: white;
  background: linear-gradient(
    135deg,
    rgba(255,255,255,1),
    rgba(74, 20, 140, 1)
  );
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  align-items: center;
  transform: translateX(${p => (p.isOpen ? '0' : '100%')});
  opacity: ${p => (p.isOpen ? '1' : '0')};
  transition: transform 0.4s ease, opacity 0.4s ease;
  z-index: 9999;
`;

/* ================= COMPONENT ================= */

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const isActive = path => location.pathname === path;

  const go = path => {
    navigate(path);
    setOpen(false);
  };

  /* Scroll background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Click outside mobile menu */
  useEffect(() => {
    const handleClick = e => {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        iconRef.current &&
        !iconRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <HeaderContainer
      style={{
        backgroundColor: scrolled ? 'rgba(0,0,0,0.5)' : 'transparent',
      }}
    >
      {/* Logo */}
      <Logo onClick={() => navigate('/')}>
        <img src={LogoImg} alt="Logo" />
      </Logo>

      {/* Desktop Nav */}
      <Nav>
        <NavLink onClick={() => go('/')} className={isActive('/') ? 'active' : ''}>Home</NavLink>
        <NavLink onClick={() => go('/about')} className={isActive('/about') ? 'active' : ''}>About</NavLink>
        <NavLink onClick={() => go('/eventspage')} className={isActive('/eventspage') ? 'active' : ''}>Events</NavLink>
        <NavLink onClick={() => go('/testimoniespage')} className={isActive('/testimoniespage') ? 'active' : ''}>Testimonies</NavLink>
        <NavLink onClick={() => go('/getinspiredpage')} className={isActive('/getinspiredpage') ? 'active' : ''}>Get Inspired</NavLink>
        <NavLink onClick={() => go('/galleriespage')} className={isActive('/galleriespage') ? 'active' : ''}>Gallery</NavLink>
        <NavLink onClick={() => go('/contact')} className={isActive('/contact') ? 'active' : ''}>Contact</NavLink>
        <NavLink onClick={() => go('/booking')} className={isActive('/booking') ? 'active' : ''}>Booking</NavLink>
      </Nav>

      {/* Mobile Icon */}
      <MobileMenuIcon onClick={() => setOpen(!open)} ref={iconRef}>
        <i className="fas fa-bars fa-2x" />
      </MobileMenuIcon>

      {/* Mobile Menu */}
      <MobileMenu isOpen={open} ref={menuRef}>
        <NavLinkMobile onClick={() => go('/')} className={isActive('/') ? 'active' : ''}>Home</NavLinkMobile>
        <NavLinkMobile onClick={() => go('/about')} className={isActive('/about') ? 'active' : ''}>About</NavLinkMobile>
        <NavLinkMobile onClick={() => go('/eventspage')} className={isActive('/eventspage') ? 'active' : ''}>Events</NavLinkMobile>
        <NavLinkMobile onClick={() => go('/testimoniespage')} className={isActive('/testimoniespage') ? 'active' : ''}>Testimonies</NavLinkMobile>
        <NavLinkMobile onClick={() => go('/getinspiredpage')} className={isActive('/getinspiredpage') ? 'active' : ''}>Get Inspired</NavLinkMobile>
        <NavLinkMobile onClick={() => go('/galleriespage')} className={isActive('/galleriespage') ? 'active' : ''}>Gallery</NavLinkMobile>
        <NavLinkMobile onClick={() => go('/contact')} className={isActive('/contact') ? 'active' : ''}>Contact</NavLinkMobile>
        <NavLinkMobile onClick={() => go('/booking')} className={isActive('/booking') ? 'active' : ''}>Booking</NavLinkMobile>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
