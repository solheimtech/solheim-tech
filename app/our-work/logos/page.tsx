"use client";
import Link from 'next/link';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { DirectionAwareHover } from "../../components/ui/card-hover";
import { useLogoContents } from '../../contents/LogoContents';

export default function LogosPage() {
  const items = useLogoContents();

  return (
    <ParallaxProvider>
      <h1 className='text-white text-4xl font-bold text-center pt-8 pb-[4rem]'>LOGO WORK</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {items.map(item => (
          <Parallax key={item.id}>
            <Link href={`/our-work/logos/${item.id}`} passHref>
              <DirectionAwareHover src={item.images[0].src} type="image">
                <p className="font-bold text-lg md:text-xl">{item.title}</p>
                <p className="font-normal text-xs md:text-sm">{item.description}</p>
              </DirectionAwareHover>
            </Link>
          </Parallax>
        ))}
      </div>
    </ParallaxProvider>
  );
}