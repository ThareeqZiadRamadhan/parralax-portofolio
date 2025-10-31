"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { User, Heart, Code, Sparkles } from 'lucide-react';

export function AboutChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);
  const yFast = useTransform(scrollYProgress, [0, 1], ["150px", "-150px"]);
  const ySlow = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const rotateLeft = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);
  const rotateRight = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <div ref={ref} className="relative py-32 px-6 bg-linear-to-b from-[#f4e8d0] via-[#e8d7ba]/50 to-[#f4e8d0] dark:from-[#3e2723] dark:via-[#4e342e]/30 dark:to-[#3e2723]">
      {/* Animated Background Patterns */}
      <motion.div 
        style={{ y: ySlow }}
        className="absolute inset-0 opacity-30 dark:opacity-10"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 111, 71, 0.05) 2px, rgba(139, 111, 71, 0.05) 3px)`
        }} />
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        style={{ y: yFast, rotate: useTransform(scrollYProgress, [0, 1], [0, 360]) }}
        className="absolute top-20 right-10 text-[#c9a961]/10 dark:text-[#c9a961]/5"
      >
        <Sparkles size={120} />
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["80px", "-80px"]) }}
        className="absolute bottom-20 left-10 text-[#8b6f47]/10 dark:text-[#8b6f47]/5"
      >
        <Code size={100} />
      </motion.div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block relative">
            <p className="text-[#8b6f47]/60 dark:text-[#c9a961]/60 mb-2 tracking-[0.3em] text-sm">
              <span className="text-2xl">❧</span> CHAPTER I <span className="text-2xl">❧</span>
            </p>
            <h2 className="text-6xl md:text-7xl text-[#704214] dark:text-[#f4e8d0] font-serif mb-4" style={{
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
            }}>The Author</h2>
            {/* Wavy vintage divider */}
            <svg className="w-48 h-4 mx-auto opacity-30" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5 T120,5 T140,5 T160,5 T180,5 T200,5" 
                    stroke="currentColor" 
                    fill="none" 
                    strokeWidth="1"
                    className="text-[#8b6f47] dark:text-[#c9a961]" />
            </svg>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Page */}
          <motion.div
            style={{ y, rotate: rotateLeft, scale }}
            className="relative"
          >
            <div className="bg-white/80 dark:bg-[#4e342e]/80 backdrop-blur-sm p-12 shadow-2xl border-2 border-[#c9a961]/50 dark:border-[#8b6f47]/50 rounded-sm relative" style={{
              boxShadow: "8px 8px 0px rgba(139, 111, 71, 0.1), 12px 12px 20px rgba(0,0,0,0.2)"
            }}>
              {/* Ornate corner decorations */}
              <div className="absolute top-2 left-2 text-[#8b6f47]/20 dark:text-[#c9a961]/20 text-3xl">╔</div>
              <div className="absolute top-2 right-2 text-[#8b6f47]/20 dark:text-[#c9a961]/20 text-3xl">╗</div>
              <div className="absolute bottom-2 left-2 text-[#8b6f47]/20 dark:text-[#c9a961]/20 text-3xl">╚</div>
              <div className="absolute bottom-2 right-2 text-[#8b6f47]/20 dark:text-[#c9a961]/20 text-3xl">╝</div>
              
              {/* Vintage paper texture overlay */}
              <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                backgroundImage: `radial-gradient(circle at 30% 40%, rgba(139, 111, 71, 0.05) 0%, transparent 60%)`
              }} />
              
              <motion.div 
                className="flex items-center gap-4 mb-8"
                style={{ x: useTransform(scrollYProgress, [0, 0.5], [-20, 0]) }}
              >
                <div className="w-20 h-20 bg-linear-to-br from-[#8b6f47] to-[#704214] dark:from-[#a0826d] dark:to-[#8b6f47] rounded-full flex items-center justify-center shadow-lg">
                  <User className="text-white" size={36} />
                </div>
                <div>
                  <h3 className="text-3xl text-[#704214] dark:text-[#f4e8d0] font-serif">Jane Doe</h3>
                  <p className="text-[#8b6f47] dark:text-[#c9a961] italic">Digital Storyteller</p>
                </div>
              </motion.div>

              <motion.p 
                className="text-[#704214]/80 dark:text-[#f4e8d0]/80 leading-relaxed mb-6 font-serif"
                style={{ x: useTransform(scrollYProgress, [0, 0.5], [-10, 0]) }}
              >
                In the realm where creativity meets code, I weave digital tales that captivate and inspire. 
                Each project is a journey, each line of code a carefully chosen word in an ever-evolving narrative.
              </motion.p>

              <motion.p 
                className="text-[#704214]/80 dark:text-[#f4e8d0]/80 leading-relaxed font-serif"
                style={{ x: useTransform(scrollYProgress, [0, 0.5], [-5, 0]) }}
              >
                With a passion for elegant solutions and beautiful design, I transform ideas into immersive 
                experiences that leave lasting impressions.
              </motion.p>

              <div className="absolute bottom-4 right-4 text-[#8b6f47]/40 dark:text-[#c9a961]/40 italic text-sm font-serif">
                <span className="text-xs">◆</span> Page 1 <span className="text-xs">◆</span>
              </div>
            </div>
          </motion.div>

          {/* Right Page */}
          <motion.div
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], ["50px", "-150px"]), 
              rotate: rotateRight,
              scale 
            }}
            className="relative"
          >
            <div className="bg-white/80 dark:bg-[#4e342e]/80 backdrop-blur-sm p-12 shadow-2xl border-2 border-[#c9a961]/50 dark:border-[#8b6f47]/50 rounded-sm relative" style={{
              boxShadow: "8px 8px 0px rgba(139, 111, 71, 0.1), 12px 12px 20px rgba(0,0,0,0.2)"
            }}>
              {/* Ornate corner decorations */}
              <div className="absolute top-2 left-2 text-[#8b6f47]/20 dark:text-[#c9a961]/20 text-3xl">╔</div>
              <div className="absolute top-2 right-2 text-[#8b6f47]/20 dark:text-[#c9a961]/20 text-3xl">╗</div>
              <div className="absolute bottom-2 left-2 text-[#8b6f47]/20 dark:text-[#c9a961]/20 text-3xl">╚</div>
              <div className="absolute bottom-2 right-2 text-[#8b6f47]/20 dark:text-[#c9a961]/20 text-3xl">╝</div>
              
              {/* Vintage paper texture overlay */}
              <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
                backgroundImage: `radial-gradient(circle at 70% 60%, rgba(139, 111, 71, 0.05) 0%, transparent 60%)`
              }} />

              <h3 className="text-2xl text-[#704214] dark:text-[#f4e8d0] font-serif mb-8 flex items-center gap-3">
                <Heart className="text-[#8b6f47] dark:text-[#c9a961]" size={24} />
                Passions & Pursuits
              </h3>

              <div className="space-y-6">
                <motion.div 
                  className="border-l-2 border-[#8b6f47] dark:border-[#c9a961] pl-6"
                  style={{ x: useTransform(scrollYProgress, [0, 0.5], [20, 0]) }}
                >
                  <h4 className="text-[#704214] dark:text-[#f4e8d0] mb-2 flex items-center gap-2">
                    <Code size={18} className="text-[#8b6f47] dark:text-[#c9a961]" />
                    Creative Development
                  </h4>
                  <p className="text-[#704214]/70 dark:text-[#f4e8d0]/70 text-sm font-serif">
                    Crafting pixel-perfect interfaces with modern technologies
                  </p>
                </motion.div>

                <motion.div 
                  className="border-l-2 border-[#8b6f47] dark:border-[#c9a961] pl-6"
                  style={{ x: useTransform(scrollYProgress, [0, 0.5], [30, 0]) }}
                >
                  <h4 className="text-[#704214] dark:text-[#f4e8d0] mb-2 flex items-center gap-2">
                    <span className="text-[#8b6f47] dark:text-[#c9a961]">✒</span>
                    Design Philosophy
                  </h4>
                  <p className="text-[#704214]/70 dark:text-[#f4e8d0]/70 text-sm font-serif">
                    Where minimalism meets elegance, form follows function
                  </p>
                </motion.div>

                <motion.div 
                  className="border-l-2 border-[#8b6f47] dark:border-[#c9a961] pl-6"
                  style={{ x: useTransform(scrollYProgress, [0, 0.5], [40, 0]) }}
                >
                  <h4 className="text-[#704214] dark:text-[#f4e8d0] mb-2 flex items-center gap-2">
                    <span className="text-[#8b6f47] dark:text-[#c9a961]">✦</span>
                    Innovation
                  </h4>
                  <p className="text-[#704214]/70 dark:text-[#f4e8d0]/70 text-sm font-serif">
                    Pushing boundaries, exploring new frontiers in digital art
                  </p>
                </motion.div>
              </div>

              <div className="absolute bottom-4 right-4 text-[#8b6f47]/40 dark:text-[#c9a961]/40 italic text-sm font-serif">
                <span className="text-xs">◆</span> Page 2 <span className="text-xs">◆</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Quote */}
        <motion.div
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], ["0px", "200px"]),
            opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.1, 0])
          }}
          className="absolute -right-10 top-1/2 text-9xl text-[#704214]/5 dark:text-[#f4e8d0]/5 font-serif pointer-events-none"
        >
          "
        </motion.div>
      </div>
    </div>
  );
}
