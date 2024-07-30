import Logos from "@/app/components/Logos";
export const metadata = {
  title: "Logos | Solheim Technologies",
  description: "Explore our logo designs and see the creative work we've done.",
  openGraph: {
    title: "Logos | Solheim Technologies",
    description: "Explore our logo designs and see the creative work we've done.",
    url: 'https://solheimtech.com/our-work/logos',
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

export default function LogosPage() {
  return <Logos />;
}
