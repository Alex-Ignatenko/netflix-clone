import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderItem from '../SliderItem/SliderItem'
import "./Slider.scss"

const Slider = () => {

    

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slidesToSlide: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1500 },
          items: 5,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1500, min: 480 },
          items: 3,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 480, min: 0 },
          items: 2,
          slidesToSlide: 1
        }
      };

  return (
    <div className='slider-container'>
        <div><h2>List Name</h2></div>
          <Carousel className="slider-sub-container"responsive={responsive} infinite={true} centerMode ={true} swipeable={true} draggable={true}>
            <SliderItem className='slider-item'></SliderItem>
            <SliderItem className='slider-item'></SliderItem>
            <SliderItem className='slider-item'></SliderItem>
            <SliderItem className='slider-item'></SliderItem>
            <SliderItem className='slider-item'></SliderItem>
            <SliderItem className='slider-item'></SliderItem>
            <SliderItem className='slider-item'></SliderItem>
            <SliderItem className='slider-item'></SliderItem>

        </Carousel>
    </div>
  )
}

export default Slider


