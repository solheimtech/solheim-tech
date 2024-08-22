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
    slug: "complete-calibrations",
    title: "Complete Calibrations",
    description: "ADAS Calibration services",
    images: [
      {
        src: "/assets/logos/ST-Designed-Complete-Calibrations-Rectangle-Transparent-1000.png",
        alt: "Complete Calibrations Logo Designed by Solheim Technologies",
      },
    ]
  },
  {
    id: 2,
    slug: "ab-boutique-medicine",
    title: "AB Boutique Medicine",
    description: "Medical Boutique",
    images: [
      {
        src: "/assets/logos/ST-Designed-cropped-AB-Boutique-Medicine-Icon-192x192.png",
        alt: "AB Boutique Medicine Logo Designed by Solheim Technologies",
      },
    ]
  },
  {
    id: 3,
    slug: "hildees-tees",
    title: "Hildees Tees",
    description: "Custom tees",
    images: [
      {
        src: "/assets/logos/ST-Designed-hildees-tees-logo-wide.webp",
        alt: "Hildees Tees Logo Designed by Solheim Technologies",
      },
    ]
  },
  {
    id: 4,
    slug: "route-planner",
    title: "Route Planner",
    description: "Route Planner",
    images: [
      {
        src: "/assets/logos/ST-Designed-Route-Planner-Logo-Narrow.png",
        alt: "Route Planner Logo Designed by Solheim Technologies",
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