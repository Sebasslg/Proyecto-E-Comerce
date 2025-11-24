import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section className="pt-24 pb-16">
      <div className="container-max">

        {/* ⭐ Sección principal */}
        <div className="card text-center p-10 mb-16 shadow-lg rounded-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Acerca de Nosotros</h1>

          <p className="text-lg muted leading-relaxed max-w-2xl mx-auto mb-8">
            Somos una tienda en línea comprometida en ofrecer productos de calidad al mejor precio,
            con envíos rápidos y soporte dedicado. Nos enfocamos en brindar una experiencia de compra
            simple, segura y confiable para cada cliente.
          </p>

          <div className="flex justify-center">
            <a href="/contact" className="btn-primary px-8 py-3 rounded-full">
              Contáctanos
            </a>
          </div>
        </div>

        {/* ⭐ Nuestra Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="card p-8 rounded-3xl shadow text-center">
            <h2 className="text-3xl font-bold mb-3">Nuestra Misión</h2>
            <p className="muted leading-relaxed">
              Ofrecer productos innovadores con excelente relación precio-calidad, 
              acompañados de una atención cercana y un proceso de compra confiable para todos nuestros clientes.
            </p>
          </div>

          <div className="card p-8 rounded-3xl shadow text-center">
            <h2 className="text-3xl font-bold mb-3">Nuestra Visión</h2>
            <p className="muted leading-relaxed">
              Ser una de las tiendas online más confiables y reconocidas, 
              expandiendo nuestro catálogo y brindando siempre un servicio de primera categoría.
            </p>
          </div>
        </div>

        {/* ⭐ Valores */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Nuestros Valores</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="card p-6 rounded-3xl shadow">
              <h3 className="text-xl font-semibold mb-2">Calidad</h3>
              <p className="muted">Seleccionamos productos confiables, probados y duraderos.</p>
            </div>

            <div className="card p-6 rounded-3xl shadow">
              <h3 className="text-xl font-semibold mb-2">Confianza</h3>
              <p className="muted">Brindamos seguridad en cada compra y soporte real cuando lo necesites.</p>
            </div>

            <div className="card p-6 rounded-3xl shadow">
              <h3 className="text-xl font-semibold mb-2">Innovación</h3>
              <p className="muted">Nos mantenemos actualizados con tecnología y tendencias modernas.</p>
            </div>
          </div>
        </div>

        {/* ⭐ Qué ofrecemos */}
        <div className="card p-10 rounded-3xl shadow text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">¿Qué Ofrecemos?</h2>

          <ul className="text-lg muted leading-relaxed space-y-3 max-w-xl mx-auto">
            <li>✔ Productos tecnológicos y accesorios de alta calidad.</li>
            <li>✔ Precios competitivos y ofertas especiales cada semana.</li>
            <li>✔ Envíos rápidos a todo el país.</li>
            <li>✔ Soporte al cliente personalizado.</li>
            <li>✔ Proceso de compra seguro y transparente.</li>
          </ul>
        </div>

        {/* ⭐ Estadísticas rápidas */}
        <div className="grid md:grid-cols-3 gap-10 text-center mb-20">
          <div className="card p-8 rounded-3xl shadow">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">+500</h3>
            <p className="muted">Clientes satisfechos</p>
          </div>

          <div className="card p-8 rounded-3xl shadow">
            <h3 className="text-4xl font-bold text-green-600 mb-2">+300</h3>
            <p className="muted">Productos vendidos</p>
          </div>

          <div className="card p-8 rounded-3xl shadow">
            <h3 className="text-4xl font-bold text-purple-600 mb-2">4.9 ★</h3>
            <p className="muted">Calificación promedio</p>
          </div>
        </div>

        {/* ⭐ CTA Final */}
        <div className="card text-center p-12 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">¿Quieres saber más?</h2>
          <p className="muted mb-6 max-w-md mx-auto">
            Estamos aquí para ayudarte. Descubre nuestros productos, ofertas y servicio especializado.
          </p>
          <a href="/products" className="btn-primary rounded-full px-10 py-3">
            Ver productos
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
