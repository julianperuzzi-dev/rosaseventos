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
  return (
    <section id="reservations" className="bg-gradient-to-br from-black via-zinc-900 to-black opacity-90 py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-light text-white text-center mb-16">
          Servicios y Reservas
        </h3>

        {/* Información de Reservas */}
        <div className="grid l md:grid-cols-3 grid-cols-2 md:gap-10 gap-4 text-center">
          <div className="bg-black border border-white/30 rounded-xl md:p-8 p-3 shadow-lg hover:scale-105 transition-transform duration-300 group">
            <FaSpeakerDeck className="mx-auto text-white/70 md:text-6xl text-4xl  md:mb-6 mb-3 group-hover:text-white transition-colors" />
            <h4 className="md:text-2xl text-xl font-light text-white/80 mb-3 group-hover:text-white transition-colors">
              Sonido Profesional
            </h4>
            <p className="text-gray-400 md:text-lg text-sm group-hover:text-white transition-colors">
              Equipos de sonido de última generación para eventos de cualquier escala, garantizando una experiencia auditiva impecable.
            </p>
          </div>

          <div className="bg-black border border-white/30 rounded-xl md:p-8 p-3 shadow-lg hover:scale-105 transition-transform duration-300 group">
            <FaLightbulb className="mx-auto text-white/70 md:text-6xl text-4xl  md:mb-6 mb-3 group-hover:text-white transition-colors" />
            <h4 className="md:text-2xl text-xl font-light text-white/80 mb-3 group-hover:text-white transition-colors">
              Iluminación Ambiental
            </h4>
            <p className="text-gray-400 md:text-lg text-sm group-hover:text-white transition-colors">
              Iluminación personalizada para crear el ambiente perfecto en tus eventos, desde luces cálidas hasta efectos dinámicos.
            </p>
          </div>

          <div className="bg-black border border-white/30 rounded-xl md:p-8 p-3 shadow-lg hover:scale-105 transition-transform duration-300 group">
            <FaCamera className="mx-auto text-white/70 md:text-6xl text-4xl  md:mb-6 mb-3 group-hover:text-white transition-colors" />
            <h4 className="md:text-2xl text-xl font-light text-white/80 mb-3 group-hover:text-white transition-colors">
              Fotografía Profesional
            </h4>
            <p className="text-gray-400 md:text-lg text-sm group-hover:text-white transition-colors">
              Servicios de fotografía para capturar los momentos más importantes de tu evento, con equipos de alta calidad.
            </p>
          </div>

          <div className="bg-black border border-white/30 rounded-xl md:p-8 p-3 shadow-lg hover:scale-105 transition-transform duration-300 group">
            <FaWifi className="mx-auto text-white/70 md:text-6xl text-4xl  md:mb-6 mb-3 group-hover:text-white transition-colors" />
            <h4 className="md:text-2xl text-xl font-light text-white/80 mb-3 group-hover:text-white transition-colors">
              Streaming y Grabación
            </h4>
            <p className="text-gray-400 md:text-lg text-sm group-hover:text-white transition-colors">
              Soluciones de streaming en vivo y grabación de alta calidad para eventos, congresos y conferencias.
            </p>
          </div>

          <div className="bg-black border border-white/30 rounded-xl md:p-8 p-3 shadow-lg hover:scale-105 transition-transform duration-300 group">
            <FaSuperscript className="mx-auto text-white/70 md:text-6xl text-4xl  md:mb-6 mb-3 group-hover:text-white transition-colors" />
            <h4 className="md:text-2xl text-xl font-light text-white/80 mb-3 group-hover:text-white transition-colors">
              Soporte Técnico
            </h4>
            <p className="text-gray-400 md:text-lg text-sm group-hover:text-white transition-colors">
              Personal capacitado para instalar, configurar y mantener el equipo durante todo el evento, asegurando un funcionamiento perfecto.
            </p>
          </div>

          <div className="bg-black border border-white/30 rounded-xl md:p-8 p-3 shadow-lg hover:scale-105 transition-transform duration-300 group">
            <FaBuilding className="mx-auto text-white/70 md:text-6xl text-4xl  md:mb-6 mb-3 group-hover:text-white transition-colors" />
            <h4 className="md:text-2xl text-xl font-light text-white/80 mb-3 group-hover:text-white transition-colors">
              Espacios para Eventos
            </h4>
            <p className="text-gray-400 md:text-lg text-sm group-hover:text-white transition-colors">
              Ofrecemos espacios modernos y adaptados para todo tipo de eventos, desde conciertos hasta conferencias corporativas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
