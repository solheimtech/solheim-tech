"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from "@/app/components/ui/button";
import { MenuIcon, X as CloseIcon, Plus as PlusIcon, Minus as MinusIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/public/assets/images/Solheim-Technologies-Banner.png';

const MobileNav = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState({
        about: false,
        services: false,
        ourWork: false,
        contact: false,
    });
    const [navbarBg, setNavbarBg] = useState('transparent');
    const [logoSize, setLogoSize] = useState({ width: 250, height: 250 });
    const currentPath = usePathname();

    const toggleSubMenu = (menu: keyof typeof subMenuOpen) => {
        setSubMenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBg('black');
                setLogoSize({ width: 150, height: 150 });
            } else {
                setNavbarBg('transparent');
                setLogoSize({ width: 250, height: 250 });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex flex-col h-20">
            <div className={`flex justify-between items-center p-4 bg-${navbarBg}`}>
                <Link href="/" className="flex items-center" prefetch={false}>
                    <Image src={logo} alt="Solheim Technologies Banner Logo" width={logoSize.width} height={logoSize.height} className="filter invert" />
                </Link>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    className='bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent'
                >
                    <MenuIcon className="h-6 w-6 text-white" />
                </Button>
            </div>
            <AnimatePresence>
                {mobileNavOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                        className="fixed inset-0 bg-black overflow-y-auto p-4"
                    >
                        <div className="flex justify-center p-4">
                            <Link href="/" className="flex items-center" prefetch={false} onClick={() => setMobileNavOpen(false)}>
                                <Image src={logo} alt="Solheim Technologies Banner Logo" width={250} height={250} className="filter invert" />
                            </Link>
                        </div>
                        <div className="p-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                className='bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent'
                                onClick={() => setMobileNavOpen(false)}
                            >
                                <CloseIcon className="h-6 w-6 text-white" />
                            </Button>
                        </div>
                        <nav className="flex flex-col space-y-4 p-4">
                            <div className="relative group">
                                <div className="flex items-center justify-between">
                                    <motion.div
                                        initial={{ textDecoration: 'none' }}
                                        animate={{ textDecoration: subMenuOpen.about ? 'underline' : 'none' }}
                                        transition={{ duration: .3 }}
                                    >
                                        <Link href="/about" className={`text-white flex items-center space-x-1 ${currentPath === '/about' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                            <span>About Us</span>
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: subMenuOpen.about ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className='bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent'
                                            onClick={() => toggleSubMenu('about')}
                                        >
                                            {subMenuOpen.about ? <MinusIcon className="h-6 w-6 text-white" /> : <PlusIcon className="h-6 w-6 text-white" />}
                                        </Button>
                                    </motion.div>
                                </div>
                                <AnimatePresence>
                                    {subMenuOpen.about && (
                                        <motion.ul
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <li className="mb-2">
                                                <Link href="/about/team" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/about/team' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Meet the Team
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link href="/about/partnerships" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/about/partnerships' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Partnerships
                                                </Link>
                                            </li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="relative group">
                                <div className="flex items-center justify-between">
                                    <motion.div
                                        initial={{ textDecoration: 'none' }}
                                        animate={{ textDecoration: subMenuOpen.services ? 'underline' : 'none' }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link href="/services" className={`text-white flex items-center space-x-1 ${currentPath === '/services' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                            <span>Services</span>
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: subMenuOpen.services ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className='bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent'
                                            onClick={() => toggleSubMenu('services')}
                                        >
                                            {subMenuOpen.services ? <MinusIcon className="h-6 w-6 text-white" /> : <PlusIcon className="h-6 w-6 text-white" />}
                                        </Button>
                                    </motion.div>
                                </div>
                                <AnimatePresence>
                                    {subMenuOpen.services && (
                                        <motion.ul
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <li className="mb-2">
                                                <Link href="/services/website-design" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/services/website-design' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Website Design
                                                </Link>
                                            </li>
                                            <li className="mb-2">
                                                <Link href="/services/local-seo-pro" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/services/local-seo-pro' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Local SEO Pro
                                                </Link>
                                            </li>
                                            <li className="mb-2">
                                                <Link href="/services/aerial-photography-and-videography" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/services/aerial-photography-and-videography' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Aerial Photos and Videos
                                                </Link>
                                            </li>
                                            <li className="mb-2">
                                                <Link href="/contact/resources" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/contact/resources' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Resources Center
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact/resources/articles" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/contact/resources/articles' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Articles
                                                </Link>
                                            </li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link href="/membership" className={`text-white hover:font-semibold ${currentPath === '/membership' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                Membership
                            </Link>
                            <div className="relative group">
                                <div className="flex items-center justify-between">
                                    <motion.div
                                        initial={{ textDecoration: 'none' }}
                                        animate={{ textDecoration: subMenuOpen.ourWork ? 'underline' : 'none' }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link href="/our-work" className={`text-white flex items-center space-x-1 ${currentPath === '/our-work' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                            <span>Our Work</span>
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: subMenuOpen.ourWork ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => toggleSubMenu('ourWork')}
                                            className='bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent'
                                        >
                                            {subMenuOpen.ourWork ? <MinusIcon className="h-6 w-6 text-white" /> : <PlusIcon className="h-6 w-6 text-white" />}
                                        </Button>
                                    </motion.div>
                                </div>
                                <AnimatePresence>
                                    {subMenuOpen.ourWork && (
                                        <motion.ul
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <li className="mb-2">
                                                <Link href="/our-work/websites" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/our-work/websites' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Websites
                                                </Link>
                                            </li>
                                            <li className="mb-2">
                                                <Link href="/our-work/logos" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/our-work/logos' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Logos
                                                </Link>
                                            </li>
                                            <li className="mb-2">
                                                <Link href="/our-work/photos" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/our-work/photos' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Photos
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link href="/our-work/videos" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/our-work/videos' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Videos
                                                </Link>
                                            </li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </div>
                            <div className="relative group">
                                <div className="flex items-center justify-between">
                                    <motion.div
                                        initial={{ textDecoration: 'none' }}
                                        animate={{ textDecoration: subMenuOpen.contact ? 'underline' : 'none' }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Link href="/contact" className={`text-white flex items-center space-x-1 ${currentPath === '/contact' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                            <span>Contact</span>
                                        </Link>
                                    </motion.div>
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: subMenuOpen.contact ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className='bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent'
                                            onClick={() => toggleSubMenu('contact')}
                                        >
                                            {subMenuOpen.contact ? <MinusIcon className="h-6 w-6 text-white" /> : <PlusIcon className="h-6 w-6 text-white" />}
                                        </Button>
                                    </motion.div>
                                </div>
                                <AnimatePresence>
                                    {subMenuOpen.contact && (
                                        <motion.ul
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <li className="mb-2">
                                                <Link href="/contact/free-consultation" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/contact/free-consultation' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Free Consultation
                                                </Link>
                                            </li>
                                            <li className="mb-2">
                                                <Link href="/contact/project-estimate" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/contact/project-estimate' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Project Estimate
                                                </Link>
                                            </li>
                                            <li className="mb-2">
                                                <Link href="/contact/remote-tech-support" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/contact/remote-tech-support' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Remote Tech Support
                                                </Link>
                                            </li>
                                            <li className="mb-2">
                                                <Link href="/contact/resources" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/contact/resources' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Resources Center
                                                </Link>
                                            </li>
                                            <li className='mb-10'>
                                                <Link href="/contact/resources/articles" className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === '/contact/resources/articles' ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    Articles
                                                </Link>
                                            </li>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNav;
