"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../public/assets/images/Solheim-Technologies-Banner.png';
import MobileNav from './ui/mobile-nav';

const Navbar = () => {
  const [aboutSubmenuOpen, setAboutSubmenuOpen] = useState(false);
  const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false);
  const [contactSubmenuOpen, setContactSubmenuOpen] = useState(false);
  const [ourWorkSubmenuOpen, setOurWorkSubmenuOpen] = useState(false);
  const [membershipSubmenuOpen, setMembershipSubmenuOpen] = useState(false);

  const submenuVariants = {
    open: { opacity: 1, scale: 1, y: 0 },
    closed: { opacity: 0, scale: 0.95, y: -10 }
  };

  const menuItems = [
    {
      label: "About",
      href: "/about",
      isOpen: aboutSubmenuOpen,
      setIsOpen: setAboutSubmenuOpen,
      sublinks: [
        { label: "Meet the Team", href: "/about/team" },
        { label: "Partnerships", href: "/about/partnerships" }
      ]
    },
    {
      label: "Services",
      href: "/services",
      isOpen: servicesSubmenuOpen,
      setIsOpen: setServicesSubmenuOpen,
      sublinks: [
        { label: "Website Design", href: "/services/website-design", slug: "website-design" },
        { label: "Local SEO Pro", href: "/services/local-seo-pro", slug: "local-seo-pro" },
        { label: "Cloud Hosting", href: "/services/cloud-hosting", slug: "cloud-hosting" },
        { label: "Content Marketing", href: "/services/content-marketing", slug: "content-marketing" },
        { label: "Graphic Design", href: "/services/graphic-design", slug: "graphic-design" },
        { label: "Search Engine Optimization", href: "/services/search-engine-optimization", slug: "search-engine-optimization" },
        { label: "Social Media", href: "/services/social-media", slug: "social-media" },
        { label: "Technology Management", href: "/services/technology-management", slug: "technology-management" },
        { label: "Website Management", href: "/services/website-management", slug: "website-management" },
        { label: "Aerial Photos and Videos", href: "/services/aerial-photography-and-videography", slug: "aerial-photography-and-videography" }
      ]
    },
    {
      label: "Membership",
      href: "/membership",
    },
    {
      label: "Case Studies",
      href: "/case-studies",
    },
    {
      label: "Our Work",
      href: "/our-work",
      isOpen: ourWorkSubmenuOpen,
      setIsOpen: setOurWorkSubmenuOpen,
      sublinks: [
        { label: "Websites", href: "/our-work/websites" },
        { label: "Logos", href: "/our-work/logos" },
        { label: "Photos", href: "/our-work/photos" },
        { label: "Videos", href: "/our-work/videos" }
      ]
    },
    {
      label: "Contact",
      href: "/contact",
      isOpen: contactSubmenuOpen,
      setIsOpen: setContactSubmenuOpen,
      sublinks: [
        { label: "Free Consultation", href: "/meeting/free-consultation" },
        { label: "Project Estimate", href: "/contact/project-estimate" },
        { label: "Remote Tech Support", href: "/contact/remote-tech-support" },
        { label: "Resources Center", href: "/contact/resources" },
        { label: "Articles", href: "/contact/resources/articles" }
      ]
    }
  ];

  return (
    <>
      <div className="hidden container mx-auto px-4 md:px-6 lg:flex items-center justify-between h-16 my-8">
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image src={logo} alt="Solheim Technologies Banner Logo" width={300} height={300} className="filter invert" loading='lazy'/>
        </Link>
        <nav className="lg:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => item.setIsOpen && item.setIsOpen(true)}
              onMouseLeave={() => item.setIsOpen && item.setIsOpen(false)}
            >
              <Link href={item.href} className="flex items-center space-x-1 text-white hover:font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full">
                <span>{item.label}</span>
                {item.sublinks && item.sublinks.length > 0 && (item.isOpen ? (
                  <ChevronUpIcon className="h-4 w-4 text-white" />
                ) : (
                  <ChevronDownIcon className="h-4 w-4 text-white" />
                ))}
              </Link>
              {item.sublinks && item.sublinks.length > 0 && (
                <AnimatePresence>
                  {item.isOpen && (
                    <motion.ul
                      className="absolute left-0 top-full bg-black rounded-lg shadow-lg transition-all duration-300 ease-in-out p-2"
                      style={{ width: '250px', zIndex: 10 }}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={submenuVariants}
                      transition={{ duration: 0.05 }}
                    >
                      {item.sublinks.map((sublink, subIndex) => (
                        <li key={subIndex} className="mb-2 last:mb-0">
                          <Link href={sublink.href} className="text-white hover:font-semibold whitespace-nowrap block px-2 py-1 rounded hover:bg-white hover:text-black transition duration-300 ease-in-out">
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>
      </div>
      <MobileNav menuItems={menuItems} />
    </>
  );
};

export default Navbar;
