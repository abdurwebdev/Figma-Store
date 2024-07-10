"use client"
import Link from 'next/link'
import React from 'react'

const Card = ({data}) => {
  return (
    <Link href={data.path}>
      
    <div className='card-container  h-[520px]  w-[330px] md:w-[350px] md:h-[600px] xl:h-[500px] lg:h-[580px] xl:w-[300px] relative  xl:ml-10 '>
        <div >
            <img className='image w-[330px] xl:w-[300px] md:w-[350px] md:h-[500px] h-[400px] object-cover rounded-[35px]' src={data.images} alt="" />
        </div>
        <div>
            <img className='absolute opacity-0 xl:w-[300px] md:w-[370px] md:h-[500px] hover:transition-opacity  hover:opacity-100 top-0 border-[4px] border-black  image w-[330px] h-[400px] object-cover rounded-[35px]' src={data.hoverimage} alt="" />
        </div>
        <div className="item-name mt-2 flex items-center  justify-between ">
              <h3 className='text-3xl'>{data.taggHead}</h3>
              <h3 className='text-xl'>{data.tagRuppees}</h3>   
        </div>
        <div className='flex  items-center justify-start'>
               <h1 className='text-2xl font-bold'>{data.tagHead}</h1>
        </div>
    </div>
    </Link>
  )
}

export default Card;
