import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background with Atmospheric Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-japan-red/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-blue-900/10 blur-[100px]"></div>
        
        <img
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop"
          alt="Japan Hero"
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-10 flex flex-col items-start">
        
        {/* 1. Bagian Atas: Label & Koordinat */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center space-x-3 mb-6"
        >
          <span className="px-2 py-0.5 bg-japan-red text-[9px] font-bold uppercase tracking-widest rounded-sm text-white">Featured Project</span>
          <span className="text-[11px] text-white/40 font-mono tracking-wider">35° 39' 10.2" N / 139° 42' 1.5" E</span>
        </motion.div>

        {/* 2. Judul Utama */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[80px] font-serif italic mb-8 leading-[0.9] tracking-tighter text-white"
        >
          A Wanderer’s <br />
          <span className="not-italic text-japan-red block mt-4">Diary</span>
        </motion.h1>

        {/* 3. Deskripsi: Bahasa Indonesia + Bahasa Jepang di bawahnya */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-xl"
        >
          {/* Teks Bahasa Indonesia */}
          <p className="text-[17px] text-white/50 leading-relaxed font-mono tracking-wide mb-6">
            Mencatat ritme harian yang sering terlewatkan. Sebuah perjalanan visual tentang manusia, cahaya, dan cerita-cerita kecil yang membentuk jiwa dari Negeri Matahari Terbit.
          </p>

          {/* Teks Bahasa Jepang (Sekarang hanya ada satu di sini) */}
          <p className="text-white/40 text-[17px] md:text-[14px] font-light tracking-[0.15em] leading-relaxed italic border-l border-japan-red/30 pl-4">
            見落とされがちな日々のリズムを刻む。人、光、そして日出ずる国の魂を形作る小さな物語を巡る視覚的な旅。
          </p>
        </motion.div>
      </div>

      {/* Side Decorative Tech Info */}
      <div className="hidden lg:block absolute bottom-12 right-12 z-10 transform rotate-90 origin-right">
        <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">
          Latitude / Longitude / Altitude / Exposure
        </span>
      </div>
    </section>
  );
}