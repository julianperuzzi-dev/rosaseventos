import React from "react";

const products = [
  {
    id: 1,
    name: "Luces Inteligentes",
    description: "Iluminación profesional para cualquier tipo de evento.",
    image: "https://images.pexels.com/photos/2952834/pexels-photo-2952834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    hoverImage: "https://images.pexels.com/photos/2350325/pexels-photo-2350325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/productos/luces-inteligentes",
  },
  {
    id: 2,
    name: "Sonido Premium",
    description: "Sonido de alta calidad con equipos de última tecnología.",
    image: "https://images.pexels.com/photos/18924580/pexels-photo-18924580/free-photo-of-tecnologia-negro-megafono-altavoz.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    hoverImage: "https://images.pexels.com/photos/9216605/pexels-photo-9216605.jpeg",
    link: "/productos/sonido-premium",
  },
  {
    id: 3,
    name: "Efectos Especiales",
    description: "Máquinas de humo, confeti y más para momentos únicos.",
    image: "https://images.pexels.com/photos/3171820/pexels-photo-3171820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    hoverImage: "https://images.pexels.com/photos/27381457/pexels-photo-27381457/free-photo-of-ligero-moda-creativo-cartel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/productos/efectos-especiales",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-r from-black via-[#ff9a85] to-gold text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Nuestros Servicios</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          En Rosas Eventos ofrecemos lo mejor en sonido e iluminación para tus celebraciones. Descubre nuestros equipos
          diseñados para hacer de tu evento una experiencia inolvidable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.link}
              className="relative bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="overflow-hidden rounded-lg relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <img
                  src={product.hoverImage}
                  alt={`${product.name} Hover`}
                  className="w-full h-64 object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-[#ff4d6d]">{product.name}</h3>
                <p className="text-gray-700 mt-2">{product.description}</p>
              </div>
              <div className="absolute top-4 right-4 bg-[#ff4d6d] text-white px-3 py-1 rounded-full text-sm font-semibold">
                Nuevo
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
