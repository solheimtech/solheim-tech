import Image from "next/image";
import { FC, useState, useEffect } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

interface User {
  name: string;
  image: string;
  role: string;
  description: string;
  facebook: string;
  twitter: string;
  linkedin: string;
}

interface CardProps {
  user: User;
  expandedUser: string | null;
  onExpand: (name: string | null) => void;
}

const Card: FC<CardProps> = ({ user, expandedUser, onExpand }) => {
  const isExpanded = expandedUser === user.name;

  const handleCardClick = () => {
    onExpand(isExpanded ? null : user.name);
  };

  return (
    <motion.div
      className={`bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center transform transition-transform duration-300 ${isExpanded ? 'max-w-3xl' : 'max-w-2xl'}`}
      onClick={handleCardClick}
      animate={{ scale: isExpanded ? 1.05 : 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02, cursor: 'pointer' }}
    >
      <Image
        className="w-64 h-64 object-cover m-4"
        src={user.image}
        alt={user.name}
        width={256}
        height={256}
      />
      <div className="p-6 w-full">
        <div className="flex flex-col items-start mb-4">
          <h5 className="text-2xl font-bold text-gray-900">{user.name}</h5>
        </div>
        <div className="border-t border-gray-200 pt-4 w-full text-left">
          <div className="mb-2">
            <span className="block text-sm text-gray-500">Role</span>
            <span className="block text-lg text-gray-900">{user.role}</span>
          </div>
        </div>
        {isExpanded && (
          <motion.div
            className="mt-4 text-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <p>{user.description}</p>
          </motion.div>
        )}
        <div className="flex justify-start items-center mt-6 space-x-6">
          <motion.a
            href={user.facebook}
            className="opacity-20 hover:text-black hover:opacity-100 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaFacebook size={20} />
          </motion.a>
          <motion.a
            href={user.twitter}
            className="opacity-20 hover:text-black hover:opacity-100 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaXTwitter size={20} />
          </motion.a>
          <motion.a
            href={user.linkedin}
            className="opacity-20 hover:text-black hover:opacity-100 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin size={20} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;