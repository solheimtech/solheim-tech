'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <ul className="flex p-4">
        <li className="relative group">
          <Link href="/">
            Home
          </Link>
        </li>
        <li
          className="relative group"
          onMouseEnter={() => setSubmenuOpen(true)}
          onMouseLeave={() => setSubmenuOpen(false)}
        >
          <Link href="/about">
            About
          </Link>
          <ul
            className={`absolute left-0 top-full bg-gray-800 transition-all duration-300 ease-in-out ${
              submenuOpen ? 'block' : 'hidden'
            }`}
          >
            <li>
              <Link href="/about/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/about/history">
                Our History
              </Link>
            </li>
          </ul>
        </li>
        <li className="relative group">
          <Link href="/services">
            Services
          </Link>
        </li>
        <li className="relative group">
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
