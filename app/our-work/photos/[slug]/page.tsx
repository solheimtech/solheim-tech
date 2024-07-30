import PhotosSlug from "@/app/components/PhotosSlug";

export const metadata = {
  title: "Photo Details | Solheim Technologies",
  description: "View the details of our photo gallery and explore the visual stories we've captured.",
  openGraph: {
    title: "Photo Details | Solheim Technologies",
    description: "View the details of our photo gallery and explore the visual stories we've captured.",
    url: 'https://solheimtech.com/our-work/photos/[slug]',
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

export default function PhotosSlugPage() {
  return <PhotosSlug />;
}