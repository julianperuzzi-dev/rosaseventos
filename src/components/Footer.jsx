import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-900/60 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Newsletter Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Suscríbete a nuestro Newsletter</h3>
            <p className="mb-4">
              Mantente al tanto de nuestras últimas noticias y ofertas exclusivas. (opcional)
            </p>
            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="p-2 mb-2 md:mb-0 md:mr-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-900/90 text-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-amber-900/90 py-2 px-4 rounded-lg text-white font-bold hover:bg-amber-500 transition duration-300"
              >
                Suscribirse
              </button>
            </form>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-end mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Síguenos</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="text-white hover:text-gray-400 transition duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-white hover:text-gray-400 transition duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className="text-white hover:text-gray-400 transition duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-white hover:text-gray-400 transition duration-300" />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="text-center mt-6">
          <p className="text-sm">&copy; 2024 JulianPeruzzi.dev Soluciones Digitales. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
