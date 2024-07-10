"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineCrown, AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);
    const [IsOpen, setsetIsOpen] = useState(false);
    const searchBar = () =>
        {
            const elem=document.getElementById("move-down");
            if(elem)
                {
                    if(IsOpen)
                        {
                            elem.style.marginTop="60px";
                            setsetIsOpen(false);
                        }
                        else
                        {
                            elem.style.marginTop="0px";
                            setsetIsOpen(true);
                        }
                }
        }
    const show = () =>
        {
            const elem=document.getElementById("menu");
            if(elem)
                {
                    if(isOpen)
                        {
                        elem.style.opacity=0;
                        elem.style.transition="opacity 1s";
                        setisOpen(false);
                        }
                    else
                    {
                        elem.style.opacity=1;
                        elem.style.transition="opacity 1s";
                        elem.style.marginTop="95%";
                        setisOpen(true);
                    }    
                }
        }
    const submitHandler = (event) =>
    {
        event.preventDefault();
    }
    const [showCrown, setShowCrown] = useState(true);
    const toggleIcon = () => {
        setShowCrown(!showCrown);
      };
    return (
        <>
           
      <div id='menu' className='xl:hidden   z-50 w-full h-[95vh] bg-white text-black opacity-0 absolute  top-[-70%]'>
      <div className=' one flex flex-col px-8 py-24'>
         <div className='inkies text-6xl  flex flex-col gap-y-8'>
         <Link href="/Chunky"><h2>Shop</h2></Link>
         <Link href="/About"><h2>About</h2></Link>
         </div>
         <div className='flex flex-col mt-12 text-xl font-bold gap-y-10'>
             <Link href="#"><h3>FAQ's</h3></Link>
             <Link href="#"><h3>Contact Us</h3></Link>
             <Link href="#"><h3>Privacy Policy</h3></Link>
             <Link href="#"><h3>Terms of Service</h3></Link>
         </div>
      </div>
</div>
<div className='w-full h-16 bg-white  absolute top-[0%] xl:px-24 px-4'>
 <input type="text" onSubmit={submitHandler} placeholder='Search' className=' border-4 border-black placeholder-lg  placeholder-black placeholder-xl   z-50 w-full border-t-0 border-l-0 border-r-0 h-full outline-none border-b-black' />
</div>
<div id="move-down" className='w-full sm:w-full md:w-full lg:w-full xl:w-full h-20 top-0  fixed z-50  justify-between   bg-[#FFC700] overflow-hidden sm:flex sm:items-center sm:justify-between items-center  flex  xl:px-16 px-1  ml-0'>
 <div className='flex sm:gap-4 gap-1 items-center justify-center text-black font-bold'>
     <button className='hidden  xl:block px-5 hover:bg-black hover:text-white hover:transition-colors py-3 border-2 border-black rounded-full'>
         <Link href="/Chunky" >SHOP</Link>
     </button>
     <button className='hidden  hover:bg-black  hover:text-white hover:transition-colors xl:block px-5 py-3 border-2 border-black rounded-full'>
         <Link href="/About">ABOUT</Link>
     </button>
     <button onClick={show}  className='hover:bg-black   hover:text-white hover:transition-colors font-bold text-2xl px-1 py-1 md:block xl:hidden rounded-full border-2 border-black '>
         <div onClick={toggleIcon}>
         <Link href="#" >
         {showCrown ?  <AiOutlineClose /> :  <AiOutlineMenu />}
         </Link>
         </div>
     </button>
     <button onClick={searchBar} ><img className='w-7 h-7'src="https://store.figma.com/cdn/shop/t/20/assets/icon-search.static.svg?v=50573694897280823451718321267" alt="" /></button>
 </div>
 <div>
     <h1 className='font-bold  xl:text-3xl lg:text-4xl md:text-3xl text-[15px]'>THE FIGMA STORE</h1>
 </div>
 <div className='flex xl:gap-4 sm:gap-2 gap-1 items-center justify-center text-xl '>
     <Link href="/Account"><BsFillPersonFill className='xl:text-3xl text-xl'/></Link>
     <Link href="#" className='md:hidden'><CiLocationOn/></Link>
     <div className='hidden md:block border-2 px-2 py-2 rounded-full hover:bg-black hover:text-white hover:transition-colors border-black '>
         <button>
         <select className='bg-transparent outline-none sm:text-lg  '>
             <option className='text-black md:font-bold lg:font-bold xl:font-bold'>UNITED STATES</option>
             <option className='text-black '>CHINESE</option>
             <option className='text-black'>JAPANESE</option>
             <option className='text-black'>KOREAN</option>
             <option className='text-black'>FRANCE</option>
         </select>
         </button>
     </div>
     <button className='px-2 py-2 font-bold sm:px-2 sm:py-2 sm:h-12 md:w-32 mr-26 md:h-12 xl:w-32 xl:h-12 border-2 border-black rounded-full sm:flex sm:items-center sm:justify-center hover:bg-black hover:text-white hover:transition-colors text-xs  sm:text-lg md:text-lg xl:text-lg'><Link href="/Cart" >CART 0</Link></button>
 </div>
</div>
        </>
    );
}

export default Navbar;
