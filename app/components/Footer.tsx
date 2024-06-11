// components/Footer.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG, FaFlickr } from 'react-icons/fa';
import logo from '../../public/Solheim-Technologies-Banner.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center mb-4" prefetch={false}>
              <Image src={logo} alt="Solheim Technologies Banner Logo" width={300} height={300} className="filter invert" />
            </Link>
            <p className="max-w-md text-center md:text-left">
              Since 2012, we&apos;ve helped hundreds of small businesses enhance their online presence. Our expertise spans WordPress, Google Business Profiles, SEO, Social Media Management, and more. Let us manage the technology that drives your business. Sign up for a <Link href="/free-consult"><span className='underline hover:text-blue-500'>free consultation today</span></Link>.
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <ul className="space-y-2 text-center md:text-left">
                <p className='text-white font-bold'>Company</p>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/update-payment-method">Update Payment Method</Link></li>
            </ul>
            <ul className="space-y-2 text-center md:text-left">
                <p className='text-white font-bold'>Contact</p>
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
                    1819 E. Southern Ave. D-10, Mesa, AZ 85204
                </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-t border-gray-700" />
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-white"><FaFacebookF /></a>
            <a href="#" className="text-white"><FaTwitter /></a>
            <a href="#" className="text-white"><FaLinkedinIn /></a>
            <a href="#" className="text-white"><FaGooglePlusG /></a>
            <a href="#" className="text-white"><FaFlickr /></a>
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
