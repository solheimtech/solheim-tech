"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-black text-white py-2 px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 mb-2 md:mb-0">
        <a href="tel:+14808645117" className="text-md underline font-medium">(480) 864-5117</a>
        <span className='text-md font-medium hidden md:inline'>|</span>
        <a href="mailto:hello@solheimtech.com" className="text-md underline font-medium">hello@solheimtech.com</a>
      </div>
      
      <div className="flex-grow flex justify-center mb-2 md:mb-0">
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <SiX />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaYoutube />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mr-[1rem] items-center md:items-start">
        <Link href="/consultation" className="text-md font-medium text-center md:text-left">Free Consultation</Link>
        <span className='text-md font-medium hidden md:inline'>|</span>
        <Link href="/consultation" className="text-md font-medium text-center md:text-left">Schedule Service</Link>
        <span className='text-md font-medium hidden md:inline'>|</span>
        <Link href="/consultation" className="text-md font-medium text-center md:text-left">Remote Support</Link>
      </div>

      <button onClick={handleClose} className="text-white hover:text-gray-300 mt-2 md:mt-0 self-center md:self-auto">
        <span className="block md:hidden">Close</span>
        <span className="hidden md:block">X</span>
      </button>
    </div>
  );
};

export default Header;
