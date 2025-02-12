import React from "react";
import { Parallax } from "react-parallax";

const ParallaxSection = () => {
  return (
    <Parallax
      bgImage="https://images.pexels.com/photos/30505250/pexels-photo-30505250/free-photo-of-joyful-outdoor-wedding-reception-celebration.jpeg"
      strength={300}
      className="relative flex items-center justify-center bg-cover bg-center bg-black mb-20"
      bgImageStyle={{ objectFit: 'cover' }} 
    >
      <div className="flex items-center justify-center w-full md:h-[60vh] h-[40vh] ">
        <div className="text-center text-white p-4 text-shadow">
          <h3 className="text-3xl md:text-4xl font-bold uppercase ">
            tu evento inolvidable
          </h3>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxSection;
