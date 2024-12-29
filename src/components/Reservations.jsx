import React from "react";
import { FaBriefcase, FaUtensils, FaChalkboardTeacher, FaWifi, FaParking, FaBuilding } from "react-icons/fa";

const Reservations = () => {
  return (
    <section id="reservations" className="bg-gray-50 py-16 min-h-screen">
      <div className="container mx-auto px-6 ">
        <h3 className="text-4xl font-bold text-gray-900 text-center mt-20 mb-10">
          Reservas e Información del Lugar
        </h3>

        {/* Información de Reservas */}
        <div className=" md:gap-16 gap-4 text-center grid md:grid-cols-3 grid-cols-2">
          <div>
            <FaBriefcase className="mx-auto text-amber-900/60 text-5xl mb-4" />
            <h4 className="md:text-2xl text-lg font-semibold mb-2 text-gray-800">
              Coworking Empresarial
            </h4>
            <p className="text-gray-600 text-sm md:text-base">
              Espacios modernos para coworking con WiFi, salas de reuniones y áreas de descanso.
            </p>
          </div>

          <div>
            <FaUtensils className="mx-auto text-amber-900/60 text-5xl mb-4" />
            <h4 className="md:text-2xl text-lg font-semibold mb-2 text-gray-800">
              Eventos Privados
            </h4>
            <p className="text-gray-600 text-sm md:text-base">
              Organizamos eventos privados con servicio de catering y tecnología audiovisual.
            </p>
          </div>

          <div>
            <FaChalkboardTeacher className="mx-auto text-amber-900/60 text-5xl mb-4" />
            <h4 className="md:text-2xl text-lg font-semibold mb-2 text-gray-800">
              Reuniones Corporativas
            </h4>
            <p className="text-gray-600 text-sm md:text-base">
              Salas equipadas para reuniones corporativas con proyector y videoconferencias.
            </p>
          </div>

          <div>
            <FaWifi className="mx-auto text-amber-900/60 text-5xl mb-4" />
            <h4 className="md:text-2xl text-lg font-semibold mb-2 text-gray-800">
              WiFi de Alta Velocidad
            </h4>
            <p className="text-gray-600 text-sm md:text-base">
              Conexión rápida y confiable en todas las áreas.
            </p>
          </div>

          <div>
            <FaParking className="mx-auto text-amber-900/60 text-5xl mb-4" />
            <h4 className="md:text-2xl text-lg font-semibold mb-2 text-gray-800">
              Estacionamiento Privado
            </h4>
            <p className="text-gray-600 text-sm md:text-base">
              Estacionamiento gratuito y accesible para todos nuestros visitantes.
            </p>
          </div>

          <div>
            <FaBuilding className="mx-auto text-amber-900/60 text-5xl mb-4" />
            <h4 className="md:text-2xl text-lg font-semibold mb-2 text-gray-800">
              Instalaciones Modernas
            </h4>
            <p className="text-gray-600 text-sm md:text-base">
              Espacios diseñados con comodidad y tecnología avanzada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
