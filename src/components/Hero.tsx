import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const roles = ["Graphic Designer", "Web Designer", "Web Developer", "Logo Designer"];
  const [roleIndex, setRoleIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-[110vh] flex items-center justify-center pt-20 overflow-hidden bg-transparent"
    >
      <motion.div 
        style={{ opacity, scale, y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center"
      >
        
        {/* Main Brand Section - Matching Image Layout */}
        <div className="relative inline-block select-none scale-75 sm:scale-100 md:scale-110 lg:scale-125 xl:scale-150">
          
          {/* Tulisan Nama di Atas Teks Portfolio */}
          <motion.p
            initial={{ opacity: 0, y: -15, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs sm:text-sm font-bold uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400 mb-3 ml-2"
          >
            A.W.Apryanto
          </motion.p>
          
          {/* Top Row: Port + Star */}
          <div className="flex items-start">
            <motion.h1 
              initial={{ opacity: 0, x: -100, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[120px] sm:text-[160px] leading-[0.8] font-black tracking-[-0.08em] text-blue-600 dark:text-blue-500 italic uppercase"
            >
              Port
            </motion.h1>
            
            {/* Sparkle/Star Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, type: "spring" }}
              className="mt-[10px] ml-4 text-blue-600 dark:text-blue-500"
            >
              <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0L55 45L100 50L55 55L50 100L45 55L0 50L45 45Z" />
              </svg>
            </motion.div>
          </div>

          {/* Bottom Row: folio */}
          <div className="flex items-end mt-[-10px] sm:mt-[-20px]">
            <motion.h1 
              initial={{ opacity: 0, x: 100, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="text-[120px] sm:text-[160px] leading-[0.8] font-black tracking-[-0.08em] text-blue-600 dark:text-blue-500 italic uppercase"
            >
              folio
            </motion.h1>
          </div>

          {/* Bottom Right Mark with Typing Role */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-[-60px] right-0 text-right flex flex-col items-end"
          >
            <div className="h-6 mb-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  className="flex items-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400"
                >
                  <span className="mr-2 opacity-50">I'm</span>
                  <motion.div
                    className="flex"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.08,
                        },
                      },
                      hidden: {
                        transition: {
                          staggerChildren: 0.04,
                          staggerDirection: -1,
                        },
                      },
                    }}
                  >
                    {roles[roleIndex].split('').map((char, index) => (
                      <motion.span
                        key={`${roleIndex}-${index}`}
                        variants={{
                          hidden: { opacity: 0, scale: 0.8, filter: 'blur(4px)' },
                          visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="text-sm font-bold tracking-tighter text-zinc-900 dark:text-white">
              2025 Version.
            </p>
          </motion.div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-32 md:mt-48 flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#portfolio"
            className="group relative px-10 py-4 overflow-hidden rounded-full shadow-2xl shadow-blue-600/10"
          >
            <div className="absolute inset-0 bg-blue-600 transition-transform duration-500 group-hover:scale-110" />
            <span className="relative text-white font-bold tracking-tight">Explore Work</span>
          </a>
          <a
            href="#contact"
            className="text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ height: [12, 48, 12], y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1.5px] bg-blue-600 rounded-full" 
        />
      </motion.div>
    </section>
  );
}