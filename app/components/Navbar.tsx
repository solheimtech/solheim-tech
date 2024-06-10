"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/app/components/ui/button";
import { MenuIcon, X as CloseIcon } from 'lucide-react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import logo from '../../public/Solheim-Technologies-Banner.png';

const Navbar = () => {
  const [aboutSubmenuOpen, setAboutSubmenuOpen] = useState(false);
  const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false);
  const [contactSubmenuOpen, setContactSubmenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16 my-8">
      <Link href="/" className="flex items-center" prefetch={false}>
        <Image src={logo} alt="Solheim Technologies Banner Logo" width={300} height={300} className="filter invert" />
      </Link>
      <nav className="hidden lg:flex items-center space-x-6">
        <div
          className="relative group"
          onMouseEnter={() => setAboutSubmenuOpen(true)}
          onMouseLeave={() => setAboutSubmenuOpen(false)}
        >
          <Link href="/about" className="flex items-center space-x-1 text-white hover:font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full">
            <span>About</span>
            {aboutSubmenuOpen ? (
              <ChevronUpIcon className="h-4 w-4 text-white" />
            ) : (
              <ChevronDownIcon className="h-4 w-4 text-white" />
            )}
          </Link>
          <ul className={`absolute left-0 top-full bg-black transition-all duration-300 ease-in-out p-2 ${aboutSubmenuOpen ? 'block' : 'hidden'}`} style={{ width: '200px' }}>
            <li className="mb-2">
              <Link href="/about/team" className="text-white hover:font-semibold whitespace-nowrap">
              Meet the Team
              </Link>
            </li>
            <li>
              <Link href="/about/partnerships" className="text-white hover:font-semibold whitespace-nowrap">
                Partnerships
              </Link>
            </li>
          </ul>
        </div>
        
        <div
          className="relative group"
          onMouseEnter={() => setServicesSubmenuOpen(true)}
          onMouseLeave={() => setServicesSubmenuOpen(false)}
        >
          <Link href="/services" className="flex items-center space-x-1 text-white hover:font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full">
            <span>Services</span>
            {servicesSubmenuOpen ? (
              <ChevronUpIcon className="h-4 w-4 text-white" />
            ) : (
              <ChevronDownIcon className="h-4 w-4 text-white" />
            )}
          </Link>
          <ul className={`absolute left-0 top-full bg-transparent transition-all duration-300 ease-in-out p-2 ${servicesSubmenuOpen ? 'block' : 'hidden'}`} style={{ width: '200px' }}>
            <li className="mb-2">
              <Link href="/services/website-design" className="text-white hover:font-semibold whitespace-nowrap">
                Website Design
              </Link>
            </li>
            <li className="mb-2"> 
              <Link href="/services/local-seo-pro" className="text-white hover:font-semibold whitespace-nowrap">
                Local SEO Pro
              </Link>
            </li>
            <li>
              <Link href="/services/aerial-photography-and-videography" className="text-white hover:font-semibold whitespace-nowrap">
              Aerial Photos and Videos
              </Link>
            </li>
          </ul>
        </div>

        <Link href="/membership" className="text-white hover:font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full">
          Membership
        </Link>

        <Link href="/our-work" className="text-white hover:font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full">
          Our Work
        </Link>

        <div
          className="relative group"
          onMouseEnter={() => setContactSubmenuOpen(true)}
          onMouseLeave={() => setContactSubmenuOpen(false)}
        >
          <Link href="/contact" className="flex items-center space-x-1 text-white hover:font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full">
            <span>Contact</span>
            {contactSubmenuOpen ? (
              <ChevronUpIcon className="h-4 w-4 text-white" />
            ) : (
              <ChevronDownIcon className="h-4 w-4 text-white" />
            )}
          </Link>
          <ul className={`absolute left-0 top-full bg-transparent transition-all duration-300 ease-in-out p-2 ${contactSubmenuOpen ? 'block' : 'hidden'}`} style={{ width: '200px' }}>
            <li className="mb-2">
              <Link href="/contact/free-consultation" className="text-white hover:font-semibold whitespace-nowrap">
                Free Consultation
              </Link>
            </li>
            <li className="mb-2"> 
              <Link href="/contact/project-estimate" className="text-white hover:font-semibold whitespace-nowrap">
                Project Estimate
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact/remote-tech-support" className="text-white hover:font-semibold whitespace-nowrap">
                Remote Tech Support
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact/resources" className="text-white hover:font-semibold whitespace-nowrap">
                Resources Center
              </Link>
            </li>
            <li>
              <Link href="/contact/resources/articles" className="text-white hover:font-semibold whitespace-nowrap">
                Articles
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="lg:hidden relative z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <MenuIcon className="h-6 w-6 text-white" />
        </Button>
        <div
          className={`fixed top-0 right-0 h-full bg-black transition-transform transform ${
            mobileNavOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ width: '250px' }}
        >
          <div className="p-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-50 hover:text-black"
              onClick={() => setMobileNavOpen(false)}
            >
              <CloseIcon className="h-6 w-6 text-white" />
            </Button>
          </div>
          <nav className="flex flex-col space-y-4 p-4">
            <div className="relative group">
              <Link href="/about" className="text-white hover:font-semibold flex items-center space-x-1" onClick={() => setMobileNavOpen(false)}>
                <span>About Us</span>
              </Link>
              <ul className="transition-all duration-300 ease-in-out p-2 block">
                <li className="mb-2">
                  <Link href="/about/team" className="text-white hover:font-semibold whitespace-nowrap" onClick={() => setMobileNavOpen(false)}>
                    Meet the Team
                  </Link>
                </li>
                <li className="">
                  <Link href="/about/partnerships" className="text-white hover:font-semibold whitespace-nowrap" onClick={() => setMobileNavOpen(false)}>
                    Partnerships
                  </Link>
                </li>
              </ul>
            </div>

            <div className="relative group">
              <Link href="/services" className="text-white hover:font-semibold flex items-center space-x-1" onClick={() => setMobileNavOpen(false)}>
                <span>Services</span>
              </Link>
              <ul className="transition-all duration-300 ease-in-out p-2 block">
                <li className="mb-2">
                  <Link href="/services/website-design" className="text-white hover:font-semibold whitespace-nowrap" onClick={() => setMobileNavOpen(false)}>
                    Website Design
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/services/local-seo-pro" className="text-white hover:font-semibold whitespace-nowrap" onClick={() => setMobileNavOpen(false)}>
                    Local SEO Pro
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/services/aerial-photography-and-videography" className="text-white hover:font-semibold whitespace-nowrap" onClick={() => setMobileNavOpen(false)}>
                    Aerial Photos and Videos
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact/resources" className="text-white hover:font-semibold whitespace-nowrap" onClick={() => setMobileNavOpen(false)}>
                    Resources Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact/resources/articles" className="text-white hover:font-semibold whitespace-nowrap" onClick={() => setMobileNavOpen(false)}>
                    Articles
                  </Link>
                </li>
              </ul>
            </div>

            <Link href="/membership" className="text-white hover:font-semibold" onClick={() => setMobileNavOpen(false)}>
              Membership
            </Link>
            <Link href="/our-work" className="text-white hover:font-semibold" onClick={() => setMobileNavOpen(false)}>
              Our Work
            </Link>
            <div className="relative group">
              <Link href="/contact" className="text-white hover:font-semibold flex items-center space-x-1" onClick={() => setMobileNavOpen(false)}>
                <span>Contact</span>
              </Link>
              <ul className="transition-all duration-300 ease-in-out p-2 block">
                <li className="mb-2">
                  <Link href="/contact/free-consultation" className="text-white hover:font-semibold whitespace-nowrap" onClick={() => setMobileNavOpen(false)}>
                    Free Consultation
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact/project-estimate" className="text-white hover:font-semibold whitespace-nowrap" onClick={() => setMobileNavOpen(false)}>
                    Project Estimate
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact/remote-tech-support" className="text-white hover:font-semibold whitespace-nowrap" onClick={() => setMobileNavOpen(false)}>
                    Remote Tech Support
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact/resources" className="text-white hover:font-semibold whitespace-nowrap" onClick={() => setMobileNavOpen(false)}>
                    Resources Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact/resources/articles" className="text-white hover:font-semibold whitespace-nowrap" onClick={() => setMobileNavOpen(false)}>
                    Articles
                  </Link>
                </li>
              </ul>
              
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
