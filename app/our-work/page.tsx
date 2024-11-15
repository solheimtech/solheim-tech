"use client"

import React, { useEffect, useState, useMemo, useRef, useCallback } from "react";
import WorkDisplayCard from "@/app/components/ui/work-display-card";
import { useWebsiteContents } from "@/app/contents/WebsiteContents";
import { useLogoContents } from "@/app/contents/LogoContents";
import { usePhotoContents } from "@/app/contents/PhotoContents";
import { useVideoContents } from "@/app/contents/VideoContents";
import CountUp from 'react-countup';
import CallToAction from "@/app/components/CallToAction";

const OurWork = () => {
  const websiteContents = useWebsiteContents().context;
  const logoContents = useLogoContents().context;
  const photoContents = usePhotoContents().context;
  const videoContents = useVideoContents().context;
 
  const firstFourWebsiteContents = websiteContents.slice(0, 4);
  const firstFourLogoContents = logoContents.slice(0, 4);
  const firstFourPhotoContents = photoContents.slice(0, 4);
  const firstFourVideoContents = videoContents.slice(0, 4);

  const projects = useMemo(() => [
    {
      slug: "websites",
      preview: firstFourWebsiteContents.length > 0 ? firstFourWebsiteContents.map((content: any) => content.src).filter((videos: any): videos is string => !!videos) : [],
      title: "Websites",
    },
    {
      slug: "logos",
      preview: firstFourLogoContents.length > 0 ? firstFourLogoContents.map((content: any) => content.images[0].src).filter((images: any): images is string => !!images) : [],
      title: "Logos",
    },
    {
      slug: "videos",
      preview: firstFourVideoContents.length > 0 ? firstFourVideoContents.map((content: any) => content.src).filter((src: any): src is string => !!src) : [],
      title: "Videos",
    },
  ], [firstFourWebsiteContents, firstFourVideoContents, firstFourLogoContents]);

  const completedWork = useMemo(() => [
    {
      title: "Monthly Managed Sites",
      number: 117,
    },
    {
      title: "Completed Projects",
      number: 675,
    },
    {
      title: "Years in Business",
      number: 12,
    },
    {
      title: "Projects in Development",
      number: 7,
    }
  ], []);

  const completedWorkRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (completedWorkRef.current) {
      const rect = completedWorkRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setHasScrolled(true);
      }
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      handleScroll();
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [handleScroll]);

  return (
    <div className="pt-[8rem] lg:pt-0">
      <div>
        <h1 className="text-[2.5rem] sm:text-[5rem] text-white font-bold text-center">Our Work</h1>
        <p className="text-center text-gray-200">Explore our portfolio and see the various website, video, and logo projects we&apos;ve worked on.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {projects.map((project, index) => (
          <WorkDisplayCard key={`${project.slug}-${index}`} project={{ ...project, preview: project.preview.filter((video: any) => video !== undefined) }} />
        ))}
      </div>
      <div ref={completedWorkRef} className="flex flex-col md:flex-row gap-[4rem] md:gap-[8rem] bg-white justify-center items-center w-full h-auto md:h-[20rem] p-4">
        {completedWork.map((project, index) => (
          <div key={`${project.title}-${index}`} className="flex flex-col items-center justify-center text-center">
            <p className="text-[2.5rem] md:text-[3.5rem] text-black font-bold">
              {hasScrolled ? (
                <CountUp start={0} end={project.number} duration={2} />
              ) : (
                0
              )}
              {project.number === 80 ? "+" : ""}
            </p>
            <p className="text-gray-800">{project.title}</p>
          </div>
        ))}
      </div>
      <CallToAction
        title="Ready to get started?"
        description="Schedule your free consultation today!"
        buttonText="Schedule Your Free Consultation"
        buttonLink="/meeting/free-consultation"
      />  
    </div>
  );
}

export default OurWork;