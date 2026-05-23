import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Github, Instagram, Linkedin, Mail, Download, ArrowUpRight } from 'lucide-react';

const skills = ['FIGMA', 'ADOBE PS/AI', 'CANVA', 'LARAVEL', 'EXCEL', 'FLUTTER', 'WORD'];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Kinetic Transformations
  const xLeft = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  const xRight = useTransform(scrollYProgress, [0, 1], [500, -500]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative min-h-[180vh] bg-white dark:bg-zinc-950 pt-0 pb-16 overflow-hidden"
    >
      {/* SECTION 1: THE NAME */}
      <div className="sticky top-0 h-[80vh] flex flex-col justify-center items-center pointer-events-none">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
        />
        
        {/* Floating Decorative Elements */}
        <motion.div
           style={{ y: useTransform(scrollYProgress, [0, 1], [-200, 200]), rotate: 45 }}
           className="absolute top-1/4 left-[10%] w-12 h-12 border-2 border-blue-600/20 rounded-lg"
        />
        <motion.div
           style={{ y: useTransform(scrollYProgress, [0, 1], [150, -150]), rotate: -15, scale: 1.5 }}
           className="absolute bottom-1/4 right-[15%] text-blue-600/20"
        >
          <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0L55 45L100 50L55 55L50 100L45 55L0 50L45 45Z" />
          </svg>
        </motion.div>
        
        {/* More decorative items */}
        <motion.div
           style={{ x: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
           className="absolute top-[10%] right-[10%] text-[8px] font-mono tracking-widest text-zinc-400 dark:text-zinc-600 uppercase"
        >
          [ PROJECT_ARCHIVE_2025 ]
        </motion.div>

        <motion.div
           style={{ x: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
           className="absolute bottom-[20%] left-[5%] text-[8px] font-mono tracking-widest text-zinc-400 dark:text-zinc-600 uppercase"
        >
          SYNERGY / BALANCE / FLOW
        </motion.div>

        <motion.div
           style={{ y: useTransform(scrollYProgress, [0, 1], [0, -300]), opacity: useTransform(scrollYProgress, [0, 0.2], [0.3, 0]) }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[10px] font-bold tracking-[0.5em] text-zinc-400 mb-2">SCROLL</span>
          <div className="w-px h-20 bg-linear-to-b from-blue-600/50 to-transparent" />
        </motion.div>

        {/* Small floating dots/squares */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-[20%] w-2 h-2 bg-blue-600/20"
        />
        <motion.div 
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[15%] w-8 h-px bg-zinc-400/20"
        />
        <motion.div 
          className="absolute bottom-20 right-[25%] text-[6px] font-mono opacity-20 dark:opacity-10"
        >
          0x42 0x61 0x6C 0x61 0x6E 0x63 0x65
        </motion.div>

        <motion.div style={{ x: xLeft }} className="whitespace-nowrap">
          <h2 className="text-[15vw] font-black italic uppercase leading-none text-zinc-100 dark:text-zinc-900/20 outline-text">
            AHMAD WAHYU APRYANTO • AHMAD WAHYU APRYANTO •
          </h2>
        </motion.div>
        
        {/* Animated Background Label */}
        <motion.div
           style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]) }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 pointer-events-none"
        >
          <span className="text-[12vw] font-black text-blue-600/5 uppercase leading-none">Apryanto</span>
        </motion.div>
        
        <motion.div 
          style={{ scale, rotate }}
          className="my-8 z-10 relative"
        >
          <div className="absolute -inset-10 bg-blue-600/5 blur-[100px] rounded-full" />
          <h3 className="text-3xl md:text-7xl font-black text-blue-600 uppercase tracking-tighter text-center relative z-10">
            Creative <br /> Identity
          </h3>
          <motion.div
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-6 -right-6 text-blue-600/30"
          >
            <svg width="40" height="40" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
            </svg>
          </motion.div>
        </motion.div>

        <motion.div style={{ x: xRight }} className="whitespace-nowrap">
          <h2 className="text-[15vw] font-black italic uppercase leading-none text-blue-600/5 dark:text-blue-500/5 outline-text">
            DESIGNER • DEVELOPER • DESIGNER • DEVELOPER •
          </h2>
        </motion.div>
      </div>

      {/* SECTION 2: THE STORY TEXT */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-[1.1] tracking-tight mb-12 excerpt">
            Saya percaya bahwa <span className="text-blue-600">Desain</span> bukan hanya soal estetika, tapi tentang bagaimana sebuah <span className="text-blue-600">Cerita</span> disampaikan melalui visual yang fungsional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-16">
            Berbasis di Indonesia, saya mengombinasikan keahlian dalam <span className="text-zinc-900 dark:text-white font-bold italic">Graphic Design</span> dan <span className="text-zinc-900 dark:text-white font-bold italic">Web Development</span> untuk menciptakan pengalaman digital yang menyeluruh. Mulai dari konsep logo hingga sistem web yang kompleks.
          </p>
        </motion.div>
      </div>

      {/* SECTION 3: THE SKILLS MARQUEE */}
      <div className="py-8 bg-blue-600 -rotate-2 scale-105 mb-12 relative z-30">
        <div className="flex whitespace-nowrap">
          {[1, 2, 3, 4].map((i) => (
            <motion.div 
              key={i}
              animate={{ x: ["0%", "-100%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex items-center"
            >
              {skills.map((skill) => (
                <span key={skill} className="text-xl md:text-3xl font-medium text-white/40 mx-6 uppercase tracking-widest">
                  {skill}
                </span>
              ))}
              <span className="text-xl md:text-3xl font-medium text-white mx-6 uppercase">•</span>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .outline-text {
          -webkit-text-stroke: 1px currentColor;
          color: transparent;
        }
      `}} />
    </section>
  );
}
