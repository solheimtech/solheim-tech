"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiCircleCheck } from "react-icons/ci";

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
    image: "/membership/basic.png",
    name: "Basic",
    description: "Ideal for a small business looking to start with a solid foundation.",
    price: "$19.99/month",
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
    link: "/membership/basic",
  },
  {
    id: 2,
    image: "/membership/standard.png",
    name: "Standard",
    description: "Ideal for a small business looking to start with a solid foundation.",
    price: "$49.99/month",
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
    link: "/membership/standard",
  },
  {
    id: 3,
    image: "/membership/premium.png",
    name: "Premium",
    description: "Ideal for a small business looking to start with a solid foundation.",
    price: "$99.99/month",
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
    link: "/membership/premium",
  },
];

const Membership: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Membership Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {membershipPlans.map((plan) => (
          <div key={plan.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <Image src={plan.image} alt={plan.name} width={100} height={100} className="w-full h-48 object-cover" />
              <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
              <p className="text-gray-500 mb-4">{plan.description}</p>
              <p className="text-black text-2xl font-semibold mb-4">{plan.price}</p>
              <ul className="mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-black flex items-center">
                    <CiCircleCheck className="w-4 h-4 text-green-500 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
