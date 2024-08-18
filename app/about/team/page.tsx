import React, { useState } from "react";
import Team from "@/app/components/Team";
import CallToAction from "@/app/components/CallToAction";
export const metadata = {
  title: "Our Team | Solheim Technologies",
  description: "Meet the dedicated team behind Solheim Technologies.",
  openGraph: {
    title: "Our Team | Solheim Technologies",
    description: "Meet the dedicated team behind Solheim Technologies.",
    url: 'https://solheimtech.com/about/team',
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

const OurTeam = () => {

  return (
    <>
      <Team />
      <CallToAction
        title="Ready to get started?"
        description="Contact us today to learn more about our services and pricing."
        buttonText="Contact Us"
        buttonLink="/meeting/free-consultation"
      />
    </>
  );
};

export default OurTeam;