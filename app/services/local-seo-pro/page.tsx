import React from "react";
import { LocalSeoPro } from "@/app/components/LocalSeoPro";

export const metadata = {
  title: "Local SEO Pro | Solheim Technologies",
  description: "Boost your local online presence with our expert local SEO services.",
  openGraph: {
    title: "Local SEO Pro | Solheim Technologies",
    description: "Boost your local online presence with our expert local SEO services.",
    url: 'https://solheimtech.com/services/local-seo-pro',
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

export default function LocalSEOProPage() {
  return (
    <div>
      <LocalSeoPro />
    </div>
  );
}
