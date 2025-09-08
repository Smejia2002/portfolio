import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-white text-xl font-bold">Logo</h2>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#inicio" className="text-white hover:text-gray-300 transition-colors">
                Inicio
              </a>
              <a href="#about-me" className="text-white hover:text-gray-300 transition-colors">
                About Me
              </a>
              <a href="#projects" className="text-white hover:text-gray-300 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors">
                Contact
              </a>
              
              {/* Botón CV */}
              <a 
                href="https://drive.google.com/file/d/16QxaLtA19lK3r1x6sJS2ZUcrXCyXuZjQ/preview" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg 
                           hover:from-blue-600 hover:to-purple-600 transition-all duration-300 
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
