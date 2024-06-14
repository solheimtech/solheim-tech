import { createContext, useContext, ReactNode } from 'react';

type Item = {
  id: number;
  slug: string;
  src: string;
  type: "image" | "video";
  alt?: string;
  title?: string;
  description: string;
  imgSrc?: string;
};

const items: Item[] = [
  {
    id: 1,
    slug: "big-nates-bbq",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Big-Nates-BBQ-kAYuh3NNcr5gg8W7EMt8xThlREZGV9.mp4",
    type: "video",
    title: "Big Nate's BBQ",
    description: "Big Nate's BBQ is known for its mouth-watering, slow-cooked barbecue with a rich, smoky flavor that keeps customers coming back for more.",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg"
  },
  {
    id: 2,
    slug: "dunn-edwards-paints",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Dunn-Edwards-Paints-gAEIK0JyJhp8XgAgeDVmic56OfyNY4.mp4",
    type: "video",
    title: "Dunn Edward's Paints",
    description: "Dunn-Edwards Paints is a leading manufacturer and supplier of premium, environmentally friendly paint and paint supplies, known for their superior quality and durability.",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg"
  },
  {
    id: 3,
    slug: "gymboree",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Gymboree-TLuQinFajMNRrbOwSVdm62j4gownwe.mp4",
    type: "video",
    title: "Gymboree",
    description: "Toddler Clothes & Baby Clothes",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg"
  },
  {
    id: 4,
    slug: "lotus-restoration",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Lotus-Restoration-Services-8kPiZdu3btr8EuS6A51Ixvekimac1V.mp4",
    type: "video",
    title: "Lotus Restoration Services",
    description: "Lotus Restoration Services handles both commercial and residential emergency, water damage restoration, fire and smoke damage restoration, mold remediation, bio-hazardous cleaning, and asbestos removal with the proper care to ensure your peace of mind.",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg"
  },
  {
    id: 5,
    slug: "piefection",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Piefection-vQzIwIIBiy5amguHMYaYPgGUqJNF9K.mp4",
    type: "video",
    title: "Piefection",
    description: "Piefection is a renowned bakery specializing in handmade, gourmet pies, celebrated for their exceptional flavors and high-quality ingredients.",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg"
  },
  {
    id: 6,
    slug: "red-cross-army",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Red-Cross-US-Army-jVX8HDuX0e1DkChY53wxZ0LYJCzA1X.mp4",
    type: "video",
    title: "Red Cross US Army",
    description: "The Red Cross partners with the US Army to provide essential humanitarian aid and support services to soldiers, veterans, and their families, ensuring their well-being during times of both peace and conflict.",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg"
  },
  {
    id: 7,
    slug: "sunset-freeze",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Sunset%20Freeze-nhMh6mkz9G58DywvzjFTSkJAMYNWbM.mp4",
    type: "video",
    title: "Sunset Freeze",
    description: "The Fresh Ice King Of AZ",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg"
  },
  {
    id: 8,
    slug: "take-5",
    src: "https://cefqtkkupjodlfz5.public.blob.vercel-storage.com/assets/videos/Take-5-zrlamlsYmcebtEVLpZpJlRlXncdQB8.mp4",
    type: "video",
    title: "Take 5",
    description: "Take 5 is a quick oil change service that emphasizes speed and convenience, allowing customers to stay in their cars while their oil is changed in just minutes.",
    imgSrc: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg"
  },
];

const VideoContentsContext = createContext<Item[]>(items);

export const useVideoContents = () => useContext(VideoContentsContext);

export const VideoContentsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <VideoContentsContext.Provider value={items}>
      {children}
    </VideoContentsContext.Provider>
  );
};
