import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 flex items-center justify-center md:min-h-screen md:py-40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen y Mapa de Lado */}
        <div className="hidden md:flex flex-col gap-6">
          <img
            src="https://images.pexels.com/photos/2267898/pexels-photo-2267898.jpeg" // Reemplaza con una imagen adecuada
            alt="Contáctanos"
            className="rounded-lg shadow-lg object-cover h-96 w-full"
          />

          {/* Mapa de Google embebido */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.557736501233!2d-68.57650632578754!3d-31.5378757082577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96815022d91f615f%3A0xe70f25631ba7a5c9!2sSan%20Juan%2C%20Argentina!5e0!3m2!1ses!2sar!4v1693930272815!5m2!1ses!2sar"
              className="w-full h-72 border-none"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Sección de Contacto */}
        <div className="flex flex-col justify-center text-center md:text-left bg-white p-8 rounded-lg shadow-lg mx-3 md:mx-0">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Contáctanos</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700">
            ¡Pongámonos en contacto y hagamos realidad tus ideas! Si tienes preguntas o deseas trabajar con nosotros, estamos disponibles en nuestras redes y WhatsApp.
          </p>

          {/* Información de Contacto */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center space-x-4">
              <FaPhone className="text-amber-700/50" />
              <p className="text-lg text-gray-800">+54 123 456 789</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-amber-700/50" />
              <p className="text-lg text-gray-800">info@tuempresa.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-amber-700/50" />
              <p className="text-lg text-gray-800">San Juan, Argentina</p>
            </div>
          </div>

          {/* Redes Sociales y WhatsApp */}
          <div className="flex space-x-4 mb-8">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-500">
              <FaWhatsapp size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500">
              <FaTwitter size={24} />
            </a>
          </div>

          {/* Botones Prioritarios */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition duration-300 mb-4 w-full text-center md:w-fit"
          >
            Envíanos un Mensaje por WhatsApp
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-700/50 text-white py-3 px-6 rounded-full shadow-lg hover:bg-amber-800/50 transition duration-300 w-full text-center md:w-fit"
          >
            Contáctanos por Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
