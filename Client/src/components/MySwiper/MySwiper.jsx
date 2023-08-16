import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import SliderItem from '../SliderItem/SliderItem'
import { Pagination , Navigation , Scrollbar , A11y} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "./MySwiper.scss"
import axios from 'axios';


const MySwiper = ({type , title}) => {

  const [contents, setContents] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {    
        let requestedType = type ? '?type=' +  type : '';
        let path = '/content/getlist' + requestedType;
        const responce = await axios.get(path, {
          // headers: {
          //   authorization: userInfo.token,
          // },
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
    <div className="mySwiper">
      <h1>{title}</h1>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      breakpoints={{
        // when window width is >= 576px
            576: {
              slidesPerView: 1,
            },
        // when window width is >= 768px
            768: {
              spaceBetween: 5,
              slidesPerView: 2,
            },
        // when window width is >= 1024px
            1024: {
              spaceBetween: 10,
              slidesPerView: 4,
            },
            1280: {
              spaceBetween: 10,
              slidesPerGroup: 2,
              slidesPerView: 6,
            },
          }}
      // spaceBetween={8}
      // slidesPerView={6}
      // slidesPerGroup={4}
      navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {contents.map((content) => (
            <SwiperSlide>
              <div className='slide-item-container'>
                <img src={content.imgThumb} />
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MySwiper