"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Page = () => {
    let [increment, setIncrement] = useState(0);
    const notify = () => {
        toast.success("🛍 Welcome to CheckOut Section", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      };
    const increase = () => {
        setIncrement(prevIncrement => prevIncrement + 1);
    }

    const decrease = () => {
        setIncrement(prevIncrement => (prevIncrement > 0 ? prevIncrement - 1 : 0));
    }

    return (
        <div className='mt-32 p-5'>
            <div className='w-full border-b-4 border-black'>
                <h1 className='font-bold text-xl py-4'>3 items in Cart</h1>
            </div>
            <div className='w-full border-b border-black'>
                <h1 className='font-bold text-xl py-4'>Item</h1>
            </div>
            <div className='grid grid-cols-2 gap-y-5 lg:grid lg:grid-cols-4'>
                <div className='flex gap-x-5 mt-5 col-span-1'>
                    <img className='rounded-3xl w-32 h-32' src="https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5503_1000x.jpg?v=1719341195" alt="" />
                    <h1 className='text-xl'>All Smiles Nalgene</h1>
                </div>
                <div className='flex mt-5 items-center justify-end lg:mb-5 lg:justify-center'>
                    <button className='px-4 py-2 border-2 border-black rounded-full'>X</button>
                </div>
                <div className='flex items-center gap-x-4'>
                    <button onClick={increase} className='rounded-full px-4 py-2 border-2 border-black'>+</button>
                    {increment}
                    <button onClick={decrease} className='rounded-full px-4 py-2 border-2 border-black'>-</button>
                </div>
                <div className='col-span-1 flex items-center justify-end'>
                    <h1>Rs.5,700.00</h1>
                </div>
                <div className='flex py-4 md:py-1 lg:col-span-12 border-b md:justify-end border-black col-span-2 items-center justify-center'>
                    <h1>Rs.17,100.00</h1>
                </div>
            </div>

            {/* Check Out Start */}
            <div className='grid grid-cols-2 p-2'>
                <div>
                    <div className='w-[125px] rounded-3xl h-[224px] bg-yellow-400'>
                        <div className='flex items-center rotate-90 justify-center'>
                            <h1 className='text-4xl mt-[100px]'>NICE</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-end'>
                        <div>
                            <h1>Shipping</h1>
                            <h1>Total*</h1>
                            <h1>UPDATE CART</h1>
                        </div>
                        <div className='ml-4'>
                            <h1>Rs.17,100.00</h1>
                        </div>
                    </div>
                    <div className='flex flex-col items-end   mt-4'>
                        <div>
                        <button onClick={notify} className='mb-4 px-5 hover:bg-black hover:text-white hover:transition-colors py-3 border-2 border-black rounded-full'><Link href="/Checkout">CHECK OUT</Link></button>
                        <ToastContainer
                       ToastContainer
                       position="bottom-right"
                       autoClose={10000}
                       hideProgressBar={false}
                       newestOnTop={false}
                       closeOnClick
                       rtl={false}
                       pauseOnFocusLoss
                       draggable
                       pauseOnHover
                       theme="colored"
                       style={{ zIndex: 9999 }}/>
                        </div>
                        
                        <h1>*Taxes and shipping collected at checkout</h1>
                        <div className='flex flex-col items-end mt-2 gap-y-2'>
                            <div className='flex items-center justify-center'>
                                <input type="checkbox" />
                                <h1 className='ml-2 text-xs'>By ticking this box, you confirm your <br /> agreement to our Figma Store Terms of Sale</h1>
                            </div>
                            <div className='flex items-center'>
                                <input type="checkbox" />
                                <h1 className='ml-2 text-xs'>By ticking this box, you confirm your agreement <br /> to our Figma Store Terms of Sale</h1>
                            </div>
                            <div className='flex items-center'>
                                <input type="checkbox" />
                                <h1 className='ml-2 text-xs'>By ticking this box, you confirm your agreement to <br /> our Figma Store Terms of Sale</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Check Out Ends */}
        </div>
    )
}

export default Page;
