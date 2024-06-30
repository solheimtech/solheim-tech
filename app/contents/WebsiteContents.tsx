import { createContext, useContext, ReactNode, useEffect, useState } from 'react';

type Item = {
  id: number;
  url: string;
  src: string;
  slug: string;
  type: "image" | "video";
  alt?: string;
  title?: string;
  description: string;
  imgSrc?: string;
};

const items: Item[] = [
  {
    id: 1,
    url: "https://chairandtablerentals.com/",
    title: "Royalty Rentals",
    description: "High-quality rental tables, chairs, linens, and more for your event.",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Royalty-Rentals-Website-jRneFuxBSJ5az70PDb5LuCOlOi1tti.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "royalty-rentals"
  },
  {
    id: 2,
    url: "https://www.brondeblvdsalon.com/",
    title: "Bronde Blvd Salon",
    description: "Your salon destination for blondes, brunettes, extensions & everything hair!",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Brond-Blvd-Salon-HBb6ebFnXfhGrJbehiBywWN2vE8JvI.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "bronde-blvd-salon"
  },
  {
    id: 3,
    url: "https://piefectionaz.com/",
    title: "Piefection AZ",
    description: "Welcome to PIEfection, where pies are made from scratch, with love.",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Piefection_Done-HXVCCN8ACm6km38mrN338Ydroy9Pf2.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "piefection-az"
  },
  {
    id: 4,
    url: "https://sodarush.com/",
    title: "SodaRush",
    description: "Delicious sodas and treats to satisfy your cravings.",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/SodaRush-pGQgVs3zgbtuKatbjFUjQ4IXzpGvKB.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "sodarush"
  },
  {
    id: 5,
    url: "https://rockitlandscapematerials.com/",
    title: "Rock It Landscaping",
    description: "Create Stunning Outdoor Spaces with Rock It Landscape Materials – Experience the Difference in Quality and Service",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Rock-It-F8qCgRF167S6RwyXJ1n5wrj8O9Uzk7.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "rock-it-landscaping"
  },
  {
    id: 6,
    url: "royalty-rentals",
    title: "Royalty Rentals",
    description: "High-quality rental tables, chairs, linens, and more for your event.",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Royalty-Rentals-Website-jRneFuxBSJ5az70PDb5LuCOlOi1tti.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "royalty-rentals-2"
  },
  {
    id: 7,
    url: "https://tucsoncrowns.com/",
    title: "Tucson Crowns",
    description: "If you are looking to get a dental cap or crown, you have come to the right place.",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Tucson-Crowns-7WS2Zzk822WN2J7VmTqEvTlkLh67o7.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "tucson-crowns"
  },
  {
    id: 8,
    url: "https://voicesofchristmas.org/",
    title: "Voices of Christmas",
    description: "Voices of Christmas is a religious community Christmas choir and orchestra which provides two free Christmas concerts and hosts a food drive each December.",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Voices-Of-Christmas-1Ub6lPZyjlzWCiN3fGxi1wCLSbH0NS.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "voices-of-christmas"
  },
  {
    id: 9,
    url: "https://vigilantmortgageconsulting.com/",
    title: "Vigilant Mortgage Consulting",
    description: "Expert Mortgage Consulting for Realtors, Home Owners, and Professionals.",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Vigilant-Mortgage-Consult-HZpwLAyvPm4UHC1RPjRysDdyUWZIap.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "vigilant-mortgage-consulting"
  },
  {
    id: 10,
    url: "https://showtimeautoglass.us/",
    title: "Showtime Auto Glass",
    description: "ShowTime Auto Glass is your premier family owned & operated auto glass company.",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Showtime-Auto-Glass-WpfVw58K8zdrstUHsxeZIR5BdnDdVU.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "showtime-auto-glass"
  },
];

const WebsiteContentsContext = createContext<Item[]>(items);

export const useWebsiteContents = () => {
  const context = useContext(WebsiteContentsContext);
  const [cachedVideos, setCachedVideos] = useState<HTMLVideoElement[]>([]);

  useEffect(() => {
    const videoElements: HTMLVideoElement[] = [];
    context.forEach(item => {
      const video = document.createElement('video');
      video.src = item.src;
      video.preload = 'auto';

      video.onloadeddata = () => {
        console.log(`Video ${item.src} preloaded successfully.`);
      };

      video.onerror = (e) => {
        console.error(`Error preloading video ${item.src}`, e);
      };

      videoElements.push(video);
    });

    setCachedVideos(videoElements);

    // Cleanup function to remove video elements
    return () => {
      videoElements.forEach(video => video.remove());
    };
  }, [context]);

  return { context, cachedVideos };
};

export const WebsiteContentsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WebsiteContentsContext.Provider value={items}>
      {children}
    </WebsiteContentsContext.Provider>
  );
};
