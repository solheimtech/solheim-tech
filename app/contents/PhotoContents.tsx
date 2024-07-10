import { createContext, useContext, ReactNode, useEffect, useState } from 'react';

type Item = {
  id: number;
  slug: string;
  src: string;
  type: "image" | "video";
  alt?: string;
  title?: string;
  description: string;
};

const items: Item[] = [
  {
    id: 1,
    slug: "rocket-launch-1",
    src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    type: "image",
    alt: "A beautiful landscape",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 2,
    slug: "rocket-launch-2",
    src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    type: "image",
    alt: "A beautiful landscape",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 3,
    slug: "rocket-launch-3",
    src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    type: "image",
    alt: "A beautiful landscape",
    title: "Rocket Launch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non enim praesent elementum facilisis leo. Nullam non nisi est sit amet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Pharetra massa massa ultricies mi quis. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Ultricies leo integer malesuada nunc vel risus. Purus gravida quis blandit turpis cursus in hac. Arcu dictum varius duis at consectetur lorem. Diam vel quam elementum pulvinar etiam non quam lacus."
  },
  {
    id: 4,
    slug: "rocket-launch-4",
    src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    type: "image",
    alt: "A beautiful landscape",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 5,
    slug: "rocket-launch-5",
    src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    type: "image",
    alt: "A beautiful landscape",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 6,
    slug: "rocket-launch-6",
    src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    type: "image",
    alt: "A beautiful landscape",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 7,
    slug: "rocket-launch-7",
    src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    type: "image",
    alt: "A beautiful landscape",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 8,
    slug: "rocket-launch-8",
    src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    type: "image",
    alt: "A beautiful landscape",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
];

const PhotoContentsContext = createContext<Item[]>(items);

export const usePhotoContents = () => {
  const context = useContext(PhotoContentsContext);
  const [cachedPhotos, setCachedPhotos] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const imageElements: HTMLImageElement[] = [];
    const cachedSrcs = new Set(cachedPhotos.map(image => image.src));
    const localStorageKey = 'cachedPhotoSrcs';

    // Retrieve cached photo sources from localStorage
    const storedCachedSrcs = JSON.parse(localStorage.getItem(localStorageKey) || '[]');

    context.forEach(item => {
      if (!cachedSrcs.has(item.src) && !storedCachedSrcs.includes(item.src)) {
        const image = new Image();
        image.src = item.src;

        image.onload = () => {
          console.log(`Image ${item.src} preloaded successfully.`);
        };

        image.onerror = (e) => {
          console.error(`Error preloading image ${item.src}`, e);
        };

        imageElements.push(image);
      }
    });

    if (imageElements.length > 0) {
      setCachedPhotos(prev => [...prev, ...imageElements]);
      // Update localStorage with new cached photo sources
      const newCachedSrcs = [...storedCachedSrcs, ...imageElements.map(image => image.src)];
      localStorage.setItem(localStorageKey, JSON.stringify(newCachedSrcs));
    }

    // Cleanup function to remove image elements
    return () => {
      imageElements.forEach(image => image.remove());
    };
  }, [context, cachedPhotos]);

  return { context, cachedPhotos };
};

export const PhotoContentsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <PhotoContentsContext.Provider value={items}>
      {children}
    </PhotoContentsContext.Provider>
  );
};