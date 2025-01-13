import React from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
          {/* Newsletter Section */}
          <motion.div {...fadeInUp} className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-medium">Mantente Conectado</h3>
              <p className="text-lg text-white/70 max-w-md">
                Sé el primero en conocer sobre nuestros nuevos eventos y ofertas exclusivas.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-6 py-3 bg-white/10 rounded backdrop-blur-sm 
                         border border-white/10 text-white placeholder:text-white/40
                         focus:outline-none focus:border-white/20 transition-colors"
                required
              />
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 px-8 py-3 
                         bg-white text-black rounded hover:bg-white/90 
                         transition-colors duration-300"
              >
                Suscribirse
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Social Links Section */}
          <motion.div {...fadeInUp} className="lg:justify-self-end space-y-8">
            <h3 className="text-3xl font-medium">Síguenos</h3>
            <div className="flex gap-6">
              {[
                { Icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
                { Icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
                { Icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                { Icon: Instagram, label: 'Instagram', href: 'https://instagram.com' }
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
              © 2024 Rosas Eventos. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Contacto</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;