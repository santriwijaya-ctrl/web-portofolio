import { motion } from "motion/react";
import { Mail, Instagram, Twitter } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 px-10 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[3/4] rounded-2xl overflow-hidden glass border-white/20"
        >
          <img
            src="images/KILL6532.jpeg"
            alt="Photographer"
            className="w-full h-full object-cover grayscale brightness-50 contrast-125 hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute top-8 right-8">
            <span className="text-[10px] font-mono text-white/40 rotate-90 origin-right block">VER. 2026.01</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-12 h-[1px] bg-japan-red"></span>
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/40">The Visionary</span>
          </div>
          
          <h2 className="text-4xl sm:text-7xl font-serif italic mb-8 tracking-tighter leading-tight">Archives of <br /> the Rising Sun</h2>
          
          <div className="space-y-8 text-white/50 text-sm sm:text-lg leading-relaxed font-light tracking-wide font-sans">
            <p>
              I am trisanwijaya, a visual storyteller dedicated to documenting the synthesis of tradition and progress across the Japanese archipelago.
            </p>
            <p>
              Through high-definition cinematography and meticulous architectural photography, we capture the transient beauty of Nihon’s seasons and streetscapes.
            </p>
          </div>

          <div className="flex gap-8 mt-12">
            {[
              { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/santrijwijaya" },
              { icon: Twitter, label: "Twitter", url: "https://x.com/santr3wijaya" },
              { icon: Mail, label: "Email", url: "santriwijaya@gmail.com" }, // Mailto:
            ].map((social) => (
              <a
                key={social.label}
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
  >
                <social.icon className="w-6 h-6 text-japan-white/60 group-hover:text-japan-red transition-colors" />
                <span className="text-[10px] uppercase tracking-widest text-japan-white/20 group-hover:text-japan-white/60 transition-colors">
                  {social.label}
                </span>.
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
