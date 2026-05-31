import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, useAnimationFrame } from 'motion/react';
import { Github, Instagram, Linkedin, Mail, Download, ArrowUpRight, Sparkles } from 'lucide-react';

const skills = ['FIGMA', 'ADOBE PS/AI', 'CANVA', 'LARAVEL', 'EXCEL', 'FLUTTER', 'WORD'];

// --- KOMPONEN PHOTOCARD 3D INTERAKTIF DITAMBAHKAN DI SINI ---
function InteractivePhotocard() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const isHovered = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const glossX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"]);
  const glossY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"]);

  useAnimationFrame((t) => {
    if (isHovered.get() === 0) {
      const swayX = Math.sin(t / 1000) * 0.1;
      const swayY = Math.cos(t / 1200) * 0.1;
      mouseX.set(swayX);
      mouseY.set(swayY);
    }
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const barcodeLines = [2, 4, 2, 2, 6, 2, 4, 2, 2, 4, 6, 2, 2, 4, 2, 4, 2, 2, 6];

  return (
    <div style={{ perspective: 1200 }} className="w-full max-w-[320px] mx-auto z-10 flex justify-center items-center">
      <motion.div
        ref={cardRef}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.65}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => isHovered.set(1)}
        onMouseLeave={() => isHovered.set(0)}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileTap={{ scale: 0.95 }}
        className="rounded-[2rem] border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-[#0a0a0a]/90 backdrop-blur-xl p-8 flex flex-col relative shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing w-full"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-30 mix-blend-overlay dark:mix-blend-color-dodge transition-opacity duration-500 z-50"
          style={{
            background: useTransform(
              [glossX, glossY],
              ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.7) 0%, transparent 60%)`
            ),
          }}
        />

        <motion.div style={{ translateZ: 30 }} className="flex justify-between items-center w-full mb-8 text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            S1 SI • 2026
          </div>
          <Sparkles size={14} className="text-zinc-400 dark:text-zinc-600" />
        </motion.div>

        <motion.div style={{ translateZ: 50 }} className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 mb-6 bg-zinc-100 dark:bg-zinc-900 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl relative">
          <img src="/img/black.jpg" alt="Profile" className="w-full h-full object-cover pointer-events-none select-none" draggable="false" />
        </motion.div>

        <motion.h3 style={{ translateZ: 40 }} className="text-center text-lg font-black text-zinc-900 dark:text-white uppercase tracking-wider mb-2 pointer-events-none select-none">
          Ahmad Wahyu A.
        </motion.h3>
        <motion.p style={{ translateZ: 30 }} className="text-center text-[9px] text-zinc-500 font-mono tracking-widest uppercase mb-6 pointer-events-none select-none">
          Fullstack Engineer • Student
        </motion.p>

        <motion.div style={{ translateZ: 40 }} className="mx-auto px-5 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-[10px] text-zinc-600 dark:text-zinc-400 font-mono mb-8 shadow-lg pointer-events-none select-none">
          &gt;_ apryanto.dev
        </motion.div>

        <motion.div style={{ translateZ: 20 }} className="w-full h-px bg-zinc-200 dark:bg-zinc-800 mb-6" />

        <motion.div style={{ translateZ: 30 }} className="flex flex-col items-center pointer-events-none select-none">
          <div className="flex justify-center gap-[2px] h-8 opacity-60 mb-2">
            {barcodeLines.map((width, i) => (
              <div key={i} className="bg-zinc-400 dark:bg-zinc-500 rounded-sm" style={{ width: `${width}px` }} />
            ))}
          </div>
          <p className="text-[7px] text-zinc-500 font-mono tracking-[0.3em] uppercase">
            *AW-SI2026*
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
// --- SELESAI KOMPONEN PHOTOCARD ---


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
      className="relative min-h-[180vh] bg-white dark:bg-zinc-950 pt-0 pb-16 overflow-hidden">

      {/* SECTION 1: CREATIVE IDENTITY & PHOTOCARD (Ditambahkan di sini) */}
      <div className="relative z-20 pt-32 pb-16 px-6 md:px-12">
        {/* Kita tambahkan justify-center agar posisi di tengah */}
<div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-16 relative">
          
          {/* Bagian Kiri: Teks & Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-zinc-900 dark:text-white mb-6">
              I'M Apryanto
            </h2>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                S1 Sistem Informasi | 2026
              </div>
              <div className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-bold tracking-wide text-blue-600 dark:text-blue-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Available For Work
              </div>
              <div className="px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                apryanto.dev
              </div>
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg mb-10">
              Membangun sistem informasi dan aplikasi modern dengan antarmuka yang bersih, responsif, dan elegan. 
              Mengubah ide kreatif menjadi pengalaman digital fungsional.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Flutter', 'Laravel', 'Tailwind CSS'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bagian Kanan: 3D Layered Photocard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <InteractivePhotocard />
          </motion.div>

        </div>
      </div>

      {/* SECTION 2: THE STORY TEXT (Tidak ada yang diubah di bawah ini) */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 py-18">
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