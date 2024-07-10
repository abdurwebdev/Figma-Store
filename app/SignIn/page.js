"use client"
import Link from 'next/link';
import { FcOk } from "react-icons/fc";
import { FcDisclaimer } from "react-icons/fc";
const page = () =>
{
    const submitHandler = (e) =>
        {
            e.preventDefault();
        }
    return (
    <div className='flex mt-24 flex-col p-10 md:py-10 sm:p-32 xl:px-96  sm:flex sm:items-center sm:justify-center '>
    <h2 className='font-bold text-4xl w-52 md:w-96'>WELCOME BACK</h2>
    <div className='flex gap-x-1 text-2xl  items-center mt-16 justify-start w-full'>
        <FcOk/>
        <h1 className='font-bold text-lg w-full'>Please Adjust the following:</h1>
    </div>
    <div className='flex items-center justify-start w-full mt-7 text-2xl gap-x-2 '>
               <FcDisclaimer/> <h1 className='flex items-center text-lg'>Incorrect email or password.</h1>
    </div>
    
    <h1 className='font-medium text-sm mt-20 mb-2 sm:w-full '>Your Email</h1>
    <input className='border-b-black  py-2 sm:w-full border-b-[1.4px] border-black  hover:outline-none' type="text"onSubmit={submitHandler} placeholder='Enter your email address' /> 
    <h1 className='font-medium text-sm mt-20 mb-2 sm:w-full '>Your Password</h1>
    <input className='border-b-black  py-2 sm:w-full border-b-[1.4px] border-black  hover:outline-none' type="text"onSubmit={submitHandler} placeholder='Enter your  password' /> 
    <div className='flex items-center mt-8 justify-end text-xl'>
        <Link href="#" className='underline text-xs'><h1>Forgot password?</h1></Link>
    </div>
<Link href='/SignIn' className='w-full mt-10 py-[14px] font-bold text-center bg-black hover:border-[3px] hover:border-black hover:bg-white hover:text-black hover:transition-colors rounded-full text-white'>SIGN IN</Link>
    <div className='flex mt-12 flex-col items-center justify-center'>
        <h1 className='text-base'>New to The Figma Store?</h1>
    </div>
    <div className='flex items-center justify-center'>
    <Link href="/Account" className='block w-72 mt-10  py-[10px] bg-white border-2 border-black rounded-full text-center hover:bg-black hover:text-white font-bold text-base transition-colors'>CREATE AN ACCOUNT</Link>

    </div>
    
</div>
    )
}
export default page;