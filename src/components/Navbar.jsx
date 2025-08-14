import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2D2D45] shadow-md py-5 px-8">
      <div className="flex justify-between items-center">
        <div className="logo">
          <Logo />
        </div>

        <div className="hidden md:flex gap-6 text-lg">
          <a
            className="text-white hover:text-[#4A90E2] transition-all duration-300 font-nunito"
            href="#"
          >
            Inicio
          </a>
          <a
            className="text-white hover:text-[#4A90E2] transition-all duration-300 font-nunito"
            href="#"
          >
            Productos
          </a>
          <a
            className="text-white hover:text-[#4A90E2] transition-all duration-300 font-nunito"
            href="#"
          >
            Nosotros
          </a>
          <a
            className="text-white hover:text-[#4A90E2] transition-all duration-300 font-nunito"
            href="#"
          >
            Contacto
          </a>
        </div>

        {/* Botón de menú despegable para dispositivos móviles */}
        <button
          className="md:hidden w-9 h-9 bg-gray-100 rounded-md flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Menú para dispostivos móviles */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 mt-4 md:hidden text-lg">
          <a
            className="text-white hover:text-[#4A90E2] transition-all duration-300 font-nunito"
            href="#"
          >
            Inicio
          </a>
          <a
            className="text-white hover:text-[#4A90E2] transition-all duration-300 font-nunito"
            href="#"
          >
            Productos
          </a>
          <a
            className="text-white hover:text-[#4A90E2] transition-all duration-300 font-nunito"
            href="#"
          >
            Nosotros
          </a>
          <a
            className="text-white hover:text-[#4A90E2] transition-all duration-300 font-nunito"
            href="#"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
