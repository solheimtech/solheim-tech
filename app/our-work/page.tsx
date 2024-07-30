import React from 'react';
import OurWork from '@/app/components/OurWork';

export const metadata = {
  title: "Our Work | Solheim Technologies",
  description: "Explore our portfolio and see the projects we've worked on.",
  openGraph: {
    title: "Our Work | Solheim Technologies",
    description: "Explore our portfolio and see the projects we've worked on.",
    url: 'https://solheimtech.com/our-work',
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

const OurWorkPage = () => {
  return (
    <OurWork />
  );
};

export default OurWorkPage;
