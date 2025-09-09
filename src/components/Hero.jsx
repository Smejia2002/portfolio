function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 relative overflow-hidden"
    >
      {/* Patrón de fondo hexagonal */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 border border-gray-600 transform rotate-45"></div>
        <div className="absolute top-40 right-40 w-24 h-24 border border-gray-600 transform rotate-12"></div>
        <div className="absolute bottom-40 right-60 w-16 h-16 border border-gray-600 transform -rotate-45"></div>
        <div className="absolute top-60 right-80 w-20 h-20 border border-gray-600 transform rotate-30"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Lado izquierdo - Texto */}
          <div className="space-y-8">
            {/* Título principal */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hola, Soy Samu <span className="inline-block">🧑🏽‍💻</span>
            </h1>

            {/* Descripción */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Soy un apasionado por la tecnología con fuerte impulso por crear y
              resolver desafíos reales. Mi experiencia convierte retos complejos
              en soluciones creativas. Siempre explorando novedades con el deseo
              de seguir creciendo.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-emerald-700 to-emerald-900
               text-white font-semibold rounded-full hover:from-emerald-600 hover:to-emerald-700
               transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Contáctame
              </a>
            </div>

            {/* Indicador de scroll */}
            <div className="pt-6">
              <div className="flex items-center space-x-2 text-gray-400 animate-bounce">
                <span className="text-sm">Scroll para explorar</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Lado derecho - Espacio para foto */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-80 h-80">
              {/* Contenedor para la foto */}
              <div className="relative w-full h-full">
                {/* Marco con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-900 rounded-2xl p-1">
                  <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700">
                    {/* Placeholder para la foto */}
                    <div className="text-center text-gray-400">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                        <svg
                          className="w-12 h-12"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <p className="text-sm">Tu foto aquí</p>
                    </div>
                  </div>
                </div>

                {/* Elementos decorativos flotantes */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-700 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-emerald-600 rounded-full animate-ping delay-300"></div>
                <div className="absolute top-4 -left-4 w-2 h-2 border border-emerald-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradiente inferior para transición suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent"></div>
    </section>
  );
}

export default Hero;
