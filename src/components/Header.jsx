
import React, { useContext, useState,useRef,useEffect } from 'react'
import { Context } from './Context'
import { FaArrowAltCircleDown, FaCaretRight, FaCartArrowDown, FaChevronDown, FaDashcube, FaHome, FaUserCircle } from 'react-icons/fa'
import { FaBurger, FaCartShopping, FaElementor, FaMobileScreenButton } from 'react-icons/fa6'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import "../CSS/Header.css"
// import "animate.css"
// import { useDispatch, useSelector } from 'react-redux'
// import { userLogout } from '../Features/Slice'
import Logo from "../images/logo.jpeg"
import 'animate.css'

const Header = () => {
   // const userToken = useSelector(state=>state.userToken)
   // console.log(userToken)
   // const cart = useSelector(state=>state.cart)
   // const dispatch=useDispatch()
   //  const {loading,setLoading}=useContext(Context)
   //  console.log(loading)
    const navigate = useNavigate()
    const location = useLocation()
    const [menuSwitch,setMenuSwitch]=useState(false)
   //  const userInfo = useSelector(state=>state.userInfo)

    // handling click away
const menuRef=useRef();
useEffect(()=>{
   const handleClickOutside = (event)=>{
      if(menuRef.current&&!menuRef.current.contains(event.target)){
         setMenuSwitch(false)
      }
   }
   document.addEventListener('mousedown',handleClickOutside)
      return ()=>{
         document.removeEventListener('mousedown',handleClickOutside)
      }
},[])

const handleNavigate = ()=>{
   navigate("/")
   scrollToAbout()
}

const scrollToAbout = ()=>{
   
      const int = setTimeout(()=>{
         const element = document.getElementById('about')
   if(element)
   element.scrollIntoView({behavior:'smooth'})
      },500)

      return ()=>clearInterval(int)
   
}



  return (
    <div className={window.location.pathname==="/contact2"?"HeaderContact2":'Header'}>
        <img className='HeaderImg' src={Logo} alt="Logo" onClick={()=>navigate("/")}/>
        <div className='HeaderLeft'>
        <NavLink to={"/"}> HOME</NavLink>
        <NavLink to={"/about"}> ABOUT</NavLink>
        {/* <NavLink to={"/activities"}> ACTIVITIES</NavLink> */}
        <NavLink to={"/eventspage"}>EVENTS</NavLink>
        <NavLink to={"/testimoniespage"}> TESTIMONIES</NavLink>
        <NavLink to={"/getinspiredpage"}> GET INSPIRED</NavLink>
        <NavLink to={"/galleriespage"}> GALLERY</NavLink>
        
        <NavLink to="/contact">CONTACT</NavLink>
        <NavLink to={"/booking"}> BOOKING</NavLink>
        </div>
        {/* <div className='HeaderRight'>
        <div className='CartWrap' onClick={()=>navigate("/cartpage")}><FaCartArrowDown/>({cart.length})</div>
        {!userToken&&<button onClick={()=>navigate("/login")}>Login</button>}
        {!userToken&&<button onClick={()=>navigate("/signup")}>Register</button>}
         {userToken&&<div className='CartWrap' onClick={()=>navigate("/userdashboard")}><FaUserCircle /><p> Hi, {userInfo.fullName.slice(0,5)}</p></div>}
        </div> */}
        {location.pathname!=="/"&&<p className={window.location.pathname==="/contact2"?'HomeMobile2':'HomeMobile'} onClick={()=>navigate("/")}><FaHome/>Home</p>}
        <FaBurger style={{cursor:"pointer"}} className={window.location.pathname==="/contact2"?"Burger2":"Burger"} onClick={()=>setMenuSwitch(!menuSwitch)}/>
        {menuSwitch&&<div className='Menu2 animate__animated animate__slideInRight' ref={menuRef}>
        <NavLink to={"/"} onClick={()=>setMenuSwitch(false)}> HOME</NavLink>
        <NavLink to={"/about"} onClick={()=>setMenuSwitch(false)}> ABOUT</NavLink>
        {/* <NavLink to={"/activities"} onClick={()=>setMenuSwitch(false)}>ACTIVITIES</NavLink> */}
        <NavLink to={"/eventspage"} onClick={()=>setMenuSwitch(false)}>EVENTS</NavLink>
        <NavLink to={"/testimoniespage"} onClick={()=>setMenuSwitch(false)}>TESTIMONIES</NavLink>
        <NavLink to={"/getinspiredpage"} onClick={()=>setMenuSwitch(false)}>GET INSPIRED</NavLink>
        <NavLink to="/galleriespage" onClick={()=>setMenuSwitch(false)}>GALLERY</NavLink>
        <NavLink to="/contact" onClick={()=>setMenuSwitch(false)}>CONTACT</NavLink>
        <NavLink to={"/booking"} onClick={()=>setMenuSwitch(false)}> BOOKING</NavLink>
        </div>}
    </div>
  )
}

export default Header
