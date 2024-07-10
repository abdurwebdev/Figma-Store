"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { ArrowForward } from "@mui/icons-material";
import { ArrowLeft } from "lucide-react";

export default function AccordionExpandIcon() {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  const notify2 = () =>
  {
    toast.success('Your Order has been successfully placed 🛒', {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      }); 
  }
  const notify1 = () =>
    {
      toast.success('Now Pay 💵', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        });
    }
  return (
    <>
      <div className="mt-40 p-5 h-auto lg:w-[50%]  sm:h-auto lg:flex lg:mt-10 sm:block md:block  md:h-auto ">
        <div>
        <Accordion className="lg:hidden">
            <AccordionSummary
              sx={{ backgroundColor: "#F5F5F5" }}
              expandIcon={<ArrowDownwardIcon />}
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
                      <button className="px-5 hover:bg-black hover:text-white hover:transition-colors py-3 border-2 border-black rounded-full">
                        SUBMIT
                      </button>
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
          <div>
            <Breadcrumb className="flex items-center lg:flex-col mt-10 justify-center">
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
                  <BreadcrumbLink href="/Checkout" className="text-[#0FA958]">Shipping</BreadcrumbLink>
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
                      <button onClick={notify2} className="px-5 hover:bg-black hover:text-white hover:transition-colors py-3 border-2 border-black rounded-full">
                        SUBMIT
                      </button>
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
              </div>
              {/* Shipping Information Starts */}
              <div className="w-full p-3  border mt-5 rounded-md h-80">
                <div className="flex  py-5 border-b items-center justify-between">
                    <div>
                        <h1>Contact</h1>
                        <h1>abc@gmail.com</h1>
                    </div>
                    <div>
                        <Link className="text-[#0FA958] underline" href="/Checkout">Change</Link>
                    </div>
                </div>
                <div className="flex  py-5 border-b items-center justify-between">
                    <div>
                        <h1>Contact</h1>
                        <h1>abc@gmail.com</h1>
                    </div>
                    <div>
                        <Link className="text-[#0FA958] underline" href="/Checkout">Change</Link>
                    </div>
                </div>
                <div className="flex  py-5 border-b items-center justify-between">
                    <div>
                        <h1>Contact</h1>
                        <h1>abc@gmail.com</h1>
                    </div>
                    <div>
                        <Link className="text-[#0FA958] underline" href="/Checkout">Change</Link>
                    </div>
                </div>
              </div>
              {/* Shipping Information Ends */}
              {/* Discount Card Start */}
              <div className="mt-6 ">
              <h1 className="mb-3">Discount code or gift card</h1>
              <div className="flex items-center justify-between">
                <input type="text" className="w-[90%] border rounded-md px-2 py-3" onSubmit={submitHandler} placeholder="Discount Or Gift Code" />
                <button><ArrowForward/></button>
              </div>
              </div>
              {/* Discount Card Ends */}
              {/* Payment Starts */}
              <div className="mt-8 w-full rounded-md border p-5 h-[60vh] xl:h-[70vh] lg:h-[510px] md:h-[40vh]">
                <h1 className="text-xl font-bold">Payment</h1>
                <h1 className="text-xs">All transactions are secure and encrypted.</h1>
                <div className="flex border px-10 py-5 rounded-md bg-[#F3F8F4] border-[#0FA958] mt-8 items-center justify-between">
                    <div>
                        <h1>Credit card</h1>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-4" src="https://tse2.mm.bing.net/th?id=OIP._avHCqarEhv6x7SK-DMYPgHaDA&pid=Api&P=0&h=220" alt="" />
                        <img className="w-5 h-4" src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png" alt="" />
                        <img className="w-7 h-6" src="https://cdn.icon-icons.com/icons2/1259/PNG/512/1495815267-jd16_84596.png" alt="" />
                        <button className="text-[#0FA958] px-3 py-1 border">+5</button>
                    </div>
                </div>
                <div className="mt-10 mb-5">
                    <input className="mb-5 border w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]" type="lock" placeholder="Card number" />
                    <input className="mb-5 border w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]"  placeholder="Name on card"/>
                    <input className="mb-5 border w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]" type="text"  placeholder="Expiration date (MM/ YY)"/>
                    <input className="mb-5 border w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]" type="error" placeholder="Security code" />
                </div>
              </div>
              {/* Payment Ends */}
              {/* Billing Starts */}
              <div className="mt-10">
                <h1 className="text-xl font-bold">Remember me</h1>
                <h1 className="text-xs">Select the address that matches your card or payment method.</h1>
              </div>
              <Accordion className=" border px-4 py-2 rounded-md bg-[#F3F8F4] border-[#0FA958] mt-10 items-center justify-between">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Same as shipping Address
        </AccordionSummary>
      </Accordion>
      <Accordion defaultExpanded className="mt-5 px-2 py-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Use a different billing address
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion >
              {/* Billing Ends */}
              {/* Add Phone Number Starts */}
              <div className="mt-5 "> 
                <h1 className="text-xl mb-5 font-bold">Remember me</h1>
              <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Save my information for a faster checkout
        </AccordionSummary>
        <AccordionDetails 
        sx={{backgroundColor:'#F4F4F4'}}>
          <div>
            <input className="border w-full px-2 py-2 rounded-md hover:transition-shadow hover:outline-[#0FA958]" type="text" placeholder="Enter Your Phone Number" />
          </div>
          <div className="mt-5 text-xs">
         <h1> Next time you check out here or on other stores powered by Shopify, you’ll receive a code by text message to securely purchase with Shop Pay.</h1>
         <div className="flex mt-3">
         <h1>By continuing, you agree to Shop Pay’s </h1>
         <Link className="text-[#0FA958] underline" href="#">Privacy Policy</Link>
         and
         <Link className="text-[#0FA958] underline" href="#">Terms of Service</Link>
         </div>
        
          </div>
        </AccordionDetails>
      </Accordion>
              </div>
              {/* Add Phone Number Ends */}
              {/* Final Return And Move Forward */}
              <div className="flex items-center justify-between mt-8">
                    <Link href="#" className="flex underline text-[#0FA958]"><ArrowLeft className="text-xs"/>Return to shipping</Link>
                    <button onClick={notify1} className="px-5 py-3 rounded-md bg-black text-white text-xs">Pay now</button>
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
theme="dark"
/>
               </div>
              {/* Final Return And Move Forward Ends*/}
              {/* Footer Links Start */}
                  <div className="border-t w-full py-6 mt-4 flex items-center justify-between">
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
              {/* Footer Links Ends */}
            {/* Express Check Out Ends */}
            
          </div>
          
        </div>
        
      </div>
    </>
  );
}
