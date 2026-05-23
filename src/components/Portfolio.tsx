import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { ExternalLink, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const projects = [
  {
    id: 1,
    title: 'LSES UNTIRTA',
    category: 'Branding / Logo Design',
    description: 'Desain logo profesional untuk organisasi kampus LSES UNTIRTA yang mencerminkan identitas akademik dan semangat kolaboratif.',
    image: 'img/logo2.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'POPDA & PAPERDA',
    category: 'Branding / Competition',
    description: 'Partisipasi dalam kompetisi desain logo POPDA & PAPERDA dengan konsep yang dinamis dan enerjik sesuai semangat olahraga.',
    image: 'img/logo1.png',
    featured: false,
  },
  {
    id: 3,
    title: 'Sambara Label',
    category: 'Label Design',
    description: 'Pengembangan label kemasan untuk produk Sambara, fokus pada estetika visual yang menggugah selera dan informatif.',
    image: 'img/Kemasan1.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Seminar HMSI',
    category: 'Graphic Design',
    description: 'Desain flyer publikasi untuk Seminar Nasional HMSI dengan layout yang bersih, modern, dan informatif.',
    image: 'img/flayer3.jpg',
    featured: true,
  },
  {
    id: 5,
    title: 'E-Commerce App',
    category: 'UI/UX Design',
    description: 'Simulasi desain antarmuka aplikasi belanja online yang memudahkan pengguna dalam bernavigasi dan bertransaksi.',
    image: 'img/uiux1.png',
    featured: false,
  },
  {
    id: 6,
    title: 'Flayer Peringatan Pancasila',
    category: 'Graphic Design',
    description: 'Desain flyer Peringatan Hari Pancasila dengan pendekatan visual yang kuat dan simbolik untuk memperingati nilai-nilai dasar bangsa.',
    image: 'img/flayer2.jpg',
    featured: true,
  },
  {
    id: 7,
    title: 'Flayer Recruitment HMSI',
    category: 'Graphic Design',
    description: 'Desain flyer untuk kegiatan rekrutmen HMSI dengan visual yang menarik dan informasi yang jelas.',
    image: 'img/flayer1.jpg',
    featured: false,
  },
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [dragDirection, setDragDirection] = useState<'left' | 'right' | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Handle Swipe Drag
  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-zinc-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-3"
            >
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Selected Works</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-white leading-[0.9] tracking-tighter"
            >
              STUDIO <br /> <span className="text-zinc-400 font-medium italic">ARCHIVE</span>.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="md:text-right mt-6 md:mt-0"
          >
            <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest">Visual Identity / Digital Experience</p>
            <p className="text-zinc-400 text-[10px] font-mono mt-1">SERIES 2024 — 2025</p>
          </motion.div>
        </div>

        {/* Minimalist Interactive Swipeable Slider */}
        <div className="relative flex flex-col items-center">
          
          {/* Main Stage Viewport */}
          <div className="relative w-full max-w-125 h-120 md:h-150 flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
            
            {/* Soft Ambient Shadow Blur based on Active Project Color */}
            <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-600/5 rounded-3xl blur-3xl pointer-events-none scale-90 -z-10 transition-all duration-1000" />

            <AnimatePresence mode="popLayout" initial={false}>
              {projects.map((project, index) => {
                const isActive = index === currentIndex;
                const isNext = index === (currentIndex + 1) % projects.length;
                const isPrev = index === (currentIndex - 1 + projects.length) % projects.length;

                // Only render active, next and prev cards to keep layout super clean and performant
                if (!isActive && !isNext && !isPrev) return null;

                // Custom styling & positioning formulas for premium piling slide aesthetic
                let xPosition: string | number = 0;
                let scale = 1;
                let rotation = 0;
                let opacity = 1;
                let zIndex = 10;

                if (isActive) {
                  xPosition = 0;
                  scale = 1;
                  rotation = 0;
                  opacity = 1;
                  zIndex = 30;
                } else if (isNext) {
                  xPosition = '105%';
                  scale = 0.9;
                  rotation = 4;
                  opacity = 0.4;
                  zIndex = 20;
                } else if (isPrev) {
                  xPosition = '-105%';
                  scale = 0.9;
                  rotation = -4;
                  opacity = 0.4;
                  zIndex = 20;
                }

                return (
                  <motion.div
                    key={project.id}
                    drag={isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.6}
                    onDragEnd={isActive ? handleDragEnd : undefined}
                    initial={{ 
                      opacity: 0, 
                      scale: 0.8, 
                      x: xPosition,
                      rotate: rotation
                    }}
                    animate={{ 
                      opacity, 
                      scale,
                      x: xPosition,
                      rotate: rotation,
                      zIndex
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.7,
                      y: 30
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 160, 
                      damping: 24,
                      mass: 0.8
                    }}
                    onClick={() => {
                      if (isActive) {
                        setSelectedProject(project);
                      } else {
                        setCurrentIndex(index);
                      }
                    }}
                    className={cn(
                      "absolute w-full h-full p-4 md:p-6 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-2xl transition-shadow",
                      isActive ? "ring-1 ring-blue-500/10" : "grayscale touch-none"
                    )}
                  >
                    {/* Minimal Full Bleed Aesthetics Card */}
                    <div className="relative w-full h-full rounded-4xl overflow-hidden group">
                      
                      {/* Image Frame */}
                      <img
                        src={project.image}
                        alt={project.title}
                        draggable="false"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                      />

                      {/* Visual Gradient Bottom Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/30 to-transparent transition-opacity duration-500" />

                      {/* Floating Interactive Badge */}
                      {isActive && (
                        <div className="absolute top-6 right-6 opacity-0 sm:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 select-none">
                            <ExternalLink size={16} />
                          </div>
                        </div>
                      )}

                      {/* Info Overlay Panel */}
                      <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end text-left select-none text-white">
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-300">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none mb-2">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 text-xs font-medium max-w-sm line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                          {project.description}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            
          </div>

          {/* User Touchscreen Swipe/Scroll Help Indicator */}
          <div className="mt-6 flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-[10px] font-bold tracking-widest uppercase select-none animate-pulse">
            <Sparkles size={11} className="text-blue-500" />
            <span>Geser kartu atau sentuh ikon panah</span>
          </div>

          {/* Custom Elegant Interface Controls */}
          <div className="flex items-center gap-10 mt-6 select-none">
            
            {/* Left Trigger Button */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3.5 rounded-full text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200/50 dark:hover:border-zinc-800 transition-all duration-300"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </motion.button>

            {/* Custom Dot Progress Pipeline indicators */}
            <div className="flex gap-2.5 items-center">
              {projects.map((_, i) => {
                const isSelected = currentIndex === i;
                return (
                  <button 
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className="p-1 group focus:outline-none focus:ring-0"
                  >
                    <div 
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-500 ease-out",
                        isSelected 
                          ? "bg-blue-600 dark:bg-blue-500 w-9" 
                          : "bg-zinc-200 dark:bg-zinc-800 w-1.5 hover:bg-zinc-400 dark:hover:bg-zinc-600"
                      )}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Trigger Button */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-3.5 rounded-full text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200/50 dark:hover:border-zinc-800 transition-all duration-300"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </motion.button>

          </div>

        </div>
      </div>

      {/* Aesthetic Project Details Pop-Up Modals */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
            {/* Backdrop Blur Overlays */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            {/* Details Content Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-4xl overflow-hidden shadow-2xl z-10 border border-zinc-200 dark:border-zinc-800"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-zinc-800 dark:text-zinc-200 transition-colors z-20 focus:outline-none"
              >
                <X size={20} />
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-3/5 h-64 md:h-112.5">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    // Mengubah class object-cover menjadi object-contain di sini
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="md:w-2/5 p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black mt-3 mb-4 text-zinc-900 dark:text-white uppercase tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 text-sm font-medium">
                    {selectedProject.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedProject(null)}
                    className="mt-auto px-6 py-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-black uppercase text-xs tracking-widest rounded-2xl transition-all cursor-pointer"
                  >
                    Tutup Detail
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}