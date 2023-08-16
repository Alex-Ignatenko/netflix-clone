import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "./Slider.scss"
import SliderItem from '../SliderItem/SliderItem'

import React from 'react'

const Slider = () => {
  return (
    <div className='slider-container'>
         <div><h2>List Name</h2></div>
        <Swiper>
            <SwiperSlide>
            <SliderItem >1</SliderItem>
            </SwiperSlide>
        </Swiper>    
     </div>
  )
}

export default Slider