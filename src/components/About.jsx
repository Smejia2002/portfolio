function About() {
  return (
    <section
      id="about-me"
      className="min-h-screen bg-gray-800 py-20 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo - Similar a tu Hero */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-40 h-40 border border-blue-500 transform rotate-45"></div>
        <div className="absolute bottom-60 left-40 w-24 h-24 border border-purple-500 transform -rotate-12"></div>
        <div className="absolute top-80 left-80 w-16 h-16 border border-blue-400 transform rotate-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        {/* Grid principal - 2 columnas */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Columna izquierda - Contenido textual */}
          <div className="space-y-8">
            {/* Párrafos descriptivos */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Mi formación en{" "}
                <span className="text-blue-400 font-semibold">ingeniería</span>{" "}
                me ha enseñado que los mejores proyectos nacen cuando la lógica 
                se encuentra con la creatividad. Disfruto transformando ideas 
                complejas en{" "}
                <span className="text-purple-400 font-semibold">
                  soluciones tangibles
                </span>.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Lo que más me motiva es ese momento en que una funcionalidad{" "}
                <span className="text-blue-400 font-semibold">cobra vida</span>{" "}
                y realmente impacta en la experiencia del usuario. Mi rol como 
                monitor reforzó esta pasión, ayudándome a combinar mis habilidades 
                técnicas con la capacidad de{" "}
                <span className="text-purple-400 font-semibold">
                  guiar a otros
                </span>{" "}
                y compartir conocimiento.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                A través de mi experiencia, he desarrollado un enfoque metodológico 
                que convierte{" "}
                <span className="text-blue-400 font-semibold">
                  retos complejos en soluciones creativas
                </span>{" "}
                y efectivas, siempre con el objetivo de generar valor real.
              </p>
            </div>

            {/* Tags de habilidades */}
            <div className="pt-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Formación y Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Ingeniería",
                  "Software Development", 
                  "Data Science",
                  "Data Analysis",
                  "AI",
                  "Mentoring",
                  "Problem Solving",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-700 border border-gray-600 text-gray-300 
                               rounded-full text-sm hover:border-blue-500 hover:text-blue-400 
                               transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha - Elemento visual dinámico */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto w-96 h-96">
              {/* Container principal con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-blue-600/20 rounded-3xl p-8">
                {/* Círculos concéntricos animados */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Círculo exterior */}
                  <div className="absolute w-80 h-80 border-2 border-blue-400/30 rounded-full animate-spin-slow"></div>

                  {/* Círculo medio */}
                  <div className="absolute w-60 h-60 border-2 border-purple-400/40 rounded-full animate-reverse-spin"></div>

                  {/* Círculo interior */}
                  <div className="absolute w-40 h-40 border-2 border-blue-500/50 rounded-full animate-pulse"></div>

                  {/* Centro con ícono */}
                  <div className="relative z-10 w-20 h-20 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>

                  {/* Puntos flotantes */}
                  <div className="absolute top-4 right-8 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-8 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-300"></div>
                  <div className="absolute top-16 left-8 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
