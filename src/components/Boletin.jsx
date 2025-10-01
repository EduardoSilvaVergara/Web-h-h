
import React, { useState } from "react";

export default function Boletin() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Correo suscrito:", email);
    setEmail(""); // limpiar input
  };

  return (
    <section className="boletin py-5 bg-white text-center mb-5">
      <div className="container-fluid">
        <h2 className="mb-3">Suscríbete a nuestro Boletín</h2>
        <p className="mb-4">
          Recibe novedades, promociones y noticias directamente en tu correo.
        </p>
        <form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center flex-wrap"
        >
          <input
            type="email"
            className="form-control w-50 me-2 mb-2"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-success mb-2">
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  );
}

