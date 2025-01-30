import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css"; // Tailwind CSS

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ParallaxSection from "./components/ParallaxSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Reservations from "./components/Reservations";
import Gallery from "./components/Gallery";
import CommentSection from "./components/CommentSection";
import GallerySection from "./components/GallerySection";
import FAQ from "./components/FAQ";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-black via-zinc-900 to-black">
      <Navbar />
      <HeroSection />
      
      <AboutSection />
      <ServicesSection />
      
      
      <Reservations/>
      <ParallaxSection />
      <GallerySection/>
      <Gallery/>

      <CommentSection />
      <ContactSection />
      
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
