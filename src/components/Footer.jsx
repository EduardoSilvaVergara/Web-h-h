import React, { useEffect, useState } from "react";
import "../css/Footer.css";

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowFooter(currentScroll > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className={`footer-fixed ${showFooter ? "show" : "hide"}`}>
      <div className="footer-compact bg-custom3 text-dark py-2">
        <div className="container">
          <div className="row text-center text-md-start align-items-center">

            {/* Redes Sociales */}
            <div className="col-12 col-md-4 mb-2 mb-md-0">
              <a href="#" className="text-decoration-none text-dark me-2">Facebook</a>
              <a href="#" className="text-decoration-none text-dark me-2">Instagram</a>
              <a href="#" className="text-decoration-none text-dark">Twitter</a>
            </div>

            {/* Centro de Ayuda */}
            <div className="col-12 col-md-4 mb-2 mb-md-0">
              <a href="#" className="text-decoration-none text-dark me-2">Preguntas frecuentes</a>
              <a href="#" className="text-decoration-none text-dark me-2">Políticas de despacho</a>
              <a href="#" className="text-decoration-none text-dark">Devoluciones</a>
            </div>

            {/* Copyright */}
            <div className="col-12 col-md-4 text-md-end">
              <small>© 2025 HuertoHogar - Todos los derechos reservados</small>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
