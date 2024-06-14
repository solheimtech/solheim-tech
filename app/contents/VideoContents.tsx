import { createContext, useContext, ReactNode } from 'react';

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
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 2,
    slug: "rocket-launch-2",
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 3,
    slug: "rocket-launch-3",
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 4,
    slug: "rocket-launch-4",
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 5,
    slug: "rocket-launch-5",
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 6,
    slug: "rocket-launch-6",
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 7,
    slug: "rocket-launch-7",
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 8,
    slug: "rocket-launch-8",
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
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
