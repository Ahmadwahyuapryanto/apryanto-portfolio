import React from 'react';
import { motion } from 'motion/react';
import { Palette, Layout, Code, Smartphone, ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Desain Grafis',
    description: 'Solusi visual kreatif untuk brand Anda, mulai dari desain media sosial hingga kebutuhan cetak.',
    icon: <Palette size={24} />,
    color: 'bg-orange-500/10'
  },
  {
    id: '02',
    title: 'Logo Desainer',
    description: 'Membangun identitas unik melalui desain logo yang profesional, berkarakter, dan tak terlupakan.',
    icon: <Layout size={24} />,
    color: 'bg-blue-500/10'
  },
  {
    id: '03',
    title: 'Web Development',
    description: 'Transformasi ide Anda ke dunia digital dengan website yang responsif, cepat, dan modern.',
    icon: <Code size={24} />,
    color: 'bg-emerald-500/10'
  },
  {
    id: '04',
    title: 'Mobile App Design',
    description: 'Desain antarmuka aplikasi mobile (UI/UX) yang intuitif dan memberikan pengalaman pengguna terbaik.',
    icon: <Smartphone size={24} />,
    color: 'bg-purple-500/10'
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-0 pb-32 bg-white dark:bg-zinc-950 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] flex justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-px h-full bg-current" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pt-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-px bg-blue-600" />
              <span className="text-xs font-black uppercase tracking-[0.5em] text-blue-600">Pelayanan Utama</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white leading-[0.9] tracking-tighter"
            >
              MENGUBAH IDE <br /> <span className="text-zinc-400 font-medium italic">MENJADI</span> REALITA.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-zinc-500 dark:text-zinc-400 text-sm font-medium mt-8 md:mt-0 max-w-xs leading-relaxed"
          >
            Fokus pada fungsionalitas dan estetika minimalis untuk hasil yang berdampak maksimal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800 border-x border-zinc-200 dark:border-zinc-800">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 md:p-16 bg-white dark:bg-zinc-950 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
            >
              <div className="absolute top-10 right-10 flex items-center gap-4">
                <span className="text-xs font-mono text-zinc-300 dark:text-zinc-700">{service.id}</span>
                <div className={`w-10 h-10 rounded-full ${service.color} flex items-center justify-center text-zinc-900 dark:text-white opacity-0 group-hover:opacity-100 transition-all duration-500`}>
                  <ArrowRight size={16} />
                </div>
              </div>

              <div className="mb-8 text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform origin-left duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-sm">
                {service.description}
              </p>

              {/* Hover highlight line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
