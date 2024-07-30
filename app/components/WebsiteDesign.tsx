"use client"
import React from "react";
import Image from "next/image";
import WebsiteDevelopmentIcon from '@/public/assets/icons/website.svg';
import SEOIcon from '@/public/assets/icons/seo.svg';
import ReportIcon from '@/public/assets/icons/report.svg';
import CustomerHappinessIcon from '@/public/assets/icons/happy.svg';
import Tilt from 'react-parallax-tilt';
import ComparisonTool from "@/app/components/ComparisonTool";

const services = [
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

const ServiceCard: React.FC<{ service: typeof services[0] }> = ({ service }) => (
  <div className="w-full sm:w-auto px-4 sm:px-0">
    <Tilt
      className="w-full relative max-w-xs mx-auto transition-transform duration-200 h-full"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.05}
      gyroscope={true}
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative bg-black px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-between items-center">
        <div className="h-7 w-7 rounded-full border flex items-center justify-center mb-4 border-none">
          <Image src={service.icon} alt={`${service.title} icon`} className="w-full h-full invert" />
        </div>
        <div className="flex flex-col items-center h-full justify-between">
          <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">
            {service.title}
          </h1>
          <p className="font-normal text-base text-slate-200 mb-4 relative z-50 text-center">
            {service.description}
          </p>
        </div>
      </div>
    </Tilt>
  </div>
);

const FeaturedServicesCard: React.FC = () => (
  <div className="flex flex-col items-center">
    <div className="flex flex-wrap justify-center gap-[2rem] sm:gap-[4rem]">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  </div>
);

const ProcessCards: React.FC = () => (
  <div className="flex flex-col items-center">
    <div className="flex flex-wrap justify-center gap-[2rem] sm:gap-[4rem]">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  </div>
);

export default function WebsiteDesign() {
  return (
    <div className="text-center pt-[8rem] lg:pt-[2rem]">
      <div className="h-[30vh] flex flex-col justify-center">
        <div>
          <h1 className="text-[2.5rem] sm:text-[5rem] font-bold text-white drop-shadow-lg">Website Design</h1>
          <p className="text-white text-[1rem] sm:text-[1.5rem] mt-4">A good website tells a compelling story... What&apos;s yours?</p>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center bg-white py-10 mt-[2rem] sm:mt-[5rem]">
        <div className="flex flex-col items-center justify-center w-full px-4 sm:px-0">
          <h2 className="text-black text-[1.5rem] sm:text-[2.5rem] font-semibold mb-6">Get Your Website Scores!</h2>
          <ComparisonTool />
        </div>
        <div id="report-container" className="w-full px-4 sm:px-0 mt-6"></div>
        <div className="flex flex-col items-center justify-center w-full px-4 sm:px-0 mt-10">
          <FeaturedServicesCard />
        </div>
      </div>
      <div className="bg-black h-auto flex flex-col items-center justify-center py-20">
        <h2 className="text-[1.5rem] sm:text-[3rem] font-bold text-white pt-[7rem]">Our Process</h2>
        <p className="text-white text-[1rem] sm:text-[1.5rem] pt-[2rem] max-w-2xl text-center">We use the same process every time for each project we manage, which creates predictable scalable results for our customers.</p>
        <div className="flex flex-col items-center justify-center h-full w-full px-4 sm:px-0 py-10">
          <ProcessCards />
        </div>
      </div>
    </div>
  );
}