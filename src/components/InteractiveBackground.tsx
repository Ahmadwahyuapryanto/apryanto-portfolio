import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';

export default function InteractiveBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothCursorX = useSpring(cursorX, { damping: 40, stiffness: 80 });
  const smoothCursorY = useSpring(cursorY, { damping: 40, stiffness: 80 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / 25);
      mouseY.set((e.clientY - window.innerHeight / 2) / 25);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, cursorX, cursorY]);

  const bubbles = [
    { size: 'w-64 h-64', top: '10%', left: '10%', delay: 0, color: 'bg-blue-400/20' },
    { size: 'w-48 h-48', top: '60%', left: '20%', delay: 2, color: 'bg-blue-300/10' },
    { size: 'w-80 h-80', top: '20%', left: '70%', delay: 4, color: 'bg-blue-500/10' },
    { size: 'w-32 h-32', top: '80%', left: '80%', delay: 1, color: 'bg-indigo-400/15' },
    { size: 'w-40 h-40', top: '40%', left: '40%', delay: 3, color: 'bg-blue-200/20' },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-zinc-50 dark:bg-zinc-950 transition-colors duration-1000">
      {/* Target/Cursor Bubble */}
      <motion.div
        style={{
          left: smoothCursorX,
          top: smoothCursorY,
          x: '-50%',
          y: '-50%',
        }}
        className="absolute w-[40vw] h-[40vw] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-[100px] z-0"
      />

      {bubbles.map((bubble, i) => (
        <motion.div
          key={i}
          style={{
            x: useTransform(smoothX, (v) => v * (i + 1) * 0.5),
            y: useTransform(smoothY, (v) => v * (i + 1) * 0.5),
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut"
          }}
          className={`absolute ${bubble.size} ${bubble.color} rounded-full blur-3xl`}
          initial={{ top: bubble.top, left: bubble.left }}
        />
      ))}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
