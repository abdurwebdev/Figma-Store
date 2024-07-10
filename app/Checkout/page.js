"use client";
import * as React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { AiFillBackward } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AccordionExpandIcon() {
  
  const notify = () =>
  {
    toast.success("Your Order Has Beenn Successfully Placed!")
  }
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="mt-40 p-5 md:px-14 h-auto  sm:h-auto lg:flex lg:mt-10 sm:block md:block  md:h-auto ">
        <div>
        <Accordion defaultExpanded className="lg:hidden md:w-[100%]">
        <AccordionSummary
          sx={{ backgroundColor: "#F5F5F5" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Show Order Summary</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0", backgroundColor: "#FFC700" }}>
            <Typography>
            <div className="wrapper w-full h-[50vh] p-4 ">
      <div className="flex items-center justify-between">
        <div className="flex gap-x-2 items-center">
          <img
            className="w-16 h-16 rounded-xl"
            src="https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5503_1000x.jpg?v=1719341195"
            alt=""
          />
          <h1 className="font-medium ">All Smiles Nalgene</h1>
        </div>
        <div>
          <h1 className="font-extralight">Rs 17,100.00</h1>
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="w-[70%]">
          <input
            type="text"
            placeholder="Discount Code Or Gift Card"
            className="border w-full bg-[#FFFFFF] rounded-sm py-3  px-3 placeholder:text-[14px]"
            onSubmit={submitHandler}
          />
        </div>
        <div>
          <button onClick={notify} className="px-5 hover:bg-black hover:text-white hover:transition-colors py-3 border-2 border-black rounded-full">
            SUBMIT
          </button>
          <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
        </div>
      </div>
      <div className="flex mt-4 items-center  justify-between">
        <div>
          <h1>Subtotal</h1>
          <h1>Shipping</h1>
          <h1 className="mt-3 text-xl font-bold">Total</h1>
        </div>
        <div>
          <h1>Rs 17,100.00</h1>
          <h1>Rs 2,900.00</h1>
          <h1 className="mt-3 text-xl font-bold">
            <span className="text-xs font-extralight">PKR</span>{" "}
            20,000.00
          </h1>
        </div>
      </div>
    </div>
            </Typography>
        </AccordionDetails>
      </Accordion>          
      </div>
          <div>
            <Breadcrumb className="flex items-center   lg:flex-col mt-10 justify-center">
              <div>
                <h1 className="hidden lg:block text-2xl font-bold mb-4">
                  THE FIGMA STORE <br />
                </h1>
              </div>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/Cart" className="text-[#0FA958]">
                    Cart
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/Checkout">Shipping</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/Checkout">Payment</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-bold">
                    Checkout
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            {/* Express Check Out Starts */}
            <div className="flex items-center mt-5 justify-center ">
              <div>
                <div className="flex items-center justify-center">
                  <h1 className="text-xs">Express checkout</h1>
                </div>

                <div className="flex items-center justify-center gap-x-10 mt-5">
                  <Link
                    className="bg-[#ffffff] text-black border px-10 hover:transition-colors hover:bg-[#FFC700]  rounded-xl border-black  py-3"
                    href="#"
                  >
                 AmePay
                  </Link>
                  <Link
                   className="bg-[#000000] text-white border px-10 hover:transition-colors hover:bg-[#FFC700]  rounded-xl border-black  py-3"
                    href="#"
                  >
                    GoogPay
                  </Link>
                </div>
                <div class="flex mt-10 items-center justify-center w-full px-4">
                  <div class="flex-grow border-t border-gray-300"></div>
                  <span class="mx-4 text-gray-500">OR</span>
                  <div class="flex-grow border-t border-gray-300"></div>
                </div>
                <div className="flex mt-4 items-center p-5 justify-between">
                  <h1 className="text-xl font-bold">Contact</h1>
                  <Link href="#" className="underline text-xs text-[#0A8E89]">
                    Log in
                  </Link>
                </div>
                <div className="w-full mt-4 items-center">
                  <input
                    type="text"
                    placeholder="Email"
                    onSubmit={submitHandler}
                    className="border w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]"
                  />
                  <input
                    type="checkbox"
                    onSubmit={submitHandler}
                    className="appearance-none h-6 w-6 border-2 border-gray-400 rounded-md checked:bg-[#0FA958] checked:border-[#0FA958] hover:text-[#efefef] hover:outline hover:outline-2 hover:outline-[#0FA958] mt-2 cursor-pointer"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-xl font-bold">Shipping Address</h1>
                  <select className="border mt-4 w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]">
                    <option>Pakistan</option>
                    <option>China</option>
                  </select>
                  <h1 className="text-sm font-medium mt-3 mb-3">First Name</h1>
                  <input
                    type="text"
                    placeholder="First Name"
                    onSubmit={submitHandler}
                    className="border w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]"
                  />
                  <h1 className="text-sm font-medium mt-3 mb-3">Last Name</h1>
                  <input
                    type="text"
                    placeholder=""
                    onSubmit={submitHandler}
                    className="border w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]"
                  />
                  <h1 className="text-sm font-medium mt-3 mb-3">
                    Company (Optional)
                  </h1>
                  <input
                    type="text"
                    placeholder=""
                    onSubmit={submitHandler}
                    className="border w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]"
                  />
                  <h1 className="text-sm font-medium mt-3 mb-3">Address</h1>
                  <input
                    type="text"
                    placeholder=""
                    onSubmit={submitHandler}
                    className="border w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]"
                  />
                  <h1 className="text-sm font-medium mt-3 mb-3">
                    Apartment,suite,etc. (optional)
                  </h1>
                  <input
                    type="text"
                    placeholder=""
                    onSubmit={submitHandler}
                    className="border w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]"
                  />
                  <h1 className="text-sm font-medium mt-3 mb-3">City</h1>
                  <input
                    type="text"
                    placeholder=""
                    onSubmit={submitHandler}
                    className="border w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]"
                  />
                  <h1 className="text-sm font-medium mt-3 mb-3">
                    Postal Code (optional)
                  </h1>
                  <input
                    type="text"
                    placeholder=""
                    onSubmit={submitHandler}
                    className="border w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]"
                  />
                  <h1 className="text-sm font-medium mt-3 mb-3">Phone</h1>
                  <input
                    type="text"
                    placeholder=""
                    onSubmit={submitHandler}
                    className="border w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]"
                  />
                  <h1 className="text-sm font-medium mt-3 mb-3">First Name</h1>
                  <input
                    type="text"
                    placeholder=""
                    onSubmit={submitHandler}
                    className="border w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]"
                  />
                  <Link href="/Shipping">
                    <button  className="w-full rounded-lg mt-6 px-5 py-4 bg-black text-white">
                      Continue to Shipping
                    </button>
                  </Link>
                  <Link
                    href="/Checkout"
                    className="flex mt-6 text-sm underline text-[#0A8C48] items-center justify-center gap-x-3"
                  >
                    <AiFillBackward /> Return To Cart
                  </Link>
                  <div className="border-t w-full py-2 mt-4 flex items-center justify-between">
                    <Link href="#" className="text-xs underline text-[#0A8C48]">
                      Refund policy
                    </Link>
                    <Link href="#" className="text-xs underline text-[#0A8C48]">
                      Shipping policy
                    </Link>
                    <Link href="#" className="text-xs underline text-[#0A8C48]">
                      Privacy policy
                    </Link>
                    <Link href="#" className="text-xs underline text-[#0A8C48]">
                      Terms of service
                    </Link>
                  </div>
                </div>
                {/* First Flex Box Ends */}

              </div>
             
              {/* Second Flex Box Start */}

              {/* Second Flex Box Start */}
              
            </div>
            <div className="hidden lg:fixed lg:block lg:h-screen lg:w-[48%] lg:bg-[#FFC700] z-40 lg:top-10 lg:right-0 lg:mt-10">
            <div className="wrapper w-full h-[50vh] p-4 ">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-x-2 items-center">
                      <img
                        className="w-16 h-16 rounded-xl"
                        src="https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5503_1000x.jpg?v=1719341195"
                        alt=""
                      />
                      <h1 className="font-medium ">All Smiles Nalgene</h1>
                    </div>
                    <div>
                      <h1 className="font-extralight">Rs 17,100.00</h1>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <div className="w-[70%]">
                      <input
                        type="text"
                        placeholder="Discount Code Or Gift Card"
                        className="border w-full bg-[#FFFFFF] rounded-sm py-3  px-3 placeholder:text-[14px]"
                        onSubmit={submitHandler}
                      />
                    </div>
                    <div>
                      <button onClick={notify} className="px-5 hover:bg-black hover:text-white hover:transition-colors py-3 border-2 border-black rounded-full">
                        SUBMIT
                      </button>
                      <ToastContainer/>
                    </div>
                  </div>
                  <div className="flex mt-4 items-center  justify-between">
                    <div>
                      <h1>Subtotal</h1>
                      <h1>Shipping</h1>
                      <h1 className="mt-3 text-xl font-bold">Total</h1>
                    </div>
                    <div>
                      <h1>Rs 17,100.00</h1>
                      <h1>Rs 2,900.00</h1>
                      <h1 className="mt-3 text-xl font-bold">
                        <span className="text-xs font-extralight">PKR</span>{" "}
                        20,000.00
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            {/* Express Check Out Ends */}
            
          </div>
          
        </div>
        
    </>
  );
}
