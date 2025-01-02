import React, { useState, useEffect } from "react";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";
import logoSrc from "../assets/logo rosas completo.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/6558963/6558963-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />

      {/* Contenido Principal */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center space-y-8">
        {/* Logo con animación */}
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'
        }`}>
          <img
            src={logoSrc}
            alt="Logo Rosas Eventos"
            className="w-64 md:w-96 object-contain filter drop-shadow-2xl"
          />
        </div>

        {/* Título y Descripción */}
        <div className={`text-center space-y-6 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-7xl font-extralight text-white tracking-wider">
            ROSAS EVENTOS
          </h1>
          
          <div className="h-1 w-24 bg-gradient-to-r from-rose-500 to-gold mx-auto" />
          
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Transformamos espacios ordinarios en experiencias extraordinarias con 
            <span className="text-rose-400"> sonido</span> e
            <span className="text-orange-400"> iluminación</span> de vanguardia.
          </p>
        </div>

        {/* Botón CTA */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <a
            href="#services"
            className="group relative inline-flex items-center gap-4 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-lg">Descubre Nuestros Servicios</span>
            <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
        scrolled ? 'opacity-0 translate-y-4' : 'opacity-100'
      }`}>
        <div className="animate-bounce">
          <FiArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />
    </div>
  );
};

export default HeroSection;