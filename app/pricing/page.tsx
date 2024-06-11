"use client";

import React from 'react';
import Link from 'next/link';

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  features: string[];
  link: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Basic",
    price: "$19.99/month",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
    ],
    link: "/pricing/basic",
  },
  {
    id: 2,
    name: "Standard",
    price: "$49.99/month",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
    ],
    link: "/pricing/standard",
  },
  {
    id: 3,
    name: "Premium",
    price: "$99.99/month",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
      "Feature 5",
    ],
    link: "/pricing/premium",
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
              <p className="text-gray-700 mb-4">{plan.price}</p>
              <ul className="mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={plan.link} className="text-blue-500 hover:underline">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
