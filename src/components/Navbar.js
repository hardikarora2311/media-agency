import React, {useState} from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {HiMenuAlt4} from "react-icons/hi"
import {IoMdClose} from "react-icons/io"



const Navbar = () => {
  const [show,setShow]= useState(false)
  return (
    <nav className="navbar">
        <StaticImage src='../assets/images/pm.webp' alt='perception media' class="logo"/>
        <button className='nav-btn' onClick={()=> setShow(!show)}>{show? <IoMdClose/> : <HiMenuAlt4/>}</button>
        <div className= {show? "show-nav" : "show-nav nav-menu"}>
            <ul className="nav-list">
                <li className="list-inline nav-items">About</li><hr></hr>
                <li className="list-inline nav-items">Services</li><hr></hr>
                <li className="list-inline nav-items">Work</li><hr></hr>
                <li className="list-inline nav-items nav-cta">Contact Us</li>
            </ul>
        </div>
 
    </nav>
  )
}

export default Navbar