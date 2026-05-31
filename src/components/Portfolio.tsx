import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, ChevronLeft, ChevronRight, Sparkles, Code2, CheckCircle2, Maximize } from 'lucide-react';
import { cn } from '../lib/utils';

// Data Project
const projects = [
  {
    id: 1,
    title: 'LSES UNTIRTA',
    category: 'Desain Grafis',
    description: 'Desain logo profesional untuk organisasi kampus LSES UNTIRTA yang mencerminkan identitas akademik dan semangat kolaboratif.',
    image: '/img/logo2.jpg',
    featured: true,
    technologies: ['Adobe Illustrator', 'Photoshop', 'CorelDraw'],
    features: ['Filosofi Logo Mendalam', 'Desain Vektor Resolusi Tinggi', 'Warna Identitas Organisasi', 'Format Beragam (PNG, SVG, EPS)'],
    repoLink: '',
  },
  {
    id: 2,
    title: 'POPDA & PAPERDA',
    category: 'Desain Grafis',
    description: 'Partisipasi dalam kompetisi desain logo POPDA & PAPERDA dengan konsep yang dinamis dan enerjik sesuai semangat olahraga.',
    image: '/img/logo1.png',
    featured: false,
    technologies: ['Adobe Illustrator', 'Photoshop'],
    features: ['Konsep Dinamis', 'Representasi Olahraga', 'Warna Energik'],
    repoLink: '',
  },
  {
    id: 3,
    title: 'Sambara Label',
    category: 'Desain Grafis',
    description: 'Pengembangan label kemasan untuk produk Sambara, fokus pada estetika visual yang menggugah selera dan informatif.',
    image: '/img/Kemasan1.jpg',
    featured: false,
    technologies: ['Adobe Illustrator', 'Print Design'],
    features: ['Desain Siap Cetak (CMYK)', 'Tipografi Menarik', 'Informasi Nutrisi Jelas'],
    repoLink: '',
  },
  {
    id: 4,
    title: 'Seminar HMSI',
    category: 'Desain Grafis',
    description: 'Desain flyer publikasi untuk Seminar Nasional HMSI dengan layout yang bersih, modern, dan informatif.',
    image: '/img/flayer3.jpg',
    featured: true,
    technologies: ['Photoshop', 'Canva'],
    features: ['Layout Modern', 'Tipografi Hirarkis', 'Komposisi Visual Seimbang'],
    repoLink: '',
  },
  {
    id: 5,
    title: 'E-Commerce App',
    category: 'UI/UX Desain',
    description: 'Simulasi desain antarmuka aplikasi belanja online yang memudahkan pengguna dalam bernavigasi dan bertransaksi.',
    image: '/img/uiux1.png',
    featured: false,
    technologies: ['Figma', 'Prototyping', 'Wireframing'],
    features: ['User-Centered Design', 'Interactive Prototype', 'Sistem Desain Konsisten', 'Responsive Mobile Layout'],
    repoLink: '',
  },
  {
    id: 6,
    title: 'Peringatan Pancasila',
    category: 'Desain Grafis',
    description: 'Desain flyer Peringatan Hari Pancasila dengan pendekatan visual yang kuat dan simbolik untuk memperingati nilai-nilai dasar bangsa.',
    image: '/img/flayer2.jpg',
    featured: true,
    technologies: ['Photoshop', 'Illustrator'],
    features: ['Visual Simbolik', 'Kesesuaian Tema Nasional', 'Estetika Elegan'],
    repoLink: '',
  },
  {
    id: 7,
    title: 'Recruitment HMSI',
    category: 'Desain Grafis',
    description: 'Desain flyer untuk kegiatan rekrutmen HMSI dengan visual yang menarik dan informasi yang jelas.',
    image: '/img/flayer1.jpg',
    featured: false,
    technologies: ['Photoshop'],
    features: ['Desain Atraktif', 'Penyampaian Informasi Jelas'],
    repoLink: '',
  },
  // --- Web Portfolio (2 Project) ---
  {
    id: 8,
    title: 'Modern Portfolio Website',
    category: 'Website',
    description: 'Portfolio pribadi dengan desain minimalis menggunakan transisi animasi halus untuk menonjolkan karya desain.',
    image: '/img/portfolio1.png',
    featured: true,
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    features: ['Dark Mode', 'Page Transitions', 'Responsive Grid'],
    repoLink: 'https://muhammad-rizkq-portfolio.vercel.app/',
  },
  {
    id: 9,
    title: 'Creative Portfolio Simple',
    category: 'Website',
    description: 'Arsip karya desain dengan sistem filtering kategori yang interaktif dan grid layout yang dinamis.',
    image: '/img/portfolio2.png',
    featured: true,
    technologies: ['Next.js', 'TypeScript', 'Motion'],
    features: ['Dynamic Filtering', 'Lazy Loading Images', '3D Card Effect'],
    repoLink: 'https://ahmadwahyuapryanto.github.io/My_Portfolio/',
  },

  // --- Landing Page (1 Project) ---
  {
    id: 10,
    title: 'Product Launch Landing Page',
    category: 'Website',
    description: 'Landing page konversi tinggi untuk peluncuran produk digital dengan fokus pada Call-to-Action (CTA).',
    image: '/img/lp1.png',
    featured: false,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: ['Email Subscription', 'Fast Loading', 'Mobile Optimized'],
    repoLink: 'https://prime-property-rosy.vercel.app/',
  },

  // --- Web Penerimaan Siswa Baru (1 Project) ---
  {
    id: 11,
    title: 'Sistem Penerimaan Siswa Baru',
    category: 'Website',
    description: 'Sistem web untuk mempermudah pendaftaran siswa baru, dilengkapi dengan dashboard validasi berkas.',
    image: '/img/psb.png',
    featured: true,
    technologies: ['Laravel', 'MySQL', 'Bootstrap'],
    features: ['Formulir Pendaftaran Online', 'Upload Dokumen', 'Dashboard Admin', 'Export Data Excel'],
    repoLink: 'https://psb-bustanul-wildan.vercel.app/',
  }
];

// Daftar kategori untuk filter
const filterCategories = ['Semua', 'Website', 'Android', 'Desain Grafis', 'UI/UX Desain'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Logika Filter
  const filteredProjects = activeFilter === 'Semua' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Reset slider index ketika filter berubah
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  const nextSlide = () => {
    if (filteredProjects.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }
  };

  const prevSlide = () => {
    if (filteredProjects.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
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

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16 relative z-20">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "px-5 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 border",
                activeFilter === cat 
                  ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white shadow-lg" 
                  : "bg-transparent text-zinc-500 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider Section */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-full max-w-125 h-120 md:h-150 flex items-center justify-center select-none cursor-grab active:cursor-grabbing">
            <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-600/5 rounded-3xl blur-3xl pointer-events-none scale-90 -z-10 transition-all duration-1000" />

            {filteredProjects.length === 0 ? (
              <div className="text-zinc-400 dark:text-zinc-600 font-medium">Belum ada project di kategori ini.</div>
            ) : (
              <AnimatePresence mode="popLayout" initial={false}>
                {filteredProjects.map((project, index) => {
                  const isActive = index === currentIndex;
                  const isNext = index === (currentIndex + 1) % filteredProjects.length;
                  const isPrev = index === (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;

                  if (!isActive && !isNext && !isPrev) return null;

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
                      initial={{ opacity: 0, scale: 0.8, x: xPosition, rotate: rotation }}
                      animate={{ opacity, scale, x: xPosition, rotate: rotation, zIndex }}
                      exit={{ opacity: 0, scale: 0.7, y: 30 }}
                      transition={{ type: "spring", stiffness: 160, damping: 24, mass: 0.8 }}
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
                      <div className="relative w-full h-full rounded-4xl overflow-hidden group bg-zinc-100 dark:bg-zinc-800">
                        <img
                          src={project.image}
                          alt={project.title}
                          draggable="false"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-zinc-950/30 to-transparent transition-opacity duration-500" />
                        {isActive && (
                          <div className="absolute top-6 right-6 opacity-0 sm:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 select-none">
                              <ExternalLink size={16} />
                            </div>
                          </div>
                        )}
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
            )}
          </div>

          <div className="mt-6 flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-[10px] font-bold tracking-widest uppercase select-none animate-pulse">
            <Sparkles size={11} className="text-blue-500" />
            <span>Geser kartu atau sentuh ikon panah</span>
          </div>

          <div className="flex items-center gap-10 mt-6 select-none">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3.5 rounded-full text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200/50 dark:hover:border-zinc-800 transition-all duration-300"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </motion.button>

            <div className="flex gap-2.5 items-center">
              {filteredProjects.map((_, i) => {
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

      {/* MODAL TAMPILAN DETAIL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 dark:bg-black/90 backdrop-blur-sm"
            />
            
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl bg-white dark:bg-[#0a0a0a] text-zinc-800 dark:text-zinc-300 rounded-3xl overflow-y-auto max-h-[90vh] shadow-2xl z-10 border border-zinc-200 dark:border-zinc-800 custom-scrollbar"
            >
              {/* Header Modal & Tombol Close */}
              <div className="sticky top-0 z-20 flex justify-between items-center p-6 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/50">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-sm font-medium transition-colors"
                  >
                    <ChevronLeft size={16} />
                    Back
                  </button>
                </div>
                <div className="px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 text-[10px] font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
                  Project Case Study
                </div>
              </div>
              
              <div className="p-6 md:p-10 flex flex-col lg:flex-row gap-10">
                
                {/* Bagian Kiri: Teks & Informasi */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="w-12 h-1 bg-green-500 mb-6 rounded-full" />
                  
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 text-sm">
                    {selectedProject.description}
                  </p>

                  {/* Statistik Kotak (Technologies & Features) */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                      <span className="text-3xl font-black text-zinc-900 dark:text-white mb-2">{selectedProject.technologies?.length || 0}</span>
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Technologies Used</span>
                    </div>
                    <div className="bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-6 text-center flex flex-col items-center justify-center">
                      <span className="text-3xl font-black text-zinc-900 dark:text-white mb-2">{selectedProject.features?.length || 0}</span>
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Key Features</span>
                    </div>
                  </div>

                  {/* Tombol Link & Lihat Gambar */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <a 
                      href={selectedProject.repoLink || '#'} 
                      target="_blank" rel="noreferrer"
                      className={cn(
                        "flex items-center justify-center gap-2 py-3 rounded-xl border text-xs font-bold tracking-widest uppercase transition-colors",
                        selectedProject.repoLink 
                          ? "border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white" 
                          : "border-zinc-200 dark:border-zinc-800/50 bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-400 dark:text-zinc-600 cursor-not-allowed"
                      )}
                    >
                      <Code2 size={16} />
                      {selectedProject.repoLink ? 'Link Website' : 'No Link'}
                    </a>
                    
                    {/* Tombol Baru: Lihat Gambar Full */}
                    <a 
                      href={selectedProject.image} 
                      target="_blank" rel="noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white text-xs font-bold tracking-widest uppercase transition-colors"
                    >
                      <Maximize size={16} />
                      Lihat Gambar Full
                    </a>
                  </div>

                  {/* Teknologi yang digunakan (Bentuk Pills) */}
                  {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles size={14} className="text-zinc-500" />
                        <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Technologies Used</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#111] text-zinc-700 dark:text-zinc-300 text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bagian Kanan: Gambar & Key Features */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  
                  {/* Gambar Project */}
                  <div className="relative w-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 h-64 md:h-80 group">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-md rounded-md text-[10px] font-mono text-zinc-300 border border-zinc-700">
                      Interactive Interface
                    </div>
                  </div>
                  
                  {/* Key Features List */}
                  <div className="bg-zinc-50 dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex-1">
                    <div className="flex items-center gap-2 mb-6">
                      <Code2 size={14} className="text-zinc-500" />
                      <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Key Features</h4>
                    </div>
                    <ul className="space-y-4">
                      {selectedProject.features?.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                          <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}