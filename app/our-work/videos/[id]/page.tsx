"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';

const VideoDetail = () => {
  const { id } = useParams();

  if (!id) {
    return <div>There is no ID found</div>;
  }

  const items = [
    {
      id: 1,
      src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
      type: "image",
      alt: "A beautiful landscape",
      description: "This is a beautiful landscape of the Superstitions."
    },
    {
      id: 2,
      src: "/assets/videos/rocket2.mp4",
      type: "video",
      description: "A thrilling rocket launch."
    },
    {
      id: 3,
      src: "https://solheimtech.com/wp-content/uploads/2023/03/Arizona-Sunset.jpg",
      type: "image",
      alt: "A beautiful landscape",
      description: "A stunning Arizona sunset."
    },
    {
      id: 4,
      src: "https://solheimtech.com/wp-content/uploads/2023/03/San-Tan-Mountains.jpg",
      type: "image",
      alt: "A beautiful landscape",
      description: "The majestic San Tan Mountains."
    },
  ];

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

export default VideoDetail;
