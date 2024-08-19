import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
      template: 'Our Work',
      default: "Our Work",
    },
    description: "Explore our portfolio and see the various website, video, and logo projects we've worked on.",
    
    metadataBase: new URL('https://solheimtech.com/our-work'),
    openGraph: {
      title: "Our Work",
      description: "Explore our portfolio and see the various website, video, and logo projects we've worked on.",
      type: 'website',
      locale: 'en_US',
      url: 'https://solheimtech.com/our-work',
      siteName: "Solheim Technologies",
      images: [
        {
          url: 'https://solheim.tech/assets/images/MetaBanner.jpg',
          width: 600,
          height: 600,
          alt: 'Solheim Technologies Logo',
        },
      ],
    },
  };

export default function WebsitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
 