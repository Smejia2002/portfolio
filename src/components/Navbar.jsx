import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
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
              <a href="#home" className="font-sans text-white hover:text-gray-300 transition-colors">
                Inicio
              </a>
              <a href="#about-me" className="font-sans text-white hover:text-gray-300 transition-colors">
                Sobre Mí
              </a>
              <a href="#projects" className="font-sans text-white hover:text-gray-300 transition-colors">
                Proyectos
              </a>
              <a href="#contact" className="font-sans text-white hover:text-gray-300 transition-colors">
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
              className="text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
