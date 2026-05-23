import React from 'react';
import { motion } from 'motion/react';

const softwareSkills = [
  { name: 'Figma', percentage: 65, color: 'bg-purple-500' },
  { name: 'Canva', percentage: 78, color: 'bg-blue-400' },
  { name: 'Adobe (Ps/Ai)', percentage: 50, color: 'bg-orange-500' },
  { name: 'Laravel', percentage: 40, color: 'bg-red-600' },
  { name: 'MS Word', percentage: 70, color: 'bg-blue-700' },
  { name: 'Excel', percentage: 50, color: 'bg-green-600' },
  { name: 'Flutter', percentage: 50, color: 'bg-cyan-500' },
];

export default function SoftwareSkills() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 dark:text-blue-400 font-semibold tracking-widest uppercase text-sm"
            >
              Keahlian Software
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mt-4 mb-8 text-zinc-900 dark:text-white"
            >
              Software & Alat <br /> Yang Saya Gunakan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-md"
            >
              Penguasaan berbagai perangkat lunak desain dan pengembangan untuk memberikan hasil terbaik di setiap projek.
            </motion.p>
          </div>

          <div className="lg:w-1/2 w-full space-y-8">
            {softwareSkills.map((skill, index) => (
              <div key={skill.name} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-bold text-zinc-900 dark:text-white">{skill.name}</span>
                  <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{skill.percentage}%</span>
                </div>
                <div className="h-3 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className={`h-full ${skill.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
