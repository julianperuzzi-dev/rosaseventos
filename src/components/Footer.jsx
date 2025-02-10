import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <footer className="relative bg-gradient-to-br from-black via-zinc-800 to-black text-white py-24">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative container mx-auto px-4">
        <motion.div
          className="grid lg:grid-cols-2 gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* WhatsApp Section */}
          <motion.div {...fadeInUp} className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium">Contáctanos Directamente</h3>
              <p className="text-lg text-white/70 max-w-md">
                ¿Tienes alguna pregunta o necesitas ayuda? Escríbenos por WhatsApp y te responderemos al instante.
              </p>
            </div>

            <a
              href="https://wa.me/5492644529390" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-3 
                       bg-green-600 text-white rounded hover:bg-green-700 
                       transition-colors duration-300 w-fit"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Chatear por WhatsApp</span>
            </a>
          </motion.div>

          {/* Social Links Section */}
          <motion.div {...fadeInUp} className="lg:justify-self-end space-y-8">
            <h3 className="text-3xl font-medium">Síguenos</h3>
            <div className="flex gap-6">
              {[
                { Icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/p/Rosas-Eventos-100064469211261" },

                { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/rosas.eventos.sj" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center
                           hover:bg-white/20 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-24 pt-8 border-t border-white/10"
          {...fadeInUp}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2025 Rosas Eventos. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Términos
              </a>
              <a
                href="https://www.instagram.com/julianperuzzi.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Desarrollado por Julian Peruzzi
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;