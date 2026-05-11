export default function Footer() {
  return (
    <footer className="relative z-10 px-10 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center bg-japan-black backdrop-blur-xl">
      <div className="flex items-center space-x-12 mb-8 md:mb-0">
         <div className="flex flex-col">
            <span className="text-[8px] uppercase text-white/40 mb-1 tracking-widest font-sans">Capture Tech</span>
            <span className="text-[10px] font-mono text-white/80">Sony α7S II / 35mm Nokor</span>
         </div>
         <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>
         <div className="flex flex-col">
            <span className="text-[8px] uppercase text-white/40 mb-1 tracking-widest font-sans">Project Archive</span>
            <span className="text-[10px] font-mono text-white/80">V.2026 / Tokyo Odyssey</span>
         </div>
         <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>
         <div className="flex flex-col">
            <span className="text-[8px] uppercase text-white/40 mb-1 tracking-widest font-sans">Status</span>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-mono text-white/80 uppercase">Portfolio Live</span>
            </div>
         </div>
      </div>
      
      <div className="flex items-center space-x-12">
        <div className="flex flex-col items-end">
          <span className="text-xl font-bold tracking-tighter uppercase italic text-japan-white font-serif">NIHON STREET FOTOGRAP</span>
          <span className="text-[9px] uppercase tracking-widest text-white/20">© 2026 Visual Archive</span>
        </div>
      </div>
    </footer>
  );
}
