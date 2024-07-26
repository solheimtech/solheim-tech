"use client";

import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const TechnologyManagement: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-[8rem] lg:pt-[0rem] z-10">
      <h1 className="text-[2.5rem] sm:text-[5rem] text-white font-bold">Technology Management</h1>
      <p className="text-white text-md font-light pt-3 text-center">Optimize your business operations with our expert technology management services</p>

      <div className="flex flex-col md:flex-row items-start justify-center p-2 md:p-[5rem] md:mb-10">
        <div className="md:w-1/2 p-4">
          <Image src="https://solheimtech.com/wp-content/uploads/2022/09/Technology-Management.jpg" alt="Technology Management" width={800} height={800} className="rounded-lg"/>
        </div>
        <div className="md:w-1/2 p-4">
          <p className="text-white text-md font-normal leading-[2rem]">
            At Solheim Technologies, we offer comprehensive technology management services designed to streamline your business operations and enhance productivity. Our team of technology experts uses the latest tools and strategies to ensure your business runs smoothly and efficiently.
          </p>
          <p className="text-white text-md font-normal leading-[2rem] mt-4">
            From IT infrastructure management and cybersecurity to software solutions and cloud services, we provide a full range of technology management services tailored to meet your unique needs. Let us help you leverage technology to achieve your business goals.
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
        <p className="text-white text-3xl font-bold pb-5">Why Choose Our Technology Management Services?</p>
        <ul className="text-white text-md font-normal leading-[2rem] list-disc list-inside">
          <li>Customized technology solutions tailored to your business</li>
          <li>Experienced team of technology professionals</li>
          <li>Proactive approach to technology management</li>
          <li>Comprehensive range of technology services</li>
          <li>Data-driven approach to measure and optimize performance</li>
        </ul>
      </div>
    </div>
  );
};

export default TechnologyManagement;
