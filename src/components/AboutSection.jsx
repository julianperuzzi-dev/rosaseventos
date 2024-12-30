import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa"; // Importar los íconos necesarios

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-zinc-900 text-gray-100 min-h-[80vh] flex items-center"
      data-aos="fade-up"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Imagen a la izquierda */}
        <div className="md:w-1/2 mb-8 md:mb-0 w-full">
          <img
            src="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg" // Cambia a una imagen relevante para ROSAS EVENTOS
            alt="Sobre Nosotros"
            className="md:w-10/12 w-11/12 md:h-96 h-64 rounded-lg shadow-lg object-cover mx-auto transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Texto a la derecha */}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gold">
            Sobre Nosotros
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-4">
            En <span className="font-semibold text-gray-100">ROSAS EVENTOS</span>, 
            nos dedicamos a llevar tus eventos al siguiente nivel. Somos expertos en 
            <span className="text-gold font-medium"> sonido</span>, 
            <span className="text-gold font-medium"> iluminación</span> 
            y producción de eventos adaptados a tus necesidades.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
            Con más de <span className="font-bold text-gold">10 años de experiencia</span>, 
            garantizamos momentos memorables. Desde bodas y cumpleaños hasta eventos empresariales, 
            transformamos tus ideas en realidades espectaculares.
          </p>

          {/* Iconos y Llamado a la Acción */}
          <div className="flex justify-center md:justify-start gap-6 mb-6">
            <a
              href="tel:+542644529390"
              className="flex items-center bg-gold text-black px-6 py-3 rounded-full shadow-lg hover:bg-gold-dark transition transform hover:scale-105"
            >
              <FaPhoneAlt className="w-5 h-5 mr-2" />
              Llamar Ahora
            </a>
            <a
              href="https://wa.me/5492644529390"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Chatea con Nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
