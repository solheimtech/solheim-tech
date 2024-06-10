"use client";

import { NextPage } from "next";
import React, { useRef } from "react";
import Image from "next/image";
import { Meteors } from "../components/ui/meteors";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import BusinessConsultingIcon from '../../public/briefcase.svg';
import WebsiteDevelopmentIcon from '../../public/website.svg';
import ITServicesIcon from '../../public/service.svg';
import CustomerHappinessIcon from '../../public/happy.svg';


const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const ServicesCard: React.FC = () => {
  const services = [
    {
      title: "Business Technology Consulting",
      description: "Our expert consultants provide strategic guidance to optimize your technology infrastructure, streamline operations, and drive business growth.",
      icon: BusinessConsultingIcon,
    },
    {
      title: "Website Development",
      description: "We create stunning, user-friendly websites tailored to your brand's unique needs, ensuring a seamless online presence and exceptional user experience.",
      icon: WebsiteDevelopmentIcon,
    },
    {
      title: "Computer & IT Services",
      description: "From hardware setup to software support, we offer comprehensive IT services to keep your business running smoothly and efficiently.",
      icon: ITServicesIcon,
    },
    {
      title: "Customer Happiness",
      description: "We prioritize exceptional customer service, ensuring satisfaction through personalized support and proactive solutions for all your technology needs.",
      icon: CustomerHappinessIcon,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-white font-bold">Why choose us</h1>
      <p className="text-md text-white font-light py-4 w-2/3 text-center">Thank you for considering Solheim Tech! We are a small team of 3 that are dedicated to providing high quality services at a reasonable price.</p>
      <div className="flex flex-wrap justify-center gap-[4rem] pt-[4rem]">
        {services.map((service, index) => (
        <div key={index} className="w-full sm:w-auto">
          <div className="w-full relative max-w-xs mx-auto transition-transform duration-300 h-full">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r transform scale-[0.80] rounded-full blur-3xl" />
              <div className="relative bg-transparent border border-gray-900 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-between items-start">
                <div className="h-7 w-7 rounded-full border flex items-center justify-center mb-4 border-none">
                  <Image src={service.icon} alt={`${service.title} icon`} />
                </div>

                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  {service.title}
                </h1>

                <p className="font-normal text-base text-slate-300 mb-4 relative z-50">
                  {service.description}
                </p>

                <Meteors number={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutUs: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-[8rem] z-10">
      <h1 className="text-3xl text-white font-bold">About Us</h1>
      <p className="text-white text-md font-light pt-3 text-center">As a tech solutions company, we are committed to your businesses tech needs</p>

      <div className="flex flex-col md:flex-row items-start justify-center p-2 md:p-[5rem] md:mb-10">
        <div className="md:w-1/2 p-4">
          <Image src="https://solheimtech.com/wp-content/uploads/2022/09/Solheim-Family-Grand-Tetons.jpeg" alt="Meteor" width={800} height={800} className="rounded-lg"/>
        </div>
        <div className="md:w-1/2 p-4">
          <p className="text-white text-md font-normal leading-[2rem]">
            David and Angela met in high school, and our relationship can be pretty much summed up as “high school sweethearts”. In June 2012 we were married, and our first daughter arrived in August 2014.
            While we were living with Angela’s parents in 2014, we started a company called Global Web Pros, servicing websites and offering technology support. Over the years we were getting feedback that our clients had other tech companies managing their computer systems, email, and other systems, so we decided that we needed to change our name.
            In January 2020 we rebranded to Solheim Technologies, and have been loving the refreshed image.
            We are currently living in San Tan Valley, Arizona with our 2 daughters and son, and enjoy spending time together as a family. As always, we are here to help, whether that is in-person or remotely.
          </p>
          <button 
            className="mt-8 px-6 py-3 rounded-lg text-black hover:border-2 bg-white border-2 border-white hover:bg-black hover:text-white hover:border-white"
            onClick={() => window.location.href = '/contact'}
          >
            Work with us
          </button>
        </div>
      </div>

      <div className="relative z-10 pt-[6rem]">
        <ServicesCard />
      </div>

      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <p className="text-white text-3xl font-bold pb-5">Customer Review</p>

        {/* Import Reviews */}
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default AboutUs;