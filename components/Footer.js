import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='jakarta-font flex flex-col gap-5 p-12 mx-auto md:text-xl text-lg text-[#5C738A] md:max-w-[80%]'>
        <div>
            <ul className='flex justify-between mx-8 items-center  w-full gap-8'>
                <li className='cursor-pointer hover:text-[#44494e]'>About</li>
                <li className='cursor-pointer hover:text-[#44494e]'>Contact</li>
                <li className='cursor-pointer hover:text-[#44494e]'>Privacy Policy</li>
                <li className='cursor-pointer hover:text-[#44494e]'>Terms</li>
            </ul>
        </div>
        <div>
            {/* social media icons */}
            <ul className='flex justify-center gap-4 text-2xl'>
                <li><FaXTwitter /></li>
                <li><FaInstagram /></li>
                <li><FaFacebookF /></li>
            </ul>
        </div>
        <div>
            <h1 className='text-center'>&copy; 2025 Fuel My Chai. All rights reserved.</h1>
        </div>
    </footer>
  )
}

export default Footer