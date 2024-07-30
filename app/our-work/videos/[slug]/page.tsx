import VideosSlug from "@/app/components/VideosSlug";

export const metadata = {
  title: "Video Detail | Solheim Technologies",
  description: "Watch our video stories and explore the work we've done.",
  openGraph: {
    title: "Video Detail | Solheim Technologies",
    description: "Watch our video stories and explore the work we've done.",
    url: 'https://solheimtech.com/our-work/videos/[slug]',
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

export default function VideosSlugPage() {
  return <VideosSlug />;
}
