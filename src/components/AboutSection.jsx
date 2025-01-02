import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black opacity-90" />

      {/* Content Container */}
      <div className="relative min-h-screen container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Gallery */}
          <div className={`space-y-8 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          } transition-all duration-1000 ease-out`}>
            {/* Primera imagen con overlay */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="https://images.pexels.com/photos/3661650/pexels-photo-3661650.jpeg"
                alt="Eventos Especiales"
                className="w-full h-[400px] object-cover rounded-lg brightness-90 group-hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-500">
                <h3 className="text-2xl font-light">Eventos Especiales</h3>
                <p className="text-gray-300">Creando momentos únicos</p>
              </div>
            </div>

            {/* Segunda imagen con overlay */}
            <div className="relative group hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="https://images.pexels.com/photos/22857353/pexels-photo-22857353/free-photo-of-hombre-silueta-musica-en-pie.jpeg"
                alt="Producción Profesional"
                className="w-full h-[300px] object-cover rounded-lg brightness-90 group-hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-500">
                <h3 className="text-2xl font-light">Producción Profesional</h3>
                <p className="text-gray-300">Tecnología de vanguardia</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-8 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          } transition-all duration-1000 delay-300 ease-out`}>
            <div>
              <h2 className="text-5xl lg:text-7xl font-extralight mb-4">
                Sobre Nosotros
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-rose-500 to-orange-500" />
            </div>

            <div className="space-y-6 text-lg font-light">
              <p className="leading-relaxed">
                En <span className="font-normal">ROSAS EVENTOS</span>, transformamos 
                momentos ordinarios en experiencias extraordinarias. Especializados en
                <span className="text-rose-500"> sonido</span>,
                <span className="text-orange-500"> iluminación</span> y 
                producción integral de eventos.
              </p>
              <p className="leading-relaxed">
                Con más de <span className="font-normal">10 años de experiencia</span> en 
                la industria, nuestro equipo de expertos ha perfeccionado el arte de 
                crear momentos inolvidables, desde bodas íntimas hasta grandes 
                eventos corporativos.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              <div>
                <h3 className="text-3xl font-light">10+</h3>
                <p className="text-gray-400">Años de experiencia</p>
              </div>
              <div>
                <h3 className="text-3xl font-light">500+</h3>
                <p className="text-gray-400">Eventos realizados</p>
              </div>
              <div>
                <h3 className="text-3xl font-light">100%</h3>
                <p className="text-gray-400">Clientes satisfechos</p>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+542644529390"
                className="group flex items-center justify-center sm:justify-start space-x-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg transition-all duration-300"
              >
                <FaPhoneAlt className="w-5 h-5" />
                <span>Llamar Ahora</span>
                <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/5492644529390"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center sm:justify-start space-x-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-500 px-8 py-4 rounded-lg transition-all duration-300"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp</span>
                <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;