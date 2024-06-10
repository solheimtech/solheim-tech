"use client";

import { NextPage } from "next";
import React, { useRef } from "react";
import { Meteors } from "../components/ui/meteors";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";


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

  return (
    <div className="flex flex-col items-center gap-[4rem]">
      <h1 className="text-3xl text-white font-bold">Services</h1>
      <div className="flex flex-wrap justify-center gap-[4rem]">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="w-full sm:w-auto">
            <div
              className="w-full relative max-w-xs mx-auto transition-transform duration-300">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r  transform scale-[0.80]  rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-transparent border border-gray-900 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>

                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  Meteors because they&apos;re cool
                </h1>

                <p className="font-normal text-base text-slate-300 mb-4 relative z-50">
                  I don&apos;t know what to write so I&apos;ll just paste something
                  cool here. One more sentence because lorem ipsum is just
                  unacceptable. Won&apos;t ChatGPT the shit out of this.
                </p>

                <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
                  Explore
                </button>

                {/* Meaty part - Meteor effect */}
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
    <div className="relative min-h-screen">
      <div className="flex flex-col items-center justify-start min-h-screen pt-8 relative z-10">
        <h1 className="text-3xl text-white font-bold">About Us</h1>
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* <Image src="/meteor.png" alt="Meteor" width={100} height={100} /> */}
        </div>
      </div>

      <div className="relative z-10">
        <ServicesCard />
      </div>

      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <p className="text-white text-3xl font-bold pb-5">Customer Review</p>
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