import { Metadata } from 'next'
import { metadata as staticMetadata } from './metadata';

type Props = {
  params: { slug: string }
}

async function getServiceData(slug: string) {
  console.log('Fetching data for slug:', slug);
  // Simulating API call or database query
  await new Promise(resolve => setTimeout(resolve, 100))
  
  const services = [
    { slug: 'local-seo-pro', title: 'Local SEO Pro', description: 'Our local SEO services help businesses like yours increase their online visibility, drive more targeted traffic, and generate more qualified leads in your local market.' },
    { slug: 'website-design', title: 'Website Design', description: 'Our website design services focus on creating visually stunning, user-friendly, and optimized websites that drive results for your business.' },
    { slug: 'cloud-hosting', title: 'Cloud Hosting', description: 'Our cloud hosting services ensure your website is always available, secure, and scalable to meet your growing business needs.' },
    { slug: 'content-marketing', title: 'Content Marketing', description: 'Our content marketing services help you create and distribute valuable content to attract and retain a clearly defined audience.' },
    { slug: 'graphic-design', title: 'Graphic Design', description: 'Our graphic design services focus on creating visually appealing and effective designs that enhance your brand\'s identity.' },
    { slug: 'search-engine-optimization', title: 'Search Engine Optimization', description: 'Our search engine optimization services help you increase your website\'s visibility, drive more traffic, and generate leads.' },
    { slug: 'social-media', title: 'Social Media', description: 'Our social media services help you build a strong online presence, engage with your audience, and drive business results.' },
    { slug: 'technology-management', title: 'Technology Management', description: 'Our technology management services help you optimize your technology infrastructure for improved efficiency and productivity.' },
    { slug: 'website-management', title: 'Website Management', description: 'Our website management services ensure your website is always up-to-date, secure, and optimized for performance.' },
    { slug: 'aerial-photography-and-videography', title: 'Aerial Photography and Videography', description: 'Our aerial photography and videography services provide unique visual content to showcase your business.' },
  ]
  
  const service = services.find(s => s.slug === slug);
  console.log('Found service:', service);
  return service;
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  console.log('Generating metadata for params:', params);
  const slug = params.slug
  const service = await getServiceData(slug)

  const metadata = {
    ...staticMetadata,
    title: service
      ? `${service.title} | Solheim Technologies`
      : 'Services | Solheim Technologies',
    description: service
      ? service.description
      : 'Explore our range of custom software development, web development, and digital marketing services at Solheim Technologies.',
    openGraph: {
      ...staticMetadata.openGraph,
      title: service ? `${service.title} | Solheim Technologies` : 'Services | Solheim Technologies',
      description: service ? service.description : 'Explore our services at Solheim Technologies',
    },
  }

  console.log('Generated metadata:', metadata);
  return metadata;
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}