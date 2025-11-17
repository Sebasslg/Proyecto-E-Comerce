import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 pt-24 pb-12 px-6">
      <div className="max-w-3xl mx-auto text-center bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6">
          Contáctanos
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          ¿Tienes alguna pregunta o necesitas ayuda?  
          Estamos aquí para escucharte. Puedes contactarnos a través del correo electrónico o llenar el formulario a continuación.
        </p>

        {/* Email */}
        <a
          href="mailto:info@mitienda.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 mb-10"
        >
          📧 info@mitienda.com
        </a>

        {/* Contact form */}
        <form className="space-y-4 text-left">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="tu@correo.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
              Mensaje
            </label>
            <textarea
              rows="4"
              placeholder="Escribe tu mensaje..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
