import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import './slider.sass'

import slide_one from '../../assets/img/1.jpg'
import slide_two from '../../assets/img/2.jpg'
import slide_three from '../../assets/img/3.jpg'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="slider__wrap">
          <img src={slide_one} alt="slide" className="slider__img"/>
        </div>
        <h3 className='slider__title'>.</h3>
      </div>
      <div>
        <div className="slider__wrap">
          <img src={slide_two} alt="slide" className="slider__img"/>
          </div>
          <h3 className="slider__title">.</h3>
      </div>
      <div>
        <div className="slider__wrap">
          <img src={slide_three} alt="slide" className="slider__img"/>
          </div>
          <h3 className="slider__title">.</h3>
      </div>
    </Slider>
  );
}