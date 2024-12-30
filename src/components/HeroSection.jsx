import React from "react";
import logoSrc from "../assets/logo rosas completo.png"; // Ruta del logo, asegúrate de que esté correctamente ubicada

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center text-center text-gray-100"
    >
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/6558963/6558963-hd_1920_1080_25fps.mp4" // Reemplaza con el enlace directo al video
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Filtro de sombra */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black "></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center space-y-6 px-4">
        {/* Logo */}
        
        <img
          src={logoSrc}
          alt="Logo Rosas Eventos"
          className="w-64 md:w-96 object-contain  "
        />

        {/* Título */}
        <h1 className="text-3xl md:text-5xl font-semibold text-shadow">
          ROSAS EVENTOS
        </h1>
        {/* Descripción */}
        <p className="text-lg md:text-2xl text-shadow">
          Soluciones en sonido e iluminación para eventos inolvidables.
        </p>
        {/* Botón de llamada a la acción */}
        <a
          href="#services"
          className="mt-4 px-6 py-3 text-lg md:text-xl font-medium bg-gold hover:bg-gold-dark  rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Descubre Nuestros Servicios
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
