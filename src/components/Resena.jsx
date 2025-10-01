
import React, { useState } from "react";

export default function Resena() {
  const [resena, setResena] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reseña enviada:", resena);
    setResena(""); // limpiar textarea
  };

  return (
    <section className="resena py-5 bg-white text-center mb-5">
      <div className="container">
        <h2 className="mb-3">Deja tu Reseña</h2>
        <p className="mb-4">Queremos conocer tu experiencia con nosotros.</p>
        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
          <textarea
            className="form-control mb-3 w-75"
            rows="4"
            placeholder="Escribe aquí tu reseña..."
            value={resena}
            onChange={(e) => setResena(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            Enviar Reseña
          </button>
        </form>
      </div>
    </section>
  );
}

