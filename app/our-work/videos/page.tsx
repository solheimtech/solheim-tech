"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";

export default function VideosPage() {
  const items: { id: number; src: string; type: "image" | "video"; alt?: string; title: string; description: string }[] = [
    {
      id: 1,
      src: "/assets/videos/rocket2.mp4",
      type: "video",
      title: "Rocket Launch",
      description: "A thrilling rocket launch."
    },
    {
      id: 2,
      src: "/assets/videos/rocket2.mp4",
      type: "video",
      title: "Rocket Launch",
      description: "A thrilling rocket launch."
    },
    {
      id: 3,
      src: "/assets/videos/rocket2.mp4",
      type: "video",
      title: "Rocket Launch",
      description: "A thrilling rocket launch."
    },
    {
      id: 4,
      src: "/assets/videos/rocket2.mp4",
      type: "video",
      title: "Rocket Launch",
      description: "A thrilling rocket launch."
    },
    {
      id: 5,
      src: "/assets/videos/rocket2.mp4",
      type: "video",
      title: "Rocket Launch",
      description: "A thrilling rocket launch."
    },
    {
      id: 6,
      src: "/assets/videos/rocket2.mp4",
      type: "video",
      title: "Rocket Launch",
      description: "A thrilling rocket launch."
    },
    {
      id: 7,
      src: "/assets/videos/rocket2.mp4",
      type: "video",
      title: "Rocket Launch",
      description: "A thrilling rocket launch."
    },
    {
      id: 8,
      src: "/assets/videos/rocket2.mp4",
      type: "video",
      title: "Rocket Launch",
      description: "A thrilling rocket launch."
    },
  ];

  return (
    <ParallaxProvider>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {items.map(item => (
          <Parallax key={item.id}>
            <Link href={`/our-work/videos/${item.id}`} passHref>
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


