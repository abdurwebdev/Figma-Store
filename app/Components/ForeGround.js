"use client"
import React from 'react'
import Circular from './Circular';
import 'swiper/css';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
const ForeGround = () => {
  return (
    <>

<div className='w-full h-[570px] px-11 flex items-center justify-center border-b-4 border-black bg-[#FFC700]'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={1}
        pagination={{ clickable: false }}
        className='swiper-container'
        breakpoints={{
          640:{
            slidesPerView:1
          },
          768:{
            slidesPerView:2,
          },
          1024:{
            slidesPerView:3,
            spaceBetween:10
          }
        }}
      >
        <SwiperSlide>
          <img className='rounded-3xl h-[400px] w-[350px] object-cover mx-auto' src="https://plus.unsplash.com/premium_photo-1708274149565-2831e10a65a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='rounded-3xl h-[400px] w-[350px] object-cover mx-auto' src="https://plus.unsplash.com/premium_photo-1708110920881-635419c3411f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='rounded-3xl h-[400px] w-[350px] object-cover mx-auto' src="https://plus.unsplash.com/premium_photo-1708276242787-387acf1bbd4b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='rounded-3xl h-[400px] w-[350px] object-cover mx-auto' src="https://images.unsplash.com/photo-1485231183945-fffde7cc051e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div className='relative flex items-center justify-start'>
      <div className='absolute top-[-130px] '>
      <Circular/>
      </div>
    </div>
    
    </>
  )
}

export default ForeGround