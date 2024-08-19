import LogosSlug from "@/app/components/LogosSlug";

export const metadata = {
  title: "Logo Details | Solheim Technologies",
  description: "View the details of our logo designs and creative work.",
  openGraph: {
    title: "Logo Details | Solheim Technologies",
    description: "View the details of our logo designs and creative work.",
    url: 'https://solheimtech.com/our-work/logos/[slug]',
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


export default function LogosPage() {
  return <LogosSlug />;
}
