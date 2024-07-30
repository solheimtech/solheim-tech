"use client";
import Link from 'next/link';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { DirectionAwareHover } from "@/app/components/ui/card-hover";
import { useLogoContents } from '@/app/contents/LogoContents';

export default function LogosPage() {
  const { context: items } = useLogoContents();

  return (
    <div className='pt-[8rem] lg:pt-[0rem] pb-[8rem]'>
    <ParallaxProvider>
      <h1 className='text-white text-[2.5rem] sm:text-[5rem] font-bold text-center pt-8 pb-[4rem]'>Logos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {items.map((item: any) => (
          <Parallax key={item.id}>
            <Link href={`/our-work/logos/${item.slug}`} passHref>
              <DirectionAwareHover src={item.images[0].src} type="image" alt={item.images[0].alt}>
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