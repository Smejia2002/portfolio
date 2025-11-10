import projectImage from '../assets/telecom.png';
function Projects() {
  // Array de proyectos - incluye placeholders para futuros proyectos
  const projects = [
    {
      id: 1,
      title: "TelecomX Customer Churn Prediction",
      description: "Modelo predictivo para identificar clientes con alta probabilidad de cancelar servicios de telecomunicaciones. Proyecto completo de Data Science que incluye análisis exploratorio, ingeniería de características, entrenamiento de modelos de Machine Learning y evaluación de resultados.",
      image: projectImage,
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
      category: "data-science",
      github: "https://github.com/Smejia2002/telecomX_prediction.git",
      demo: "#", // Si tienes un notebook online o demo
      status: "completed",
      highlights: [
        "Análisis exploratorio completo del dataset",
        "Implementación de múltiples algoritmos ML",
        "Evaluación y comparación de modelos",
        "Visualizaciones de datos interactivas"
      ]
    },
    {
      id: 2,
      title: "Proyecto Principal 2", 
      description: "Descripción de tu segundo proyecto destacado. Enfócate en los desafíos que resolviste y las lecciones aprendidas.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Data Science", "AI", "React"],
      category: "data-science",
      github: "#",
      demo: "#",
      status: "completed"
    },
    {
      id: 3,
      title: "Próximo Proyecto",
      description: "Espacio reservado para tu próximo gran proyecto. Mantén esta carta para mostrar que estás en constante desarrollo.",
      image: null,
      technologies: ["Coming Soon"],
      category: "upcoming",
      github: null,
      demo: null,
      status: "coming-soon"
    },
    {
      id: 4,
      title: "Proyecto en Desarrollo",
      description: "Otro espacio para futuros proyectos. Esto muestra a los reclutadores tu compromiso con el crecimiento continuo.",
      image: null,
      technologies: ["In Progress"],
      category: "upcoming", 
      github: null,
      demo: null,
      status: "coming-soon"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 py-20 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-40 w-32 h-32 border border-emerald-600 transform rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border border-emerald-700 transform -rotate-12"></div>
        <div className="absolute top-80 right-80 w-16 h-16 border border-emerald-500 transform rotate-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="font-sans text-4xl sm:text-5xl font-bold text-white mb-4">
            Mis Proyectos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-700 to-emerald-900 mx-auto"></div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 
                         hover:border-emerald-500/50 transition-all duration-300 
                         hover:transform hover:scale-105 group"
            >
              {/* Imagen del proyecto */}
              <div className="relative h-48 overflow-hidden">
                {project.status === 'completed' ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  /* Placeholder para proyectos futuros */
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <p className="text-sm">Próximamente</p>
                    </div>
                  </div>
                )}
                
                {/* Overlay con enlace a GitHub (solo para proyectos completados) */}
                {project.status === 'completed' && (
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.github}
                      className="p-3 bg-gray-900 rounded-full text-white hover:bg-emerald-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                )}
              </div>

              {/* Contenido de la card */}
              <div className="p-6">
                <h3 className="font-sans text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="font-sans text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Métricas del proyecto (solo para proyectos con datos) */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-gray-700/50 rounded-lg">
                    <div className="text-center">
                      <div className="font-sans text-emerald-400 font-bold text-lg">{project.metrics.accuracy}</div>
                      <div className="font-sans text-gray-400 text-xs">Precisión</div>
                    </div>
                    <div className="text-center">
                      <div className="font-sans text-emerald-400 font-bold text-lg">{project.metrics.impact}</div>
                      <div className="font-sans text-gray-400 text-xs">Impacto</div>
                    </div>
                  </div>
                )}

                {/* Highlights del proyecto */}
                {project.highlights && (
                  <div className="mb-4">
                    <h4 className="font-sans text-sm font-semibold text-gray-300 mb-2">Logros Clave:</h4>
                    <ul className="font-sans text-xs text-gray-400 space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`font-mono px-3 py-1 text-xs rounded-full border ${
                        project.status === 'completed'
                          ? 'bg-gray-700 border-gray-600 text-gray-300'
                          : 'bg-gray-700/50 border-gray-600/50 text-gray-400'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Estado del proyecto */}
                {project.status === 'coming-soon' && (
                  <div className="font-sans flex items-center text-emerald-500 text-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                    En desarrollo
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="font-sans text-gray-400 text-lg mb-6">
            ¿Te interesa conocer más sobre mi trabajo o discutir nuevas oportunidades?
          </p>
          <a
            href="#contact"
            className="font-sans inline-flex items-center px-8 py-3 bg-gradient-to-r from-emerald-700 to-emerald-900 
                       text-white font-medium rounded-full hover:from-emerald-600 hover:to-emerald-700 
                       transition-all duration-300 transform hover:scale-105"
          >
            Contáctame
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;