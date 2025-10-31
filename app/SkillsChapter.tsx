"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Sparkles, Layers, Database, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: "Frontend Mastery",
    description: "React, TypeScript, Next.js, Vue.js",
    level: 95
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Tailwind, Styled Components, CSS-in-JS",
    level: 90
  },
  {
    icon: Layers,
    title: "Architecture",
    description: "Component Design, State Management",
    level: 88
  },
  {
    icon: Database,
    title: "Backend",
    description: "Node.js, PostgreSQL, REST APIs",
    level: 85
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, Lazy Loading, Caching",
    level: 92
  },
  {
    icon: Sparkles,
    title: "Animation",
    description: "Framer Motion, GSAP, CSS Transitions",
    level: 94
  }
];

export function SkillsChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={ref} className="relative py-32 px-6 bg-linear-to-b from-[#f4e8d0] via-[#e8d7ba]/50 to-[#f4e8d0] dark:from-[#3e2723] dark:via-[#4e342e]/30 dark:to-[#3e2723] overflow-hidden">
      {/* Animated background patterns with parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-20 dark:opacity-10"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 111, 71, 0.05) 2px, rgba(139, 111, 71, 0.05) 3px)`
        }} />
      </motion.div>

      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]) }}
        className="absolute inset-0 opacity-10 dark:opacity-5"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(112, 66, 20, 0.05) 2px, rgba(112, 66, 20, 0.05) 3px)`
        }} />
      </motion.div>

      {/* Floating decorative circles */}
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
        }}
        className="absolute top-20 right-20 w-40 h-40 rounded-full border-4 border-[#c9a961]/10 dark:border-[#c9a961]/5"
      />

      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["50px", "-150px"]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 180])
        }}
        className="absolute bottom-40 left-10 w-32 h-32 rounded-full border-4 border-[#8b6f47]/10 dark:border-[#8b6f47]/5"
      />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#8b6f47]/60 dark:text-[#c9a961]/60 mb-2 tracking-[0.3em] text-sm">
            <span className="text-2xl">✿</span> CHAPTER V <span className="text-2xl">✿</span>
          </p>
          <h2 className="text-6xl md:text-7xl text-[#704214] dark:text-[#f4e8d0] font-serif mb-4" style={{
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
          }}>The Craft</h2>
          {/* Ornate wavy divider */}
          <svg className="w-48 h-4 mx-auto mb-6 opacity-30" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5 T120,5 T140,5 T160,5 T180,5 T200,5" 
                  stroke="currentColor" 
                  fill="none" 
                  strokeWidth="1"
                  className="text-[#8b6f47] dark:text-[#c9a961]" />
          </svg>
          <p className="text-[#704214]/70 dark:text-[#e8d7ba]/70 max-w-2xl mx-auto italic">
            Tools and techniques honed through countless hours of practice and dedication
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const cardRef = useRef<HTMLDivElement>(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "center center"]
            });

            const y = useTransform(
              cardProgress,
              [0, 0.5],
              [50 + (index % 3) * 20, 0]
            );
            const rotate = useTransform(
              cardProgress,
              [0, 0.5],
              [index % 2 === 0 ? -5 : 5, 0]
            );
            const opacity = useTransform(cardProgress, [0, 0.5], [0, 1]);
            const scale = useTransform(cardProgress, [0, 0.5, 1], [0.9, 1, 0.98]);

            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                ref={cardRef}
                style={{ y, rotate, opacity, scale }}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-white/80 dark:bg-[#4e342e]/80 backdrop-blur-sm p-8 shadow-xl border-2 border-[#c9a961]/30 dark:border-[#8b6f47]/30 rounded-sm h-full transition-all duration-500 hover:shadow-2xl hover:border-[#c9a961]/50 dark:hover:border-[#c9a961]/50 hover:-translate-y-2 relative" style={{
                  boxShadow: "5px 5px 0px rgba(139, 111, 71, 0.1), 8px 8px 20px rgba(0,0,0,0.2)"
                }}>
                  {/* Ornate corner decorations */}
                  <div className="absolute top-2 right-2 text-[#c9a961]/20 dark:text-[#c9a961]/20 text-2xl">╮</div>
                  <div className="absolute bottom-2 left-2 text-[#c9a961]/20 dark:text-[#c9a961]/20 text-2xl">╰</div>
                  
                  {/* Vintage paper texture */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none rounded-sm" style={{
                    backgroundImage: `radial-gradient(circle at 60% 40%, rgba(139, 111, 71, 0.05) 0%, transparent 60%)`
                  }} />

                  {/* Icon with parallax */}
                  <motion.div 
                    className="mb-6 relative"
                    style={{ y: useTransform(cardProgress, [0, 1], [0, -10]) }}
                  >
                    <motion.div 
                      className="w-16 h-16 bg-linear-to-br from-[#8b6f47] to-[#704214] dark:from-[#a0826d] dark:to-[#8b6f47] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="text-white" size={30} />
                    </motion.div>
                    <motion.div 
                      className="absolute -top-2 -left-2 text-6xl text-[#704214]/5 dark:text-[#f4e8d0]/5 font-serif"
                      style={{ 
                        x: useTransform(cardProgress, [0, 1], [0, 5]),
                        y: useTransform(cardProgress, [0, 1], [0, 5])
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl text-[#704214] dark:text-[#f4e8d0] font-serif mb-3">{skill.title}</h3>
                  <p className="text-[#704214]/70 dark:text-[#e8d7ba]/70 text-sm mb-6 leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Skill Level */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-[#704214]/60 dark:text-[#e8d7ba]/60">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[#704214]/10 dark:bg-[#f4e8d0]/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        className="h-full bg-linear-to-r from-[#8b6f47] to-[#704214] dark:from-[#a0826d] dark:to-[#8b6f47] shadow-sm relative overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Decorative ornament */}
                  <div className="absolute bottom-4 right-4 text-[#704214]/10 dark:text-[#e8d7ba]/10 text-3xl">❧</div>
                </div>

                {/* Page curl effect */}
                <motion.div 
                  className="absolute bottom-0 right-0 w-8 h-8 bg-[#d4c5a9]/30 dark:bg-[#704214]/30 transform rotate-45 translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"
                  style={{ rotate: useTransform(cardProgress, [0, 1], [45, 90]) }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="inline-block">
            <p className="text-[#704214]/50 dark:text-[#e8d7ba]/50 text-2xl mb-2">❦ ◈ ❦</p>
            <p className="text-[#704214]/70 dark:text-[#e8d7ba]/70 italic font-serif">
              <span className="text-[#8b6f47]/40 text-4xl">"</span>Mastery is not a destination, but an endless journey<span className="text-[#8b6f47]/40 text-4xl">"</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
