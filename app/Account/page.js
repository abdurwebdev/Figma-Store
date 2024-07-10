"use client";
import Link from 'next/link';
import React from 'react';
const Page = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    // Your form handling logic
  };

  return (
   <>
      <div className='flex items-center mt-24 flex-col p-10 lg:px-48 md:px-44 md:p-10 sm:p-32 xl:px-96  sm:flex sm:items-center sm:justify-center '>
    <h2 className='font-bold text-3xl sm:text-5xl ml-5 '>WELCOME BACK</h2>  
    <h1 className='font-medium text-sm mt-20 mb-2 sm:w-full '>Your Email</h1>
    <input className='border-b-black  py-2 sm:w-full border-b-[1.4px] border-black  hover:outline-none' type="text"onSubmit={submitHandler} placeholder='Enter your email address' /> 
    <h1 className='font-medium text-sm mt-20 mb-2 sm:w-full'>Your Password</h1>
    <input className='border-b-black  py-2 sm:w-full border-b-[1.4px] border-black  hover:outline-none'onSubmit={submitHandler} placeholder='Enter your  password' /> 
    <div className='flex items-center mt-8 justify-end text-xl'>
        <Link href="#" className='underline text-sm'><h1>Forgot password?</h1></Link>
    </div>
<Link href='/SignIn' className='w-72 mt-10 py-[14px] font-bold text-center bg-black hover:border-[3px] hover:border-black hover:bg-white hover:text-black hover:transition-colors rounded-full text-white'>SIGN IN</Link>
    <div className='flex mt-12 text-xs flex-col items-center justify-center'>
        <h1>New to The Figma Store?</h1>
    </div>
    <div className='flex items-center justify-center'>
    <Link href="/CreateAccount" className='block w-72 mt-10 text-base py-[10px] bg-white border-2  border-black rounded-full text-center hover:bg-black hover:text-white font-bold transition-colors'>CREATE AN ACCOUNT</Link>

    </div>
    
</div>
   </>
  )
}

export default Page;
