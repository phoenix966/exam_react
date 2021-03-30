import {useRef,useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import './slider.sass'
import {FaBackward,FaForward,FaPause,FaPlay} from 'react-icons/fa'

import slide_one from '../../assets/img/1.webp'
import slide_two from '../../assets/img/2.jpg'
import slide_three from '../../assets/img/3.jpg'

export default function SimpleSlider() {
  const [slidePlay,setSlidePlay] = useState(true)

  var settings = {
    dots: true,
    infinite: true,
    speed: 1400,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,  // 5000
    swipe: true
  };

  const sliderRef = useRef()

  const prevSlideOnClick=()=>{
    sliderRef.current.slickPrev();
  }

  const nextSlideOnClick=()=>{
    sliderRef.current.slickNext();
  }

  const playOrPauseSlideOnClick=()=>{
    const slide = slidePlay
    if(slide){
      sliderRef.current.slickPause();
      setSlidePlay(false)
    } else{
      sliderRef.current.slickPlay();
      setSlidePlay(true)
    }
  }


  return (
    <>
      <Slider ref={sliderRef} {...settings}>
          <div className="slider__wrap">
            <img src={slide_one} alt="slide" className="slider__img"/>
            {/* <h3 className="slider__title">lotr</h3> */}
          </div>
          {/* <h3 className='slider__title'>.</h3> */}
          <div className="slider__wrap">
            <img src={slide_two} alt="slide" className="slider__img"/>
          </div>
            {/* <h3 className="slider__title">.</h3> */}
          <div className="slider__wrap">
            <img src={slide_three} alt="slide" className="slider__img"/>
          </div>
            {/* <h3 className="slider__title">.</h3> */}
      </Slider>
      <div className="slider__row">
          <div className="container slider__container">
            <div className="slider__action">
                <span onClick={prevSlideOnClick}><FaBackward/></span>
                <span onClick={playOrPauseSlideOnClick}>{slidePlay ? <FaPlay/> : <FaPause/>}</span>
                <span onClick={nextSlideOnClick}><FaForward/></span>
            </div>
          </div>
      </div>
    </>
  );
}