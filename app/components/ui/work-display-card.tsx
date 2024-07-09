import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SmokeEffect from "./smoke-effect"; // Adjust the import path accordingly
import { FC } from "react";

interface Project {
  slug: string;
  preview: string[];
  title: string;
}

const WorkDisplayCard: FC<{ project: Project }> = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Generate unique keys for the images once
  const imageKeys = useMemo(() => {
    return project.preview.slice(0, 4).map((_, index) => `${project.slug}-${index}`);
  }, [project.preview, project.slug]);

  return (
    <div className="relative block p-4 py-[4rem] h-full w-full overflow-hidden">
      <div
        className="border-2 group-hover:border-gray-300 border-white flex items-center justify-center p-4 rounded-lg bg-black relative z-20 h-[50vh] w-full overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link href={`/our-work/${project.slug}`}>
          <h4
            className={`text-zinc-100 font-bold tracking-wide text-2xl relative z-30 transition-opacity duration-150 ${
              hovered ? "opacity-0" : "opacity-100"
            } sm:text-zinc-100 sm:opacity-100 sm:transition-none`}
          >
            {project.title}
          </h4>
          <AnimatePresence>
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 1 }}
              animate={{ opacity: hovered ? 0 : 1, transition: { duration: 2.5 } }}
              exit={{ opacity: 0, transition: { duration: 1.5, delay: 0.2 } }} // Adjusted duration for slow fade away
            >
              <SmokeEffect />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gray-300 grid grid-cols-2 grid-rows-2 gap-0 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered ? 1 : 0, transition: { duration: 1.5 } }}
              exit={{ opacity: 0, transition: { duration: 1.5, delay: 0.2 } }}
            >
              {project.preview.slice(0, 4).map((image, index) => {
                const key = imageKeys[index];
                return image.endsWith(".mp4") ? (
                  <video
                    key={key} // Ensure unique key
                    src={image}
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    style={{ width: "100%", height: "100%" }}
                  />
                ) : (
                  <div key={key} className="relative h-full w-full"> {/* Ensure unique key */}
                    <Image
                      src={image}
                      alt={project.title}
                      className="object-cover"
                      layout="fill"
                      sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </Link>
      </div>
    </div>
  );
};

export default WorkDisplayCard;