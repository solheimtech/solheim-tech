import Photos from "@/app/components/Photos";
export const metadata = {
  title: "Photos | Solheim Technologies",
  description: "Explore our photo gallery and see the visual stories we've captured.",
  openGraph: {
    title: "Photos | Solheim Technologies",
    description: "Explore our photo gallery and see the visual stories we've captured.",
    url: 'https://solheimtech.com/our-work/photos',
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


export default function PhotosPage() {
  return <Photos />;
}
