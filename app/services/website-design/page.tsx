import WebsiteDesign from "@/app/components/WebsiteDesign";
import { NextPage } from "next";

export const metadata = {
  title: "Website Design | Solheim Technologies",
  description: "Create stunning and responsive websites with our expert website design services.",
  openGraph: {
    title: "Website Design | Solheim Technologies",
    description: "Create stunning and responsive websites with our expert website design services.",
    url: 'https://solheimtech.com/services/website-design',
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

const WebsiteDesignPage: NextPage = () => {
  return <WebsiteDesign />;
};

export default WebsiteDesignPage;
