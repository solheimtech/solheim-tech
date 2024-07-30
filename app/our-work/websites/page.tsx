import Websites from "@/app/components/Websites";

export const metadata = {
  title: "Websites | Solheim Technologies",
  description: "Explore our website projects and see the work we've done.",
  openGraph: {
    title: "Websites | Solheim Technologies",
    description: "Explore our website projects and see the work we've done.",
    url: 'https://solheimtech.com/our-work/websites',
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

export default function WebsitesPage() {
  return <Websites />;
}
