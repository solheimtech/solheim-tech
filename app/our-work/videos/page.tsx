import Videos from "@/app/components/Videos";
import CallToAction from "@/app/components/CallToAction";
export const metadata = {
  title: "Videos | Solheim Technologies",
  description: "Explore our video gallery and watch the stories we've captured.",
  openGraph: {
    title: "Videos | Solheim Technologies",
    description: "Explore our video gallery and watch the stories we've captured.",
    url: 'https://solheimtech.com/our-work/videos',
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

export default function VideosPage() {
  return (
    <>
      <Videos />
      <CallToAction
        title="Ready to get started?"
        description="Schedule your free consultation today!"
        buttonText="Schedule Your Free Consultation"
        buttonLink="/meeting/free-consultation"
      />
    </>
  );
}
