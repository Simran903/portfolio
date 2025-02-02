"use client";
import React from "react";
import Link from "next/link"; // Import Link from Next.js
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

interface MenuItemProps {
  item: string;
  href: string; // Add an href prop for navigation
}

export const MenuItem = ({ item, href }: MenuItemProps) => {
  return (
    <div className="relative">
      <motion.div
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:text-primary-a10"
      >
        <Link href={href} className="hover:underline">
          {item}
        </Link>
      </motion.div>
    </div>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav
      className="relative rounded-full border border-primary-a0 bg-surface-a20 shadow-input flex justify-center space-x-8 px-8 py-4 text-white"
    >
      {children}
    </nav>
  );
};