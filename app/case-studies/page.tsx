import CaseStudies from '@/app/components/CaseStudies';

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
    </div>
  );
}