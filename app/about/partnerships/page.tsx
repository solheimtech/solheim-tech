import React from 'react';
import PartnershipsComponent from '@/app/components/Partnerships';
import CallToAction from '@/app/components/CallToAction';
export const metadata = {
  title: "Partnerships | Solheim Technologies",
  description: "Explore our partnerships with leading technology companies.",
  openGraph: {
    title: "Partnerships | Solheim Technologies",
    description: "Explore our partnerships with leading technology companies.",
    url: 'https://solheimtech.com/about/partnerships',
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

const PartnershipsPage: React.FC = () => {
  return (
    <>
      <PartnershipsComponent />
      <CallToAction
        title="Ready to get started?"
        description="Contact us today to learn more about our services and pricing."
        buttonText="Contact Us"
        buttonLink="/meeting/free-consultation"
      />
    </>
  );
};
export default PartnershipsPage;
