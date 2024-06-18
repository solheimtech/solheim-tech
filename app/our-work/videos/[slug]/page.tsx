"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useVideoContents } from '../../../contents/VideoContents';

const VideoDetail = () => {
  const { slug } = useParams();
  const items = useVideoContents();

  if (!slug) {
    return <div>There is no ID found</div>;
  }

  const item = items.find((item) => item.slug === slug);

  if (!item) {
    return <div>Item not found</div>;
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

export default VideoDetail;
