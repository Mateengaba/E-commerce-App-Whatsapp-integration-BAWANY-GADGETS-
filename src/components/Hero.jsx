import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Hero.css';
import slide1 from "../assets/slider-img-2-removebg-preview.png"
import slide2 from "../assets/slider-img-5-removebg-preview.png"
import slide3 from "../assets/slider-img-4-removebg-preview.png"
import slide4 from "../assets/slider-img-7-removebg-preview.png"
import slide5 from "../assets/slider-img-1-removebg-preview-removebg-preview.png"

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const Hero = () => {
  return (
    <>
    
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 2000 }}  
      >
        <SwiperSlide>
          <img src={slide1} alt="slide1"  width='50px' height='50px'/>
          <h4 className='font-bold pt-7 text-center text-black'>Power IC Repair</h4>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide2} alt="slide2" />
          <h4 className='font-bold pt-7 text-center text-black'>Speaker Repair</h4>

        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide3"  />
          <h4 className='font-bold pt-7 text-center text-black'>Mic Repair</h4>

        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide4" />
          <h4 className='font-bold pt-7 text-center text-black'>Screen Repair</h4>


        </SwiperSlide>

        <SwiperSlide>
          <img src={slide5} alt="slide5" />
          <h4 className='font-bold pt-7 text-center text-black'>Camera Repair</h4>

        </SwiperSlide>

        
        <SwiperSlide>
          <img src={slide5} alt="slide5" />
          <h4 className='font-bold pt-7 text-center text-black border-black'>Mic Repair</h4>

        </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default Hero;
