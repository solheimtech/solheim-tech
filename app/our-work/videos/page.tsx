import Videos from "@/app/components/Videos";

export const metadata = {
  title: "Videos | Solheim Technologies",
  description: "Explore our video gallery and watch the stories we've captured.",
  openGraph: {
    title: "Videos | Solheim Technologies",
    description: "Explore our video gallery and watch the stories we've captured.",
    url: 'https://solheimtech.com/our-work/videos',
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

export default function VideosPage() {
  return <Videos />;
}
