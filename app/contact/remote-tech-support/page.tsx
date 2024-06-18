"use client"
import React from "react";
import { HoverEffect } from "../../components/ui/tile-hover-effect";
import { FaWindows } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaRaspberryPi } from "react-icons/fa";


export const osVersion = [
  {
    title: "Windows",
    link: "https://stripe.com",
    icon: <FaWindows style={{ height: '100px', width: '100px' }} />,
  },
  {
    title: "Apple",
    link: "https://netflix.com",
    icon: <FaApple style={{ height: '100px', width: '100px' }} />,
  },
  {
    title: "Linux",
    link: "https://google.com",
    icon: <FaLinux style={{ height: '100px', width: '100px' }} />,
  },
  {
    title: "Android",
    link: "https://meta.com",
    icon: <IoLogoAndroid style={{ height: '100px', width: '100px' }} />,
  },
  {
    title: "IOS",
    link: "https://amazon.com",
    icon: <FaAppStoreIos style={{ height: '100px', width: '100px' }} />,
  },
  {
    title: "Raspberry Pi",
    link: "https://microsoft.com",
    icon: <FaRaspberryPi style={{ height: '100px', width: '100px' }} />,
  },
];

export default function RemoteTechSupport() {
  return (
    <div className="pt-[8rem] lg:pt-[0rem]">
      <h1 className="text-white text-center text-[2.5rem] sm:text-[5rem] font-bold mt-8 mb-2">Remote Tech Support</h1>
      <p className="text-white text-center text-md font-normal mb-4">Choose your OS below to download our remote tech support software.</p>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={osVersion} />
      </div>
    </div>

  );
}
