"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);

  return (
    <motion.div
      key={pathname + searchParams.toString()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default LayoutWrapper;
