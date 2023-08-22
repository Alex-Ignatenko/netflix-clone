import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Navigation , Scrollbar , A11y} from 'swiper/modules';
import { authContext } from "../../context/authContext";
import axios from 'axios';
import SliderItem from '../SliderItem/SliderItem';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "./Slider.scss"



const Slider = ({type , genre, title}) => {

  const [contents, setContents] = useState([]);
  const {userInfo, dispatch} = useContext(authContext);


  useEffect(() => {
    const getList = async () => {
      try {    
        let requestedType = type ? '?type=' +  type : '?type=all';
        let requestedGenre = genre ? '&genre=' +  genre : '';
        let path = '/content/getlist' + requestedType + requestedGenre;
        const responce = await axios.get(path, {
          headers: {
            authorization: userInfo.token,
          },
        });
        if (responce){
          setContents(responce.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getList();
   
  }, [type]);



  return (


    <div className="slider-container">
      <h1>{title}</h1>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      breakpoints={{
        // when window width is >= 480px
            480: {
              slidesPerView: 1,
            },
        // when window width is >= 768px
            768: {
              spaceBetween: 4,
              slidesPerView: 2,
            },
        // when window width is >= 1024px
            1024: {
              spaceBetween: 8,
              slidesPerView: 3,
            },
            1280: {
              spaceBetween: 10,
              slidesPerGroup: 2,
              slidesPerView: 4,
            },
            1480: {
              spaceBetween: 12,
              slidesPerGroup: 5,
              slidesPerView: 7,
            }
          }}
      navigation={{
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',
        disabledClass: 'disabled_swiper_button'}}    
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {contents.map((content) => (
            <SwiperSlide>
              <SliderItem content = {content}/>
            </SwiperSlide>
        ))}
      </Swiper> 
    </div>
  )
}

export default Slider