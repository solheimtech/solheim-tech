"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from "@/app/components/ui/button";
import { MenuIcon, X as CloseIcon, Plus as PlusIcon, Minus as MinusIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/public/assets/images/Solheim-Technologies-Banner.png';

const MobileNav = ({ menuItems }: { menuItems: Array<{ label: string, href: string, sublinks?: Array<{ label: string, href: string }> }> }) => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState<{ [key: string]: boolean }>({});
    const [navbarBg, setNavbarBg] = useState('transparent');
    const [logoSize, setLogoSize] = useState({ width: 250, height: 250 });
    const currentPath = usePathname();

    const toggleSubMenu = (menu: string) => {
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
                    <Image src={logo} alt="Solheim Technologies Banner Logo" width={logoSize.width} height={logoSize.height} className="filter invert" loading='lazy' />
                </Link>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    className='bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent'
                >
                    {mobileNavOpen ? <CloseIcon className="h-8 w-8 text-white" /> : <MenuIcon className="h-8 w-8 text-white" />}
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
                        <div className="flex justify-between mb-4">
                            <Image src={logo} alt="Solheim Technologies Banner Logo" width={logoSize.width} height={logoSize.height} className="filter invert" loading='lazy' />
                            <Button
                                variant="ghost"
                                size="icon"
                                className='bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent'
                                onClick={() => setMobileNavOpen(false)}
                            >
                                <CloseIcon className="h-8 w-8 text-white" />
                            </Button>
                        </div>
                        <nav className="flex flex-col space-y-4 p-4">
                            {menuItems.map((menuItem, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: '100%' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100%' }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 30 }}
                                >
                                    <div className="relative group">
                                        <div className="flex items-center justify-between">
                                            <motion.div
                                                initial={{ textDecoration: 'none' }}
                                                animate={{ textDecoration: subMenuOpen[menuItem.label] ? 'underline' : 'none' }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Link href={menuItem.href} className={`text-white flex items-center space-x-1 ${currentPath === menuItem.href ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                    <span>{menuItem.label}</span>
                                                </Link>
                                            </motion.div>
                                            {menuItem.sublinks && (
                                                <motion.div
                                                    initial={{ rotate: 0 }}
                                                    animate={{ rotate: subMenuOpen[menuItem.label] ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className='bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent'
                                                        onClick={() => toggleSubMenu(menuItem.label)}
                                                    >
                                                        {subMenuOpen[menuItem.label] ? <MinusIcon className="h-6 w-6 text-white" /> : <PlusIcon className="h-6 w-6 text-white" />}
                                                    </Button>
                                                </motion.div>
                                            )}
                                        </div>
                                        <AnimatePresence>
                                            {subMenuOpen[menuItem.label] && (
                                                <motion.ul
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden pl-4"
                                                >
                                                    {menuItem.sublinks && menuItem.sublinks.map((sublink, index) => (
                                                        <li key={index} className="mb-2">
                                                            <Link href={sublink.href} className={`text-white hover:font-semibold whitespace-nowrap ${currentPath === sublink.href ? 'font-bold' : ''}`} onClick={() => setMobileNavOpen(false)}>
                                                                {sublink.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNav;
