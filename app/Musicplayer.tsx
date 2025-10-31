// components/MusicPlayer.tsx
"use client";

import { useState, useRef, useEffect } from 'react'; // Impor useEffect

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Ref untuk melacak apakah interaksi pertama sudah terjadi
  const hasInteracted = useRef(false);

  // Fungsi toggle yang sudah ada
  const togglePlay = () => {
    if (!audioRef.current) return;

    // Tandai bahwa interaksi telah terjadi
    hasInteracted.current = true; 

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // --- BAGIAN BARU UNTUK "AUTOPLAY" ---
  useEffect(() => {
    // Fungsi ini akan dipanggil saat pengguna mengklik apa saja
    const playOnFirstInteraction = () => {
      // Cek apakah audio ada, belum pernah berinteraksi, DAN sedang tidak diputar
      if (audioRef.current && !hasInteracted.current && !isPlaying) {
        audioRef.current.play().then(() => {
          // Jika berhasil play, update state
          setIsPlaying(true);
          hasInteracted.current = true;
        }).catch(error => {
          // Tangani error jika play gagal (jarang terjadi setelah klik)
          console.error("Audio play failed:", error);
        });
      }
      
      // Hapus listener setelah interaksi pertama, agar tidak jalan terus-menerus
      document.removeEventListener('click', playOnFirstInteraction);
    };

    // Tambahkan event listener saat komponen dimuat
    document.addEventListener('click', playOnFirstInteraction);

    // Fungsi cleanup: Hapus listener jika komponen di-unmount
    return () => {
      document.removeEventListener('click', playOnFirstInteraction);
    };
  }, [isPlaying]); // Kita tambahkan isPlaying di dependency array
  // --- AKHIR BAGIAN BARU ---

  return (
    <div>
      <audio 
        ref={audioRef} 
        src="/music.mp3" 
        loop 
      />

      <button 
        onClick={togglePlay} 
        className="fixed bottom-5 right-5 z-50 p-3 bg-white/20 text-white rounded-full backdrop-blur-sm transition-all hover:bg-white/40"
        aria-label="Play or pause music"
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>
    </div>
  );
}