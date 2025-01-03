import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle
} from 'lucide-react';

const ContactSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Background Image with Overlay */}
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

            <motion.div 
              className="space-y-6"
              {...fadeInUp}
            >
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Llámanos</p>
                  <p className="text-lg">+54 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="text-lg">info@tuempresa.com</p>
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

            <motion.div 
              className="flex space-x-6"
              {...fadeInUp}
            >
              {[Instagram, Facebook, Twitter, MessageCircle].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Map */}
          <motion.div 
            className="space-y-8"
            {...fadeInUp}
          >
            <div className="rounded-lg overflow-hidden h-[400px] bg-white/5 backdrop-blur-lg">
              <iframe
                title="Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.557736501233!2d-68.57650632578754!3d-31.5378757082577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96815022d91f615f%3A0xe70f25631ba7a5c9!2sSan%20Juan%2C%20Argentina!5e0!3m2!1ses!2sar!4v1693930272815!5m2!1ses!2sar"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-3 rounded text-sm hover:bg-white/90 transition-colors duration-300 flex-1">
                Agendar Reunión
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded text-sm hover:bg-white/20 transition-colors duration-300 flex-1">
                WhatsApp Directo
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;