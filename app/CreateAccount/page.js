"use client"
import Link from 'next/link';
import React from 'react'

const page = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    // Your form handling logic
  };
  return (
    <div>
       <div className='flex mt-24 flex-col p-10 sm:p-32 xl:px-96  sm:flex sm:items-center items-start justify-center sm:justify-center '>
            <h2 className='font-bold text-2xl ml-4 sm:text-3xl md:text-4xl xl:text-4xl'>CREATE AN ACCOUNT</h2>
            <h1 className='font-medium text-sm mt-20 mb-2 sm:w-full '>First Name</h1>
            <input className='border-b-black  py-2 sm:w-full border-b-[1.4px] border-black  hover:outline-none' type="text"onSubmit={submitHandler} placeholder='Enter your first name' /> 
            <h1 className='font-medium text-sm mt-20 mb-2 sm:w-full '>Last Name</h1>
            <input className='border-b-black  py-2 sm:w-full border-b-[1.4px] border-black  hover:outline-none' type="text"onSubmit={submitHandler} placeholder='Enter your last name' /> 
            <h1 className='font-medium text-sm mt-20 mb-2 sm:w-full '>Email</h1>
            <input className='border-b-black  py-2 sm:w-full border-b-[1.4px] border-black  hover:outline-none' type="text"onSubmit={submitHandler} placeholder='Enter your email address' /> 
            <h1 className='font-medium text-sm mt-20 mb-2 sm:w-full '>Password</h1>
            <input className='border-b-black  py-2 sm:w-full border-b-[1.4px] border-black  hover:outline-none' type="text"onSubmit={submitHandler} placeholder='Enter your password' /> 
            
     
            <Link href="/CreatedAccount" className='block w-72 mt-10 text-base py-[10px] bg-white border-2 border-black rounded-full text-center hover:bg-black hover:text-white font-bold transition-colors'>CREATE ACCOUNT</Link>

            </div>
    </div>
  )
}

export default page