import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsApp = () => {
  const handleClick = () => {
    const phoneNumber = '5492644529390';
    const message = 'Hola! Me gustaría obtener más información sobre sus servicios.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center group relative transition-all duration-300 hover:scale-105"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
        <span className="absolute right-full mr-2 bg-green-950  text-emerald-400 px-4 py-2 rounded-lg text-sm  opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md">
          Contactanos!
        </span>
      </button>
    </motion.div>
  );
};

export default FloatingWhatsApp;