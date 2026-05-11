import { motion } from "motion/react";

const NAV_ITEMS = [
  { name: "Home", href: "#home" }, // Kita masukkan ke sini agar seragam
  { name: "Films", href: "#films" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-8 border-b border-white/10 backdrop-blur-md bg-japan-black/20"
    >
      <div className="flex flex-col">
        <span className="text-2xl font-bold tracking-tighter uppercase italic text-japan-white">NIHON STREET FOTOGRAP</span>
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/50">Visual Portfolio by trisanwijaya</span>
      </div>
      
      <div className="hidden md:flex space-x-12 text-[11px] font-medium tracking-widest uppercase">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="relative text-white/40 hover:text-white transition-all duration-500 group py-1"
          >
            {item.name}
            
            {/* Efek Garis Merah yang memanjang saat di-hover/klik */}
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-japan-red transition-all duration-500 group-hover:w-full"></span>
            
            {/* Efek Cahaya kecil di atas teks (Dot Aesthetic) */}
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-[3px] h-[3px] bg-japan-red rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_8px_#ff0000]"></span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}