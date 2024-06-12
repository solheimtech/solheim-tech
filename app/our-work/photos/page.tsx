"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";
import { usePhotoContents } from '@/app/contexts/PhotoContents';

export default function PhotosPage() {
  const items = usePhotoContents();

  return (
    <ParallaxProvider>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {items.map(item => (
          <Parallax key={item.id}>
            <Link href={`/our-work/photos/${item.id}`} passHref>
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