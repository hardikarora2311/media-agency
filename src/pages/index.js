import React from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import showreel from "./showreel.mp4"
import ServiceList from "../components/ServiceList"

export default function Home() {
  return (
  <Layout>
    <header>
      <video autoPlay muted loop id="hero-vid">
        <source src={showreel} type="video/mp4"/>
        Showreel Perception media.
      </video>
      <div className="header-text">
        <div className="header-content">
           <h1>A One Stop Solution for All your Creative Needs.</h1>
          <small>A modernistic creative agency.</small>
          <button className="header-cta">Get Started</button>
        </div>
      </div>
    </header>

    <section className="about-section">
      <div className="about-text">
        <div className="bg-text">
          01
        </div>
       <h1>Who We Are</h1>
        <hr></hr>

        <p>Perception Media is a team of creative artists who thrive to construct purposeful content that can help you build your brand. We believe in the power of communication through art. We aim to give direction to your thoughts and promise the best possible results.</p>
      </div>
    </section>

    <section className="service-section">
      <div className="about-text service">
        <div className="bg-text">
          02
        </div>
        <h1>What We do</h1>
        <hr></hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
      </div>
      <ServiceList/>
    </section>

    <section className="work-section">
     <div className="about-text work">
        <div className="bg-text">
          03
        </div>
        <h1>Our Work</h1>
        <hr></hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
      </div>
    </section>


  </Layout>
  ) 
}
