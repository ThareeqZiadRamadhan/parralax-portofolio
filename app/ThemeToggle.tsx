"use client";
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check localStorage or system preference
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = stored ? stored === 'dark' : prefersDark;
    
    setIsDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 w-14 h-14 rounded-full bg-linear-to-br from-[#8b6f47] to-[#704214] dark:from-[#a0826d] dark:to-[#8b6f47] shadow-2xl hover:shadow-[#8b6f47]/50 dark:hover:shadow-[#a0826d]/50 flex items-center justify-center transition-all hover:scale-110 border-2 border-[#c9a961]/30 dark:border-[#c9a961]/30"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? (
          <Moon className="text-[#f4e8d0]" size={24} />
        ) : (
          <Sun className="text-[#c9a961]" size={24} />
        )}
      </motion.div>
    </motion.button>
  );
}
