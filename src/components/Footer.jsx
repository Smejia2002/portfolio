import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
            Diseñado por{" "}
            <span className="text-emerald-400 font-semibold">Samuel Mejía</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;