"use client";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, Feather, Award, BadgeCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

// Definisikan tipe untuk status submit
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactChapter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

// State baru untuk melacak proses submit
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

 
  // INI BAGIAN YANG HILANG 
  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const letterRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);
  

  // Fungsi handleSubmit Formspree 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting'); 

    try {
      
      const response = await fetch('https://formspree.io/f/xdkpwvpn', { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        console.log('Form submitted to Formspree');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('Submission failed:', await response.json()); 
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('An error occurred:', error);
    }
  };

  // Helper 
  const getButtonText = () => {
    switch (submitStatus) {
      case 'submitting':
        return 'Sealing & Sending...';
      case 'success':
        return 'Letter Sent!';
      case 'error':
        return 'Failed to Send. Try Again?';
      case 'idle':
      default:
        return 'Seal & Send Letter';
    }
  };

  return (
    <div ref={ref} className="relative py-32 px-6 bg-linear-to-b from-[#f4e8d0] via-[#e8d7ba]/50 to-[#d4c5a9] dark:from-[#3e2723] dark:via-[#4e342e]/20 dark:to-[#3e2723] overflow-hidden">
      
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`
      }} />

      {/* Parallax ink splotches */}
      <motion.div 
        style={{ y: backgroundY, rotate: useTransform(scrollYProgress, [0, 1], [0, 180]) }}
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#8b6f47]/5 dark:bg-[#c9a961]/5 blur-2xl"
      />

      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
        className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-[#704214]/5 dark:bg-[#a0826d]/5 blur-2xl"
      />

      {/* Floating feather quill */}
      <motion.div
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["100px", "-200px"]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 360])
        }}
        className="absolute top-40 right-20 opacity-20 dark:opacity-10"
      >
        <motion.img 
          src="/card.png"
          alt="Quill decoration"
          className="w-35 h-30"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 8, -8, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        {/* ... Chapter Header ... */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <p className="text-[#8b6f47]/60 dark:text-[#c9a961]/60 mb-3 tracking-[0.4em] text-xs font-serif">
              <span className="text-2xl">✉</span> CHAPTER VI <span className="text-2xl">✉</span>
            </p>
            <div className="inline-block relative">
              <h2 className="text-6xl md:text-7xl text-[#704214] dark:text-[#f4e8d0] font-serif mb-2 italic" style={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
              }}>
                A Letter to You
              </h2>
              {/* Ornate underline flourish */}
              <svg className="w-full h-6 absolute -bottom-2 left-0" viewBox="0 0 300 12" preserveAspectRatio="none">
                <motion.path
                  d="M0,6 Q75,0 150,6 T300,6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  className="text-[#8b6f47]/40 dark:text-[#c9a961]/40"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                <motion.circle
                  cx="150"
                  cy="6"
                  r="2"
                  fill="currentColor"
                  className="text-[#8b6f47]/40 dark:text-[#c9a961]/40"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                />
              </svg>
            </div>
          </motion.div>
          <p className="text-[#704214]/70 dark:text-[#e8d7ba]/70 max-w-2xl mx-auto italic font-serif mt-8 text-lg">
            <span className="text-[#8b6f47]/40 text-4xl">"</span>In the age of digital correspondence, let us revive the lost art of letter writing...<span className="text-[#8b6f47]/40 text-4xl">"</span>
          </p>
        </motion.div>

        {/* Vintage Letter/Envelope Design */}
        <motion.div
          style={{ y, rotate: letterRotate }}
          className="relative"
        >
          {/* ... Wax seal & Main Letter Paper setup ... */}
          <motion.div 
            className="absolute -top-8 -right-8 z-20"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 bg-linear-to-br from-[#722f37] to-[#8c2f39] dark:from-[#a43f49] dark:to-[#8c2f39] rounded-full shadow-xl" />
              <div className="absolute inset-2 border-2 border-[#8c2f39]/50 dark:border-[#a43f49]/50 rounded-full flex items-center justify-center">
                <BadgeCheck className="text-[#f4e8d0]" size={32} />
              </div>
            </div>
          </motion.div>

          <div className="relative bg-linear-to-br from-[#f4e8d0] via-[#e8d7ba] to-[#d4c5a9] dark:from-[#4e342e]/20 dark:via-[#5d4037]/10 dark:to-[#4e342e]/20 shadow-2xl overflow-hidden backdrop-blur-sm border-4 border-[#c9a961]/50 dark:border-[#8b6f47]/30">
            {/* ... Aged paper, texture, stamps ... */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-[#d4c5a9]/20 via-transparent to-[#c9a961]/20 dark:from-[#704214]/10 dark:to-[#8b6f47]/10" />
            <div className="absolute inset-0 opacity-40 dark:opacity-20" style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 46, 0.03) 2px, rgba(139, 92, 46, 0.03) 3px)`
            }} />
            <motion.div 
              className="absolute top-4 left-4 opacity-20 dark:opacity-10"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Award size={40} className="text-[#8b6f47] dark:text-[#c9a961]" />
            </motion.div>
            <motion.div 
              className="absolute top-4 right-4 opacity-20 dark:opacity-10"
              animate={{ rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <Feather size={40} className="text-[#8b6f47] dark:text-[#c9a961]" />
            </motion.div>

            {/* Letter Header */}
            <div className="relative border-b-2 border-[#c9a961]/50 dark:border-[#8b6f47]/30 px-12 py-8 bg-linear-to-b from-[#d4c5a9]/50 to-transparent dark:from-[#4e342e]/20 dark:to-transparent">
              {/* ... header content ... */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#8b6f47]/30 dark:via-[#c9a961]/20 to-transparent" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Mail className="text-[#8b6f47] dark:text-[#c9a961]" size={32} />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl text-[#704214] dark:text-[#f4e8d0] font-serif italic">Dear Friend,</h3>
                    <p className="text-[#8b6f47]/70 dark:text-[#c9a961]/70 text-sm font-serif">Please share your thoughts...</p>
                  </div>
                </div>
                <div className="text-right text-[#8b6f47]/60 dark:text-[#c9a961]/60 font-serif text-sm hidden md:block">
                  <p>The Chronicles</p>
                  <p>October 28, 2025</p>
                </div>
              </div>
            </div>

            {/* Letter Body - Form */}
            <div className="p-12 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Salutation (Name Input) */}
                <motion.div 
                  className="space-y-3"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="text-[#704214] dark:text-[#f4e8d0] font-serif italic text-lg block">
                    Your Name
                    <span className="text-[#8b6f47] dark:text-[#c9a961] ml-1">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Signed by..."
                      className="bg-white/60 dark:bg-[#5d4037]/40 border-2 border-[#c9a961] dark:border-[#8b6f47]/50 text-[#704214] dark:text-[#f4e8d0] placeholder:text-[#8b6f47]/40 dark:placeholder:text-[#c9a961]/30 focus:border-[#8b6f47] dark:focus:border-[#c9a961] h-14 px-6 text-lg font-serif italic shadow-inner"
                      required
                      disabled={submitStatus === 'submitting'}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c9a961]/30 dark:via-[#8b6f47]/20 to-transparent" />
                  </div>
                </motion.div>

                {/* Address (Email Input) */}
                <motion.div 
                  className="space-y-3"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="text-[#704214] dark:text-[#f4e8d0] font-serif italic text-lg block">
                    Your Electronic Post
                    <span className="text-[#8b6f47] dark:text-[#c9a961] ml-1">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.address@correspondence.com"
                      className="bg-white/60 dark:bg-[#5d4037]/40 border-2 border-[#c9a961] dark:border-[#8b6f47]/50 text-[#704214] dark:text-[#f4e8d0] placeholder:text-[#8b6f47]/40 dark:placeholder:text-[#c9a961]/30 focus:border-[#8b6f47] dark:focus:border-[#c9a961] h-14 px-6 text-lg font-serif italic shadow-inner"
                      required
                      disabled={submitStatus === 'submitting'}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c9a961]/30 dark:via-[#8b6f47]/20 to-transparent" />
                  </div>
                </motion.div>

                {/* Message Body (Textarea) */}
                <motion.div 
                  className="space-y-3"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="text-[#704214] dark:text-[#f4e8d0] font-serif italic text-lg block">
                    Your Correspondence
                    <span className="text-[#8b6f47] dark:text-[#c9a961] ml-1">*</span>
                  </label>
                  <div className="relative">
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Dear chronicler, I write to you today regarding..."
                      className="bg-white/60 dark:bg-[#5d4037]/40 border-2 border-[#c9a961] dark:border-[#8b6f47]/50 text-[#704214] dark:text-[#f4e8d0] placeholder:text-[#8b6f47]/40 dark:placeholder:text-[#c9a961]/30 focus:border-[#8b6f47] dark:focus:border-[#c9a961] min-h-60 p-6 text-lg font-serif leading-loose shadow-inner resize-none"
                      style={{ lineHeight: '2rem' }}
                      required
                      disabled={submitStatus === 'submitting'}
                    />
                    {/* Lined paper effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10" style={{
                      backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, rgba(139, 92, 46, 0.2) 31px, rgba(139, 92, 46, 0.2) 32px)`
                    }} />
                  </div>
                </motion.div>

                {/* Closing and Signature */}
                <motion.div 
                  className="pt-6 border-t-2 border-dashed border-[#c9a961]/50 dark:border-[#8b6f47]/30"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="space-y-2">
                      <p className="text-[#704214]/70 dark:text-[#e8d7ba]/70 font-serif italic">
                        Yours sincerely,
                      </p>
                     <div className="h-20 border-b-2 border-[#c9a961]/30 dark:border-[#8b6f47]/30 w-64 relative">
                          <Image
                            src="/signature.png" 
                            alt="Tanda Tangan"
                            width={1200} 
                            height={500} 
                            className="absolute bottom-1 left-0 opacity-80 dark:opacity-70" 
                          />
                        </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        type="submit"
                        className={`bg-linear-to-br from-[#8b6f47] via-[#704214] to-[#5d4037] dark:from-[#a0826d] dark:via-[#8b6f47] dark:to-[#704214] hover:from-[#704214] hover:via-[#5d4037] hover:to-[#4e342e] dark:hover:from-[#8b6f47] dark:hover:via-[#704214] dark:hover:to-[#5d4037] text-white px-10 py-7 shadow-2xl hover:shadow-[#704214]/50 dark:hover:shadow-[#8b6f47]/30 transition-all flex items-center gap-3 text-lg font-serif border-2 border-[#704214]/30 dark:border-[#c9a961]/30 relative overflow-hidden group 
                          ${submitStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}
                          ${submitStatus === 'success' ? 'bg-green-700 from-green-600 to-green-800' : ''}
                          ${submitStatus === 'error' ? 'bg-red-700 from-red-600 to-red-800' : ''}
                        `}
                        disabled={submitStatus === 'submitting'}
                      >
                        {/* Wax seal effect on button */}
                        <div className="absolute inset-0 bg-gradient-radial from-[#8c2f39]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Send size={20} />
                        <span>{getButtonText()}</span>
                      </Button>
                    </motion.div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#c9a961]/30 dark:border-[#8b6f47]/20">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#8b6f47]/60 dark:text-[#c9a961]/60 font-serif italic">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">✦</span>
                        <span>Delivered with utmost care</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">✦</span>
                        <span>Response within one day</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">✦</span>
                        <span>Sealed for your eyes only</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </form>
            </div>

            {/* Paper tear effect at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-linear-to-b from-transparent to-[#d4c5a9]/30 dark:to-[#4e342e]/20" />
          </div>

          {/* ... Vintage postage stamps ... */}
          <motion.div 
            className="absolute -bottom-6 -left-6"
            whileHover={{ rotate: -5, scale: 1.1 }}
          >
            <div className="w-20 h-24 bg-linear-to-br from-[#8b6f47] to-[#704214] dark:from-[#a0826d] dark:to-[#8b6f47] border-4 border-white dark:border-[#3e2723] shadow-xl relative">
              <div className="absolute inset-1 border border-[#c9a961]/30 dark:border-[#c9a961]/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Feather size={32} className="text-[#f4e8d0]" />
              </div>
              <div className="absolute bottom-1 left-0 right-0 text-center text-[#f4e8d0] text-xs font-serif">
                2025
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute -bottom-6 -right-6"
            whileHover={{ rotate: 5, scale: 1.1 }}
          >
            <div className="w-20 h-24 bg-linear-to-br from-[#704214] to-[#5d4037] dark:from-[#8b6f47] dark:to-[#704214] border-4 border-white dark:border-[#3e2723] shadow-xl relative">
              <div className="absolute inset-1 border border-[#c9a961]/30 dark:border-[#c9a961]/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Mail size={32} className="text-[#f4e8d0]" />
              </div>
              <div className="absolute bottom-1 left-0 right-0 text-center text-[#f4e8d0] text-xs font-serif">
                ROYAL
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ... Footer Quote ... */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-24"
        >
          <div className="inline-block">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#8b6f47]/40 dark:via-[#c9a961]/30 to-transparent" />
              <span className="text-[#8b6f47]/50 dark:text-[#c9a961]/40 text-xl">❦</span>
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#8b6f47]/40 dark:via-[#c9a961]/30 to-transparent" />
            </div>
            <p className="text-[#704214]/70 dark:text-[#e8d7ba]/70 italic font-serif text-lg max-w-2xl">
              "In the art of correspondence lies the essence of human connection, transcending time and space"
            </p>
            <motion.p 
              className="text-[#8b6f47]/40 dark:text-[#c9a961]/30 mt-4 text-2xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ⚜
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}