import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
      template: '%s  | Solheim Technologies',
      default: "%s  | Solheim Technologies",
    },
    description: "Explore our portfolio and see the projects we've worked on.",
    
    metadataBase: new URL('https://solheimtech.com/our-work'),
    openGraph: {
      title: "%s  | Solheim Technologies",
      description: "Explore our portfolio and see the projects we've worked on.",
      type: 'website',
      locale: 'en_US',
      url: 'https://solheimtech.com/our-work',
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