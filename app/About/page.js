"use client"
import React from 'react'
import Circular from '../Components/Circular'
import Link from 'next/link'

const page = () => {
  return (
    <div>
    <div className='mt-20 px-0  w-full h-auto flex flex-col md:flex-row items-center justify-center'>
      <div className='flex items-center justify-center mt-10'>
            <svg viewBox="0 0 100 100" className="w-96 sm:w-[650px] sm:h-[650px] h-96 md:h-96 md:w-96  xl:w-[700px] xl:h-[700px] ">
        <defs>
          <clipPath id="pentagon-clip" className='border-2 border-black'>
            <polygon points="50,0 100,38 82,100 18,100 0,38"/>
          </clipPath>
        </defs>
        <image 
          href="https://images.unsplash.com/photo-1630952588640-0204d5d48021?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          width="100" 
          height="100" 
          clipPath="url(#pentagon-clip)" 
          preserveAspectRatio="xMidYMid slice"
          className='border-2 border-black'
        />
      </svg>
            </div>
            <div className='px-5 mt-10 md:w-96'>
                <h2 className='text-4xl'>About</h2>
                <h1 className='font-medium text-xl mt-5 md:text-2xl'>Welcome to the Figma Store, a collection of Figma apparel (layers) and accessories (components) designed for our community.</h1>
            </div>
        </div>
        <div className='relative w-full h-60'>
            <div className='absolute top-[-10%] left-[20%]'>
            <Circular/>
            </div>
    </div>
    <div className='flex flex-col p-10 md:flex-row md:gap-x-6  '>
        <div>
            <h2 className='text-4xl md:mt-7'>100% OF PROCEEDS ARE DONATED</h2>
        </div>
        <div>
            <h1 className='font-medium text-xl mt-5 md:text-2xl md:w-96'>Any and all profits we generate from the store will be used to purchase carbon removal credits via reforestation from TIST (The International Small Group and Tree Planting Program). TIST is an innovative time-tested reforestation program that supports subsistence farmers in Kenya, Uganda, and Tanzania to tackle sustainable development and climate change through education and tree planting.</h1>
            <Link href="#"><h1 className='mt-20 font-bold text-3xl'>Learn more about TIST ↗</h1></Link>
        </div>
    </div>
   <div/>
   {/* Faq Section Start */}
   <div className='flex-col flex sm:flex-row p-10  w-full h-auto '>
    <div className='w-[85%] h-[0vh] '>
      <h1 className='text-4xl '>FAQS</h1>
    </div>
    <div className='w-[85%] h-auto '>
      <div className='w-full h-14 mt-10 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0  flex gap-x-2 items-center'>
        <img className='w-10 h-5' src="https://store.figma.com/cdn/shop/files/Rectangle_12_1000x.png?v=1635541659" alt="" />
         <h1 className='font-bold text-small'>Where do you ship?</h1>
      </div>
      <div className='w-full h-14  '>
        <h1 className='text-xl'>Our sizing is unisex. For a more tailored fit, we recommend that you size down. </h1>
      </div>
      <div className='w-full h-14 mt-10  flex gap-x-2 items-center'>
        <img className='w-10 h-5' src="https://store.figma.com/cdn/shop/files/Union_1000x.png?v=1635541659" alt="" />
         <h1 className='font-bold text-small'>Where do you ship?</h1>
      </div>
      <div className='w-full h-14  '>
        <h1 className='text-xl'>Our sizing is unisex. For a more tailored fit, we recommend that you size down. </h1>
      </div>
      <div className='flex-col mt-20'>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
      </div>
      <h1 className='text-xl mt-5'>We'll be working with our vendors to expand warehousing and shipping operations so that we can bring The Figma Store to more countries in the future. Stay tuned for updates and thank you for your understanding!</h1>
      <div className='flex flex-col gap-y-5'>
      <div className='w-full h-14 mt-10 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0  flex gap-x-2 items-center'>
        <img className='w-10 h-5' src="https://store.figma.com/cdn/shop/files/Vector_6_1_1000x.png?v=1635541659" alt="" />
         <h1 className='font-bold text-small'>Where do you ship?</h1>
      </div>
      <div className='w-full h-14 '>
        <h1 className='text-xl'>Our sizing is unisex. For a more tailored fit, we recommend that you size down. </h1>
      </div>
      <div className='w-full h-14 mt-10 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0  flex gap-x-2 items-center'>
        <img className='w-10 h-5' src="https://store.figma.com/cdn/shop/files/Rectangle_16_1000x.png?v=1635541659" alt="" />
         <h1 className='font-bold text-small'>Where do you ship?</h1>
      </div>
      <div className='w-full h-14 '>
        <h1 className='text-xl'>Our sizing is unisex. For a more tailored fit, we recommend that you size down. </h1>
      </div>
      <div className='w-full h-14 mt-10 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0  flex gap-x-2 items-center'>
        <img className='w-10 h-5' src="https://store.figma.com/cdn/shop/files/Group_51_1000x.png?v=1635541659" alt="" />
         <h1 className='font-bold text-small'>Where do you ship?</h1>
      </div>
      <div className='w-full h-14 '>
        <h1 className='text-xl'>Our sizing is unisex. For a more tailored fit, we recommend that you size down. </h1>
      </div>
      <div className='w-full h-14 mt-10 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0  flex gap-x-2 items-center'>
        <img className='w-10 h-5' src="https://store.figma.com/cdn/shop/files/red-wave_1000x.png?v=1635541659" alt="" />
         <h1 className='font-bold text-small'>Where do you ship?</h1>
      </div>
      <div className='w-full h-14 '>
        <h1 className='text-xl'>Our sizing is unisex. For a more tailored fit, we recommend that you size down. </h1>
      </div>
      </div>
    </div>
   </div>
   {/* Faq Section Ends */}
   {/* Customer Care Starts */}
   <div className='flex-col flex sm:flex-row p-10  w-full h-auto '>
    <div className='w-[85%] h-[0vh] '>
      <h1 className='text-4xl '>FAQS</h1>
    </div>
    <div className='w-[85%] h-auto '>
      <div className='w-full h-14 mt-10 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0  flex gap-x-2 items-center'>
        <img className='w-10 h-5' src="https://store.figma.com/cdn/shop/files/Rectangle_12_1000x.png?v=1635541659" alt="" />
         <h1 className='font-bold text-small'>Where do you ship?</h1>
      </div>
      <div className='w-full h-14 '>
        <h1 className='text-xl'>Our sizing is unisex. For a more tailored fit, we recommend that you size down. </h1>
      </div>
      <div className='w-full h-14 mt-10  flex gap-x-2 items-center'>
        <img className='w-10 h-5' src="https://store.figma.com/cdn/shop/files/red-wave_1000x.png?v=1635541659" alt="" />
         <h1 className='font-bold text-small'>Where do you ship?</h1>
      </div>
      <div className='w-full h-14  '>
        <h1 className='text-xl'>Our sizing is unisex. For a more tailored fit, we recommend that you size down. </h1>
      </div>
      <div className='flex-col mt-20'>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
            <h1 className='text-xl'>Pakistan</h1>
      </div>
      <h1 className='text-xl mt-5'>We'll be working with our vendors to expand warehousing and shipping operations so that we can bring The Figma Store to more countries in the future. Stay tuned for updates and thank you for your understanding!</h1>
      <div className='flex flex-col gap-y-5'>
      <div className='w-full h-14 mt-10 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0  flex gap-x-2 items-center'>
        <img className='w-10 h-5' src="https://store.figma.com/cdn/shop/files/Group_51_1000x.png?v=1635541659" alt="" />
         <h1 className='font-bold text-small'>Where do you ship?</h1>
      </div>
      <div className='w-full h-14  '>
        <h1 className='text-xl'>Our sizing is unisex. For a more tailored fit, we recommend that you size down. </h1>
      </div>
      <div className='w-full h-14 mt-10 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0  flex gap-x-2 items-center'>
        <img className='w-10 h-5' src="https://store.figma.com/cdn/shop/files/Rectangle_16_1000x.png?v=1635541659" alt="" />
         <h1 className='font-bold text-small'>Where do you ship?</h1>
      </div>
      <div className='w-full h-14 '>
        <h1 className='text-xl'>Our sizing is unisex. For a more tailored fit, we recommend that you size down. </h1>
      </div>
      <div className='w-full h-14 mt-10 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 flex gap-x-2 items-center'>
        <img className='w-10 h-5' src="https://store.figma.com/cdn/shop/files/Vector_6_1_1000x.png?v=1635541659" alt="" />
         <h1 className='font-bold text-small'>Where do you ship?</h1>
      </div>
      <div className='w-full h-14 '>
        <h1 className='text-xl'>Our sizing is unisex. For a more tailored fit, we recommend that you size down. </h1>
      </div>
      <div className='w-full h-14 mt-10 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0  flex gap-x-2 items-center'>
        <img className='w-10 h-5' src="https://store.figma.com/cdn/shop/files/Union_1000x.png?v=1635541659" alt="" />
         <h1 className='font-bold text-small'>Where do you ship?</h1>
      </div>
      <div className='w-full h-14 mb-10 '>
        <h1 className='text-xl'>Our sizing is unisex. For a more tailored fit, we recommend that you size down. </h1>
      </div>
      </div>
    </div>
   </div>
   {/* Customer Care Ends */}
   </div>
  )
}

export default page