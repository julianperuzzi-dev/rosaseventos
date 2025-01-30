import React from "react";
import { motion } from "framer-motion";

// URLs de las imágenes (puedes reemplazarlas con las URLs reales)
const images = [
  {
    url: "https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg",
    title: "Equipo Profesional",
    alt: "Equipo profesional de Rosas Eventos",
    description: "Contamos con equipos de última generación para eventos exclusivos.",
  },
  {
    url: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg",
    title: "Equipo Premium",
    alt: "Equipo premium de Rosas Eventos",
    description: "Nuestros equipos premium ofrecen calidad y elegancia inigualables.",
  },
  {
    url: "https://images.pexels.com/photos/373632/pexels-photo-373632.jpeg",
    title: "Equipo de Sonido",
    alt: "Equipo de sonido de Rosas Eventos",
    description: "Sonido cristalino y potente para cualquier tipo de evento.",
  },
  {
    url: "https://i.pinimg.com/736x/d3/28/85/d328851933d85cc1d7b9ad93b18cd4ef.jpg",
    title: "Equipo de Iluminación",
    alt: "Equipo de iluminación de Rosas Eventos",
    description: "Iluminación espectacular que transforma cualquier espacio.",
  },
];

// Variantes de animación para Framer Motion
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const HorizontalGallery = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Función para desplazarse a una imagen específica
  const scrollToImage = (index) => {
    const container = document.querySelector(".hide-scrollbar");
    if (container) {
      container.scrollTo({ left: window.innerWidth * index, behavior: "smooth" });
      setCurrentIndex(index);
    }
  };

  // Efecto de parallax
  const handleScroll = () => {
    const container = document.querySelector(".hide-scrollbar");
    if (container) {
      const scrollPosition = container.scrollLeft;
      const newIndex = Math.round(scrollPosition / window.innerWidth);
      setCurrentIndex(newIndex);
    }
  };

  React.useEffect(() => {
    const container = document.querySelector(".hide-scrollbar");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="relative h-[80vh] w-full  overflow-hidden">
      {/* Título de la galería */}
      <h1 className="absolute font-semibold top-8 md:top-20 left-1/2 transform -translate-x-1/2 text-4xl sm:text-5xl  text-white z-20 text-center">
        Equipos Profesionales
      </h1>

      {/* Contenedor de la galería (oculta la barra de scroll) */}
      <div className="h-full w-full overflow-x-scroll scroll-smooth hide-scrollbar">
        <div className="flex h-full w-[400%]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-full w-screen flex-shrink-0"
              initial="hidden"
              whileInView="visible"
              variants={imageVariants}
              viewport={{ once: true }}
            >
              {/* Imagen de fondo con efecto de parallax */}
              <motion.img
                src={image.url}
                alt={image.alt}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

              {/* Overlay y contenido */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black/40 flex flex-col items-center justify-center p-8 text-center">
                <h2 className="text-4xl sm:text-5xl font-medium text-white mb-4">
                  {image.title}
                </h2>
                <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl font-extralight">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Flechas de navegación */}
      <button
        className="absolute md:left-4 left-0 md:top-1/2 top-3/4 transform -translate-y-1/2 bg-white/50 backdrop-blur-sm p-4 md:rounded-full hover:bg-white/70 transition-all"
        onClick={() => scrollToImage((currentIndex - 1 + images.length) % images.length)}
        aria-label="Anterior"
      >
        ◁
      </button>
      <button
        className="absolute md:right-4 right-0 md:top-1/2 top-3/4 transform -translate-y-1/2 bg-white/50 backdrop-blur-sm p-4 md:rounded-full hover:bg-white/70 transition-all"
        onClick={() => scrollToImage((currentIndex + 1) % images.length)}
        aria-label="Siguiente"
      >
        ▷
      </button>

      {/* Indicador de progreso */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Ir a la imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalGallery;