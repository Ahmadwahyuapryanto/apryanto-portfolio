import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';

export default function SplashScreen({ onComplete }: { onComplete: () => void; key?: string }) {
  const [showAssets, setShowAssets] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const timer1 = setTimeout(() => setShowAssets(true), 400);
    const timer2 = setTimeout(() => onComplete(), 3500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  const textColor = theme === 'dark' ? 'text-white' : 'text-zinc-900';

  const imgUrl = theme === 'dark' 
    ? 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("img/black.jpg")' 
    : 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("img/white.png")';

  const backgroundStyle = {
    backgroundImage: imgUrl,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden ml-[-1px] bg-transparent">
      
      {/* Background Fade Out */}
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 z-30"
        style={backgroundStyle}
      />

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="relative z-40 flex flex-col items-center"
        style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif' }}
      >
        {/* Background Decorative Circles */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0.05 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-[100vw] h-[100vw] rounded-full border border-blue-500/30 -z-10"
        />

        <AnimatePresence>
          {showAssets && (
            <div className="flex flex-col items-center">
              {/* Brand Logo */}
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 relative"
              >
                
              </motion.div>

              {/* Brand Name (Style seperti Hero.tsx) */}
              <div className="flex flex-col items-center">
                <div className="relative inline-block select-none scale-75 sm:scale-100">
                  
                  {/* Top Row: Port + Star */}
                  <div className="flex items-start">
                    <motion.h1 
                      initial={{ opacity: 0, x: -100, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className="text-[80px] sm:text-[120px] leading-[0.8] font-black tracking-[-0.08em] text-blue-600 dark:text-blue-500 italic uppercase"
                    >
                      Port
                    </motion.h1>
                    
                    {/* Sparkle/Star Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -90, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 1, type: "spring" }}
                      className="mt-[5px] sm:mt-[10px] ml-2 sm:ml-4 text-blue-600 dark:text-blue-500"
                    >
                      <svg width="40" height="40" className="sm:w-[60px] sm:h-[60px]" viewBox="0 0 100 100" fill="currentColor">
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
                      className="text-[80px] sm:text-[120px] leading-[0.8] font-black tracking-[-0.08em] text-blue-600 dark:text-blue-500 italic uppercase"
                    >
                      folio
                    </motion.h1>
                  </div>

                  {/* Name Label */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-8 flex flex-col items-center"
                  >
                    <p className={`text-sm sm:text-base font-bold uppercase tracking-[0.2em] ${textColor} text-center`}>
                      Ahmad Wahyu Apryanto
                    </p>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
                      className="h-[2px] bg-blue-600/50 mt-3 w-[80%]"
                    />
                  </motion.div>

                </div>
              </div>

              {/* Progress/Status */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-12 flex items-center space-x-3"
              >
                <div className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                    />
                  ))}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-[0.4em] ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  INITIALIZING
                </span>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Decorative corners */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-[-40px] pointer-events-none"
        >
          <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`} />
          <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`} />
          <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`} />
          <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`} />
        </motion.div>
      </motion.div>
    </div>
  );
}