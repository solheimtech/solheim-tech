import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Solheim Technologies",
    description: "Explore our range of custom software development, web development, and digital marketing services at Solheim Technologies.",
    
    metadataBase: new URL('https://solheimtech.com'),
    openGraph: {
      title: "Services - Solheim Technologies",
      description: "Explore our range of custom software development, web development, and digital marketing services at Solheim Technologies.",
      type: 'website',
      locale: 'en_US',
      url: 'https://solheimtech.com',
      siteName: "Solheim Technologies",
      images: [
        {
          url: 'https://solheimtech.com/assets/images/ST-Icon.jpg',
          width: 600,
          height: 600,
          alt: 'Solheim Technologies Logo',
        },
      ],
    },
  };