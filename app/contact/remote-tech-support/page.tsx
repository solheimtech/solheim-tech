"use client"
import React from "react";
import { HoverEffect } from "@/app/components/ui/tile-hover-effect";
import { FaWindows } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaRaspberryPi } from "react-icons/fa";

const osVersion = [
  {
    title: "Windows",
    link: "https://my.anydesk.com/v2/api/v2/custom-clients/downloads/public/GF7DUQLUBZUP/SolheimTechnologiesSupport.exe",
    icon: <FaWindows className="mx-auto" style={{ height: '100px', width: '100px' }} />,
  },
  {
    title: "MacOS",
    link: "https://my.anydesk.com/v2/api/v2/custom-clients/downloads/public/JDWGWGBKIQVJ/SolheimTechnologiesSupport.dmg",
    icon: <FaApple className="mx-auto" style={{ height: '100px', width: '100px' }} />,
  },
  {
    title: "Linux",
    link: "https://my.anydesk.com/v2/api/v2/custom-clients/downloads/public/AYPRNSOOHWYT/SolheimTechnologiesSupport.tar.gz",
    icon: <FaLinux className="mx-auto" style={{ height: '100px', width: '100px' }} />,
  },
  {
    title: "Android",
    link: "https://my.anydesk.com/v2/api/v2/custom-clients/downloads/public/OPFYRQIRRRVR/SolheimTechnologiesSupport.apk",
    icon: <IoLogoAndroid className="mx-auto" style={{ height: '100px', width: '100px' }} />,
  },
  {
    title: "IOS",
    link: "/meeting/free-consultation",
    icon: <FaAppStoreIos className="mx-auto" style={{ height: '100px', width: '100px' }} />,
  },
  {
    title: "Raspberry Pi",
    link: "https://my.anydesk.com/v2/api/v2/custom-clients/downloads/public/BVJ5LRQZWC70/SolheimTechnologiesSupport.tar.gz",
    icon: <FaRaspberryPi className="mx-auto" style={{ height: '100px', width: '100px' }} />,
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
