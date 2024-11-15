import CaseStudiesSlug from '@/app/components/CaseStudiesSlug';

export const metadata = {
  title: "Case Studies | Solheim Technologies",
  description: "Explore our case studies and see how we've helped businesses succeed.",
  openGraph: {
    title: "Case Studies | Solheim Technologies",
    description: "Explore our case studies and see how we've helped businesses succeed.",
    url: 'https://solheimtech.com/case-studies',
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

export default function CaseStudyPage() {
    return (
    <>
      <CaseStudiesSlug />
    </>
  );
}