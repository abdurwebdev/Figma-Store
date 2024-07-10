"use client"
import Link from 'next/link'
import React from 'react'
import Marquee from "react-fast-marquee";
import GoToTop from './GoToTop';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const container = useRef(null);
    useGSAP(
        () => {
            gsap.fromTo(container.current, { y: 50,duration:1 },{y:-5,
                scrollTrigger:
                {
                    trigger:container.current,
                    
                }
            }); 
        },
        { trigger: container.current }
    ); 
  return (
    <div  className='w-full z-50 bg-[#0FA958] h-[875px] md:h-[790px] xl:h-[470px]'>
        <div ref={container} className='grid grid-cols-1 xl:grid xl:grid-cols-4'>
            <div className='col-span-1 xl:col-span-1'>
                <div  className='box relative p-5 '>
                    <img className='w-36 h-36 md:h-60 md:w-60' src="https://static.vecteezy.com/system/resources/thumbnails/046/572/464/small/abstract-liquid-shape-organic-flat-blob-irregular-fluid-bubble-random-wavy-spots-and-curvy-element-amoeba-box-png.png" alt="" />
                    <div className='absolute top-20 left-20'>
                        <h1 className='text-xl font-bold md:text-4xl xl:text-2xl'>THE <br /> FIGMA <br /> STORE</h1>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:col-span-1 '>
                <h1 className='text-5xl font-bold mt-10 ml-5'>OBJECTS <br />
                THAT INSPIRE.</h1>
            </div>
            <div className='col-span-1 xl:col-span-2'>
                <div className='flex ml-5 mt-10  space-x-10'>
                    <div className='flex flex-col gap-y-2'>
                        <Link href="/Faq"><h2>FAQS</h2></Link>
                        <Link href="#" ><h2>Contact Us</h2></Link>
                        <Link href="#"><h2>Privacy Policy</h2></Link>
                        <Link href="#"><h2>Terms of Service</h2></Link>
                    </div>
                    <div className='col-span-1 md:w-52  '>
                        <h2>This site is powered by  Harper + Scott, a Certified B-Corporation. For more information read Harper + Scott's CSR policy.</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col gap-y-4 mt-5 md:mt-20 ml-5 xl:flex-row md:flex-row md:gap-x-3  xl:space-x-5'>
                    <Link href="#"><h2>FIGMA</h2></Link>
                    <Link href="#"><h2>TWITTER</h2></Link>
                    <Link href="#"><h2>INSTAGRAM</h2></Link>
                    <Link href="#"><h2>YOUTUBE</h2></Link>
                </div>
               
                
            </div>
            
            <div className='xl:col-span-full  overflow-hidden'>
            <div className='flex items-center justify-end mr-32 mt-1 '>
                <GoToTop/>
                </div>
            <Marquee play={1} >
                  <h2 className='mt-4 text-2xl flex items-center '>

MARVELOUSLY
<img className='h-5' src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-burst.static.svg?v=34745811441670751621718321267" alt="" />
CONSIDERED
<img className='h-5' src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-hourglass.static.svg?v=133626873782927219541718321267" alt="" />
COLLECTION
<img className='h-5' src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-zag.static.svg?v=102718930007740203771718321267" alt="" />
OF
<img className='h-5' src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-tri.static.svg?v=32742515804419710851718321267" alt="" />
OBJECTS
<img className='h-5' src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-dots.static.svg?v=39142388321885661271718321267" alt="" />
FOR
<img className='h-5' src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-sun.static.svg?v=163357932534391307201718321267" alt="" />
OUR
<img className='h-5' src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-comet.static.svg?v=16892712658856357451718321267" alt="" />
TIME
<img className='h-5' src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-comet.static.svg?v=16892712658856357451718321267" alt="" />
ON
<img className='h-5' src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-zag.static.svg?v=102718930007740203771718321267" alt="" />
FIGMA
<img className='h-5' src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-sun.static.svg?v=163357932534391307201718321267" alt="" />
MARVELOUSLY
<img className='h-5' src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-burst.static.svg?v=34745811441670751621718321267" alt="" />
CONSIDERED
<img className='h-5' src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-hourglass.static.svg?v=133626873782927219541718321267" alt="" />
COLLECTION
<img className='h-5' src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-zag.static.svg?v=102718930007740203771718321267" alt="" />
OF
<img className='h-5' src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-tri.static.svg?v=32742515804419710851718321267" alt="" />
OBJECTS
<img className='h-5' src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-dots.static.svg?v=39142388321885661271718321267" alt="" />
</h2>

            </Marquee>
            </div>
        </div>
    </div>
  )
}

export default Footer