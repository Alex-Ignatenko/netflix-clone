import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Slider.scss"

const Slider = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7,
          slidesToSlide: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 480 },
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
          <div className='slider-item'>Item 1</div>
          <div className='slider-item'>Item 2</div>
          <div className='slider-item'>Item 3</div>
          <div className='slider-item'>Item 4</div>
          <div className='slider-item'>Item 5</div>
          <div className='slider-item'>Item 6</div>
          <div className='slider-item'>Item 7</div>
          <div className='slider-item'>Item 8</div>
      </Carousel>
    </div>
  )
}

export default Slider


