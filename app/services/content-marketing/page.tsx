"use client";

import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContentMarketing: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-[8rem] lg:pt-[0rem] z-10">
      <h1 className="text-[2.5rem] sm:text-[5rem] text-white font-bold">Content Marketing</h1>
      <p className="text-white text-md font-light pt-3 text-center">Effective content marketing strategies to boost your online presence</p>

      <div className="flex flex-col md:flex-row items-start justify-center p-2 md:p-[5rem] md:mb-10">
        <div className="md:w-1/2 p-4">
          <Image src="https://solheimtech.com/wp-content/uploads/2022/09/Content-Marketing.jpg" alt="Content Marketing" width={800} height={800} className="rounded-lg"/>
        </div>
        <div className="md:w-1/2 p-4">
          <p className="text-white text-md font-normal leading-[2rem]">
            At Solheim Technologies, we specialize in creating and implementing content marketing strategies that help your business stand out in the digital landscape. Our team of experts works closely with you to develop content that resonates with your target audience and drives engagement.
          </p>
          <p className="text-white text-md font-normal leading-[2rem] mt-4">
            From blog posts and social media content to email campaigns and video marketing, we offer a comprehensive range of content marketing services designed to meet your unique needs. Let us help you tell your story and connect with your audience in meaningful ways.
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
        <p className="text-white text-3xl font-bold pb-5">Why Choose Our Content Marketing Services?</p>
        <ul className="text-white text-md font-normal leading-[2rem] list-disc list-inside">
          <li>Customized strategies tailored to your business goals</li>
          <li>High-quality content that engages and converts</li>
          <li>Experienced team of content marketing professionals</li>
          <li>Data-driven approach to measure and optimize performance</li>
          <li>Comprehensive range of content marketing services</li>
        </ul>
      </div>
    </div>
  );
};

export default ContentMarketing;
