import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="img/logo.png" 
              alt="Logo" 
              className="w-15 h-15 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white">
              <span className="text-blue-600 dark:text-blue-400">Apryanto</span>.
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 mr-2"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-900 dark:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 140, mass: 0.9 }}
            className="fixed top-0 left-0 w-full h-[100dvh] bg-white/80 dark:bg-zinc-950/80 backdrop-blur-2xl shadow-2xl z-50 md:hidden flex flex-col p-6 sm:p-8"
          >
            {/* Header section in the tray */}
            <div className="flex items-center justify-between pb-6 border-b border-zinc-200/50 dark:border-zinc-800/50 mb-10">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://raw.githubusercontent.com/Ahmadwahyuapryanto/Ahmadwahyuapryanto/main/logo.png" 
                  alt="Logo" 
                  className="w-8 h-8 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                  <span className="text-blue-600 dark:text-blue-400">Portfolio</span>.
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Links with Staggered Entrance Animations */}
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tight hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-2 transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Bottom Footer Section */}
            <div className="mt-auto pt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 flex flex-col gap-3">
              <p className="text-zinc-500 text-[9px] font-black uppercase tracking-[0.2em] leading-none">
                MARI BERDISKUSI
              </p>
              <a 
                href="mailto:ahmadwahyuapryanto18@gmail.com"
                className="text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                ahmadwahyuapryanto18@gmail.com
              </a>
              <div className="text-[10px] text-zinc-400 dark:text-zinc-600 font-medium">
                &copy; 2026 Apryanto. All rights reserved.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Blur Overlay behind sliding drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/15 dark:bg-black/35 backdrop-blur-xs z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
