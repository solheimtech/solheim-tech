import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Website Management | Solheim Technologies",
  description: "Ensure your website runs smoothly with our expert website management services",
  openGraph: {
    title: "Website Management | Solheim Technologies",
    description: "Ensure your website runs smoothly with our expert website management services",
    url: 'https://solheimtech.com/services/website-management',
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

const WebsiteManagement: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-[8rem] lg:pt-[0rem] z-10">
      <h1 className="text-[2.5rem] sm:text-[5rem] text-white font-bold">Website Management</h1>
      <p className="text-white text-md font-light pt-3 text-center">Ensure your website runs smoothly with our expert website management services</p>

      <div className="flex flex-col md:flex-row items-start justify-center p-2 md:p-[5rem] md:mb-10">
        <div className="md:w-1/2 p-4">
          <Image src="https://solheimtech.com/wp-content/uploads/2022/09/Website-Management.jpg" alt="Website Management" width={800} height={800} className="rounded-lg"/>
        </div>
        <div className="md:w-1/2 p-4">
          <p className="text-white text-md font-normal leading-[2rem]">
            At Solheim Technologies, we offer comprehensive website management services designed to keep your website up-to-date, secure, and running smoothly. Our team of experts handles everything from regular updates and backups to security monitoring and performance optimization.
          </p>
          <p className="text-white text-md font-normal leading-[2rem] mt-4">
            From content updates and technical support to SEO and analytics, we provide a full range of website management services tailored to meet your unique needs. Let us help you maintain a professional and effective online presence.
          </p>
          <Link href="/contact" className="mt-8 px-6 py-3 rounded-lg text-black hover:border-2 bg-white border-2 border-white hover:bg-black hover:text-white hover:border-white">
            Get Started
          </Link>
        </div>
      </div>

      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <p className="text-white text-3xl font-bold pb-5">Why Choose Our Website Management Services?</p>
        <ul className="text-white text-md font-normal leading-[2rem] list-disc list-inside">
          <li>Regular updates and maintenance</li>
          <li>Experienced team of website management professionals</li>
          <li>Proactive approach to website security</li>
          <li>Comprehensive range of website management services</li>
          <li>Data-driven approach to measure and optimize performance</li>
        </ul>
      </div>
    </div>
  );
};

export default WebsiteManagement;
