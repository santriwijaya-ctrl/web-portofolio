import React, { useState, useEffect } from "react";
import { VIDEOS } from "../constants";

export default function VideoGrid() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="films" className="relative z-30 py-24 bg-black overflow-hidden">
      <div className={`max-w-7xl mx-auto px-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-red-600 animate-pulse"></span>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Motion Portfolio</h2>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter text-white">Cinematics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {VIDEOS.map((video, index) => (
            <div
              key={video.id}
              className="relative cursor-pointer group"
              style={{ transitionDelay: `${index * 200}ms` }} // Animasi muncul bergantian
              onClick={() => setSelectedVideo(video.videoUrl)}
            >
              {/* Container Image dengan Hover Zoom */}
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                
                {/* Overlay Play Button dengan Animasi Ripple */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/10 transition-all duration-500">
                  <div className="relative">
                    {/* Lingkaran luar yang berdenyut saat di-hover */}
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white relative z-10 transition-transform duration-500 group-hover:scale-125 group-hover:bg-red-600/20 group-hover:border-red-600/50">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teks dengan efek garis bawah (underline) yang muncul saat hover */}
              <div className="mt-8 relative">
                <div className="flex justify-between items-end">
                  <h3 className="text-3xl font-serif italic text-white/80 group-hover:text-white transition-colors duration-500">
                    {video.title}
                  </h3>
                  <span className="text-[10px] text-white/30 font-mono tracking-widest mb-1 group-hover:text-red-500 transition-colors">
                    PLAY FILM
                  </span>
                </div>
                <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-red-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL dengan animasi Smooth Scale In */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black/95 z-[9999] p-4 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="w-full max-w-[420px] aspect-[9/16] relative bg-black shadow-[0_0_50px_rgba(255,0,0,0.1)] rounded-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-red-500 text-3xl z-50 transition-colors"
              onClick={() => setSelectedVideo(null)}
            >
              ×
            </button>
            <iframe
              src={`${selectedVideo}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}