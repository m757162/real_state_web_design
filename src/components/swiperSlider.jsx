import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide,useSwiper  } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination,Navigation,Autoplay } from "swiper/modules";

import SlideCard from "./swiperSliderCard";

export default function Sslider() {
  const swiper = useSwiper()
  
  return (
    <>
    
      <Swiper
          
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: `.swiper-explor-button-next`,
          prevEl: `.swiper-explor-button-prev`,
        }}
        modules={[Pagination,Navigation,Autoplay]}
        className="mySwiper"

        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          555: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          990: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <SlideCard id="1"/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard id="2"/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard id="3"/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard id="4"/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard id="5"/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard id="6"/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard id="7"/>
        </SwiperSlide>
        <SwiperSlide>
          <SlideCard id="8"/>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
