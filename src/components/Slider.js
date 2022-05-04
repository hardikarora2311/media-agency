import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImage } from "gatsby-plugin-image";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  export default class CustomArrows extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div>
          <h2>Custom Arrows</h2>
          <Slider {...settings}>
          
            <StaticImage src="https://static.wixstatic.com/media/fa8939_8034490ee63e4a7baaed605294b82f45~mv2.jpg/v1/fill/w_242,h_242,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fa8939_8034490ee63e4a7baaed605294b82f45~mv2.jpg" className="slider-item"></StaticImage>
            <StaticImage src="https://static.wixstatic.com/media/fa8939_35f71288bf4f443fb9b98509458871b8~mv2.jpg/v1/fill/w_242,h_242,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fa8939_35f71288bf4f443fb9b98509458871b8~mv2.jpg" className="slider-item"></StaticImage>
            <StaticImage src="https://static.wixstatic.com/media/fa8939_8c9378f4dab745e082d88f4ad1d24dd3~mv2.jpg/v1/fill/w_242,h_242,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fa8939_8c9378f4dab745e082d88f4ad1d24dd3~mv2.jpg" className="slider-item"></StaticImage>
            <StaticImage src="https://static.wixstatic.com/media/fa8939_09e400f352c04600aad8bacc574bc96f~mv2.jpg/v1/fill/w_242,h_242,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/fa8939_09e400f352c04600aad8bacc574bc96f~mv2.jpg" className="slider-item"></StaticImage>
            <StaticImage src="https://static.wixstatic.com/media/fa8939_e5255a28f18c4fffb12252f2192aa9b2~mv2.png/v1/fill/w_242,h_242,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fa8939_e5255a28f18c4fffb12252f2192aa9b2~mv2.png" className="slider-item"></StaticImage>
            <StaticImage src="https://static.wixstatic.com/media/fa8939_83e38ceef2db4f68824a8db7ceb381a1~mv2.png/v1/fill/w_242,h_242,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fa8939_83e38ceef2db4f68824a8db7ceb381a1~mv2.png" className="slider-item"></StaticImage>
          </Slider>
        </div>
      )
    }
}
