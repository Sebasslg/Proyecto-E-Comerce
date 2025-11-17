import React from "react";

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
          Acerca de Nosotros
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          Somos una tienda en línea dedicada a ofrecer los mejores productos al mejor precio,
          con una atención personalizada y un compromiso con la calidad. Nuestro objetivo es
          brindarte una experiencia de compra rápida, segura y confiable.
        </p>
        <div className="flex justify-center">
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
