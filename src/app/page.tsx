"use client";

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="w-full h-dvh grid grid-cols-1 grid-rows-1 place-items-center">
      <div className="flex flex-col items-start justify-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="text-4xl md:text-7xl"
        >
            Shubham Tawade
        </motion.h1>
        <motion.h5
          initial={{ opacity: 0}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeInOut' }}
          className="text-lg md:text-xl mb-12"
        >
            Developer.
        </motion.h5>
        <motion.p
          initial={{ opacity: 0, y: 20}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeInOut' }}
          className="text-base"
        >
            Welcome to my digital space. 🚀
        </motion.p>
      </div>
    </main>
  );
}
