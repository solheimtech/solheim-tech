"use client";
import { useParams } from 'next/navigation';
import { useServicesContents } from '@/app/contents/ServicesContents';
import Image from 'next/image';
import Link from 'next/link';
import SpinningModel from '@/app/components/ThreeDModelSpinning';

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
    <div className="flex flex-col min-h-[100dvh]">
    <main className="flex-1 relative overflow-hidden">
      <div className="absolute right-0 top-[-60%] w-1/2 h-[150%] hidden lg:block z-20 pointer-events-auto">
        {item.modelUrl && <SpinningModel url={item.modelUrl} />}
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-[50%]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
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
                    Schedule a Consultation
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
            </div>
            <Image
              src={item.imgSrc}
              width="500"
              height="500"
              alt="Features"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
  );
};

export default ServiceDetail;
