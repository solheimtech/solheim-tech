"use client";
import Link from 'next/link';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { DirectionAwareHover } from "@/app/components/ui/card-hover";
import { useLogoContents } from '@/app/contents/LogoContents';
import { motion } from 'framer-motion';

export default function LogosPage() {
  const { context: items } = useLogoContents();

  return (
    <div className='pt-[8rem] lg:pt-[4rem] pb-[8rem] bg-gradient-to-b from-gray-900 to-gray-800'>
      <ParallaxProvider>
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-white text-[2.5rem] sm:text-[5rem] font-bold text-center pt-8 pb-[4rem]'
        >
          Our Logos
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
          {items.map((item: any, index: number) => (
            <Parallax key={item.id} y={[-20, 20]} tagOuter="div">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/our-work/logos/${item.slug}`} passHref>
                  <DirectionAwareHover 
                    src={item.images[0].src} 
                    type="image" 
                    alt={item.images[0].alt}  
                    className="h-[250px] w-full rounded-lg shadow-2xl"
                  >
                    <div className="p-4 bg-black bg-opacity-70 rounded-b-lg">
                      <p className="font-bold text-lg md:text-xl text-white">{item.title}</p>
                      <p className="font-normal text-sm md:text-base text-gray-300">{item.description}</p>
                    </div>
                  </DirectionAwareHover>
                </Link>
              </motion.div>
            </Parallax>
          ))}
        </div>
      </ParallaxProvider>
    </div>
  );
}