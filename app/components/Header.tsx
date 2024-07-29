"use client"

import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Header: React.FC = () => {
  return (
    <div className="hidden lg:flex bg-black text-white py-2 px-4 flex-col lg:flex-row justify-between items-center text-center lg:text-left">
      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 mb-2 lg:mb-0 pl-[2rem]">
        <Link href="tel:+14808645117" className="text-md underline font-medium">(480) 864-5117</Link>
        <span className='text-md font-medium hidden lg:inline'>|</span>
        <Link href="mailto:hello@solheimtech.com" className="text-md underline font-medium">hello@solheimtech.com</Link>
      </div>
      
      <div className="flex-grow flex justify-center mb-2 lg:mb-0">
        <div className="flex space-x-4">
          <Link
            href="https://www.facebook.com/solheimtech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaFacebookF aria-label="Solheim Technologies on Facebook"/>
          </Link>
          <Link
            href="https://www.instagram.com/solheimtech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram aria-label="Solheim Technologies on Instagram"/>
          </Link>
          <Link
            href="https://x.com/solheimtech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <SiX aria-label="Solheim Technologies on X"/>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCUfRXnvKwTJbLh5Mu5_qRYw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaYoutube aria-label="Solheim Technologies on Youtube"/>
          </Link>
          <Link
            href="https://www.linkedin.com/company/solheimtech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaLinkedinIn aria-label="Solheim Technologies on LinkedIn"/>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 mr-[1rem] items-center lg:items-start">
        <Link href="https://solheim.tech/meeting/free-consultation" className="text-md font-medium text-center lg:text-left">Free Consultation</Link>
        <span className='text-md font-medium hidden lg:inline'>|</span>
        <Link href="/contact/project-estimate" className="text-md font-medium text-center lg:text-left">Project Estimate</Link>
        <span className='text-md font-medium hidden lg:inline'>|</span>
        <Link href="/contact/remote-tech-support" className="text-md font-medium text-center lg:text-left">Remote Tech Support</Link>
      </div>
    </div>
  );
};

export default Header;
