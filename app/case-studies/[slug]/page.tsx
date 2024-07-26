"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState, useMemo, useEffect } from 'react';
import { useCaseStudiesContents } from '@/app/contents/CaseStudiesContents';
import { useWebsiteContents } from '@/app/contents/WebsiteContents';
import { useLogoContents } from '@/app/contents/LogoContents';
import { useVideoContents } from '@/app/contents/VideoContents';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const [activeContent, setActiveContent] = useState('website');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const { context: caseStudies } = useCaseStudiesContents();
  const caseStudy = useMemo(() => caseStudies.find((cs: any) => cs.slug === slug), [caseStudies, slug]);

  const { context: websites } = useWebsiteContents();
  const website = useMemo(() => websites.find((cs: any) => cs.slug === slug), [websites, slug]);

  const { context: videos } = useVideoContents();
  const video = useMemo(() => videos.find((v: any) => v.slug === slug), [videos, slug]);

  const { context: logos } = useLogoContents();
  const logo = useMemo(() => logos.find((l: any) => l.slug === slug), [logos, slug]);

  if (!isHydrated) {
    return null;
  }

  if (!website) {
    return <p>Case study not found</p>;
  }

  const availableContents = [
    { type: 'website', label: 'Website', isAvailable: !!website },
    { type: 'video', label: 'Video', isAvailable: !!video },
    { type: 'logo', label: 'Logo', isAvailable: !!logo },
  ].filter(content => content.isAvailable);

  const cData = caseStudy ? Object.entries(caseStudy.clicks).map(([month, value]) => ({ month, clicks: value })) : [];
  const rData = caseStudy ? Object.entries(caseStudy.seoValue).map(([month, value]) => ({ month, revenue: value })) : [];
  const xLabels = caseStudy ? Object.keys(caseStudy.clicks).map(month => month.charAt(0).toUpperCase() + month.slice(1, 3)) : [];

  return (
    <div className="flex flex-col min-h-dvh pt-[8rem] lg:pt-[2rem]">
      <section className="w-full h-[50vh] pt-[4rem] lg:pt-[6rem]">
        <div className="container space-y-10 xl:space-y-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-[2.5rem] sm:text-[5rem] font-medium tracking-tighter text-white">
                Discover work preformed for <br /> <span className="font-bold">{website.title}</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                {website.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-10 bg-white">
        <div className="container px-4 md:px-6">
          {/* <h2 className="text-[1.75rem] sm:text-[2.5rem] font-bold tracking-tighter text-black text-center pb-4">
            Check out the work we did for {website.title}
          </h2> */}
          <div className="flex justify-center space-x-4 mb-4">
            {availableContents.map((content) => (
              <button
                key={content.type}
                onClick={() => setActiveContent(content.type)}
                className={`px-4 py-2 shadow-sm text-sm font-medium rounded-md border-black border ${activeContent === content.type ? 'text-white bg-black' : 'bg-white text-black'}`}
              >
                {content.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode='wait'>
            {activeContent === 'video' && video && (
              <motion.div
                key="video"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <video src={video.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </motion.div>
            )}
            {activeContent === 'website' && website && (
              <motion.div
                key="website"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <video src={website.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </motion.div>
            )}
            {activeContent === 'logo' && logo && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center items-center h-full">
                  <Image src={logo.images[0].src} alt={logo.images[0].alt || ''} width={200} height={200} className="object-contain" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <section className="w-full py-10 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-[1.75rem] sm:text-[2.5rem] font-bold tracking-tighter text-black text-center pb-4">
            Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center w-full mb-8">
              <h3 className="text-lg font-semibold mb-2">User Visits per Month</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={cData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" interval={0} tick={{ transform: 'translate(10, 0)' }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {caseStudy && <ReferenceLine x={caseStudy.takeover} stroke="red" label="ST Take Over" />}
                  <Line type="monotone" dataKey="clicks" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col items-center w-full">
              <h3 className="text-lg font-semibold mb-2">Est. Monthly SEO Clicks Value</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={rData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" interval={0} tick={{ transform: 'translate(10, 0)' }} />
                  <YAxis tickFormatter={(value) => `$${value}`} />
                  <Tooltip formatter={(value) => `$${value}`} />
                  <Legend />
                  {caseStudy && <ReferenceLine x={caseStudy.takeover} stroke="red" label="ST Take Over" />}
                  <Line type="monotone" dataKey="revenue" stroke="#82ca9d" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
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