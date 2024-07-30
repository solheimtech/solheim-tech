import React, { useState } from "react";
import Team from "@/app/components/Team";

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
    </>
  );
};

export default OurTeam;