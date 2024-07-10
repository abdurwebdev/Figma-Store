"use client"
import React from 'react';
import { AiOutlineWechat } from 'react-icons/ai';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChatBot = () => {
    const notify = () => {
        toast.error('Chatbot will be made Soon!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <div>
            <button
                onClick={notify}
                className='fixed z-50 bottom-5 right-5 text-3xl p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700'
            >
                <AiOutlineWechat />
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
                theme="dark"
                transition={Bounce}
            />
        </div>
    );
}

export default ChatBot;
