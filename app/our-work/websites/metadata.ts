import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
      template: '%s | Websites',
      default: "Websites | Solheim Technologies",
    },
    description: "Explore our portfolio of custom website solutions tailored to your business needs.",
    
    metadataBase: new URL('https://solheimtech.com'),
    openGraph: {
      title: "Websites | Solheim Technologies",
      description: "Explore our portfolio of custom website solutions tailored to your business needs.",
      type: 'website',
      locale: 'en_US',
      url: 'https://solheimtech.com/our-work/websites',
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