"use client"
import React from 'react'
import { FcCollapse } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const GoToTop = () => {
    
    const goToTop = () =>
    {
        window.scrollTo({top:0,left:0,behavior:"smooth"});
        toast.info("You reached the top    🔝 ",
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            }
        )
    }
  return (
    <div>
        <button onClick={goToTop} className='p-2 fixed bottom-20 right-20 z-50 animate-bounce bg-[#FEBD01] hover:transition-colors hover:bg-white rounded-full text-[#FEBD01]'><FcCollapse/></button>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"/>
    </div>
  )
}

export default GoToTop