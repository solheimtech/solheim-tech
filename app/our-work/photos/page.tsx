"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { DirectionAwareHover } from "../../components/ui/img-video-card-hover";
import { usePhotoContents } from '@/app/contents/PhotoContents';

export default function PhotosPage() {
  const items = usePhotoContents();

  return (
    <ParallaxProvider>
      <h1 className='text-white text-4xl font-bold text-center pt-8 pb-[4rem]'>Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {items.map(item => (
          <Parallax key={item.id}>
            <Link href={`/our-work/photos/${item.slug}`} passHref>
              <DirectionAwareHover src={item.src} type={item.type}>
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