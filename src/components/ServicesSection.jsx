import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Nuestros Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
          {/* Productos 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-lg">
            <div className="overflow-hidden rounded-lg relative">
              <img
                src="https://i.pinimg.com/1200x/2e/e8/12/2ee8124cf986d29f499202fac499698f.jpg" // Imagen inicial
                alt="Productos 1"
                className="w-full h-64 object-cover transition-opacity duration-300"
              />
              <img
                src="https://i.pinimg.com/1200x/08/b0/f5/08b0f5a03868dad2a0c83b8a9dbc7db2.jpg" // Imagen al hacer hover
                alt="Productos 1 Hover"
                className="w-full h-64 object-cover absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold mb-2">Productos 1</h3>
              <p className="text-gray-700">
                Breve explicación adicional del Productos 1. Aquí puedes agregar detalles importantes.
              </p>
            </div>
          </div>

          {/* Productos 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-lg">
            <div className="overflow-hidden rounded-lg relative">
              <img
                src="https://i.pinimg.com/1200x/0c/79/10/0c7910715d282ac3a715a28a1241cf11.jpg" // Imagen inicial
                alt="Productos 2"
                className="w-full h-64 object-cover transition-opacity duration-300"
              />
              <img
                src="https://i.pinimg.com/1200x/5f/18/45/5f18454f2f2914121973102fa0f9692b.jpg" // Imagen al hacer hover
                alt="Productos 2 Hover"
                className="w-full h-64 object-cover absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold mb-2">Productos 2</h3>
              <p className="text-gray-700">
                Breve explicación adicional del Productos 2. Aquí puedes agregar detalles importantes.
              </p>
            </div>
          </div>

          {/* Productos 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-lg">
            <div className="overflow-hidden rounded-lg relative">
              <img
                src="https://i.pinimg.com/1200x/3c/be/f0/3cbef028196641e3a3974397574b6262.jpg" // Imagen inicial
                alt="Productos 3"
                className="w-full h-64 object-cover transition-opacity duration-300"
              />
              <img
                src="https://i.pinimg.com/1200x/0a/9f/d9/0a9fd943f2a4440dc10c097eccfcdbff.jpg" // Imagen al hacer hover
                alt="Productos 3 Hover"
                className="w-full h-64 object-cover absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-2xl font-bold mb-2">Productos 3</h3>
              <p className="text-gray-700">
                Breve explicación adicional del Productos 3. Aquí puedes agregar detalles importantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
