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
        Explore our pricing plans and choose the best one for your needs. We offer a variety of plans to suit different requirements and budgets.
      </p>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Basic Plan</h2>
        <p className='mb-4'>
          Our Basic Plan is perfect for individuals and small businesses. It includes essential features to get you started.
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <p className='font-bold'>$9.99/month</p>
      </section>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Pro Plan</h2>
        <p className='mb-4'>
          Our Pro Plan is designed for growing businesses. It includes advanced features to help you scale.
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
        <p className='font-bold'>$29.99/month</p>
      </section>
      <section className='mb-6'>
        <h2 className='text-2xl font-semibold mb-2'>Enterprise Plan</h2>
        <p className='mb-4'>
          Our Enterprise Plan is tailored for large organizations. It includes all features and premium support.
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
          <li>Feature 5</li>
        </ul>
        <p className='font-bold'>$99.99/month</p>
      </section>
    </div>
  );
}
