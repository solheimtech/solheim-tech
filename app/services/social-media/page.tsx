import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Social Media Marketing | Solheim Technologies",
  description: "Enhance your online presence with our expert social media marketing services.",
  openGraph: {
    title: "Social Media Marketing | Solheim Technologies",
    description: "Enhance your online presence with our expert social media marketing services.",
    url: 'https://solheimtech.com/services/social-media',
    images: [
      {
        url: 'https://solheimtech.com/assets/images/ST-Icon.jpg',
        width: 600,
        height: 600,
        alt: 'Solheim Technologies Logo',
      },
    ],
  },
};

const SocialMedia: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-[8rem] lg:pt-[0rem] z-10">
      <h1 className="text-[2.5rem] sm:text-[5rem] text-white font-bold">Social Media Marketing</h1>
      <p className="text-white text-md font-light pt-3 text-center">Enhance your online presence with our expert social media marketing services</p>

      <div className="flex flex-col md:flex-row items-start justify-center p-2 md:p-[5rem] md:mb-10">
        <div className="md:w-1/2 p-4">
          <Image src="https://solheimtech.com/wp-content/uploads/2022/09/Social-Media-Marketing.jpg" alt="Social Media Marketing" width={800} height={800} className="rounded-lg"/>
        </div>
        <div className="md:w-1/2 p-4">
          <p className="text-white text-md font-normal leading-[2rem]">
            At Solheim Technologies, we offer comprehensive social media marketing services designed to boost your brand&apos;s online presence and engage with your audience. Our team of social media experts uses the latest strategies and tools to create impactful campaigns that drive results.
          </p>
          <p className="text-white text-md font-normal leading-[2rem] mt-4">
            From content creation and scheduling to analytics and reporting, we provide a full range of social media marketing services tailored to meet your unique needs. Let us help you build a strong social media presence that resonates with your audience.
          </p>
          <Link href="/contact" className="mt-8 px-6 py-3 rounded-lg text-black hover:border-2 bg-white border-2 border-white hover:bg-black hover:text-white hover:border-white">
            Get Started
          </Link>
        </div>
      </div>

      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <p className="text-white text-3xl font-bold pb-5">Why Choose Our Social Media Marketing Services?</p>
        <ul className="text-white text-md font-normal leading-[2rem] list-disc list-inside">
          <li>Customized social media strategies</li>
          <li>Experienced team of social media professionals</li>
          <li>Engaging and high-quality content</li>
          <li>Comprehensive range of social media services</li>
          <li>Data-driven approach to measure and optimize performance</li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMedia;
