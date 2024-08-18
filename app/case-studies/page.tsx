import CaseStudies from '@/app/components/CaseStudies';
import CallToAction from '@/app/components/CallToAction';
export const metadata = {
  title: "Case Studies | Solheim Technologies",
  description: "Explore our case studies and see how we've helped businesses succeed.",
  openGraph: {
    title: "Case Studies | Solheim Technologies",
    description: "Explore our case studies and see how we've helped businesses succeed.",
    url: 'https://solheimtech.com/case-studies',
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


export default function Component() {

  return (
    <div>
      <CaseStudies />
      <CallToAction
        title="Ready to get started?"
        description="Schedule your free consultation today!"
        buttonText="Schedule Your Free Consultation"
        buttonLink="/meeting/free-consultation"
      />
    </div>
  );
}