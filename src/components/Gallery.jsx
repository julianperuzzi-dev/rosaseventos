import React, { useState } from "react";
import { FiCamera} from "react-icons/fi";

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const imageData = [
    {
      url: "https://images.pexels.com/photos/4877866/pexels-photo-4877866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Evento Corporativo",
      caption: "Evento Corporativo",
      description: "Transformando espacios corporativos en experiencias memorables",
    },
    {
      url: "https://images.pexels.com/photos/17931339/pexels-photo-17931339/free-photo-of-hombre-pareja-mujer-besando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Decoración de Bodas",
      caption: "Decoración de Bodas",
      description: "Creando momentos mágicos para tu día especial",
    },
    {
      url: "https://images.pexels.com/photos/2240768/pexels-photo-2240768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Fiesta de Cumpleaños",
      caption: "Fiesta de Cumpleaños",
      description: "Celebraciones únicas llenas de alegría y diversión",
    },
    {
      url: "https://images.pexels.com/photos/17461673/pexels-photo-17461673/free-photo-of-mujer-fiesta-partido-bailando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Concierto en Vivo",
      caption: "Concierto en Vivo",
      description: "Producción audiovisual de primer nivel",
    },
    {
      url: "https://images.pexels.com/photos/3626621/pexels-photo-3626621.jpeg",
      alt: "Exposición de Arte",
      caption: "Exposición de Arte",
      description: "Iluminando el arte con tecnología de vanguardia",
    },
    {
      url: "https://images.pexels.com/photos/5638639/pexels-photo-5638639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Reunión Familiar",
      caption: "Reunión Familiar",
      description: "Momentos íntimos con un toque profesional",
    }

  ];

  return (
    <section className="relative py-24">
      {/* Background con efecto de gradiente */}
      <div className="absolute inset-0  " />

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