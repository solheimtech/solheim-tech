import Logos from "@/app/components/Logos";
import CallToAction from "@/app/components/CallToAction";

export const metadata = {
  title: "Logos | Solheim Technologies",
  description: "Explore our logo designs and see the creative work we've done.",
  openGraph: {
    title: "Logos | Solheim Technologies",
    description: "Explore our logo designs and see the creative work we've done.",
    url: 'https://solheimtech.com/our-work/logos',
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
  return (
    <>
      <Logos />
      <CallToAction
        title="Ready to get started?"
        description="Schedule your free consultation today!"
        buttonText="Schedule Your Free Consultation"
        buttonLink="/meeting/free-consultation"
      />
    </>
  );
}