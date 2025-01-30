import React from "react";
import {
  FaSpeakerDeck,
  FaLightbulb,
  FaCamera,
  FaWifi,
  FaSuperscript,
  FaBuilding,
} from "react-icons/fa";

const Reservations = () => {
  // Datos de las tarjetas con imágenes de fondo
  const services = [
    {
      id: 1,
      icon: FaSpeakerDeck,
      title: "Sonido Profesional",
      description:
        "Equipos de sonido de última generación para eventos de cualquier escala, garantizando una experiencia auditiva impecable.",
      image: "https://images.pexels.com/photos/14536014/pexels-photo-14536014.jpeg",
    },
    {
      id: 2,
      icon: FaLightbulb,
      title: "Iluminación Ambiental",
      description:
        "Iluminación personalizada para crear el ambiente perfecto en tus eventos, desde luces cálidas hasta efectos dinámicos.",
      image: "https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg",
    },
    {
      id: 3,
      icon: FaCamera,
      title: "Fotografía Profesional",
      description:
        "Servicios de fotografía para capturar los momentos más importantes de tu evento, con equipos de alta calidad.",
      image: "https://images.pexels.com/photos/3137073/pexels-photo-3137073.jpeg",
    },
    {
      id: 4,
      icon: FaWifi,
      title: "Streaming y Grabación",
      description:
        "Soluciones de streaming en vivo y grabación de alta calidad para eventos, congresos y conferencias.",
      image: "https://images.pexels.com/photos/7564395/pexels-photo-7564395.jpeg",
    },
    {
      id: 5,
      icon: FaSuperscript,
      title: "Soporte Técnico",
      description:
        "Personal capacitado para instalar, configurar y mantener el equipo durante todo el evento, asegurando un funcionamiento perfecto.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    },
    {
      id: 6,
      icon: FaBuilding,
      title: "Espacios para Eventos",
      description:
        "Ofrecemos espacios modernos y adaptados para todo tipo de eventos, desde conciertos hasta conferencias corporativas.",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    },
  ];

  return (
    <section
      id="reservations"
      className="bg-gradient-to-br from-black via-zinc-900 to-black opacity-90 py-20 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-light text-white text-center mb-16">
          Servicios y Reservas
        </h3>

        {/* Grid de Servicios */}
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-4 text-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-black border border-white/30 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group"
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Contenido */}
              <div className="relative z-10 flex flex-col items-center justify-center md:p-8 p-3 h-full">
                <service.icon className="mx-auto text-white/70 md:text-6xl text-4xl md:mb-6 mb-3 group-hover:text-white transition-colors" />
                <h4 className="md:text-2xl text-xl font-light text-white/80 mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-400 md:text-lg text-sm group-hover:text-white transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reservations;