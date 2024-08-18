"use client"

import React from "react";
import Image from "next/image";
import WebsiteDevelopmentIcon from '../../public/assets/icons/website.svg';
import SEOIcon from '../../public/assets/icons/seo.svg';
import ReportIcon from '../../public/assets/icons/report.svg';
import CustomerHappinessIcon from '../../public/assets/icons/happy.svg';
import Tilt from 'react-parallax-tilt';
import { MdOutlineWeb } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { CiMobile3 } from "react-icons/ci";
import CallToAction from "@/app/components/CallToAction";
const ServiceCard: React.FC<{ service: any }> = ({ service }) => {
  return (
    <div className="w-full sm:w-auto px-4 sm:px-0">
      <Tilt
        className="w-full relative max-w-xs mx-auto transition-transform duration-200 h-full"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.05}
        gyroscope={true}
      >
        <div 
          className="absolute inset-0 h-full w-full bg-gradient-to-r transform scale-[0.80] rounded-full blur-3xl"
        />
        <div 
          className="relative bg-white px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-between items-center"
        >
          <div className="h-7 w-7 rounded-full border flex items-center justify-center mb-4 border-none">
            <Image src={service.icon} alt={`${service.title} icon`} />
          </div>

          <div className="flex flex-col items-center h-full justify-between">
            <h1 className="font-bold text-xl text-black mb-4 relative z-50 text-center">
              {service.title}
            </h1>

            <p className="font-normal text-base text-slate-900 mb-4 relative z-50 text-center">
              {service.description}
            </p>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const FeaturedServicesCard: React.FC = () => {
  const featuredServices = [
    {
      title: "Responsive Web Design",
      description: "Websites need to look great on desktops, smartphones, and tablets. At Solheim Technologies, we ensure our clients' websites look stunning on all devices.",
      icon: WebsiteDevelopmentIcon,
    },
    {
      title: "Search Engine Optimization",
      description: "Once your website looks great, it needs to be found online. With Search Engine Optimization (SEO), your newly designed website gets the traffic it deserves by effectively using keywords and tags.",
      icon: SEOIcon,
    },
    {
      title: "Monthly Reporting",
      description: "Receive monthly reports detailing your users' activities on your site, including pages visited, duration on each page, number of pages per visit, and much more.",
      icon: ReportIcon,
    },
    {
      title: "Customer Happiness",
      description: "We prioritize exceptional customer service, ensuring satisfaction through personalized support and proactive solutions for all your technology needs.",
      icon: CustomerHappinessIcon,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[2.5rem] sm:text-[5rem] text-white font-bold text-center">Small Business Technology Services</h1>
      <p className="text-md text-white font-light w-full sm:w-2/3 text-center">Take a look and see how we can help your business today.</p>
      <div className="flex flex-wrap justify-center gap-[2rem] sm:gap-[4rem] pt-[2rem] sm:pt-[4rem]">
        {featuredServices.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

const services = [
  {
    title: "Web Design",
    description: "Professional web design services to create stunning and responsive websites.",
    icon: <MdOutlineWeb style={{ height: '25px', width: '25px' }} />,
  },
  {
    title: "Business Tech Consulting",
    description: "Expert consulting services to help your business leverage technology effectively.",
    icon: <FaRegLightbulb style={{ height: '25px', width: '25px' }} />,
  },
  {
    title: "Search Engine Optimization",
    description: "Improve your website's visibility and ranking on search engines.",
    icon: <FaChartLine style={{ height: '25px', width: '25px' }} />,
  },
  {
    title: "Content Strategy",
    description: "Develop a comprehensive content strategy to engage your audience.",
    icon: <FaRegNewspaper style={{ height: '25px', width: '25px' }} />,
  },
  {
    title: "Information Architecture",
    description: "Organize and structure your website's content for optimal user experience.",
    icon: <HiOutlineInformationCircle style={{ height: '25px', width: '25px' }} />,
  },
  {
    title: "Mobile App Development",
    description: "Create high-quality mobile applications for iOS and Android platforms.",
    icon: <CiMobile3 style={{ height: '25px', width: '25px' }} />,
  },
];

export default function Services() {
  return (
    <div className="pt-[6rem] lg:pt-[0rem]">
      <div className="relative z-10 pt-[8rem] lg:pt-[0rem] pb-[5rem] min-h-[90vh] flex items-center justify-center px-4 sm:px-0">
        <FeaturedServicesCard />
      </div>

      <div className="mx-auto px-4 sm:px-[4rem] h-auto lg:h-[80vh] bg-white pt-[3rem] pb-[3rem] flex flex-col lg:flex-row items-center justify-center">
        <div className="text-center">
          <h2 className="text-[2.5rem] sm:text-[5rem] text-black font-bold">Our Expertise</h2>
          <p className="text-black font-light pb-[2rem] w-full sm:w-[80%] mx-auto">We help business owners get the technical stuff out of the way, so that they can focus on the revenue generating actions their company needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-transparent border border-black p-6 rounded-lg shadow-md flex items-center">
              <div className="h-12 w-12 mr-4">
                {React.cloneElement(service.icon, { style: { ...service.icon.props.style, color: 'black' } })}
              </div>
              <div>
                <h2 className="text-lg text-black font-bold mb-2">{service.title}</h2>
                <p className="text-gray-800 font-light">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CallToAction
        title="Ready to get started?"
        description="Contact us today to learn more about our services and pricing."
        buttonText="Contact Us"
        buttonLink="/meeting/free-consultation"
      />  
    </div>
  );
}
