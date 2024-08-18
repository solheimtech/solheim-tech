import CallToAction from '@/app/components/CallToAction';

export const metadata = {
  title: "Pricing | Solheim Technologies",
  description: "Explore our pricing plans and choose the best one for your needs.",
  openGraph: {
    title: "Pricing | Solheim Technologies",
    description: "Explore our pricing plans and choose the best one for your needs.",
    url: 'https://solheimtech.com/pricing',
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
export default function PricingPage() {
  return (
    <div className='text-white p-6 max-w-4xl mx-auto pt-[8rem] lg:pt-[2rem]'>
      <h1 className='text-3xl font-bold mb-4'>Pricing Plans</h1>
      <p className='mb-4'>
        Explore our pricing plans and choose the best one for your needs. We offer a variety of services to suit different requirements and budgets.
      </p>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Memberships</h2>
        <ul className='list-disc list-inside mb-4'>
          <li>Standard Membership - $499 / month</li>
          <li>Premium Membership - $999 / month</li>
          <li>Pro Membership - $1,999 / month</li>
          <li>Elite Membership - $3,999 / month</li>
        </ul>
      </section>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Next.js Websites</h2>
        <ul className='list-disc list-inside mb-4'>
          <li>1-5 Pages - $1,500 / page</li>
          <li>6-10 Pages - $1,300 / page</li>
          <li>11-20 Pages - $1,100 / page</li>
          <li>21+ Pages - $900 / page</li>
        </ul>
      </section>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>WordPress Websites</h2>
        <ul className='list-disc list-inside mb-4'>
          <li>1-5 Pages - $750 / page</li>
          <li>6-10 Pages - $650 / page</li>
          <li>11-20 Pages - $550 / page</li>
          <li>21+ Pages - $450 / page</li>
        </ul>
      </section>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Hosting</h2>
        <ul className='list-disc list-inside mb-4'>
          <li>Hosting - $49 / month</li>
          <li>Hosting+ - $99 / month</li>
        </ul>
      </section>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Local SEO Pro</h2>
        <ul className='list-disc list-inside mb-4'>
          <li>1 Location - $299 / month</li>
          <li>2+ Locations - $249 / month</li>
        </ul>
      </section>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Local SEO Pro+</h2>
        <ul className='list-disc list-inside mb-4'>
          <li>1 Location - $399 / month</li>
          <li>2+ Locations - $349 / month</li>
        </ul>
      </section>
      <CallToAction
    title="Ready to get started?"
    description="Contact us today to learn more about our services and pricing."
    buttonText="Contact Us"
    buttonLink="/meeting/free-consultation"
  />
    </div>
    
  );
}
