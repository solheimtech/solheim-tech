"use client";

import Tilt from 'react-parallax-tilt';
import Link from 'next/link';
import { useCaseStudiesContents } from '@/app/contents/CaseStudiesContents';

export default function Component() {
  const { context: caseStudies } = useCaseStudiesContents();

  return (
    <div className="flex flex-col min-h-dvh pt-[8rem] lg:pt-[2rem]">
      <section className="w-full">
        <div className="container space-y-10 xl:space-y-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-[2.5rem] sm:text-[5rem] font-bold tracking-tighter text-white">
                Our Case Studies
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Explore how we&apos;ve helped our clients achieve their goals through our web development expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((caseStudy, index) => (
            <Link key={index} href={`/case-studies/${caseStudy.slug}`}>
              <Tilt className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:border-primary hover:shadow-md">
                <video
                  src={caseStudy.src}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover video-autoplay-mobile"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary pt-4">{caseStudy.title}</h3>
                  <p className="text-muted-foreground">{caseStudy.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <TrendingUpIcon className="h-4 w-4 text-primary" />
                    <span>{caseStudy.result}</span>
                  </div>
                </div>
              </Tilt>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}