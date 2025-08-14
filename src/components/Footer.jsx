import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#2D2D45] px-4 md:px-16 lg:px-28 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Logo />
          <p className="text-gray-300 font-nunito">
            ¡Somos la mejor tienda en linea en todo El Salvador! Explora
            nuestras distintas categorías, y encuentra lo que necesitas al mejor
            precio del mercado.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-bold font-montserrat mb-4">
            Enlaces de utilidad
          </h2>
          <ul>
            <li>
              <a href="#" className="hover:underline text-gray-300 font-nunito">
                Productos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-300 font-nunito">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-300 font-nunito">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-bold font-montserrat mb-4">
            ¡Síguenos en nuestras redes sociales!
          </h2>
          <div className="flex space-x-4 text-3xl text-gray-300">
            <i class="fa-brands fa-facebook hover:text-[#4A90E2]"></i>
            <i class="fa-brands fa-instagram hover:text-[#4A90E2]"></i>
            <i class="fa-brands fa-whatsapp hover:text-[#4A90E2]"></i>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 pt-6 text-gray-300 text-center mt-6 font-nunito">
        <p>
          &copy; {new Date().getFullYear()} Digital Market. <br /> Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
