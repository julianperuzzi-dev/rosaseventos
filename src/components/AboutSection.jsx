import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 min-h-[80vh] flex items-center" data-aos="fade-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Imagen a la izquierda */}
        <div className="md:w-1/2 mb-8 md:mb-0 w-full">
          <img
            src="https://i.pinimg.com/1200x/38/25/0e/38250e1d24fb3813c0c0a85e766135c3.jpg"
            alt="Sobre Nosotros"
            className="md:w-10/12 w-11/12 md:h-96 h-48 rounded-lg shadow-lg object-cover mx-auto"
          />
        </div>

        {/* Texto a la derecha */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nosotros</h2>
          <p className="text-lg md:text-xl leading-relaxed mx-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe soluta, minima cupiditate explicabo libero, quia voluptas, delectus molestiae veniam deserunt est. Minima pariatur quibusdam sunt velit nostrum distinctio praesentium similique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
