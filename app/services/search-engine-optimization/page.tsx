"use client";

import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SearchEngineOptimization: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-[8rem] lg:pt-[0rem] z-10">
      <h1 className="text-[2.5rem] sm:text-[5rem] text-white font-bold">Search Engine Optimization</h1>
      <p className="text-white text-md font-light pt-3 text-center">Boost your online visibility with our expert SEO services</p>

      <div className="flex flex-col md:flex-row items-start justify-center p-2 md:p-[5rem] md:mb-10">
        <div className="md:w-1/2 p-4">
          <Image src="https://solheimtech.com/wp-content/uploads/2022/09/SEO.jpg" alt="Search Engine Optimization" width={800} height={800} className="rounded-lg"/>
        </div>
        <div className="md:w-1/2 p-4">
          <p className="text-white text-md font-normal leading-[2rem]">
            At Solheim Technologies, we offer comprehensive SEO services designed to improve your website&apos;s search engine rankings and drive organic traffic. Our team of SEO experts uses the latest techniques and strategies to ensure your business gets the visibility it deserves.
          </p>
          <p className="text-white text-md font-normal leading-[2rem] mt-4">
            From keyword research and on-page optimization to link building and content creation, we provide a full range of SEO services tailored to meet your unique needs. Let us help you achieve higher rankings and attract more customers to your website.
          </p>
          <button 
            className="mt-8 px-6 py-3 rounded-lg text-black hover:border-2 bg-white border-2 border-white hover:bg-black hover:text-white hover:border-white"
            onClick={() => window.location.href = '/contact'}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <p className="text-white text-3xl font-bold pb-5">Why Choose Our SEO Services?</p>
        <ul className="text-white text-md font-normal leading-[2rem] list-disc list-inside">
          <li>Proven strategies to improve search engine rankings</li>
          <li>Experienced team of SEO professionals</li>
          <li>Customized SEO plans tailored to your business</li>
          <li>Comprehensive range of SEO services</li>
          <li>Data-driven approach to measure and optimize performance</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchEngineOptimization;
