"use client"
import { VideoContentsProvider } from '../contents/VideoContents';
import { PhotoContentsProvider } from '../contents/PhotoContents';
import { LogoContentsProvider } from '../contents/LogoContents';
import { WebsiteContentsProvider } from '../contents/WebsiteContents';
import { ReactNode } from 'react';

interface OurWorkLayoutProps {
  children: ReactNode;
}

export default function OurWorkLayout({ children }: OurWorkLayoutProps) {
  return (
    <VideoContentsProvider>
      <PhotoContentsProvider>
        <LogoContentsProvider>
          <WebsiteContentsProvider>
            {children}
          </WebsiteContentsProvider>
        </LogoContentsProvider>
      </PhotoContentsProvider>
    </VideoContentsProvider>
  );
}
