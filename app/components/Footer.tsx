// components/Footer.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import logo from '../../public/assets/images/Solheim-Technologies-Banner.png';
import backgroundImage from '../../public/assets/images/City-at-Dusk-BW.jpg';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-75 text-white py-8 mt-auto w-full absolute" style={{ backgroundImage: `url(${backgroundImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-70"></div> {/* Overlay */}
      <div className="container mx-auto px-4 relative z-10"> {/* Added relative z-10 to ensure content is above overlay */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" className="flex items-center mb-4" prefetch={false}>
              <Image src={logo} alt="Solheim Technologies Banner Logo" width={300} height={300} className="filter invert" loading='lazy' />
            </Link>
            <p className="max-w-md text-center md:text-left">
              Since 2012, we&apos;ve helped hundreds of small businesses enhance their online presence. Let us help manage the technology that drives your business. Sign up for a <Link href="/meeting/free-consultation" className='underline text-white hover:font-bold'>free consultation today</Link>.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <p className='text-white font-bold pb-2'>Company</p>
              <ul className="space-y-2">
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/our-work">Our Work</Link></li>
                  <li><Link href="/pricing">Pricing</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                  <li><Link href="/update-payment-method">Update Payment Method</Link></li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <p className='text-white font-bold pb-2'>Contact</p>
              <ul className="space-y-2">
                  <li className="flex items-center justify-center md:justify-start">
                      <FaEnvelope className="mr-2" />
                      <a href="mailto:hello@solheimtech.com" className="hover:underline">
                          hello@solheimtech.com
                      </a>
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                      <FaPhone className="mr-2" />
                      <a href="tel:+14808645117" className="hover:underline">
                          (480) 864-5117
                      </a>
                  </li>
                  <li className="flex items-center justify-center md:justify-start">
                      <FaMapMarkerAlt className="mr-2" />
                      1819 E. Southern Ave. Ste D-10, Mesa, AZ 85204
                  </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-t border-white" />
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
          <Link
            href="https://www.facebook.com/solheimtech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://www.instagram.com/solheimtech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://x.com/solheimtech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <SiX />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCUfRXnvKwTJbLh5Mu5_qRYw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://www.linkedin.com/company/solheimtech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaLinkedinIn />
          </Link>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4 text-center md:text-left">
            <Link href="/privacy-policy" className="text-white hover:underline font-thin text-xs">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-white hover:underline font-thin text-xs">Terms of Service</Link>
            <Link href="/website-accessibility-statement" className="text-white hover:underline font-thin text-xs">Website Accessibility Statement</Link>
          </div>
          <p className='font-bold text-center md:text-left'>© 2024 Solheim Technologies, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
