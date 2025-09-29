import React from "react";

export default function Beneficios() {
  return (
    <section className="beneficios py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">¿Por qué elegirnos?</h2>
        <div className="row text-center">
          
          {/* Beneficio 1 */}
          <article className="col-md-4 mb-3">
            <img 
              src="../public/6007398.png" 
              alt="Frescura" 
              width="60" 
              className="mb-2"
            />
            <h3 className="mt-2">Frescura Garantizada</h3>
            <p>Productos recién cosechados y seleccionados para ti.</p>
          </article>

          {/* Beneficio 2 */}
          <article className="col-md-4 mb-3">
            <img 
              src="../public/7296451.png" 
              alt="Sostenibilidad" 
              width="60" 
              className="mb-2"
            />
            <h3 className="mt-2">Sostenibilidad</h3>
            <p>Apoyamos a agricultores locales y prácticas responsables.</p>
          </article>

          {/* Beneficio 3 */}
          <article className="col-md-4 mb-3">
            <img 
              src="../public/pngtree-fast-delivery-truck-shipping-png-image_6529765.png" 
              alt="Envío rápido" 
              width="60" 
              className="mb-2"
            />
            <h3 className="mt-2">Envío Rápido</h3>
            <p>Recibe tus productos en la puerta de tu casa en poco tiempo.</p>
          </article>

        </div>
      </div>
    </section>
  );
}
