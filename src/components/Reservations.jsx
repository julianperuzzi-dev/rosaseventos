import React from "react";
import {
  FaBriefcase,
  FaUtensils,
  FaChalkboardTeacher,
  FaWifi,
  FaParking,
  FaBuilding,
} from "react-icons/fa";

const Reservations = () => {
  return (
    <section id="reservations" className="bg-black py-16 min-h-screen">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-gold text-center mt-20 mb-10">
          Reservas e Información del Lugar
        </h3>

        {/* Información de Reservas */}
        <div className="grid md:grid-cols-3 grid-cols-2 gap-8 text-center">
          <div className="bg-black border border-gold rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaBriefcase className="mx-auto text-gold text-6xl mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gold">
              Coworking Empresarial
            </h4>
            <p className="text-gray-300 text-sm md:text-base">
              Espacios modernos para coworking con WiFi, salas de reuniones y
              áreas de descanso.
            </p>
          </div>

          <div className="bg-black border border-gold rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaUtensils className="mx-auto text-gold text-6xl mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gold">
              Eventos Privados
            </h4>
            <p className="text-gray-300 text-sm md:text-base">
              Organizamos eventos privados con servicio de catering y tecnología
              audiovisual.
            </p>
          </div>

          <div className="bg-black border border-gold rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaChalkboardTeacher className="mx-auto text-gold text-6xl mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gold">
              Reuniones Corporativas
            </h4>
            <p className="text-gray-300 text-sm md:text-base">
              Salas equipadas para reuniones corporativas con proyector y
              videoconferencias.
            </p>
          </div>

          <div className="bg-black border border-gold rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaWifi className="mx-auto text-gold text-6xl mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gold">
              WiFi de Alta Velocidad
            </h4>
            <p className="text-gray-300 text-sm md:text-base">
              Conexión rápida y confiable en todas las áreas.
            </p>
          </div>

          <div className="bg-black border border-gold rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaParking className="mx-auto text-gold text-6xl mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gold">
              Estacionamiento Privado
            </h4>
            <p className="text-gray-300 text-sm md:text-base">
              Estacionamiento gratuito y accesible para todos nuestros
              visitantes.
            </p>
          </div>

          <div className="bg-black border border-gold rounded-lg p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <FaBuilding className="mx-auto text-gold text-6xl mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-gold">
              Instalaciones Modernas
            </h4>
            <p className="text-gray-300 text-sm md:text-base">
              Espacios diseñados con comodidad y tecnología avanzada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
