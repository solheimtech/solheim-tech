import { Metadata } from 'next';
import { metadata as staticMetadata } from './metadata';

export const generateMetadata = async (): Promise<Metadata> => {
  return staticMetadata;
};

export default function WebsitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
 