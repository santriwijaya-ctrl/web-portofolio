import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PHOTOS, Photo } from "@/src/constants";
import { cn } from "@/src/lib/utils";

const CATEGORIES = ["All", "Urban", "Nature", "Culture"] as const;

export default function PhotoGallery() {
  const [filter, setFilter] = useState<typeof CATEGORIES[number]>("All");
  // State untuk menyimpan foto yang sedang dibuka full
  const [selectedImg, setSelectedImg] = useState<Photo | null>(null);

  const filteredPhotos = filter === "All" 
    ? PHOTOS 
    : PHOTOS.filter(p => p.category === filter);

  return (
    <section id="photography" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <h2 className="text-4xl sm:text-5xl font-serif italic mb-4">Photography</h2>
          <p className="text-japan-white/40 max-w-sm text-sm">
            A collection of moments frozen in time, capturing the soul of Japan.
          </p>
        </div>
        
        <div className="flex gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border transition-all",
                filter === cat 
                  ? "bg-japan-white text-japan-black border-japan-white" 
                  : "bg-transparent text-japan-white/60 border-japan-white/20 hover:border-japan-white/40"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1"
      >
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo) => (
            <PhotoCard 
              key={photo.id} 
              photo={photo} 
              // Tambahkan fungsi onClick di sini
              onClick={() => setSelectedImg(photo)} 
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* MODAL LIGHTBOX */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-japan-black/95 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center"
            >
              <img
                src={selectedImg.url}
                alt={selectedImg.title}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
              />
              <div className="mt-6 text-center">
                <p className="text-japan-red uppercase tracking-[0.4em] text-[10px] mb-2">{selectedImg.location}</p>
                <h3 className="text-white text-3xl font-serif italic">{selectedImg.title}</h3>
              </div>
              
              {/* Tombol Close */}
              <button className="absolute top-0 right-0 text-white/50 hover:text-white text-4xl p-4 transition-colors">
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Tambahkan properti onClick pada PhotoCard
function PhotoCard({ photo, onClick }: { photo: Photo, onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onClick={onClick} // Jalankan fungsi saat card diklik
      className="group relative aspect-[4/5] overflow-hidden bg-japan-white/5 border border-white/5 cursor-pointer"
    >
      <img
        src={photo.url}
        alt={photo.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-japan-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-1 h-1 rounded-full bg-japan-red"></div>
          <p className="text-[9px] uppercase tracking-[0.3em] font-mono text-japan-white/40">{photo.location}</p>
        </div>
        <h3 className="text-2xl font-serif italic tracking-tight">{photo.title}</h3>
      </div>
    </motion.div>
  );
}