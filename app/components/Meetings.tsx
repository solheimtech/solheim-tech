"use client";

import React, { useEffect, FC } from "react";

interface MeetingsProps {
  title: string;
  dataSrc: string;
  cssId?: string; // Optional CSS ID
}

const Meetings: FC<MeetingsProps> = ({ title, dataSrc, cssId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-[2rem] md:pt-[3rem] lg:pt-[4rem] pb-[2rem] md:pb-[3rem] lg:pb-[4rem]">
      <div className="flex flex-col items-center justify-center text-white pb-2 md:pb-3 lg:pb-4">
        <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4rem] font-bold text-center">{title}</h1>
      </div>
      <div className="flex justify-center p-2 sm:p-4">
        <div id={cssId} className="meetings-iframe-container w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]" data-src={dataSrc}></div>
      </div>
    </div>
  );
};

export default Meetings;
