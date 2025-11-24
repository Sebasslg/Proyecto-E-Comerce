import React from "react";

const Contact = () => {
  return (
    <section className="pt-24 pb-12">
      <div className="container-max">
        <div className="card p-10 max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">Contáctanos</h1>

          <p className="text-lg muted mb-6 leading-relaxed">
            ¿Tienes alguna pregunta o necesitas ayuda? Estamos aquí para escucharte.
            Puedes contactarnos por correo o llenar el formulario a continuación.
          </p>

          <a
            href="mailto:info@mitienda.com"
            className="inline-block btn-primary mb-6"
          >
            📧 info@mitienda.com
          </a>

          <form className="space-y-4 text-left">
            <div>
              <label className="block muted font-semibold mb-2">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block muted font-semibold mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="tu@correo.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block muted font-semibold mb-2">Mensaje</label>
              <textarea
                rows="4"
                placeholder="Escribe tu mensaje..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
