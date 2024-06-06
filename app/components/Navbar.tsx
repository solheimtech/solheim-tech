"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal } from "@/app/components/ui/dropdown-menu";
import { Button } from "@/app/components/ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { MenuIcon } from 'lucide-react';
import logo from '../../public/Solheim-Technologies-Banner.jpeg';

const optionsCursorTrueWithMargin = {
  followCursor: false,
  shiftX: 0,
  shiftY: 0
};


const Navbar = () => {

    return (
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16 my-8">
        <Link href="/" className="flex items-center" prefetch={false}>
        <Image src={logo} alt="Solheim Technologies Banner Logo" width={300} height={300} className="filter invert" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">    
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full">
              <span>ABOUT US</span>
              <ChevronDownIcon className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent align="start" sideOffset={8} className="text-gray-50 bg-black border-none">
                <DropdownMenuItem className='text-white hover:font-semibold focus:bg-black focus:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full'>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <span>WEBSITE DESIGN</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='text-white hover:font-semibold focus:bg-black focus:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full'>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <span>LOCAL SEO PRO</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='text-white hover:font-semibold focus:bg-black focus:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full'>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <span>AERIAL PHOTOS & VIDEOS</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full">
              <span>SERVICES</span>
              <ChevronDownIcon className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent align="start" sideOffset={8} className="text-gray-50 bg-black border-none">
                <DropdownMenuItem className='text-white hover:font-semibold focus:bg-black focus:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full'>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <span>WEBSITE DESIGN</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='text-white hover:font-semibold focus:bg-black focus:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full'>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <span>LOCAL SEO PRO</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='text-white hover:font-semibold focus:bg-black focus:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full'>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <span>AERIAL PHOTOS & VIDEOS</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>

          <Link
            href="#"
            className="text-white hover:font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full"
            prefetch={false}
          >
            MEMBERSHIP
          </Link>

          <Link
            href="#"
            className="text-white hover:font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full"
            prefetch={false}
          >
            PORTFOLIO
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:after:w-full">
              <span>CONTACT</span>
              <ChevronDownIcon className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent align="start" sideOffset={8} className="text-gray-50 bg-black border-none">
                <DropdownMenuItem className='text-white hover:font-semibold focus:bg-black focus:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full'>
                  {/* LINK TO HUBSPOT */}
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <span>FREE CONSULTATION</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='text-white hover:font-semibold focus:bg-black focus:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full'>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <span>PROJECT ESTIMATE</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='text-white hover:font-semibold focus:bg-black focus:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full'>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <span>REMOTE TECH SUPPORT </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='text-white hover:font-semibold focus:bg-black focus:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full'>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <span>RESOURCE CENTER </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='text-white hover:font-semibold focus:bg-black focus:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full'>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    <span>ARTICLES </span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>
        </nav>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6 text-white" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent align="end" sideOffset={8}>
                <DropdownMenuItem className='bg-black'>
                  <Link href="#" className="flex items-center space-x-2 text-white" prefetch={false}>
                    {/* <HomeIcon className="h-5 w-5" /> */}
                    <span>Home</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    {/* <BriefcaseIcon className="h-5 w-5" /> */}
                    <span>Services</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    {/* <CodeIcon className="h-5 w-5" /> */}
                    <span>Web Development</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    {/* <ShoppingCartIcon className="h-5 w-5" /> */}
                    <span>E-commerce</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    {/* <MegaphoneIcon className="h-5 w-5" /> */}
                    <span>Digital Marketing</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    {/* <InfoIcon className="h-5 w-5" /> */}
                    <span>About</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="flex items-center space-x-2" prefetch={false}>
                    {/* <MailIcon className="h-5 w-5" /> */}
                    <span>Contact</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>
        </div>
      </div>
    );
};

export default Navbar;
