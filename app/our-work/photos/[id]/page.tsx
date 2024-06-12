"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { usePhotoContents } from '@/app/contexts/PhotoContents';

const PhotoDetail = () => {
  const { id } = useParams();
  const items = usePhotoContents();

  if (!id) {
    return <div>There is no ID found</div>;
  }

  const item = items.find(item => item.id === parseInt(id as string));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      {item.type === 'video' ? (
        <video controls>
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image src={item.src} alt={item.alt || 'Image description not available'} width={100} height={100} />
      )}
      <p>{item.description}</p>
    </div>
  );
};

export default PhotoDetail;
