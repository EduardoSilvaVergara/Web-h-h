import React from "react";
import "../css/InfoSection.css"; // Opcional para estilos

export default function InfoSection({ title, text }) {
  return (
    <section className="info-section py-4">
      <div className="container">
        <h2 className="text-center mb-3">{title}</h2>
        <p className="text-center">{text}</p>
      </div>
    </section>
  );
}
