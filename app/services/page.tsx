import Services from '@/app/components/ServicesCard';
import { NextPage } from "next";

export const metadata = {
  title: "Services | Solheim Technologies",
  description: "Explore our range of expert services at Solheim Technologies.",
  openGraph: {
    title: "Services | Solheim Technologies",
    description: "Explore our range of expert services at Solheim Technologies.",
    url: 'https://solheimtech.com/services',
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

const Page: NextPage = () => {
  return (
    <div>
      <Services />
    </div>
  );
};

export default Page;
