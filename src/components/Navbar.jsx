import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center" onClick={closeMenu}>
              <div className="font-mono text-white font-bold text-xl">
                <span className="text-emerald-400">&lt;</span>
                <span className="mx-1">SDev</span>
                <span className="text-emerald-400">/&gt;</span>
              </div>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="#home"
                className="font-sans text-white hover:text-gray-300 transition-colors"
              >
                Inicio
              </a>
              <a
                href="#about-me"
                className="font-sans text-white hover:text-gray-300 transition-colors"
              >
                Sobre Mí
              </a>
              <a
                href="#projects"
                className="font-sans text-white hover:text-gray-300 transition-colors"
              >
                Proyectos
              </a>
              <a
                href="#contact"
                className="font-sans text-white hover:text-gray-300 transition-colors"
              >
                Contacto
              </a>

              {/* Botón CV */}
              <a
                href="https://drive.google.com/file/d/1mbZchCztJEJFEOKSXJpapnHjRuUN0qli/view"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans bg-gradient-to-r from-emerald-700 to-emerald-900 text-white px-4 py-2 rounded-lg 
                           hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 
                           transform hover:scale-105 shadow-md hover:shadow-lg inline-flex items-center"
              >
                Ver CV
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  isMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/98 backdrop-blur-sm border-t border-gray-700">
          <a
            href="#home"
            className="font-sans block px-3 py-2 text-white hover:text-emerald-400 hover:bg-gray-800 rounded-md transition-colors"
            onClick={closeMenu}
          >
            Inicio
          </a>
          <a
            href="#about-me"
            className="font-sans block px-3 py-2 text-white hover:text-emerald-400 hover:bg-gray-800 rounded-md transition-colors"
            onClick={closeMenu}
          >
            Sobre Mí
          </a>
          <a
            href="#projects"
            className="font-sans block px-3 py-2 text-white hover:text-emerald-400 hover:bg-gray-800 rounded-md transition-colors"
            onClick={closeMenu}
          >
            Proyectos
          </a>
          <a
            href="#contact"
            className="font-sans block px-3 py-2 text-white hover:text-emerald-400 hover:bg-gray-800 rounded-md transition-colors"
            onClick={closeMenu}
          >
            Contacto
          </a>

          {/* Botón CV en móvil */}
          <div className="px-3 py-2">
            <a
              href="https://drive.google.com/file/d/1mbZchCztJEJFEOKSXJpapnHjRuUN0qli/view"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans block w-full text-center bg-gradient-to-r from-emerald-700 to-emerald-900 text-white px-4 py-2 rounded-lg 
                         hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300"
              onClick={closeMenu}
            >
              Ver CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
