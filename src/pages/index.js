import React from "react"
import Layout from "../components/Layout"
import showreel from "./showreel.mp4"
import ServiceList from "../components/ServiceList"
import { StaticImage } from "gatsby-plugin-image"
import Responsive from "../components/Slider"
import CustomArrows from "../components/Slider"

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
        <button className="about-btn">KNOW MORE</button>
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
      </div>
      <div className="work-gallery">
        <StaticImage src="https://static.wixstatic.com/media/fa8939_1a96e62662aa45d298961d19a4a8095f~mv2.png/v1/fill/w_844,h_475,q_90/fa8939_1a96e62662aa45d298961d19a4a8095f~mv2.webp" className="gallery-item"/>
        <StaticImage src="https://static.wixstatic.com/media/fa8939_1ea636c439e548a5811ef78b0458a95b~mv2.png/v1/fill/w_845,h_475,fp_0.5_0.46,q_90/fa8939_1ea636c439e548a5811ef78b0458a95b~mv2.webp" className="gallery-item"/>
        <StaticImage src="https://static.wixstatic.com/media/fa8939_ca204f7ec6f14f83bf56049b74bdf126~mv2.png/v1/fill/w_844,h_475,q_90/fa8939_ca204f7ec6f14f83bf56049b74bdf126~mv2.webp" className="gallery-item"/>
        <StaticImage src="https://static.wixstatic.com/media/fa8939_4ff8db81f4f64f4d848c3137bb9f80b4~mv2.png/v1/fill/w_751,h_423,fp_0.52_0.5,q_90/fa8939_4ff8db81f4f64f4d848c3137bb9f80b4~mv2.webp" className="gallery-item"/>
        <StaticImage src="https://i.ytimg.com/vi/wVBf39WPInc/sddefault.jpg" className="gallery-item"/>
        <StaticImage src="https://static.wixstatic.com/media/fa8939_14dd3d2bafd64d40be2e634ee952e258~mv2.png/v1/fill/w_751,h_423,q_90/fa8939_14dd3d2bafd64d40be2e634ee952e258~mv2.webp"className="gallery-item"/>
      </div>
    </section>

    <section className="client-slider">
      <div className="about-text client">
        <div className="bg-text">
          04
        </div>
        <h1>Our Clients</h1>
        <hr></hr>
      </div>

      <div className="list-wrapper">
          <div className="clients-list">
        
            <StaticImage src="https://static.wixstatic.com/media/fa8939_8034490ee63e4a7baaed605294b82f45~mv2.jpg/v1/fill/w_242,h_242,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fa8939_8034490ee63e4a7baaed605294b82f45~mv2.jpg" className="clientele"></StaticImage>
            <StaticImage src="https://static.wixstatic.com/media/fa8939_83e38ceef2db4f68824a8db7ceb381a1~mv2.png/v1/fill/w_242,h_242,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fa8939_83e38ceef2db4f68824a8db7ceb381a1~mv2.png" className="clientele"></StaticImage>
            <StaticImage src="https://static.wixstatic.com/media/fa8939_35f71288bf4f443fb9b98509458871b8~mv2.jpg/v1/fill/w_242,h_242,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fa8939_35f71288bf4f443fb9b98509458871b8~mv2.jpg" className="clientele"></StaticImage>
            <StaticImage src="https://static.wixstatic.com/media/fa8939_8c9378f4dab745e082d88f4ad1d24dd3~mv2.jpg/v1/fill/w_242,h_242,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fa8939_8c9378f4dab745e082d88f4ad1d24dd3~mv2.jpg" className="clientele"></StaticImage>
            <StaticImage src="https://static.wixstatic.com/media/fa8939_09e400f352c04600aad8bacc574bc96f~mv2.jpg/v1/fill/w_242,h_242,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fa8939_09e400f352c04600aad8bacc574bc96f~mv2.jpg" className="clientele"></StaticImage>
            <StaticImage src="https://static.wixstatic.com/media/fa8939_77838ec19b8f4fdaac258f9a2c84d8c6~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80,enc_auto/fa8939_77838ec19b8f4fdaac258f9a2c84d8c6~mv2.jpg" className="clientele"/>
            <StaticImage src="https://static.wixstatic.com/media/fa8939_d8d2a1f2b27a4809b86cd76c4ab050ca~mv2.jpg/v1/fill/w_452,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fa8939_d8d2a1f2b27a4809b86cd76c4ab050ca~mv2.jpg" className="clientele"/>
            <StaticImage src="https://static.wixstatic.com/media/fa8939_e5255a28f18c4fffb12252f2192aa9b2~mv2.png/v1/fill/w_242,h_242,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fa8939_e5255a28f18c4fffb12252f2192aa9b2~mv2.png" className="clientele"></StaticImage>
            <StaticImage src="https://static.wixstatic.com/media/fa8939_9d5b6872d3ec45b1952969232759d41f~mv2.jpg/v1/fill/w_452,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fa8939_9d5b6872d3ec45b1952969232759d41f~mv2.jpg" className="clientele"/>
            <StaticImage src="https://static.wixstatic.com/media/fa8939_00559e6e5ad8425ebf77cc16492b2a66~mv2.jpg/v1/fill/w_452,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fa8939_00559e6e5ad8425ebf77cc16492b2a66~mv2.jpg" className="clientele"/>
            <StaticImage src="https://static.wixstatic.com/media/fa8939_e5b4185816524c1bbd515b9e27375ef1~mv2.jpg/v1/fill/w_452,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fa8939_e5b4185816524c1bbd515b9e27375ef1~mv2.jpg" className="clientele"/>
          </div>
      </div>
      
    </section>

    <section className="contact-section">
      <div className="about-text contact">
        <div className="bg-text">
          05
        </div>
        <h1>Get in Touch</h1>
        <hr></hr>
      </div>
      <div className="form-sec">
        <form action="" className="form">
          <div className="input-label name">
             <label for="name">Name</label>
				     <input placeholder="Name" class=" inputs" type="text"/>
          </div>


         <div className="input-label email">
           <label for="email">Email</label>
				  <input placeholder="Email" class=" inputs" type="text"/>
         </div>


          <div className="input-label subject">
            <label for="subject">Subject</label>
				   <input placeholder="Subject" class=" inputs" type="text"/>
          </div>

           <div className="input-label message">
            <label for="message">Your Message</label>
				    <textarea placeholder="Message" class="message-input inputs"></textarea>
           </div>

				  <button type="submit" class="submit-btn">Send Message</button>
			  </form>
		  </div>
    </section>


  </Layout>
  ) 
}
