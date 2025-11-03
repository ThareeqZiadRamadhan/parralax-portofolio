"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: "The Merchant's Tale",
    subtitle: "E-Commerce Platform",
    description: "A full-stack marketplace where vendors and customers unite in harmonious commerce. Built with modern technologies and a focus on user experience.",
    image: "https://images.unsplash.com/photo-1657550650205-a351418bbf89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9vayUyMHBhZ2VzfGVufDF8fHx8MTc2MTU1Nzc2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React", "Node.js", "PostgreSQL"],
    chapter: "II"
  },
  {
    id: 2,
    title: "Chronicles of Code",
    subtitle: "Developer Blog Platform",
    description: "A sanctuary for developers to share knowledge and insights. Features markdown support, syntax highlighting, and a clean reading experience.",
    image: "https://images.unsplash.com/photo-1533140717783-6db98f7d7de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwdHlwZXdyaXRlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE2Mzc2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Next.js", "MDX", "Tailwind"],
    chapter: "III"
  },
  {
    id: 3,
    title: "The Artist's Canvas",
    subtitle: "Portfolio Website",
    description: "An immersive digital gallery showcasing creative works with smooth animations and responsive design that adapts to any device.",
    image: "https://images.unsplash.com/photo-1679212766287-9ad87ee5a567?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnRpcXVlJTIwd3JpdGluZyUyMGRlc2t8ZW58MXx8fHwxNzYxNjM3NjM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React", "Framer Motion", "TypeScript"],
    chapter: "IV"
  }
];

export function ProjectsChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={ref} className="relative py-32 px-6 bg-linear-to-b from-[#3e2723] via-[#4e342e] to-[#3e2723] dark:from-[#1a1614] dark:via-[#3e2723]/50 dark:to-[#1a1614] overflow-hidden">
      {/* Parallax background patterns */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-5 dark:opacity-3"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(201, 169, 97, 0.1) 35px, rgba(201, 169, 97, 0.1) 70px)`,
        }} />
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
        className="absolute inset-0 opacity-10 dark:opacity-5"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(139, 111, 71, 0.05) 50px, rgba(139, 111, 71, 0.05) 100px)`,
        }} />
      </motion.div>

      {/* Floating geometric shapes */}
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["100px", "-200px"]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 180])
        }}
        className="absolute top-20 right-10 w-32 h-32 border-4 border-[#c9a961]/10 dark:border-[#b8935c]/5 rounded-full"
      />

      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["50px", "-150px"]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, -120])
        }}
        className="absolute bottom-40 left-20 w-24 h-24 border-4 border-[#8b6f47]/10 dark:border-[#a0826d]/5"
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-[#c9a961]/60 dark:text-[#b8935c]/60 mb-2 tracking-[0.3em] text-sm">
            <span className="text-2xl">✧</span> CHAPTERS II - IV <span className="text-2xl">✧</span>
          </p>
          <h2 className="text-6xl md:text-7xl text-[#f4e8d0] dark:text-[#e8d7ba] font-serif mb-6" style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
          }}>Featured Works</h2>
          {/* Ornate wavy divider */}
          <svg className="w-56 h-4 mx-auto mb-6 opacity-30" viewBox="0 0 220 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,5 Q11,0 22,5 T44,5 T66,5 T88,5 T110,5 T132,5 T154,5 T176,5 T198,5 T220,5" 
                  stroke="currentColor" 
                  fill="none" 
                  strokeWidth="1.5"
                  className="text-[#c9a961] dark:text-[#b8935c]" />
            <circle cx="110" cy="5" r="2" fill="currentColor" className="text-[#c9a961] dark:text-[#b8935c]" />
          </svg>
          <p className="text-[#f4e8d0]/70 dark:text-[#e8d7ba]/70 max-w-2xl mx-auto italic">
            Each project a chapter in the grand narrative of digital creation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32 mb-24">
          {projects.map((project, index) => {
            const projectRef = useRef<HTMLDivElement>(null);
            const { scrollYProgress: projectProgress } = useScroll({
              target: projectRef,
              offset: ["start end", "end start"]
            });

            const y = useTransform(projectProgress, [0, 1], [100, -100]);
            const imageY = useTransform(projectProgress, [0, 1], [0, -80]);
            const imageX = useTransform(projectProgress, [0, 1], index % 2 === 0 ? [0, 30] : [0, -30]);
            const imageRotate = useTransform(projectProgress, [0, 0.5, 1], [0, index % 2 === 0 ? 5 : -5, 0]);
            const contentX = useTransform(projectProgress, [0, 0.5], index % 2 === 0 ? [-50, 0] : [50, 0]);
            const opacity = useTransform(projectProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);
            const scale = useTransform(projectProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

            return (
              <motion.div
                key={project.id}
                ref={projectRef}
                style={{ opacity, scale }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image Side */}
                <motion.div
                  style={{ y: imageY, x: imageX, rotate: imageRotate }}
                  className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <div className="relative group">
                    {/* Vintage wax seal bookmark */}
                    <motion.div 
                      className="absolute -top-8 left-8 w-16 h-16 bg-linear-to-br from-[#8b6f47] to-[#704214] dark:from-[#a0826d] dark:to-[#8b6f47] z-10 shadow-lg flex items-center justify-center"
                      style={{
                        clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                        transform: "rotate(15deg)"
                      }}
                      whileHover={{ y: -5, rotate: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white text-sm tracking-widest font-serif" style={{ transform: "rotate(-15deg)" }}>
                        {project.chapter}
                      </p>
                    </motion.div>

                    <div className="relative overflow-hidden rounded-sm border-4 border-[#c9a961]/30 dark:border-[#8b6f47]/30 shadow-2xl" style={{
                      boxShadow: "6px 6px 0px rgba(139, 111, 71, 0.15), 10px 10px 25px rgba(0,0,0,0.3)"
                    }}>
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#704214]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Layered effect overlay */}
                      <motion.div
                        className="absolute inset-0 border-2 border-[#c9a961]/0 group-hover:border-[#c9a961]/30 transition-all"
                        style={{ 
                          x: useTransform(projectProgress, [0, 1], [0, -10]),
                          y: useTransform(projectProgress, [0, 1], [0, -10])
                        }}
                      />
                    </div>

                    {/* Ornate vintage corner decoration */}
                    <motion.div 
                      className="absolute -bottom-4 -right-4 text-[#c9a961]/40 dark:text-[#b8935c]/40 text-6xl"
                      style={{ rotate: useTransform(projectProgress, [0, 1], [0, 45]) }}
                    >
                      ❦
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  style={{ y, x: contentX }}
                  className={index % 2 === 1 ? 'md:order-1' : ''}
                >
                  <div className="bg-[#4e342e]/50 dark:bg-[#3e2723]/50 backdrop-blur-sm p-10 border-2 border-[#c9a961]/20 dark:border-[#8b6f47]/20 rounded-sm shadow-xl relative" style={{
                    boxShadow: "6px 6px 0px rgba(139, 111, 71, 0.1), 10px 10px 20px rgba(0,0,0,0.4)"
                  }}>
                    {/* Vintage paper aging effect */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none rounded-sm" style={{
                      backgroundImage: `radial-gradient(circle at 80% 20%, rgba(139, 111, 71, 0.1) 0%, transparent 50%)`
                    }} />
                    
                    {/* Page decoration */}
                    <motion.div 
                      className="flex items-center gap-4 mb-6 relative"
                      style={{ x: useTransform(projectProgress, [0, 0.5], [-20, 0]) }}
                    >
                      <div className="text-[#c9a961] dark:text-[#b8935c] text-4xl font-serif">❧</div>
                      <div className="flex-1">
                        <h3 className="text-4xl text-[#f4e8d0] dark:text-[#e8d7ba] font-serif mb-2">{project.title}</h3>
                        <p className="text-[#c9a961]/80 dark:text-[#b8935c]/80 italic">{project.subtitle}</p>
                      </div>
                    </motion.div>

                    {/* Ornate wavy separator */}
                    <svg className="w-full h-3 mb-6" viewBox="0 0 300 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0,3 Q15,0 30,3 T60,3 T90,3 T120,3 T150,3 T180,3 T210,3 T240,3 T270,3 T300,3" 
                            stroke="currentColor" 
                            fill="none" 
                            strokeWidth="1"
                            className="text-[#c9a961]/30 dark:text-[#b8935c]/30"
                            opacity="0.6" />
                    </svg>

                    <motion.p 
                      className="text-[#e8d7ba] dark:text-[#d4c5a9] leading-relaxed mb-8 font-serif"
                      style={{ opacity: useTransform(projectProgress, [0, 0.5], [0.7, 1]) }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <p className="text-[#c9a961]/70 dark:text-[#b8935c]/70 text-sm mb-3 tracking-wider">TECHNOLOGIES EMPLOYED</p>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="px-4 py-2 bg-[#704214]/30 dark:bg-[#5d4037]/50 border border-[#8b6f47]/30 dark:border-[#a0826d]/30 text-[#f4e8d0] dark:text-[#e8d7ba] text-sm rounded-sm hover:bg-[#704214]/40 dark:hover:bg-[#5d4037]/60 transition-colors"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <motion.button 
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-[#8b6f47] dark:bg-[#a0826d] hover:bg-[#704214] dark:hover:bg-[#8b6f47] text-white rounded-sm transition-colors shadow-lg hover:shadow-[#8b6f47]/30 dark:hover:shadow-[#a0826d]/30"
                      >
                        <ExternalLink size={18} />
                        <span>View Project</span>
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 border-2 border-[#8b6f47]/50 dark:border-[#a0826d]/50 text-[#c9a961] dark:text-[#b8935c] hover:bg-[#8b6f47]/10 dark:hover:bg-[#a0826d]/10 rounded-sm transition-colors"
                      >
                        <Github size={18} />
                        <span>Source</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/ThareeqZiadRamadhan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-3 px-10 py-4 bg-[#8b6f47] dark:bg-[#a0826d] hover:bg-[#704214] dark:hover:bg-[#8b6f47] text-white text-lg rounded-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#8b6f47]/40 dark:hover:shadow-[#a0826d]/40 group overflow-hidden"
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <Layers size={20} className="relative z-10" />
            <span className="relative z-10 font-serif">View More Projects</span>
          </motion.a>
          
          {/* Ornamental decoration */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mt-6 text-[#c9a961]/30 dark:text-[#b8935c]/30 text-2xl"
          >
            ✦ ✦ ✦
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}