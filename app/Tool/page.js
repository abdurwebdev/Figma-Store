"use client"
import React from 'react'
import  { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const page = () => {
    const [selectedImage, setSelectedImage] = useState("https://store.figma.com/cdn/shop/files/20240619_Figma_Store_4897_1000x.jpg?v=1719341711");
    const images = [
      "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_4506_600x.jpg?v=1719341872",
      "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_4966_600x.jpg?v=1719341945",
      "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5283_600x.jpg?v=1719342792",
      "https://store.figma.com/cdn/shop/files/InkblotTee_1200x.png?v=1719342423",
      "https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5087_1200x.jpg?v=1719341467",
      ];
    return (
    <div className='grid grid-cols-1  h-[1050px] mt-20 p-10 xl:grid-cols-3 xl:gap-x-7 '>
        <div className='space-y-7 xl:order-2 xl:col-span-1  '>
            <h1 className=' px-5 py-2 w-28 rounded-full bg-[#0FA958]'>LAYERS</h1>
            <h2 className='text-5xl'>Chunky Glyph Tee</h2>
            <h3 className='text-2xl'>In case you missed it (how could you have missed it?) the shapes spell Figma.</h3>
            <div className='xl:hidden block p-5 z-0 md:overflow-hidden'>
            <Swiper className='md:w-[1000px]'
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        0:
        {
          slidesPerView:1,
          spaceBetween:20
        },
        768:
        {
          slidesPerView:2,
          spaceBetween:30
        },
    
  
      }}
    >
      <SwiperSlide>
                     <img className='rounded-[50px] w-[600px] h-[500px] object-cover' src="https://store.figma.com/cdn/shop/files/6_66589f2d-bd3c-4c29-92f5-9254ece2e008_600x.png?v=1719507472" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className='rounded-[50px] w-[600px] h-[500px] object-cover' src="https://store.figma.com/cdn/shop/files/8_b3284f05-f387-4258-8f05-6a8489e73017_600x.png?v=1719507473" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className='rounded-[50px] w-[600px] h-[500px] object-cover' src="https://store.figma.com/cdn/shop/files/All_Smiles_Tee_600x.png?v=1719508324" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className='rounded-[50px] w-[600px] h-[500px] object-cover' src="https://store.figma.com/cdn/shop/files/2_de7d7d8a-e69f-4750-b838-202d3cd14f1f_600x.png?v=1719507472" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className='rounded-[50px] w-[600px] h-[500px] object-cover' src="https://store.figma.com/cdn/shop/files/5_600x.png?v=1719507472" alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img className='rounded-[50px] w-[600px] h-[500px] object-cover' src="https://store.figma.com/cdn/shop/files/16_5000099b-c0ae-40c8-92cb-216797fe6aa0_1200x.png?v=1719507473" alt="" />
      </SwiperSlide>
    </Swiper>
            </div>
            <div className='flex gap-x-3 xl:justify-start md:justify-center  items-center justify-center'>
            <button className='w-14 h-14 rounded-full border-2 border-black hover:transition-colors hover:bg-black hover:text-white'><h1>S</h1></button>
            <button className='w-14 h-14 rounded-full border-2 border-black hover:transition-colors hover:text-white hover:bg-black'><h1>M</h1></button>
            <button className='w-14 h-14 rounded-full border-2 border-black hover:transition-colors hover:text-white hover:bg-black'><h1>L</h1></button>
            <button className='w-14 h-14 rounded-full border-2 border-black hover:transition-colors hover:text-white hover:bg-black'><h1>XL</h1></button>
            <button className='w-14 h-14 rounded-full border-2 border-black hover:transition-colors hover:text-white hover:bg-black'><h1>2XL</h1></button>
            </div>
            <div className=' md:justify-center flex items-center justify-center md:flex md:items-center'>
            <button className='w-96  px-4 py-3   rounded-full border-2 border-black hover:transition-colors hover:bg-black hover:text-white '>ADD TO CART</button>
            </div>
        </div>
        <div className='mt-0 hidden h-0 xl:block xl:col-span-2 xl:order-1 md:order-1'>
      <div className='xl:flex xl:gap-16'>
        <div className='flex flex-col gap-y-4'>
          {images.map((image, index) => (
            <button key={index} className='w-[160px] h-[160px] bg-black rounded-[25px]' onClick={() => setSelectedImage(image)}>
              <img className='rounded-[25px] w-[160px] h-[160px] bg-cover' src={image} alt={`image-${index}`} />
            </button>
          ))}
        </div>
        <div>
          <img className='rounded-[100px] w-[1530px] h-[1000px] object-center ' src={selectedImage} alt="Selected" />
        </div>
      </div>
    </div>
       
    </div>
  )
}

export default page