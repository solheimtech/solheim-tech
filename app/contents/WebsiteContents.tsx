import { createContext, useContext, ReactNode } from 'react';

type ImageType = {
  src: string;
  alt?: string;
};

type Item = {
  id: number;
  title: string;
  description: string;
  images: ImageType[];
  category: string; // Added category field
};

const items: Item[] = [
  {
    id: 1,
    title: "Rocket Launch",
    description: "A thrilling rocket launch.",
    images: [
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      },
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      },
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      },
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      }
    ],
    category: "Featured"
  },
  {
    id: 2,
    title: "Rocket Launch",
    description: "A thrilling rocket launch.",
    images: [
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      }
    ],
    category: "Featured"
  },
  {
    id: 3,
    title: "Rocket Launch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non enim praesent elementum facilisis leo. Nullam non nisi est sit amet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Pharetra massa massa ultricies mi quis. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Ultricies leo integer malesuada nunc vel risus. Purus gravida quis blandit turpis cursus in hac. Arcu dictum varius duis at consectetur lorem. Diam vel quam elementum pulvinar etiam non quam lacus.",
    images: [
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      }
    ],
    category: "Featured"
  },
  {
    id: 4,
    title: "Rocket Launch",
    description: "A thrilling rocket launch.",
    images: [
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      }
    ],
    category: "Featured"
  },
  {
    id: 5,
    title: "Rocket Launch",
    description: "A thrilling rocket launch.",
    images: [
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      }
    ],
    category: "Featured"
  },
  {
    id: 6,
    title: "Rocket Launch",
    description: "A thrilling rocket launch.",
    images: [
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      }
    ],
    category: "Featured"
  },
  {
    id: 7,
    title: "Rocket Launch",
    description: "A thrilling rocket launch.",
    images: [
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      }
    ],
    category: "Featured"
  },
  {
    id: 8,
    title: "Rocket Launch",
    description: "A thrilling rocket launch.",
    images: [
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      }
    ],
    category: "Featured"
  },
];

const WebsiteContentsContext = createContext<Item[]>(items);

export const useWebsiteContents = () => useContext(WebsiteContentsContext);

export const WebsiteContentsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WebsiteContentsContext.Provider value={items}>
      {children}
    </WebsiteContentsContext.Provider>
  );
};
