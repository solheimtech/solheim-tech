"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useWebsiteContents } from '@/app/contents/WebsiteContents';
import { useState } from 'react';

const WebsiteDetail = () => {
  const { slug } = useParams();
  const items = useWebsiteContents();
  const [selectedImage, setSelectedImage] = useState(0);

  if (!slug) {
    return <div className="text-center">There is no ID found</div>;
  }

  const item = items.find((item: any) => item.slug === slug);

  if (!item) {
    return <div className="text-center">Item not found</div>;
  }

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-4 text-center">
      <div className="flex flex-col items-center mb-4 w-full md:w-1/2">
        <Image 
          src={item.images[selectedImage].src} 
          alt={item.images[selectedImage].alt || 'Image description not available'} 
          width={300} 
          height={300} 
          className="rounded-lg shadow-lg mb-4"
          style={{ aspectRatio: '1 / 1' }}
        />
        <div className="flex space-x-2 mt-2 overflow-x-auto">
          {item.images.map((img: any, index: any) => (
            <Image 
              key={index} 
              src={img.src} 
              alt={img.alt || 'Thumbnail'} 
              width={50} 
              height={50} 
              className={`cursor-pointer ${selectedImage === index ? 'border-2 border-white' : ''} rounded-lg`}
              style={{ aspectRatio: '1 / 1' }}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="text-center md:text-left w-full md:w-1/2 md:pl-4">
        <p className='text-2xl md:text-3xl text-white font-bold mb-2'>{item.title}</p>
        <p className="text-base md:text-lg text-white">{item.description}</p>
      </div>
    </div>
  );
};

export default WebsiteDetail;
