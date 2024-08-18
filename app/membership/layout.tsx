import { Metadata } from 'next';
import { metadata as staticMetadata } from './metadata';
import CallToAction from '@/app/components/CallToAction';
export const generateMetadata = async (): Promise<Metadata> => {
  return staticMetadata;
};

export default function WebsitesLayout({ children }: { children: React.ReactNode }) {
  return <>
  {children}
  <CallToAction
    title="Ready to get started?"
    description="Schedule your free consultation today!"
    buttonText="Schedule Your Free Consultation"
    buttonLink="/meeting/free-consultation"
  />
  </>;
}
 