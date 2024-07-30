import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cloud Hosting | Solheim Technologies",
  description: "Reliable and scalable cloud hosting solutions for your business.",
  openGraph: {
    title: "Cloud Hosting | Solheim Technologies",
    description: "Reliable and scalable cloud hosting solutions for your business.",
    url: 'https://solheimtech.com/services/cloud-hosting',
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

const CloudHosting: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-[8rem] lg:pt-[0rem] z-10">
      <h1 className="text-[2.5rem] sm:text-[5rem] text-white font-bold">Cloud Hosting</h1>
      <p className="text-white text-md font-light pt-3 text-center">Reliable and scalable cloud hosting solutions for your business</p>

      <div className="flex flex-col md:flex-row items-start justify-center p-2 md:p-[5rem] md:mb-10">
        <div className="md:w-1/2 p-4">
          <Image src="https://solheimtech.com/wp-content/uploads/2022/09/Cloud-Hosting.jpg" alt="Cloud Hosting" width={800} height={800} className="rounded-lg"/>
        </div>
        <div className="md:w-1/2 p-4">
          <p className="text-white text-md font-normal leading-[2rem]">
            At Solheim Technologies, we offer top-notch cloud hosting services that ensure your business is always online and running smoothly. Our cloud hosting solutions are designed to be scalable, secure, and reliable, providing you with the flexibility to grow your business without worrying about your hosting infrastructure.
          </p>
          <p className="text-white text-md font-normal leading-[2rem] mt-4">
            Our team of experts is dedicated to providing you with the best possible service, ensuring that your website and applications are always available and performing at their best. Whether you are a small business or a large enterprise, we have the right cloud hosting solution for you.
          </p>
          <Link href="/contact" className="mt-8 px-6 py-3 rounded-lg text-black hover:border-2 bg-white border-2 border-white hover:bg-black hover:text-white hover:border-white">
              Get Started

          </Link>
        </div>
      </div>

      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <p className="text-white text-3xl font-bold pb-5">Why Choose Our Cloud Hosting?</p>
        <ul className="text-white text-md font-normal leading-[2rem] list-disc list-inside">
          <li>Scalable solutions to grow with your business</li>
          <li>High availability and reliability</li>
          <li>Enhanced security features</li>
          <li>24/7 support from our expert team</li>
          <li>Cost-effective pricing plans</li>
        </ul>
      </div>
    </div>
  );
};

export default CloudHosting;
