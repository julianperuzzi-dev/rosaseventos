import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
        controls.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  // Variantes de animación
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative bg-black text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black opacity-90" />

      {/* Content Container */}
      <div className="relative min-h-screen container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Gallery */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={controls}
            variants={fadeInLeft}
          >
            {/* Primera imagen con overlay */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg"
                alt="Eventos Especiales"
                className="w-full h-[400px] object-cover rounded-lg brightness-90 group-hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-500">
                <h3 className="text-2xl font-light">Eventos Especiales</h3>
                <p className="text-gray-300">Creando momentos únicos</p>
              </div>
            </motion.div>

            {/* Segunda imagen con overlay */}
            <motion.div
              className="relative group hidden lg:block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="https://i.pinimg.com/736x/0e/5a/5c/0e5a5cc72823e6545e66f839ac7e2abb.jpg"
                alt="Producción Profesional"
                className="w-full h-[300px] object-cover rounded-lg brightness-90 group-hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-500">
                <h3 className="text-2xl font-light">Producción Profesional</h3>
                <p className="text-gray-300">Tecnología de vanguardia</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate={controls}
            variants={fadeInRight}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-5xl lg:text-7xl font-extralight mb-4">
                Sobre Nosotros
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-rose-500 to-orange-500" />
            </motion.div>

            <motion.div className="space-y-6 text-lg font-light" variants={fadeInUp}>
              <p className="leading-relaxed">
                En <span className="font-normal">ROSAS EVENTOS</span>, transformamos 
                momentos ordinarios en experiencias extraordinarias. Especializados en
                <span className="text-rose-500"> sonido</span>,
                <span className="text-orange-500"> iluminación</span> y 
                producción integral de eventos.
              </p>
              <p className="leading-relaxed">
                Con más de <span className="font-normal">5 años de experiencia</span> en 
                la industria, nuestro equipo de expertos ha perfeccionado el arte de 
                crear momentos inolvidables, desde bodas íntimas hasta grandes 
                eventos corporativos.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 py-8"
              variants={fadeInUp}
            >
              <div>
                <h3 className="text-3xl font-light">5+</h3>
                <p className="text-gray-400">Años de experiencia</p>
              </div>
              <div>
                <h3 className="text-3xl font-light">100+</h3>
                <p className="text-gray-400">Eventos realizados</p>
              </div>
              <div>
                <h3 className="text-3xl font-light">100%</h3>
                <p className="text-gray-400">Clientes satisfechos</p>
              </div>
            </motion.div>

            {/* Contact Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <motion.a
                href="tel:2644529390"
                className="group flex items-center justify-center sm:justify-start space-x-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <FaPhoneAlt className="w-5 h-5" />
                <span>Llamar Ahora</span>
                <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="https://wa.me/5492644529390"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center sm:justify-start space-x-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-500 px-8 py-4 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp</span>
                <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;