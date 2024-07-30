import WebsitesSlug from "@/app/components/WebsitesSlug";

export const metadata = {
  title: "Website Detail | Solheim Technologies",
  description: "Explore our website projects and see the work we've done.",
  openGraph: {
    title: "Website Detail | Solheim Technologies",
    description: "Explore our website projects and see the work we've done.",
    url: 'https://solheimtech.com/our-work/websites/[slug]',
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

export default function WebsitesSlugPage() {
  return <WebsitesSlug />;
}
