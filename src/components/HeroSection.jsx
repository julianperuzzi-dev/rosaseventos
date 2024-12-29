import React from "react";
import videoSrc from "../assets/209424_tiny.mp4"; // Ajusta la ruta según la ubicación del archivo

const HeroSection = () => {
  return (
    <div id="hero" className="relative h-screen flex flex-col items-center justify-center text-center text-gray-100">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Si el navegador no soporta video */}
        Your browser does not support the video tag.
      </video>
      {/* Capa de contenido */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">Nombre Empresa</h1>
        <p className="text-lg md:text-2xl text-shadow">Landing Page de Ejemplo / Frase Introductoria</p>
      </div>
      {/* Filtro de sombra (opcional) */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  );
};

export default HeroSection;
