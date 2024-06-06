"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/app/components/ui/button";
import { MenuIcon } from 'lucide-react';
import logo from '../../public/Solheim-Technologies-Banner.jpeg';

const Navbar = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16 my-8">
           <Link href="/" className="flex items-center" prefetch={false}>
        <Image src={logo} alt="Solheim Technologies Banner Logo" width={300} height={300} className="filter invert" />
      </Link>
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/" className="text-white hover:font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full">
          Home
        </Link>
        <div
          className="relative group"
          onMouseEnter={() => setSubmenuOpen(true)}
          onMouseLeave={() => setSubmenuOpen(false)}
        >
          <Link href="/about" className="flex items-center space-x-1 text-white hover:font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full">
            <span>About</span>
          </Link>
          <ul
            className={`absolute left-0 top-full bg-black transition-all duration-300 ease-in-out ${
              submenuOpen ? 'block' : 'hidden'
            }`}
          >
            <li>
              <Link href="/about/team" className="text-white hover:font-semibold">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/about/history" className="text-white hover:font-semibold">
                Our History
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/services" className="text-white hover:font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full">
          Services
        </Link>
        <Link href="/contact" className="text-white hover:font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full">
          Contact
        </Link>
      </nav>
      <div className="md:hidden">
        <Button variant="ghost" size="icon" className="hover:bg-gray-50 hover:text-black">
          <MenuIcon className="h-6 w-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
