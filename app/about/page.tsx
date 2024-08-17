import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import Link from "next/link";

export const metadata = {
  title: "About Solheim Technologies",
  description: "Learn more about Solheim Technologies, our mission, and our team.",
  openGraph: {
    title: "About Us | Solheim Technologies",
    description: "Learn more about Solheim Technologies, our mission, and our team.",
    url: 'https://solheimtech.com/about',
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

const testimonials = [
  {
    description:
      "These guys are eager and enthusiastic about solving your problem. They have a long term view for the company and to that end they would rather have you as a long term customer rather than a cash grab, shoddy work, see-ya-bye one time customer. These guys are honest and freely give information in person or over the phone. Try them and determine if you too are happy to have found an honest and trustworthy partner to help with your hardware/software or online difficulties. I know I have.",
    name: "William Lax",
    rating: 5,
  },
  {
    description:
      "I can't say enough about the service I received from David at Solheim Technologies. In 24 hours they were able to create and get a live version of my website completed. This included adding a calendar and payment system. On top of that, I received training on how to use these systems. If you are looking for a company that has a customer-centric approach to its service, look no further. Thank you David and team for your amazing customer service!",
    name: "SUZI MURPHY",
    rating: 5,
  },
  {
    description:
      "This company is very prompt and very experienced at Solheim Technologies. I have used their services on several occasions and have been very happy with the service they provide. I always have a smile on my face when they finish. Great company if you ever need your computer checked out. They will even come to your home. So Happy.",
    name: "Lorna Oldham",
    rating: 5,
  },
  {
    description:
      "I consulted with David concerning a website for my soap making company and not only was he knowledgeable about every aspect of webpage design and how to best set up my company, but he gave me fantastic advice that actually pointed me in a different direction. This kind of integrity is not easy to come by! It really was all based on my budget, but I can assure you and him (thanks David) that when I'm ready to take the next step, Solheim Technologies is who I will be turning to for my website! Outstanding!!",
    name: "Keith Taylor",
    rating: 5,
  },
  {
    description:
      "It was a pleasure to work with David and his team to develop our company's website. He was very responsive to all of our needs, ideas, and suggestions, and we walked away at the end with a great result!",
    name: "David Beker",
    rating: 5,
  },
  {
    description:
      "Solheim Technologies have done a great job on my website. Anytime I've wanted to add or change something they have been very prompt. Our business has increased with their help! I'd highly recommend them.",
    name: "Dan Christman",
    rating: 5,
  },
];

const AboutUs: NextPage = () => {
  return (
      <div className="flex flex-col items-center justify-start pt-[8rem] lg:pt-[0rem] z-10">
        <h1 className="text-[2.5rem] sm:text-[5rem] text-white font-bold">About Us</h1>
        <p className="text-white text-md font-light pt-3 text-center">Our family owned business is here to help you with your website and technology needs.</p>

        <div className="flex flex-col md:flex-row items-start justify-center p-2 md:p-[5rem] md:mb-10">
          <div className="md:w-1/2 p-4">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/assets/images/solheimfamily2024.jpg"
                alt="Solheim Family 2024"
                width={800}
                height={800}
                className="transition-all duration-300 filter grayscale hover:filter-none"
              />
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <p className="text-white text-md font-normal leading-[2rem] mb-8">
              Angela and I go way back to high school - you could call us high school sweethearts. In 2012, I took the plunge and started Aequilibrium Industries, offering website and tech management for small businesses. That same year, we tied the knot, and two years later, our family grew with the arrival of our first daughter.</p>
            <p className="text-white text-md font-normal leading-[2rem] mb-8">
              While crashing at Angela&apos;s parents&apos; place in 2014, we decided to shake things up. We rebranded to Global Web Pros, focusing on website services and tech support. As time went on, we noticed our clients were juggling multiple tech companies for different needs. That got us thinking - why not offer it all under one roof?
            </p>
            <p className="text-white text-md font-normal leading-[2rem] mb-8">
              Fast forward to 2020, and we rebranded again to Solheim Technologies. We&apos;re loving our fresh new look and expanded services. These days, you&apos;ll find us in Mesa, Arizona, with our two daughters and son, soaking up family time whenever we can. Whether you need help in person or from afar, we&apos;re always here, ready to tackle your tech challenges.
            </p>
            <Link href="/contact" className="px-6 py-3 rounded-lg text-black hover:border-2 bg-white border-2 border-white hover:bg-black hover:text-white hover:border-white">
              Work with us
            </Link>
          </div>
        </div>

        <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <h2 className="text-white text-[2rem] sm:text-[4rem] font-bold pb-5">Customer Reviews</h2>

          {/* Import Reviews */}
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="flex flex-col items-center justify-center py-16 bg-black bg-opacity-50 w-full">
          <h2 className="text-white text-[2rem] sm:text-[3rem] font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-white text-md font-light mb-8 text-center max-w-2xl px-4">
            Take the first step towards optimizing your business technology. Schedule a free consultation with our experts today.
          </p>
          <Link href="/meeting/free-consultation" className="px-6 py-3 rounded-lg text-black hover:border-2 bg-white border-2 border-white hover:bg-black hover:text-white hover:border-white transition duration-300">
            Book Your Free Consultation
          </Link>
        </div>
      </div>
  );
};

export default AboutUs;