import React, { useState } from "react";
import { 
  FiZap, 
  FiMusic, 
  FiActivity,
  FiArrowRight,
  FiPlus,
  FiMinus
} from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Luces Inteligentes",
    description: "Sistema de iluminación de última generación con control total sobre la atmósfera de tu evento.",
    icon: FiZap,
    image: "https://images.pexels.com/photos/9376869/pexels-photo-9376869.jpeg",
    specs: [
      { label: "Potencia", value: "100,000 Lumens" },
      { label: "Control", value: "DMX512 / WiFi" },
      { label: "Colores", value: "16.7M" },
    ],
    features: [
      "Control total vía aplicación móvil",
      "Integración con sistemas de audio",
      "Modos preconfigurados para cada ocasión",
      "Bajo consumo energético"
    ]
  },
  {
    id: 2,
    name: "Sonido Premium",
    description: "Experiencia sonora inmersiva con la más alta fidelidad y potencia del mercado.",
    icon: FiMusic,
    image: "https://images.pexels.com/photos/14536014/pexels-photo-14536014.jpeg",
    specs: [
      { label: "Potencia", value: "10,000W RMS" },
      { label: "Respuesta", value: "20Hz-20kHz" },
      { label: "SNR", value: ">120dB" },
    ],
    features: [
      "Array lineal de última generación",
      "Procesamiento digital avanzado",
      "Cobertura de 360 grados",
      "Monitoreo en tiempo real"
    ]
  },
  {
    id: 3,
    name: "Efectos Especiales",
    description: "Elementos visuales y efectos atmosféricos que transformarán tu evento en una experiencia única.",
    icon: FiActivity,
    image: "https://images.pexels.com/photos/1047443/pexels-photo-1047443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specs: [
      { label: "Alcance", value: "Hasta 8m" },
      { label: "Control", value: "Wireless" },
      { label: "Capacidad", value: "3L/min" },
    ],
    features: [
      "Pirotecnia fría de última generación",
      "Sistema de CO2 criogénico",
      "Máquinas de niebla programables",
      "Control sincronizado con música"
    ]
  },
];

const ServicesSection = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [expandedFeatures, setExpandedFeatures] = useState(false);

  return (
    <div className="bg-black min-h-[75vh]">
      {/* Hero Section */}
      <div className="relative md:h-[65vh] h-[50vh]">
        <img 
          src={products[activeProduct].image}
          alt={products[activeProduct].name}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16">
          {/* Header */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-light mb-4">
              {products[activeProduct].name}
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl">
              {products[activeProduct].description}
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl">
            {products[activeProduct].specs.map((spec, index) => (
              <div key={index} className="text-white">
                <h3 className="text-2xl md:text-3xl font-light">{spec.value}</h3>
                <p className="text-sm text-gray-400">{spec.label}</p>
              </div>
            ))}
          </div>
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

          {expandedFeatures && (
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-2 mt-8 pl-12">
              {products[activeProduct].features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 text-gray-300 hover:text-white transition-colors"
                >
                  <FiArrowRight className="w-5 h-5 mt-1" />
                  <span className="text-lg font-light">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Navigation */}
      <div className="bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(index)}
                className={`group md:p-8 p-3 transition-all duration-300 ${
                  activeProduct === index ? 'bg-zinc-800' : 'hover:bg-zinc-800'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <product.icon className={`w-6 h-6 ${
                    activeProduct === index ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`} />
                  <span className={`text-lg ${
                    activeProduct === index ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`}>
                    {product.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ServicesSection;