import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LogoImage from "../assets/logo rosas.png"; // Asegúrate de importar la imagen

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className=" text-white md:p-8 p-4 fixed top-0 w-full shadow-lg z-50 border-b-2 border-zinc-500 bg-gradient-to-b from-black via-zinc-950/90 to-zinc-800/50">
      <div className="container mx-auto flex justify-between items-center text-white">
        {/* Logo con imagen importada */}
        <div className="text-2xl font-bold text-white flex items-center gap-2">
          <img src={LogoImage} alt="ROSAS EVENTOS Logo" className=" h-8 " /> {/* Aquí usamos la imagen importada */}
          <span className="font-bold">ROSAS EVENTOS</span>
        </div>

        {/* Icono del menú (visible en móvil) */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Menú de navegación */}
        <ul
          ref={menuRef}
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex absolute md:relative top-16 md:top-0 left-0 md:left-auto bg-neutral-800/70 md:space-x-8 md:bg-transparent w-full md:w-auto p-4 md:p-0`}
        >
          <li className="my-2 md:my-0">
            <a href="#hero" className="hover:text-gray-300" onClick={handleLinkClick}>
              Inicio
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a href="#about" className="hover:text-gray-300" onClick={handleLinkClick}>
              Sobre Nosotros
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a href="#services" className="hover:text-gray-300" onClick={handleLinkClick}>
              Productos
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a href="#contact" className="hover:text-gray-300" onClick={handleLinkClick}>
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
