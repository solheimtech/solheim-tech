import { NextPage } from "next";
import React from "react";
import Image from "next/image";

import { Meteors } from "../components/ui/meteors";

const ServicesCard = () => {
  return (
    <div className="flex flex-col items-center gap-[8rem]">
      <h1 className="text-4xl text-white font-bold mb-2">Services</h1>
      <div className="flex flex-wrap justify-center gap-[8rem]">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="w-full sm:w-auto">
            <div className="w-full relative max-w-xs mx-auto">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-gray-400 to-gray-600 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-black border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-900">
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

export default function AboutUs() {
    return (
      <div>
        <div className="flex flex-col items-center justify-start h-screen pt-8">
            <h1 className="text-4xl text-white font-bold">About Us</h1>
            <div className="flex flex-col items-center justify-center h-screen">
              <Image src="/meteor.png" alt="Meteor" width={100} height={100} />
            </div>
        </div>
        <ServicesCard /> 
      </div>
    );
};
