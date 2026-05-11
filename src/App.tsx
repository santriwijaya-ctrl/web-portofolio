import React from "react";
// Bagian IMPORT di bawah ini WAJIB ada agar tidak error:
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PhotoGallery from "./components/PhotoGallery";
import VideoGrid from "./components/VideoGrid";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen relative bg-black overflow-x-hidden">
      {/* Efek Cahaya Latar Belakang */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] rounded-full bg-red-900/10 blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-blue-900/10 blur-[120px]"></div>
      </div>

      <Navbar />
      
      <main className="flex-grow relative z-10">
        <Hero />
        <PhotoGallery />
        <VideoGrid />
        <About />
      </main>

      <Footer />
    </div>
  );
}