"use client"
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger from GSAP
import { useGSAP } from '@gsap/react';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const HeadingsComponents = () => {
  const textRef = useRef(null);

  useGSAP(gsap);

  useGSAP(
    () => {
      gsap.fromTo(
        textRef.current,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1, // Optional: smooth scrubbing effect
          },
        }
      );
    },
    { trigger: textRef.current }
  );

  return (
    <div ref={textRef}  className='box mt-36 hover:text-[#7F7F7F] hover:transition-colors flex flex-wrap px-5 py-20 xl:mt-0 md:mt-0 md:px-10  xl:px-20 xl:py-32 md:py-32 lg:py-20 gap-x-2 items-center justify-center'>
      <h2 className='text-4xl xl:text-7xl md:text-6xl'>FIGMA</h2>
      <img src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-burst.static.svg?v=34745811441670751621718321267" alt="" />
      <h2 className='text-4xl xl:text-7xl md:text-6xl'>COLLECTION</h2>
      <img src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-hourglass.static.svg?v=133626873782927219541718321267" alt="" />
      <h2 className='text-4xl xl:text-7xl md:text-6xl'>OF</h2>
      <br/>
      <button>
        <h2 className='layers text-4xl underline xl:text-7xl md:text-6xl'>LAYERS</h2>
      </button>
      <br/>
      <img src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-zag.static.svg?v=102718930007740203771718321267" alt="" />
      <h2 className='text-4xl xl:text-7xl md:text-6xl'>AND</h2>
      <img src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-dots.static.svg?v=39142388321885661271718321267" alt="" />
      <button>
        <h2 className='text-4xl underline xl:text-7xl md:text-6xl'>COMPONENTS</h2>
      </button>
      <img src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-sun.static.svg?v=163357932534391307201718321267" alt="" />
      <h2 className='text-4xl xl:text-7xl md:text-6xl'>FOR YOU</h2>
      <img src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-comet.static.svg?v=16892712658856357451718321267" alt="" />
      <h2 className='text-4xl xl:text-7xl md:text-6xl'>AND</h2>
      <img src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-snake.static.svg?v=34100567131936571961718321267" alt="" />
      <h2 className='text-4xl xl:text-7xl md:text-6xl'>YOUR</h2>
      <img src="https://store.figma.com/cdn/shop/t/20/assets/word-symbol-tri.static.svg?v=32742515804419710851718321267" alt="" />
      <h2 className='text-4xl xl:text-7xl md:text-6xl'>FRIENDS</h2>
    </div>
  )
}

export default HeadingsComponents
