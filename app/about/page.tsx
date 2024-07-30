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
        <p className="text-white text-md font-light pt-3 text-center">As a tech solutions company, we are committed to your businesses tech needs</p>

        <div className="flex flex-col md:flex-row items-start justify-center p-2 md:p-[5rem] md:mb-10">
          <div className="md:w-1/2 p-4">
            <Image src="https://solheimtech.com/wp-content/uploads/2022/09/Solheim-Family-Grand-Tetons.jpeg" alt="Meteor" width={800} height={800} className="rounded-lg"/>
          </div>
          <div className="md:w-1/2 p-4">
            <p className="text-white text-md font-normal leading-[2rem] mb-8">
              David and Angela met in high school, and our relationship can be pretty much summed up as &quot;high school sweethearts&quot;. In June 2012 we were married, and our first daughter arrived in August 2014.
              While we were living with Angela&apos;s parents in 2014, we started a company called Global Web Pros, servicing websites and offering technology support. Over the years we were getting feedback that our clients had other tech companies managing their computer systems, email, and other systems, so we decided that we needed to change our name.
              In January 2020 we rebranded to Solheim Technologies, and have been loving the refreshed image.
              We are currently living in San Tan Valley, Arizona with our 2 daughters and son, and enjoy spending time together as a family. As always, we are here to help, whether that is in-person or remotely.
            </p>
            <Link href="/contact" className="px-6 py-3 rounded-lg text-black hover:border-2 bg-white border-2 border-white hover:bg-black hover:text-white hover:border-white">
              Work with us
            </Link>
          </div>
        </div>

        <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <p className="text-white text-3xl font-bold pb-5">Customer Reviews</p>

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