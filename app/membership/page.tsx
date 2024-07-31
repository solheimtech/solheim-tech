"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import StandardIcon from "@/public/assets/images/ST-StndIcon.png";
import PremiumIcon from "@/public/assets/images/ST-PremIcon.png";
import ProIcon from "@/public/assets/images/ST-ProIcon.png";

interface MembershipPlan {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  link: string;
}

const membershipPlans: MembershipPlan[] = [
  {
    id: 1,
    image: StandardIcon.src,
    name: "Standard",
    description: "5 hours of service with active rollover, WordPress Website Hosting, monthly 30-minute strategy call, graphic design, Local SEO Pro for 1 location, remote PC/Mac support, and technology assistance.",
    price: "$499/month",
    features: [
      "5 Active Hours of Monthly Service ($750 Value)",
      "Unused Hours Roll Over While Membership Remains Active",
      "Small Business Website Hosting ($49 Value)",
      "Monthly 30-Minute Strategy Call",
      "Priority Support",
      "Graphic Design",
      "Local SEO Pro",
      "Google Business Profile Review Response",
      "Remote PC/Mac Support",
      "Technology Support",
      "Communication Space",
      "Website Updates"
    ],
    link: "https://pay.solheimtech.com/b/28o2bd8ew7wXaFq8x3",
  },
  {
    id: 2,
    image: PremiumIcon.src,
    name: "Premium",
    description: "10 hours of service with active rollover, monthly 30-minute strategy call, communication space, social media management, graphic design, reputation management, review response, SEO, remote PC/Mac support, and technology assistance.",
    price: "$999/month",
    features: [
      "10 Active Hours of Monthly Service ($1,500 Value)",
      "Unused Hours Roll Over While Membership Remains Active",
      "Small Business Website Hosting ($49 Value)",
      "Monthly 30-Minute Strategy Call",
      "Search Engine Optimization (SEO)",
      "Priority Support",
      "Graphic Design",
      "Reputation Management",
      "Google Business Profile Review Response",
      "Remote PC/Mac Support",
      "Technology Support",
      "Communication Space",
      "Social Media Management",
      "Website Updates",
      "Local SEO Pro"
    ],
    link: "https://pay.solheimtech.com/b/5kA8zB9iA4kL4h25kU",
  },
  {
    id: 3,
    image: ProIcon.src,
    name: "Pro",
    description: "20 hours of service with active rollover, twice monthly 30-minute strategy calls, communication space, social media management, graphic design, reputation management, review response, remote PC/Mac support, and more.",
    price: "$1,999/month",
    features: [
      "20 Hours of Monthly Service ($3,000 Value)",
      "Unused Hours Roll Over While Membership Remains Active",
      "Small Business Website Hosting ($49 Value)",
      "Twice Monthly 30-Minute Strategy Calls",
      "Search Engine Optimization (SEO)",
      "Priority Support",
      "Graphic Design",
      "Reputation Management",
      "Google Business Profile Review Response",
      "Remote PC/Mac Support",
      "Technology Support",
      "Communication Space",
      "Social Media Management",
      "Website Updates",
      "Local SEO Pro"
    ],
    link: "https://pay.solheimtech.com/b/3cs3fhbqIeZp00M00z",
  },
];

export default function Membership() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedCards((prevExpandedCards) =>
      prevExpandedCards.includes(id)
        ? prevExpandedCards.filter((cardId) => cardId !== id)
        : [...prevExpandedCards, id]
    );
  };

  return (
    <div className="text-center pb-[10rem] pt-[8rem] lg:pt-[0rem]">
      <div className="flex flex-col items-center justify-start h-[70vh] pt-[8rem]">
        <h1 className="mb-4 text-[2.5rem] sm:text-[5rem] font-bold text-white pb-8">Solheim Technologies Membership</h1>
        <h2 className="text-[1.5rem] lg:text-[2rem] font-bold text-white pb-8">Unmatched Website Support.  Business & Technology Consulting</h2>
        <p className="text-white font-light w-[50%]">In the ever-evolving technological landscape, robust support and expert guidance are crucial for success. Recognizing this, Solheim Technologies has created the Solheim Technologies Membership, a subscription offering unparalleled service, strategic benefits, and cutting-edge Search Engine Optimization – all designed to propel your business to the forefront of your industry</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-4 text-[2.5rem] lg:text-[3rem] font-bold text-white pb-8">Choose Your Membership Plan</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-[10%]">
        {membershipPlans.map((plan) => (
          <motion.div
            key={plan.id}
            className="flex flex-col justify-between w-full h-full"
          >
            <MembershipCard
              plan={plan}
              expanded={expandedCards.includes(plan.id)}
              toggleExpand={() => toggleExpand(plan.id)}
            />
          </motion.div>
        ))}
      </div>
      <p className="text-center text-white pt-[3rem] font-light">Looking for something else? <Link href="/contact" className="text-white underline underline-offset-4 font-medium hover:text-gray-300">Contact Us</Link></p>
    </div>
  );
}

function MembershipCard({
  plan,
  expanded,
  toggleExpand,
}: {
  plan: MembershipPlan;
  expanded: boolean;
  toggleExpand: () => void;
}) {
  return (
    <div
      className={`flex flex-col justify-between p-6 bg-white shadow-lg rounded-lg w-full max-w-md ${expanded ? '' : 'h-[44rem], lg:h-[41rem]'}`}
    >
      <div className="mb-4">
        <Image src={plan.image} alt={plan.name} width={100} height={100} className="mx-auto mb-4 rounded-lg" />
        <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
        <p className="text-gray-600 mb-4 h-[10rem]">{plan.description}</p>
        <p className="text-2xl font-bold mb-[2rem] h-[0rem] pt-10 lg:pt-0">{plan.price}</p>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <Link href={plan.link}>
          <motion.div
            className="text-black bg-white border border-black hover:bg-black hover:text-white mb-[2rem] block py-2 px-4 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex justify-center items-center">
              <span className="">Subscribe</span>
            </div>
          </motion.div>
        </Link>
        <ul className="text-left mb-4 flex-grow">
          {plan.features.slice(0, 3).map((feature: string, index: number) => (
            <li key={index} className="text-gray-700 mb-1">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
          {plan.features.length > 3 && (
            <div>
              <AnimatePresence>
                {expanded && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0, transition: { duration: 0.1 } }}
                    transition={{ duration: 0.2 }}
                  >
                    {plan.features.slice(3).map((feature, index) => (
                      <li key={index} className="text-gray-700 mb-1">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
              <summary
                className="text-blue-500 cursor-pointer flex items-center"
                onClick={toggleExpand}
              >
                {expanded ? (
                  <>
                    <span>Show Less</span>
                    <span className="ml-2">-</span>
                  </>
                ) : (
                  <>
                    <span>Show More</span>
                    <span className="ml-2">+</span>
                  </>
                )}
              </summary>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
