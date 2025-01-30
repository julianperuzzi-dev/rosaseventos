import React from "react";
import { Parallax } from "react-parallax";

const ParallaxSection = () => {
  return (
    <Parallax
      bgImage="https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg"
      strength={300}
      className="relative flex items-center justify-center bg-cover bg-center"
      bgImageStyle={{ objectFit: 'cover' }} // Asegura que la imagen cubra el área sin estirarse
    >
      <div className="flex items-center justify-center w-full h-[40vh]  ">
        <div className="text-center text-white p-4 text-shadow">
          <h2 className="text-3xl md:text-4xl font-bold uppercase ">
            tu evento inolvidable
          </h2>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxSection;
