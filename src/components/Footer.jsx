import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-600 to-gray-500 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Newsletter Section */}
          <div className="mb-10 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-4 text-white">Suscríbete a nuestro Newsletter</h3>
            <p className="text-lg mb-4 text-gray-200">
              Mantente informado sobre nuestras últimas noticias, eventos y ofertas exclusivas.
            </p>
            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="p-4 mb-4 md:mb-0 md:mr-4 rounded-lg border-2 border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
              <button
                type="submit"
                className="bg-gray-700 py-3 px-6 rounded-lg text-white font-semibold hover:bg-gray-600 transition duration-300"
              >
                Suscribirse
              </button>
            </form>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-end mb-6 md:mb-0">
            <h3 className="text-3xl font-semibold mb-4 text-white">Síguenos</h3>
            <div className="flex space-x-6 text-3xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="text-white hover:text-gray-300 transition duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-white hover:text-gray-300 transition duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className="text-white hover:text-gray-300 transition duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-white hover:text-gray-300 transition duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-200">&copy; 2024 Rosas Eventos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
