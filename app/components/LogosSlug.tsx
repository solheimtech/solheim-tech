"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useLogoContents } from '@/app/contents/LogoContents';
import { useState } from 'react';
import { motion } from 'framer-motion';

const LogoDetail = () => {
  const { slug } = useParams();
  const items = useLogoContents();
  const [selectedImage, setSelectedImage] = useState(0);

  if (!slug) {
    return <div className="text-center">There is no ID found</div>;
  }

  const item = items.context.find((item: { slug: string }) => item.slug === slug);

  if (!item) {
    return <div className="text-center">Item not found</div>;
  }

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-8 text-center pt-[8rem] lg:pt-[4rem] min-h-[calc(100vh-4rem)] bg-gradient-to-b from-gray-800 to-gray-600">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-8 w-full md:w-1/2"
      >
        <Image 
          src={item.images[selectedImage].src} 
          alt={item.images[selectedImage].alt || 'Image description not available'} 
          width={400} 
          height={400} 
          className="rounded-lg shadow-2xl mb-6"
          style={{ objectFit: 'contain' }}
        />
        <div className="flex space-x-4 mt-4 overflow-x-auto p-2 bg-gray-700 rounded-lg">
          {item.images.map((img: { src: string, alt?: string }, index: number) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image 
                src={img.src} 
                alt={img.alt || 'Thumbnail'} 
                width={80} 
                height={80} 
                className={`cursor-pointer ${selectedImage === index ? 'border-4 border-blue-400' : ''} rounded-lg shadow-md`}
                style={{ objectFit: 'cover' }}
                onClick={() => handleImageClick(index)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center md:text-left w-full md:w-1/2 md:pl-8"
      >
        <h1 className='text-3xl md:text-4xl text-white font-bold mb-4'>{item.title}</h1>
        <p className="text-lg md:text-xl text-gray-200">{item.description}</p>
      </motion.div>
    </div>
  );
};

export default LogoDetail;