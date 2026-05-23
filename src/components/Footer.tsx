import React from 'react';
import { Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const socials = [
    { icon: <Instagram size={18} />, href: 'https://instagram.com/Apryanto_Eighteen' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/ahmad-wahyu-apryanto' },
    { icon: <Github size={18} />, href: 'https://github.com/Ahmadwahyuapryanto' },
  ];

  return (
    <footer className="py-12 bg-transparent border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
             <div className="flex items-center space-x-2">
              <img 
                src="/img/logo.png" 
                alt="Logo" 
                className="w-15 h-15 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                <span className="text-blue-600 dark:text-blue-400">Apryanto</span>.
              </span>
             </div>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
              Desain Grafis & Web Developer
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-xs text-zinc-400">
              &copy; {new Date().getFullYear()} Ahmad Wahyu Apryanto. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
