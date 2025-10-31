"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Leaf, Sparkles } from 'lucide-react';

export function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax Background Layer 1 - Slowest */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]), scale }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1650513259622-081281181c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBsaWJyYXJ5JTIwc2hlbHZlc3xlbnwxfHx8fDE3NjE2Mzc2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080)`
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#3e2723]/90 via-[#704214]/60 to-[#3e2723]/90 dark:from-[#1a1614]/85 dark:via-[#4e342e]/50 dark:to-[#1a1614]/85" />
      </motion.div>

      {/* Parallax Background Layer 2 - Vintage Paper Texture */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]) }}
        className="absolute inset-0 z-1 opacity-20 dark:opacity-10"
      >
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(139, 111, 71, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(201, 169, 97, 0.06) 0%, transparent 40%),
            repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(112, 66, 20, 0.02) 3px, rgba(112, 66, 20, 0.02) 4px)
          `
        }} />
      </motion.div>

      {/* Vintage paper stains and aging */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.15, 0.05]) }}
        className="absolute inset-0 z-1"
      >
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-[#8b6f47]/5 dark:bg-[#8b6f47]/3 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#704214]/5 dark:bg-[#704214]/3 blur-3xl" />
      </motion.div>

      {/* Floating Elements with Different Parallax Speeds */}
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["0%", "120%"]),
          x: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, -30])
        }}
        className="absolute top-20 left-10 opacity-40 dark:opacity-30"
      >
        <motion.img 
        />
      </motion.div>

      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["0%", "180%"]),
          x: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 45])
        }}
        className="absolute top-40 right-20 opacity-20 dark:opacity-15"
      >
        <BookOpen size={100} className="text-[#c9a961] dark:text-[#b8935c]" />
      </motion.div>

      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["0%", "90%"]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, -60])
        }}
        className="absolute bottom-40 left-1/4 opacity-15 dark:opacity-10"
      >
        <Leaf size={60} className="text-[#8b956d] dark:text-[#7a8450]" />
      </motion.div>

      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["0%", "150%"]),
          x: useTransform(scrollYProgress, [0, 1], ["0%", "-40%"])
        }}
        className="absolute top-60 right-1/3 opacity-15 dark:opacity-10"
      >
        <Sparkles size={70} className="text-[#c9a961] dark:text-[#b8935c]" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="mb-6 inline-block">
            {/* Ornate vintage border top */}
            <motion.div 
              className="text-[#c9a961] dark:text-[#b8935c] mb-6 text-3xl"
              animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ❦ ◈ ❦
            </motion.div>
            
            <motion.h1 
              className="text-7xl md:text-9xl text-[#f4e8d0] dark:text-[#e8d7ba] mb-4 font-serif tracking-wide"
              style={{ 
                y: useTransform(scrollYProgress, [0, 1], ["0px", "50px"]),
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
              }}
            >
              The Chronicles
            </motion.h1>
            
            {/* Ornate vintage border bottom */}
            <motion.div 
              className="text-[#c9a961] dark:text-[#b8935c] mt-6 text-2xl"
              animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
              ⚜ ✦ ⚜ ✦ ⚜
            </motion.div>
          </div>
          
          <motion.p 
            className="text-2xl md:text-3xl text-[#f4e8d0]/90 dark:text-[#e8d7ba]/90 mb-8 font-serif italic relative"
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0px", "30px"]) }}
          >
            <span className="text-[#c9a961]/60 text-5xl absolute -left-8 -top-2">"</span>
            A Digital Portfolio of Stories & Creations
            <span className="text-[#c9a961]/60 text-5xl absolute -right-8 -bottom-2">"</span>
          </motion.p>
          
          <motion.div 
            className="flex gap-4 justify-center items-center text-[#f4e8d0]/80 dark:text-[#e8d7ba]/80 mt-12"
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0px", "20px"]) }}
          >
            <span className="text-[#c9a961]/40">～</span>
            <p className="max-w-md font-serif">
              Every project tells a story. Every line of code, a verse in the epic of creation.
            </p>
            <span className="text-[#c9a961]/40">～</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10"
        >
          <div className="flex flex-col items-center gap-2 text-[#c9a961]/60 dark:text-[#b8935c]/60">
            <span className="text-sm tracking-widest">SCROLL TO BEGIN</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
