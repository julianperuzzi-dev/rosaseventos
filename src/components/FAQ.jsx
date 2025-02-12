import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaWhatsapp } from "react-icons/fa";

// Datos de las preguntas frecuentes
const faqData = [
  {
    question: "¿Cómo puedo reservar un equipo para mi evento?",
    answer:
      "Puedes reservar tu equipo directamente a través de nuestra página web o contactándonos por WhatsApp para asistencia personalizada.",
    action: {
      text: "Reservar ahora",
      link: "https://wa.me/+5492646996941", // Reemplaza con tu número de WhatsApp
    },
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Puedes cancelar tu reserva hasta 48 horas antes del evento sin cargos. Después de este plazo, se aplicará una tarifa del 20% del total.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos tarjetas de crédito, transferencias bancarias y PayPal. También puedes pagar en efectivo al momento de la entrega.",
  },
  {
    question: "¿Ofrecen descuentos para eventos grandes?",
    answer:
      "Sí, ofrecemos descuentos especiales para eventos grandes. Contáctanos para obtener una cotización personalizada.",
    action: {
      text: "Contactar por WhatsApp",
      link: "https://wa.me/+5492646996941", // Reemplaza con tu número de WhatsApp
    },
  },
  {
    question: "¿Qué pasa si el equipo se daña durante el evento?",
    answer:
      "El cliente es responsable del equipo durante el evento. En caso de daño, se aplicará una tarifa de reparación o reposición.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Función para alternar la visibilidad de la respuesta
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animaciones
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/736x/4f/30/91/4f3091a11fd7283c7b7652fec8a44684.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-medium mb-12 text-center"
            {...fadeInUp}
          >
            Preguntas Frecuentes
          </motion.h2>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cursor-pointer"
                onClick={() => toggleAnswer(index)}
                {...fadeInUp}
              >
                {/* Pregunta */}
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <span className="text-white/60">
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>

                {/* Respuesta */}
                {activeIndex === index && (
                  <div className="mt-4 text-white/80">
                    <p>{faq.answer}</p>
                    {/* Botón de acción (si existe) */}
                    {faq.action && (
                      <a
                        href={faq.action.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center px-6 py-2 bg-green-950/80 backdrop-blur-sm text-green-400 rounded-lg hover:bg-green-700/50 transition-colors duration-300"
                      >
                        <FaWhatsapp className="mr-2" />
                        {faq.action.text}
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;