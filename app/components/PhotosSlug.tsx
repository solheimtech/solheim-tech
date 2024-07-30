"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { usePhotoContents } from '@/app/contents/PhotoContents';

const PhotoDetail = () => {
  const { slug } = useParams();
  const items = usePhotoContents();

  if (!slug) {
    return <div className="text-center">There is no ID found</div>;
  }

  const item = items.context.find(item => item.slug === slug);

  if (!item) {
    return <div className="text-center">Item not found</div>;
  }

  return (
    <div className="flex flex-col items-center p-4 text-center pt-[8rem] lg:pt-[0rem]">
        <div className="flex flex-col items-center mb-4">
          <Image 
            src={item.src} 
            alt={item.alt || 'Image description not available'} 
            width={300} 
            height={300} 
            className="rounded-lg shadow-lg mb-4"
          />
        </div>
        <div className="text-center">
          <p className='text-3xl text-white font-bold mb-2 text-center'>{item.title}</p>
          <p className="text-lg text-white w-[70%] mx-auto">{item.description}</p>
        </div>
    </div>
  );
};

export default PhotoDetail;
