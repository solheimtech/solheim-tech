"use client"

import Link from "next/link";
import { useEffect, useState, useMemo } from "react";

export default function Home() {
  const words = useMemo(() => ["to innovation", "to excellence", "to your success"], []);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          if (currentWordIndex < words.length - 1) {
            setCurrentWordIndex((prevIndex) => prevIndex + 1);
          }
        }
      } else {
        if (charIndex < currentWord.length) {
          setDisplayedText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          if (currentWordIndex < words.length - 1) {
            setIsDeleting(true);
          }
        }
      }
    };

    const typingInterval = setInterval(handleTyping, isDeleting ? 100 : 200);

    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, currentWordIndex, words]);

  return (
    <main className="flex-1">
        <section className="w-full h-screen py-12 md:py-24 lg:py-32">
          <div className="container h-full px-4 md:px-6">
            <div className="grid h-full gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 h-full">
                <div className="space-y-2 animate-fade-in">
                  <h1 className="text-white text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Solheim Technologies is dedicated <span className="bg-white text-black px-1 inline-block">{displayedText}</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Discover the power of our cutting-edge technology solutions and elevate your business to new
                    heights.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in-up">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              {/* Import Image */}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid max-w-5xl mx-auto items-center gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1 animate-fade-in">
                <RocketIcon className="h-10 w-10 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold">Rapid Innovation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Accelerate your development with our cutting-edge tools and technologies.
                </p>
              </div>
              <div className="grid gap-1 animate-fade-in-up">
                <ShieldIcon className="h-10 w-10 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold">Secure by Design</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Safeguard your data with our robust security measures.
                </p>
              </div>
              <div className="grid gap-1 animate-fade-in-down">
                <BoltIcon className="h-10 w-10 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold">Lightning-fast Performance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Deliver lightning-fast experiences with our optimized infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

function BoltIcon(props: any) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function RocketIcon(props: any) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ShieldIcon(props: any) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}
