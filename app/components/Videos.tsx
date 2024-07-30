"use client";
import Link from 'next/link';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { DirectionAwareHover } from "@/app/components/ui/img-video-card-hover";
import { useVideoContents } from '@/app/contents/VideoContents';

export default function VideosPage() {
  const { context: items } = useVideoContents();

  return (
    <div className='pt-[8rem] lg:pt-[0rem]'>
    <ParallaxProvider>
      <h1 className='text-white text-[2.5rem] lg:text-[5rem] font-bold text-center pt-8 pb-[4rem]'>Video Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {items.map((item: any) => (
          <Parallax key={item.id}>
            <Link href={`/our-work/videos/${item.slug}`} passHref>
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
    </div>
  );
}