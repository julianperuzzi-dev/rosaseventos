import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle
} from 'lucide-react';

const CombinedContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    tipoEvento: '',
    cantidadPersonas: '',
    fechaEstimada: '',
    salonUbicacion: '',
    masInformacion: '',
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '+5492644529390';
    const message = `Hola, mi nombre es ${formData.nombre}. Estoy interesado en el siguiente evento:
    
    - Tipo de Evento: ${formData.tipoEvento}
    - Cantidad Aproximada de Personas: ${formData.cantidadPersonas}
    - Fecha Estimada: ${formData.fechaEstimada}
    - Salón o Ubicación: ${formData.salonUbicacion}
    - Más Información: ${formData.masInformacion}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="reservations" className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Column - Contact Info */}
          <div className="space-y-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl sm:text-5xl font-medium mb-6">Conecta con Nosotros</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Estamos aquí para transformar tus ideas en realidad. Contacta con nuestro equipo para comenzar tu próximo proyecto.
              </p>
            </motion.div>

            <motion.div className="space-y-6" {...fadeInUp}>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Llámanos</p>
                  <p className="text-lg">+54 9 2644 52-9390</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="text-lg">rosaseventos@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Ubicación</p>
                  <p className="text-lg">San Juan, Argentina</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="flex space-x-6" {...fadeInUp}>
              {[Instagram, Facebook, MessageCircle].map((Icon, index) => (
                <a
                  key={index}
                  href="https://www.instagram.com/rosas.eventos.sj/"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>

            <motion.div className="mt-8" {...fadeInUp}>
              <iframe
                title="Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2090.8769556937946!2d-68.54807233120972!3d-31.592625837777383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96813f0edeb7c693%3A0x425e7f0a6ec234b5!2sRosas%20Eventos!5e1!3m2!1ses!2sar!4v1739152689334!5m2!1ses!2sar"
                className="w-full h-[300px] rounded-lg border-0"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div {...fadeInUp}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 h-full">
              <h2 className="text-2xl font-bold text-white mb-6">Formulario de Contacto</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ingrese su nombre"
                  />
                </div>

                <div>
                  <label htmlFor="tipoEvento" className="block text-sm font-medium text-gray-300">
                    Tipo de Evento
                  </label>
                  <input
                    type="text"
                    id="tipoEvento"
                    name="tipoEvento"
                    value={formData.tipoEvento}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ej: Cumpleaños, Casamiento, etc."
                  />
                </div>

                <div>
                  <label htmlFor="cantidadPersonas" className="block text-sm font-medium text-gray-300">
                    Cantidad Aproximada de Personas
                  </label>
                  <input
                    type="number"
                    id="cantidadPersonas"
                    name="cantidadPersonas"
                    value={formData.cantidadPersonas}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ej: 50"
                  />
                </div>

                <div>
                  <label htmlFor="fechaEstimada" className="block text-sm font-medium text-gray-300">
                    Fecha Estimada
                  </label>
                  <input
                    type="date"
                    id="fechaEstimada"
                    name="fechaEstimada"
                    value={formData.fechaEstimada}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="salonUbicacion" className="block text-sm font-medium text-gray-300">
                    Salón o Ubicación del Evento
                  </label>
                  <input
                    type="text"
                    id="salonUbicacion"
                    name="salonUbicacion"
                    value={formData.salonUbicacion}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ej: Salón Principal, Jardín, etc."
                  />
                </div>

                <div>
                  <label htmlFor="masInformacion" className="block text-sm font-medium text-gray-300">
                    Más Información
                  </label>
                  <textarea
                    id="masInformacion"
                    name="masInformacion"
                    value={formData.masInformacion}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ingrese detalles adicionales"
                    rows="4"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CombinedContactSection;