import React from 'react';
import PartnershipsComponent from '@/app/components/Partnerships';

export const metadata = {
  title: "Partnerships | Solheim Technologies",
  description: "Explore our partnerships with leading technology companies.",
  openGraph: {
    title: "Partnerships | Solheim Technologies",
    description: "Explore our partnerships with leading technology companies.",
    url: 'https://solheimtech.com/about/partnerships',
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

const PartnershipsPage: React.FC = () => {
  return (
    <>
      <PartnershipsComponent />
    </>
  );
};
export default PartnershipsPage;
