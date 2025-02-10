import React from "react";
import {
  FaMusic,
  FaLightbulb,
  FaCamera,
  FaCompactDisc,
  FaStreetView,
  FaRegLightbulb,
} from "react-icons/fa";

const Reservations = () => {
  const services = [
    {
      id: 1,
      icon: FaMusic,
      title: "Equipamiento Profesional",
      description:
        "Equipos de sonido profesional de alta calidad para eventos. Consolas, micrófonos y sistemas de audio de última generación.",
      image: "https://images.pexels.com/photos/14536014/pexels-photo-14536014.jpeg",
    },
    {
      id: 2,
      icon: FaCompactDisc,
      title: "Sonido Profesional",
      description:
        "Sistema line array, subwoofers y monitores profesionales para una experiencia sonora excepcional en tu evento.",
      image: "https://images.pexels.com/photos/8133000/pexels-photo-8133000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      icon: FaLightbulb,
      title: "Iluminación de Fiesta",
      description:
        "Luces robóticas, láser, strobo y efectos especiales para crear el ambiente perfecto de fiesta en tu evento.",
      image: "https://images.pexels.com/photos/9080253/pexels-photo-9080253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      icon: FaRegLightbulb,
      title: "Iluminación Ambiental",
      description:
        "Iluminación decorativa y arquitectónica para crear ambientes únicos y elegantes en tu evento.",
      image: "https://images.pexels.com/photos/2289895/pexels-photo-2289895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      icon: FaCamera,
      title: "Fotografía Profesional",
      description:
        "Servicios de fotografía profesional para capturar los momentos más especiales (sujeto a disponibilidad).",
      image: "https://images.pexels.com/photos/8184899/pexels-photo-8184899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      icon: FaStreetView,
      title: "Efectos Especiales",
      description:
        "Carteles de neón personalizados, bola de espejos, máquinas de humo y otros efectos para hacer tu evento único.",
      image: "https://images.pexels.com/photos/593467/pexels-photo-593467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-br from-black via-zinc-900 to-black opacity-90 py-20 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-light text-white text-center mb-16">
          Nuestros Servicios
        </h3>

        <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 md:gap-10 gap-6 text-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-black border border-white/30 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 group min-h-[300px]"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center p-6 h-full">
                <service.icon className="mx-auto text-white/70 text-5xl mb-4 group-hover:text-white transition-colors" />
                <h4 className="text-2xl font-light text-white/80 mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-base group-hover:text-white transition-colors">
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