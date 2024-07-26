"use client";

import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const GraphicDesign: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-[8rem] lg:pt-[0rem] z-10">
      <h1 className="text-[2.5rem] sm:text-[5rem] text-white font-bold">Graphic Design</h1>
      <p className="text-white text-md font-light pt-3 text-center">Creative and impactful graphic design solutions for your business</p>

      <div className="flex flex-col md:flex-row items-start justify-center p-2 md:p-[5rem] md:mb-10">
        <div className="md:w-1/2 p-4">
          <Image src="https://solheimtech.com/wp-content/uploads/2022/09/Graphic-Design.jpg" alt="Graphic Design" width={800} height={800} className="rounded-lg"/>
        </div>
        <div className="md:w-1/2 p-4">
          <p className="text-white text-md font-normal leading-[2rem]">
            At Solheim Technologies, we offer top-notch graphic design services that help your business stand out. Our team of creative professionals is dedicated to delivering visually stunning designs that effectively communicate your brand message.
          </p>
          <p className="text-white text-md font-normal leading-[2rem] mt-4">
            From logos and branding to marketing materials and web design, we provide a comprehensive range of graphic design services tailored to meet your unique needs. Let us help you create a strong visual identity that resonates with your audience.
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
        <p className="text-white text-3xl font-bold pb-5">Why Choose Our Graphic Design Services?</p>
        <ul className="text-white text-md font-normal leading-[2rem] list-disc list-inside">
          <li>Creative and innovative design solutions</li>
          <li>Experienced team of graphic design professionals</li>
          <li>Customized designs tailored to your brand</li>
          <li>High-quality and impactful visuals</li>
          <li>Comprehensive range of graphic design services</li>
        </ul>
      </div>
    </div>
  );
};

export default GraphicDesign;
