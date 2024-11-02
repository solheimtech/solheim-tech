"use client";
import { useParams } from 'next/navigation';
import { useServicesContents } from '@/app/contents/ServicesContents';
import Image from 'next/image';
import Link from 'next/link';
import CallToAction from '@/app/components/CallToAction';

const ServiceDetail = () => {
  const { slug } = useParams();
  const { context: items } = useServicesContents();

  if (!slug) {
    return <div className="text-center">There is no ID found</div>;
  }

  const item = items.find((item: any) => item.slug === slug);

  if (!item) {
    return <div className="text-center">Item not found</div>;
  }

  return (
    <div className="flex flex-col min-h-[100dvh] pt-[8rem] lg:pt-[0rem]">
    <div className="flex-1 relative overflow-hidden">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-full md:max-w-[70%] lg:max-w-[50%]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-white">
                  {item.header.title}
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  {item.header.description}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/meeting/free-consultation"
                  prefetch={false}
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-2 text-lg font-medium text-black border-2 border-black shadow transition-colors hover:bg-black hover:text-white hover:border-white focus-visible:outline-none"
                >
                    Schedule Your Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{item.subHeader.title}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {item.subHeader.description}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                {item.features.map((feature, index) => (
                  <li key={index}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link
                  href="/meeting/free-consultation"
                  prefetch={false}
                  className="inline-flex items-center justify-center rounded-md bg-transparent px-6 py-2 text-lg font-medium text-black border-2 border-black shadow transition-colors hover:bg-black hover:text-white hover:border-white focus-visible:outline-none"
                >
                    Schedule Your Free Consultation
                </Link>
              </div>
            </div>
            <div className="w-full max-w-2xl mx-auto" style={{ maxHeight: '500px' }}>
              <Image
                src={item.imgSrc}
                width={400}
                height={400}
                alt="Features"
                className="mx-auto w-full h-auto rounded-xl object-contain sm:w-full lg:order-last"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <CallToAction 
      title="Ready to get started?"
      description="Schedule your free consultation today!"
      buttonText="Schedule Your Free Consultation"
      buttonLink="/meeting/free-consultation"
    /> 
    </div>
  );
};

export default ServiceDetail;