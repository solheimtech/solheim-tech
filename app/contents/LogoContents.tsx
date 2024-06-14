import { createContext, useContext, ReactNode } from 'react';

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
    slug: "rocket-launch-1",
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
    ]
  },
  {
    id: 2,
    slug: "rocket-launch-2",
    title: "Rocket Launch",
    description: "A thrilling rocket launch.",
    images: [
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      }
    ]
  },
  {
    id: 3,
    slug: "rocket-launch-3",
    title: "Rocket Launch",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non enim praesent elementum facilisis leo. Nullam non nisi est sit amet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Pharetra massa massa ultricies mi quis. Nisl nisi scelerisque eu ultrices vitae auctor eu augue ut. Ultricies leo integer malesuada nunc vel risus. Purus gravida quis blandit turpis cursus in hac. Arcu dictum varius duis at consectetur lorem. Diam vel quam elementum pulvinar etiam non quam lacus.",
    images: [
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      }
    ]
  },
  {
    id: 4,
    slug: "rocket-launch-4",
    title: "Rocket Launch",
    description: "A thrilling rocket launch.",
    images: [
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      }
    ]
  },
  {
    id: 5,
    slug: "rocket-launch-5",
    title: "Rocket Launch",
    description: "A thrilling rocket launch.",
    images: [
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      }
    ]
  },
  {
    id: 6,
    slug: "rocket-launch-6",
    title: "Rocket Launch",
    description: "A thrilling rocket launch.",
    images: [
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      }
    ]
  },
  {
    id: 7,
    slug: "rocket-launch-7",
    title: "Rocket Launch",
    description: "A thrilling rocket launch.",
    images: [
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      }
    ]
  },
  {
    id: 8,
    slug: "rocket-launch-8",
    title: "Rocket Launch",
    description: "A thrilling rocket launch.",
    images: [
      {
        src: "https://solheimtech.com/wp-content/uploads/2023/03/Superstitions-2000.jpg",
        alt: "A beautiful landscape"
      }
    ]
  },
];

const LogoContentsContext = createContext<Item[]>(items);

export const useLogoContents = () => useContext(LogoContentsContext);

export const LogoContentsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LogoContentsContext.Provider value={items}>
      {children}
    </LogoContentsContext.Provider>
  );
};
