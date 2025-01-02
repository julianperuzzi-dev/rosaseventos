import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20  text-white md:min-h-screen md:py-40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen y Mapa de Lado */}
        <div className="hidden md:flex flex-col gap-6">
          <img
            src="https://images.pexels.com/photos/246972/pexels-photo-246972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Contáctanos"
            className="rounded-lg shadow-lg object-cover h-96 w-full border-4 border-stone-600"
          />

          {/* Mapa de Google embebido */}
          <div className="rounded-lg overflow-hidden shadow-lg border-4 border-stone-600">
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
        <div className="flex flex-col justify-center text-center md:text-left bg-black p-8 rounded-lg shadow-lg border-4 border-stone-600 mx-3 md:mx-0">
          <h2 className="text-4xl font-bold mb-6 text-stoneborder-stone-600">Contáctanos</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-200">
            ¡Estamos aquí para ayudarte! Si tienes preguntas o deseas trabajar con nosotros, no dudes en contactarnos a través de nuestras redes sociales o WhatsApp.
          </p>

          {/* Información de Contacto */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center space-x-4">
              <FaPhone className="text-stoneborder-stone-600 text-xl" />
              <p className="text-lg text-white">+54 123 456 789</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-stoneborder-stone-600 text-xl" />
              <p className="text-lg text-white">info@tuempresa.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-stoneborder-stone-600 text-xl" />
              <p className="text-lg text-white">San Juan, Argentina</p>
            </div>
          </div>

          {/* Redes Sociales y WhatsApp */}
          <div className="flex space-x-4 mb-8 justify-center md:justify-start">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stoneborder-stone-600 hover:text-white transition duration-300"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stoneborder-stone-600 hover:text-white transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stoneborder-stone-600 hover:text-white transition duration-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stoneborder-stone-600 hover:text-white transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
          </div>

          {/* Botones Prioritarios */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border  border-stone-600  py-3 px-6 rounded-full shadow-lg hover:scale-110 transition duration-300 mb-4 w-full text-center md:w-fit"
          >
            Escríbenos por WhatsApp
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-stoneborder-stone-600 border border-stone-600 py-3 px-6 rounded-full shadow-lg hover:scale-110  transition duration-300 w-full text-center md:w-fit"
          >
            Contáctanos por Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
