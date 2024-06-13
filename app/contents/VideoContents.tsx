import { createContext, useContext, ReactNode } from 'react';

type VideoItem = {
  id: number;
  src: string;
  type: "image" | "video";
  alt?: string;
  title?: string;
  description: string;
};

const videoItems: VideoItem[] = [
  {
    id: 1,
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 2,
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 3,
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 4,
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 5,
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 6,
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 7,
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
  {
    id: 8,
    src: "/assets/videos/rocket2.mp4",
    type: "video",
    title: "Rocket Launch",
    description: "A thrilling rocket launch."
  },
];

const VideoContentsContext = createContext<VideoItem[]>(videoItems);

export const useVideoContents = () => useContext(VideoContentsContext);

export const VideoContentsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <VideoContentsContext.Provider value={videoItems}>
      {children}
    </VideoContentsContext.Provider>
  );
};
