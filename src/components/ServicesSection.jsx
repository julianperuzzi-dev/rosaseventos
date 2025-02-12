import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiZap,
  FiMusic,
  FiActivity,
  FiSunset,
  FiArrowRight,
  FiPlus,
  FiMinus,
} from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Sonido Premium",
    description:
      "Experiencia sonora inmersiva con la más alta fidelidad y potencia del mercado. Ideal para eventos que requieren claridad y profundidad en cada nota.",
    icon: FiMusic,
    image: "https://images.pexels.com/photos/635928/pexels-photo-635928.jpeg",
    price: "$249.000",
    specs: [
      { label: "Potencia", value: "10,000W RMS" },
      { label: "Respuesta", value: "20Hz-20kHz" },
      {label: "SNR", value: ">120dB" },
    ],
    features: [
      "Array lineal de última generación para una cobertura uniforme.",
      "Procesamiento digital avanzado para un sonido cristalino.",
      "Cobertura de 360 grados, perfecto para eventos grandes.",
      "Monitoreo en tiempo real para ajustes precisos durante el evento.",
    ],
  },
  {
    id: 2,
    name: "Iluminación del Evento",
    description:
      "Luces dinámicas y efectos visuales que transforman cualquier espacio en una fiesta inolvidable. Perfecto para crear ambientes vibrantes y llenos de energía.",
    icon: FiZap,
    image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg",
    price: "$199.000",
    specs: [
      { label: "Potencia", value: "100,000 Lumens" },
      { label: "Control", value: "DMX512 / WiFi" },
      { label: "Colores", value: "16.7M" },
    ],
    features: [
      "Luces giratorias y estroboscópicas para crear efectos dinámicos.",
      "Control total vía aplicación móvil para personalización en tiempo real.",
      "Integración con sistemas de audio para sincronización perfecta.",
      "Modos preconfigurados para bodas, fiestas y eventos corporativos.",
    ],
  },
  {
    id: 3,
    name: "Iluminación Ambiental",
    description:
      "Crea atmósferas únicas con iluminación suave y decorativa. Ideal para fondos fotográficos, decoración de salones y ambientes acogedores.",
    icon: FiSunset,
    image: "https://images.pexels.com/photos/442540/pexels-photo-442540.jpeg",
    price: "$99.000",
    specs: [
      { label: "Temperatura", value: "2700K-6500K" },
      { label: "Control", value: "Dimmer / WiFi" },
      { label: "Colores", value: "RGB Personalizable" },
    ],
    features: [
      "Iluminación suave que evita fotos quemadas y crea fondos uniformes.",
      "Tintado de ambientes con colores personalizados para cada ocasión.",
      "Perfecto para fotografías: resalta detalles sin sobreexponer.",
      "Decora salones con luces LED de bajo consumo y alta eficiencia.",
    ],
  },
  {
    id: 4,
    name: "Efectos Especiales",
    description:
      "Elementos visuales y efectos atmosféricos que transformarán tu evento en una experiencia única e inolvidable.",
    icon: FiActivity,
    image: "https://images.pexels.com/photos/5175593/pexels-photo-5175593.jpeg",
    price: "$79.000",
    specs: [
      { label: "Alcance", value: "Hasta 8m" },
      { label: "Control", value: "Wireless" },
      { label: "Capacidad", value: "3L/min" },
    ],
    features: [
      "Pirotecnia fría de última generación para un impacto visual seguro.",
      "Máquinas de humo y niebla para crear atmósferas mágicas.",
      "Confeti brillante y lluvia de estrellas para momentos especiales.",
      "Control sincronizado con música para un espectáculo envolvente.",
    ],
  },
];

const ServicesSection = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [expandedFeatures, setExpandedFeatures] = useState(false);

  // Animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-black min-h-[75vh]">
      {/* Hero Section */}
      <div className="relative md:h-[65vh] h-[55vh]">
        <img
          src={products[activeProduct].image}
          alt={products[activeProduct].name}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16">
          {/* Header */}
          <motion.div
            className="text-white"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h4 className="text-4xl md:text-6xl font-light mb-4">
              {products[activeProduct].name}
            </h4>
            <p className="text-xl md:text-2xl font-light max-w-2xl">
              {products[activeProduct].description}
            </p>
          </motion.div>

          {/* Specs Grid */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {products[activeProduct].specs.map((spec, index) => (
              <div key={index} className="text-white">
                <h3 className="text-2xl md:text-3xl font-light">{spec.value}</h3>
                <p className="text-sm text-gray-400">{spec.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black text-white py-4">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={() => setExpandedFeatures(!expandedFeatures)}
            className="flex items-center space-x-4 w-full group md:mb-8 mb-1"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 group-hover:border-white/40 transition-colors">
              {expandedFeatures ? <FiMinus /> : <FiPlus />}
            </div>
            <span className="text-xl font-light">Características</span>
          </button>

          <AnimatePresence>
            {expandedFeatures && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-2 mt-8 pl-12"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={fadeIn}
              >
                {products[activeProduct].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 text-gray-300 hover:text-white transition-colors"
                    variants={slideIn}
                  >
                    <FiArrowRight className="w-5 h-5 mt-1" />
                    <span className="text-lg font-light">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Product Navigation */}
      <div className="bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
            {products.map((product, index) => (
              <motion.button
                key={product.id}
                onClick={() => setActiveProduct(index)}
                className={`group md:p-8 p-3 transition-all duration-300 ${
                  activeProduct === index ? "bg-zinc-800" : "hover:bg-zinc-800"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-4">
                  <product.icon
                    className={`w-6 h-6 ${
                      activeProduct === index
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  />
                  <span
                    className={`text-lg ${
                      activeProduct === index
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {product.name}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;