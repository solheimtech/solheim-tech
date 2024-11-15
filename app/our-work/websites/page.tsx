"use client";

import Link from 'next/link';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { DirectionAwareHover } from "@/app/components/ui/img-web-card-hover";
import { useWebsiteContents } from '@/app/contents/WebsiteContents';
import CallToAction from "@/app/components/CallToAction";
export default function WebsitesPage() {
  const { context: items } = useWebsiteContents();

  return (
    <div className='pt-[8rem] lg:pt-[0rem]'>
    <ParallaxProvider>
      <h1 className='text-white text-[2.5rem] lg:text-[5rem] font-bold text-center pt-8 pb-[4rem]'>WEBSITES</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        {items.map((item: any) => (
          <Parallax key={item.id}>
            <Link href={`${item.url}`} target="_blank" rel="noopener noreferrer" passHref>
              <DirectionAwareHover 
                src={item.src} 
                imgSrc={item.imgSrc || ''} 
                type={item.type}
                title={item.title || ''}>
                <p className="font-bold text-lg md:text-xl">{item.title}</p>
                <p className="font-normal text-xs md:text-sm">{item.description}</p>
              </DirectionAwareHover>
            </Link>
          </Parallax>
        ))}
      </div>
      </ParallaxProvider>
      <CallToAction
        title="Ready to get started?"
        description="Schedule your free consultation today!"
        buttonText="Schedule Your Free Consultation"
        buttonLink="/meeting/free-consultation"
      />
    </div>
  );
}