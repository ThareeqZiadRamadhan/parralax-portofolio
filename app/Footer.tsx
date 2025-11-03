"use client";
import { motion } from 'framer-motion';
import { Github,Linkedin,Instagram, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#3e2723] dark:bg-[#1a1614] border-t-2 border-[#c9a961]/20 dark:border-[#c9a961]/20 py-12 px-6">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c9a961]/50 dark:via-[#c9a961]/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl text-[#f4e8d0] dark:text-[#e8d7ba] font-serif mb-4 flex items-center gap-2">
              <span className="text-[#c9a961] dark:text-[#b8935c]">✒</span>
              The Chronicles
            </h3>
            <p className="text-[#f4e8d0]/60 dark:text-[#e8d7ba]/60 text-sm leading-relaxed font-serif">
              A digital anthology of creativity, code, and craftsmanship. 
              Every project tells a story worth reading.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#f4e8d0] dark:text-[#e8d7ba] mb-4 tracking-wider">CHAPTERS</h4>
            <ul className="space-y-2 text-sm">
              {['Prologue', 'The Author', 'Featured Works', 'The Craft', 'Correspondence'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-[#f4e8d0]/60 dark:text-[#e8d7ba]/60 hover:text-[#c9a961] dark:hover:text-[#b8935c] transition-colors flex items-center gap-2">
                    <span className="text-[#c9a961]/50 dark:text-[#b8935c]/50">→</span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-[#f4e8d0] dark:text-[#e8d7ba] mb-4 tracking-wider">CONNECT</h4>
            <div className="flex gap-4 mb-6">
              <motion.a
                href="https://github.com/ThareeqZiadRamadhan"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#4e342e] dark:bg-[#3e2723] border border-[#c9a961]/30 dark:border-[#c9a961]/30 rounded-full flex items-center justify-center text-[#c9a961] dark:text-[#b8935c] hover:bg-[#8b6f47] dark:hover:bg-[#a0826d] hover:text-white hover:border-[#8b6f47] dark:hover:border-[#a0826d] transition-all"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/thareeq-ziad-ramadhan-1b862628b/"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#4e342e] dark:bg-[#3e2723] border border-[#c9a961]/30 dark:border-[#c9a961]/30 rounded-full flex items-center justify-center text-[#c9a961] dark:text-[#b8935c] hover:bg-[#8b6f47] dark:hover:bg-[#a0826d] hover:text-white hover:border-[#8b6f47] dark:hover:border-[#a0826d] transition-all"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/nnaijjj/"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-[#4e342e] dark:bg-[#3e2723] border border-[#c9a961]/30 dark:border-[#c9a961]/30 rounded-full flex items-center justify-center text-[#c9a961] dark:text-[#b8935c] hover:bg-[#8b6f47] dark:hover:bg-[#a0826d] hover:text-white hover:border-[#8b6f47] dark:hover:border-[#a0826d] transition-all"
              >
                <Instagram size={18} />
              </motion.a>
            </div>
            <p className="text-[#f4e8d0]/60 dark:text-[#e8d7ba]/60 text-sm">
              Let's write the next chapter together
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#c9a961]/10 dark:border-[#c9a961]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#f4e8d0]/50 dark:text-[#e8d7ba]/50">
            <p className="flex items-center gap-2">
              © {currentYear} The Chronicles. Crafted with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={14} className="text-[#8b6f47] dark:text-[#a0826d] fill-[#8b6f47] dark:fill-[#a0826d]" />
              </motion.span>
              and dedication
            </p>
            <div className="flex gap-6">
               <a href="/ziad-resume.pdf" 
                 download="ziad-resume.pdf" 
                 className="hover:text-[#c9a961] dark:hover:text-[#b8935c] transition-colors">CV</a>
              <a href="https://wa.me/+6281333424345" className="hover:text-[#c9a961] dark:hover:text-[#b8935c] transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mt-8 pt-8 border-t border-[#c9a961]/10 dark:border-[#c9a961]/10"
        >
          <p className="text-[#c9a961]/30 dark:text-[#b8935c]/30 text-xs tracking-widest font-serif italic">
            "The End is merely the Beginning in disguise"
          </p>
          <motion.p 
            className="text-[#c9a961]/20 dark:text-[#b8935c]/20 mt-2"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⚜
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
