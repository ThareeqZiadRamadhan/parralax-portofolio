"use client";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BookOpen, User, Briefcase, Award, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Prologue', icon: BookOpen },
  { id: 'about', label: 'Chapter I', icon: User },
  { id: 'projects', label: 'Chapters II-IV', icon: Briefcase },
  { id: 'skills', label: 'Chapter V', icon: Award },
  { id: 'contact', label: 'Chapter VI', icon: Mail },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-50"
      >
        <div className="bg-[#3e2723]/80 dark:bg-[#1a1614]/80 backdrop-blur-md border-2 border-[#c9a961]/20 dark:border-[#c9a961]/20 rounded-sm shadow-2xl p-4 relative" style={{
          boxShadow: "4px 4px 0px rgba(139, 111, 71, 0.2), 8px 8px 20px rgba(0,0,0,0.4)"
        }}>
          {/* Ornate top decoration */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#c9a961] dark:text-[#b8935c] text-2xl">
            ❦
          </div>
          
          <div className="space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <div key={item.id}>
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative flex items-center gap-3 w-full px-4 py-3 rounded-sm transition-all ${
                      isActive
                        ? 'bg-[#8b6f47] dark:bg-[#a0826d] text-white shadow-lg'
                        : 'text-[#f4e8d0]/70 dark:text-[#e8d7ba]/70 hover:text-[#f4e8d0] dark:hover:text-[#f4e8d0] hover:bg-[#4e342e]/50 dark:hover:bg-[#3e2723]/50'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={18} />
                    <span className="text-sm whitespace-nowrap">{item.label}</span>

                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-[#8b6f47] dark:bg-[#a0826d] rounded-sm -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                  {index < navItems.length - 1 && (
                    <div className="h-px w-full bg-[#c9a961]/10 dark:bg-[#c9a961]/10 my-2" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Decorative vintage ribbon */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-16 bg-linear-to-b from-[#8b6f47] to-[#704214] dark:from-[#a0826d] dark:to-[#8b6f47] clip-path-bookmark shadow-lg" style={{
            clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 90%, 0 75%)"
          }} />
          
          {/* Ornate bottom decoration */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#c9a961] dark:text-[#b8935c] text-2xl">
            ❧
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="bg-[#3e2723]/90 dark:bg-[#1a1614]/90 backdrop-blur-md border-2 border-[#c9a961]/20 dark:border-[#c9a961]/20 rounded-full shadow-2xl px-6 py-4">
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative p-3 rounded-full transition-all ${
                    isActive
                      ? 'bg-[#8b6f47] dark:bg-[#a0826d] text-white shadow-lg scale-110'
                      : 'text-[#f4e8d0]/70 dark:text-[#e8d7ba]/70 hover:text-[#f4e8d0] dark:hover:text-[#f4e8d0] hover:bg-[#4e342e]/50 dark:hover:bg-[#3e2723]/50'
                  }`}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                  {isActive && (
                    <motion.div
                      layoutId="activeMobileNav"
                      className="absolute inset-0 bg-[#8b6f47] dark:bg-[#a0826d] rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
