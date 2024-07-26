import { createContext, useContext, ReactNode, useEffect, useState } from 'react';

type ImageType = {
  src: string;
  alt?: string;
};

type Item = {
  id: number;
  slug: string;
  title: string;
  description: string;
  images: ImageType[];
};

const items: Item[] = [
  {
    id: 1,
    slug: "royalty-rentals",
    title: "Royal Rentals",
    description: "Rent party event",
    images: [
      {
        src: "/assets/logos/royalty-rentals.jpg",
        alt: "A beautiful landscape",
      },
    ]
  },
  {
    id: 2,
    slug: "showtime-auto-glass",
    title: "ShowTime Auto Glass",
    description: "Auto glass installation",
    images: [
      {
        src: "/assets/logos/ShowTime-Auto-Glass.jpg",
        alt: "A beautiful landscape",
      },
    ]
  },
  {
    id: 3,
    slug: "sodarush",
    title: "SodaRush",
    description: "Custom soda drinks",
    images: [
      {
        src: "/assets/logos/sodarush.jpg",
        alt: "A beautiful landscape",
      },
    ]
  },
  {
    id: 4,
    slug: "tucson-crowns",
    title: "Tucson Crowns",
    description: "Dental office",
    images: [
      {
        src: "/assets/logos/TucsonCrowns.jpeg",
        alt: "A beautiful landscape",
      },
    ]
  },
  {
    id: 5,
    slug: "big-nates",
    title: "Big Nates",
    description: "Big Nates BBQ",
    images: [
      {
        src: "/assets/logos/Big-Nates.jpg",
        alt: "A beautiful landscape",
      },
    ]
  },
];

const LogoContentsContext = createContext<Item[]>(items);

export const useLogoContents = () => {
  const context = useContext(LogoContentsContext);
  const [cachedImages, setCachedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const imageElements: HTMLImageElement[] = [];
    const newCachedImages = new Set(cachedImages);

    context.forEach(item => {
      item.images.forEach(image => {
        if (!newCachedImages.has(image.src)) {
          const img = new window.Image();
          img.src = image.src;

          img.onload = () => {
            console.log(`Image ${image.src} preloaded successfully.`);
          };

          img.onerror = (e: any) => {
            console.error(`Error preloading image ${image.src}`, e);
          };

          imageElements.push(img);
          newCachedImages.add(image.src);
        }
      });
    });

    if (imageElements.length > 0) {
      setCachedImages(newCachedImages);
    }

    // Cleanup function to remove image elements
    return () => {
      imageElements.forEach(image => image.remove());
    };
  }, [context]);

  return { context, cachedImages };
};

export const LogoContentsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LogoContentsContext.Provider value={items}>
      {children}
    </LogoContentsContext.Provider>
  );
};