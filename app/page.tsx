"use client"

import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import ConsultIcon from "@/public/assets/icons/consult.svg";
import DesignIcon from "@/public/assets/icons/web-design.svg";
import HostingIcon from "@/public/assets/icons/web-hosting.svg";
import SeoIcon from "@/public/assets/icons/seo.svg";
import Image from "next/image";

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
            setCharIndex(0);
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
    <main className="flex-1 pt-[40%] lg:pt-[0rem]">
      <section className="w-full h-[60vh] lg:h-screen flex items-start justify-center bg-cover bg-center">
        <div className="container mx-auto text-center mt-[10%] px-4 sm:px-0">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-white text-3xl font-extrabold tracking-tight sm:text-7xl xl:text-8xl w-full space-y-4">
              <span className="block">Solheim Technologies is</span> 
              <div className="block pt-0 lg:pt-2">dedicated <span className="bg-white text-black px-2 lg:px-4 inline-block">{displayedText}</span></div>
            </h1>
            <p className="max-w-[800px] mx-auto text-gray-200 text-base sm:text-2xl">
              Discover the power of our cutting-edge technology solutions and elevate your business to new heights.
            </p>
            <div className="flex flex-col gap-8 sm:flex-row justify-center animate-fade-in-up">
              <Link
                href="/meeting/free-consultation"
                className="relative z-10"
                prefetch={false}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative inline-flex h-12 items-center justify-center rounded-md bg-black px-6 sm:px-10 text-lg font-medium text-white border-2 border-white shadow transition-colors hover:bg-white hover:text-black focus-visible:outline-none"
                >
                  Free Consultation
                </motion.div>
              </Link>
              <Link
                href="/about"
                className="relative z-10"
                prefetch={false}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative inline-flex h-12 items-center justify-center rounded-md bg-white px-6 sm:px-10 text-lg font-medium text-black border-2 border-black shadow transition-colors hover:bg-black hover:text-white hover:border-white focus-visible:outline-none"
                >
                  About Solheim Technologies
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 sm:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid max-w-[120rem] mx-auto items-start gap-12 lg:grid-cols-4">
            <div className="grid gap-4 animate-fade-in">
              <Image src={DesignIcon} alt="Design Icon" className="h-12 w-12 text-gray-900" />
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Website Design</h2>
              <p className="text-sm sm:text-base text-gray-700">
              WordPress and Shopify website design that you and your customers will love. And Google, CDNs, computers, iPhones, Androids, well.. you get the idea.
              </p>
            </div>
            <div className="grid gap-4 animate-fade-in-up">
              <Image src={HostingIcon} alt="Hosting Icon" className="h-12 w-12 text-gray-900" />
              <p className="text-lg sm:text-xl font-bold text-gray-900">Website Hosting</p>
              <p className="text-sm sm:text-base text-gray-700">
              Lightning fast WordPress hosting coming from the cloud. Select your datacenter closest to your place of business for ultrafast and reliable service.
              </p>
            </div>
            <div className="grid gap-4 animate-fade-in-down">
              <Image src={SeoIcon} alt="SEO Icon" className="h-12 w-12 text-gray-900" />
              <p className="text-lg sm:text-xl font-bold text-gray-900">SEO</p>
              <p className="text-sm sm:text-base text-gray-700">
              Solheim Technologies specializes in SEO, ensuring your website achieves maximum visibility and traffic. We take the guesswork out of SEO management, allowing you to focus on growing your business.
              </p>
            </div>
            <div className="grid gap-4 animate-fade-in-down">
              <Image src={ConsultIcon} alt="Consult Icon" className="h-12 w-12 text-gray-900" />
              <p className="text-lg sm:text-xl font-bold text-gray-900">Tech Consulting</p>
              <p className="text-sm sm:text-base text-gray-700">
              We know how to do so much more than build amazing websites. If you want to move your business ahead of the competition, let us know.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}