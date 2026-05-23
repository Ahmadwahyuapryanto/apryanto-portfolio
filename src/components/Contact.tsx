import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Instagram, Linkedin, Github, Send, Download, ArrowUpRight, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const contactLinks = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: '+62 813 1677 9403',
      href: 'https://wa.me/6281316779403',
      color: 'hover:border-emerald-500/50 hover:bg-emerald-50/30 dark:hover:bg-emerald-500/5 hover:text-emerald-600 dark:hover:text-emerald-400',
      iconBg: 'bg-emerald-100/50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      icon: <Phone size={20} />,
    },
    {
      id: 'email',
      label: 'Email',
      value: 'ahmadwahyuapryanto18@gmail.com',
      href: 'mailto:ahmadwahyuapryanto18@gmail.com',
      color: 'hover:border-blue-500/50 hover:bg-blue-50/30 dark:hover:bg-blue-500/5 hover:text-blue-600 dark:hover:text-blue-400',
      iconBg: 'bg-blue-100/50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400',
      icon: <Mail size={20} />,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      value: '@Apryanto_Eighteen',
      href: 'https://instagram.com/Apryanto_Eighteen',
      color: 'hover:border-pink-500/50 hover:bg-pink-50/30 dark:hover:bg-pink-500/5 hover:text-pink-600 dark:hover:text-pink-400',
      iconBg: 'bg-pink-100/50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400',
      icon: <Instagram size={20} />,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'ahmad-wahyu-apryanto',
      href: 'https://www.linkedin.com/in/ahmad-wahyu-apryanto',
      color: 'hover:border-sky-500/50 hover:bg-sky-50/30 dark:hover:bg-sky-500/5 hover:text-sky-600 dark:hover:text-sky-400',
      iconBg: 'bg-sky-100/50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400',
      icon: <Linkedin size={20} />,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'Ahmadwahyuapryanto',
      href: 'https://github.com/Ahmadwahyuapryanto',
      color: 'hover:border-zinc-500/50 hover:bg-zinc-50/30 dark:hover:bg-zinc-500/5 hover:text-zinc-950 dark:hover:text-zinc-100',
      iconBg: 'bg-zinc-100/50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300',
      icon: <Github size={20} />,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSending(true);
    // Simulate premium aesthetic sending flow
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50/30 dark:bg-zinc-950/20 relative overflow-hidden">
      {/* Aesthetic glowing orb in background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/30 mb-4"
          >
            <Sparkles size={12} className="text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">CONNECT & COLLABORATE</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-7xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-none"
          >
            MARI KITA <span className="text-blue-600 italic font-medium font-serif normal-case">Terhubung</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 mt-4 max-w-lg leading-relaxed font-medium"
          >
            Mempunyai ide proyek luar biasa atau hanya ingin sekedar menyapa? Pilih jalur koneksi ternyaman Anda atau kirim pesan instan di bawah ini.
          </motion.p>
        </div>

        {/* Bento Grid Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Connections Grid & Resume Download */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 mb-2 px-1">Koneksi Saya</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target={link.id !== 'email' ? "_blank" : undefined}
                  rel={link.id !== 'email' ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`flex items-center p-4 bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl group transition-all duration-300 ${link.color}`}
                >
                  <div className={`p-3 rounded-xl mr-4 transition-transform group-hover:scale-110 duration-300 ${link.iconBg}`}>
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none mb-1">{link.label}</p>
                    <p className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200 truncate group-hover:text-current">{link.value}</p>
                  </div>
                  <div className="ml-4 w-8 h-8 rounded-full border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-zinc-300 dark:text-zinc-700 group-hover:text-current group-hover:border-current transition-all duration-300">
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Aesthetic Resume CTA Download Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-linear-to-br from-zinc-900 to-zinc-950 dark:from-zinc-900/40 dark:to-zinc-900/10 border border-zinc-800 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-block px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3 text-[9px] font-bold text-blue-400 tracking-wider uppercase">
                    RESUME SAYA
                  </div>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight mb-2">Inginkan File Cetak?</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mb-6">Unduh riwayat hidup lengkap saya untuk melengkapi dokumen keperluan rekrutmen atau pengarsipan.</p>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 py-3 px-6 bg-white dark:bg-white text-zinc-950 hover:bg-zinc-150 transition-colors rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg shadow-white/5 cursor-pointer"
                >
                  <span>Unduh CV Lengkap</span>
                  <Download size={14} />
                </motion.button>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 mb-4 px-1">Kirim Pesan Instan</h3>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800 rounded-[2.5rem] p-6 sm:p-10 shadow-xl shadow-zinc-100/50 dark:shadow-none overflow-hidden relative"
            >
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-2 px-2">Nama Lengkap *</label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white border border-zinc-200/70 dark:border-zinc-800 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/60 transition-all font-medium text-sm placeholder-zinc-400"
                          placeholder="Contoh: John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-2 px-2">Alamat Email *</label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white border border-zinc-200/70 dark:border-zinc-800 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/60 transition-all font-medium text-sm placeholder-zinc-400"
                          placeholder="johndoe@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-2 px-2">Subjek Pesan</label>
                      <input
                        type="text"
                        id="subject"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white border border-zinc-200/70 dark:border-zinc-800 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/60 transition-all font-medium text-sm placeholder-zinc-400"
                        placeholder="Contoh: Penawaran Kolaborasi Projek"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-2 px-2">Pesan Anda *</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white border border-zinc-200/70 dark:border-zinc-800 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/60 transition-all font-medium text-sm placeholder-zinc-400 resize-none"
                        placeholder="Halo, saya ingin mendiskusikan..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSending}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-4.5 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-xs tracking-[0.2em] rounded-2xl transition-colors flex items-center justify-center gap-3 shadow-lg shadow-blue-500/10 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sedikit Lagi...</span>
                        </>
                      ) : (
                        <>
                          <span>Kirim Pesan Sekarang</span>
                          <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-20 h-20 bg-blue-50 dark:bg-blue-950/40 rounded-full flex items-center justify-center border border-blue-100 dark:border-blue-900/50 mb-6 text-blue-600"
                    >
                      <CheckCircle2 size={40} className="stroke-[1.5]" />
                    </motion.div>
                    <h4 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tight mb-2">Terima Kasih Banyak!</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm mb-8 leading-relaxed font-medium">Pesan Anda telah berhasil mendarat dengan aman. Saya akan segera membaca pesan Anda dan membalas melalui email secepatnya.</p>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsSent(false)}
                      className="px-6 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                    >
                      Kirim Pesan Lainnya
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
