import React, { useState } from "react";
import { FiCamera } from "react-icons/fi";

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const imageData = [
    {
      url: "https://images.pexels.com/photos/11055637/pexels-photo-11055637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Boda Elegante",
      caption: "Boda Elegante",
      description: "Celebraciones únicas que reflejan el amor y la elegancia.",
    },
    {
      url: "https://images.pexels.com/photos/20380887/pexels-photo-20380887/free-photo-of-mujer-fiesta-partido-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Cumpleaños de Quince",
      caption: "Cumpleaños de Quince",
      description: "Transformamos tus sueños en una fiesta inolvidable.",
    },
    {
      url: "https://images.pexels.com/photos/2419568/pexels-photo-2419568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Cumpleaños de 80 Años",
      caption: "Cumpleaños de 80 Años",
      description: "Celebrando una vida llena de momentos especiales.",
    },
    {
      url: "https://images.pexels.com/photos/30505247/pexels-photo-30505247/free-photo-of-lively-night-party-with-dancing-attendees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Aniversario de Bodas",
      caption: "Aniversario de Bodas",
      description: "Renovando votos con estilo y sofisticación.",
    },
   
    {
      url: "https://images.pexels.com/photos/6224694/pexels-photo-6224694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Evento Corporativo",
      caption: "Evento Corporativo",
      description: "Experiencias profesionales que inspiran.",
    },
    {
      url: "https://images.pexels.com/photos/19326359/pexels-photo-19326359/free-photo-of-mujer-fiesta-partido-bailando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Fiesta de Inauguración",
      caption: "Fiesta de Inauguración",
      description: "Celebrando nuevos comienzos con elegancia.",
    },
  ];

  return (
    <section id="gallery" className="relative py-24">
      {/* Background con efecto de gradiente */}
      <div className="absolute inset-0" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extralight mb-6 text-white">
            Galería de Momentos
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-rose-500 to-orange-500 mx-auto" />
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-3 max-w-7xl mx-auto">
          {imageData.map((image, index) => (
            <div
              key={index}
              className="group relative md:aspect-[4/3] aspect-[3/5] overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Imagen */}
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Contenido hover */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-2xl font-light text-white mb-2">
                  {image.caption}
                </h3>
                <p className="text-gray-300 font-light mb-4">
                  {image.description}
                </p>
              </div>

              {/* Indicador de hover */}
              <div
                className={`absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center transform transition-all duration-500 ${
                  hoveredIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50"
                }`}
              >
                <FiCamera className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;