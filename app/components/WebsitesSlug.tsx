"use client";
import { useParams } from 'next/navigation';
import { useWebsiteContents } from '@/app/contents/WebsiteContents';

const WebsiteDetail = () => {
  const { slug } = useParams();
  const { context: items } = useWebsiteContents();

  if (!slug) {
    return <div className="text-center">There is no ID found</div>;
  }

  const item = items.find((item: any) => item.slug === slug);

  if (!item) {
    return <div className="text-center">Item not found</div>;
  }

  return (
    <div className='py-10 pt-[8rem] md:pt-[0rem]'>
        <div className="flex justify-center">
          <video controls autoPlay className='w-[80%]'>
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-lg font-semibold text-center mt-4 text-white">{item.description}</p>
    </div>
  );
};

export default WebsiteDetail;

