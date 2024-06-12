"use client"
import { VideoContentsProvider } from '../contexts/VideoContents';
import { PhotoContentsProvider } from '../contexts/PhotoContents';
import { ReactNode } from 'react';

interface OurWorkLayoutProps {
  children: ReactNode;
}

export default function OurWorkLayout({ children }: OurWorkLayoutProps) {
  return (
    <VideoContentsProvider>
      <PhotoContentsProvider>
        {children}
      </PhotoContentsProvider>
    </VideoContentsProvider>
  );
}
