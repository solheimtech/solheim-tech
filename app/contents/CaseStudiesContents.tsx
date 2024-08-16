import { createContext, useContext, ReactNode, useEffect, useState } from 'react';

type Item = {
  id: number;
  url: string;
  src: string;
  slug: string;
  type: "image" | "video";
  takeover: string;
  clicks: {
    jan?: number;
    feb?: number;
    mar?: number;
    apr?: number;
    may?: number;
    jun?: number;
    jul?: number;
    aug?: number;
    sep?: number;
    oct?: number;
    nov?: number;
    dec?: number;
  }
  seoValue: {
    jan?: number;
    feb?: number;
    mar?: number;
    apr?: number;
    may?: number;
    jun?: number;
    jul?: number;
    aug?: number;
    sep?: number;
    oct?: number;
    nov?: number;
    dec?: number;
  }
  alt?: string;
  title?: string;
  description: string;
  result: string;
  imgSrc?: string;
};

const items: Item[] = [
  {
    id: 1,
    url: "https://chairandtablerentals.com/",
    title: "Royalty Rentals",
    description: "High-quality rental tables, chairs, linens, and more for your event.",
    result: "Website, SEO, Videography, Technology Consulting",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Royalty-Rentals-Website-jRneFuxBSJ5az70PDb5LuCOlOi1tti.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "royalty-rentals",
    takeover: "apr",
    clicks: {
        jan: 3300,
        feb: 2900,
        mar: 4100,
        apr: 3400,
        may: 2500,
        jun: 2000,
    },
    seoValue: {
      jan: 5400,
      feb: 5340,
      mar: 5190,
      apr: 5060,
      may: 4190,
      jun: 4050,
    }
  },
  {
    id: 2,
    url: "https://www.brondeblvdsalon.com/",
    title: "Bronde Blvd Salon",
    description: "Your salon destination for blondes, brunettes, extensions & everything hair!",
    result: "Website, SEO",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Brond-Blvd-Salon-HBb6ebFnXfhGrJbehiBywWN2vE8JvI.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "bronde-blvd-salon",
    takeover: "jun",
    clicks: {
        jan: 3300,
        feb: 2900,
        mar: 4100,
        apr: 3400,
        may: 2500,
        jun: 2000,
    },
    seoValue: {
      jan: 3300,
      feb: 2900,
      mar: 4100,
      apr: 3400,
      may: 2500,
      jun: 2000,
    }
  },
  {
    id: 3,
    url: "https://piefectionaz.com/",
    title: "Piefection AZ",
    description: "Welcome to PIEfection, where pies are made from scratch, with love.",
    result: "Website, Local SEO",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Piefection_Done-HXVCCN8ACm6km38mrN338Ydroy9Pf2.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "piefection-az",
    takeover: "jun",
    clicks: {
        jan: 3300,
        feb: 2900,
        mar: 4100,
        apr: 3400,
        may: 2500,
        jun: 2000,
    },
    seoValue: {
      jan: 3300,
      feb: 2900,
      mar: 4100,
      apr: 3400,
      may: 2500,
      jun: 2000,
    }
  },
  {
    id: 4,
    url: "https://sodarush.com/",
    title: "SodaRush",
    description: "Delicious sodas and treats to satisfy your cravings.",
    result: "Website, SEO, Technology Consulting",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/SodaRush-pGQgVs3zgbtuKatbjFUjQ4IXzpGvKB.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "sodarush",
    takeover: "jun",
    clicks: {
        jan: 3300,
        feb: 2900,
        mar: 4100,
        apr: 3400,
        may: 2500,
        jun: 2000,
    },
    seoValue: {
      jan: 3300,
      feb: 2900,
      mar: 4100,
      apr: 3400,
      may: 2500,
      jun: 2000,
    }
  },
  {
    id: 5,
    url: "https://rockitlandscapematerials.com/",
    title: "Rock It Landscaping",
    description: "High-quality landscaping materials for your outdoor spaces.",
    result: "Website, SEO, Logo",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Rock-It-F8qCgRF167S6RwyXJ1n5wrj8O9Uzk7.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "rock-it-landscaping",
    takeover: "jun",
    clicks: {
        jan: 3300,
        feb: 2900,
        mar: 4100,
        apr: 3400,
        may: 2500,
        jun: 2000,
    },
    seoValue: {
      jan: 3300,
      feb: 2900,
      mar: 4100,
      apr: 3400,
      may: 2500,
      jun: 2000,
    }
  },
  {
    id: 6,
    url: "https://tucsoncrowns.com/",
    title: "Tucson Crowns",
    description: "If you are looking to get a dental cap or crown, you have come to the right place.",
    result: "Website, SEO, Local SEO",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Tucson-Crowns-7WS2Zzk822WN2J7VmTqEvTlkLh67o7.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "tucson-crowns",
    takeover: "jun",
    clicks: {
        jan: 3300,
        feb: 2900,
        mar: 4100,
        apr: 3400,
        may: 2500,
        jun: 2000,
    },
    seoValue: {
      jan: 3300,
      feb: 2900,
      mar: 4100,
      apr: 3400,
      may: 2500,
      jun: 2000,
    }
  },
  {
    id: 7,
    url: "https://voicesofchristmas.org/",
    title: "Voices of Christmas",
    description: "Religious community Christmas choir and orchestra.",
    result: "Non-profit, Website",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Voices-Of-Christmas-1Ub6lPZyjlzWCiN3fGxi1wCLSbH0NS.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "voices-of-christmas",
    takeover: "jun",
    clicks: {
        jan: 3300,
        feb: 2900,
        mar: 4100,
        apr: 3400,
        may: 2500,
        jun: 2000,
    },
    seoValue: {
      jan: 3300,
      feb: 2900,
      mar: 4100,
      apr: 3400,
      may: 2500,
      jun: 2000,
    }
  },
  {
    id: 8,
    url: "https://vigilantmortgageconsulting.com/",
    title: "Vigilant Mortgage Consulting",
    description: "Expert Mortgage Consulting for Realtors, Home Owners, and Professionals.",
    result: "Website, Logo",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Vigilant-Mortgage-Consult-HZpwLAyvPm4UHC1RPjRysDdyUWZIap.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "vigilant-mortgage-consulting",
    takeover: "jun",
    clicks: {
        jan: 3300,
        feb: 2900,
        mar: 4100,
        apr: 3400,
        may: 2500,
        jun: 2000,
    },
    seoValue: {
      jan: 3300,
      feb: 2900,
      mar: 4100,
      apr: 3400,
      may: 2500,
      jun: 2000,
    }
  },
  {
    id: 9,
    url: "https://showtimeautoglass.us/",
    title: "Showtime Auto Glass",
    description: "ShowTime Auto Glass is your premier family owned & operated auto glass company.",
    result: "Website, SEO, Local SEO, Google Ads",
    type: "video",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Showtime-Auto-Glass-WpfVw58K8zdrstUHsxeZIR5BdnDdVU.mp4",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
    slug: "showtime-auto-glass",
    takeover: "jun",
    clicks: {
        jan: 3300,
        feb: 2900,
        mar: 4100,
        apr: 3400,
        may: 2500,
        jun: 2000,
    },
    seoValue: {
      jan: 3300,
      feb: 2900,
      mar: 4100,
      apr: 3400,
      may: 2500,
      jun: 2000,
    }
  },
];
const CaseStudiesContentsContext = createContext<Item[]>(items);

export const useCaseStudiesContents = () => {
  const context = useContext(CaseStudiesContentsContext);
  const [cachedVideos, setCachedVideos] = useState<Set<string>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const videoElements: HTMLVideoElement[] = [];
    const newCachedVideos = new Set(cachedVideos);

    context.forEach(item => {
      if (!newCachedVideos.has(item.src)) {
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
        newCachedVideos.add(item.src);
      }
    });

    if (videoElements.length > 0) {
      setCachedVideos(newCachedVideos);
    }

    // Cleanup function to remove video elements
    return () => {
      videoElements.forEach(video => video.remove());
    };
  }, [context, cachedVideos]);

  const handleCardHover = (id: number | null) => {
    setHoveredCard(id);
    if (id !== null) {
      playVideo(id);
    } else {
      pauseAllVideos();
    }
  };

  const playVideo = (id: number) => {
    const videoElement = document.querySelector(`#video-${id}`) as HTMLVideoElement;
    if (videoElement) {
      videoElement.play().catch(error => console.error('Error playing video:', error));
    }
  };

  const pauseVideo = (id: number) => {
    const videoElement = document.querySelector(`#video-${id}`) as HTMLVideoElement;
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  const pauseAllVideos = () => {
    context.forEach(item => {
      pauseVideo(item.id);
    });
  };

  return { 
    context, 
    cachedVideos, 
    hoveredCard, 
    handleCardHover,
    playVideo,
    pauseVideo
  };
};

export const CaseStudiesContentsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CaseStudiesContentsContext.Provider value={items}>
      {children}
    </CaseStudiesContentsContext.Provider>
  );
};