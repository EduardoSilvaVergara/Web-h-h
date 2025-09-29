import React from "react";
import "../css/Header.css"; // Opcional si quieres estilos extra

export default function Header({ src = "/HH.png", alt = "Logo" }) {
  return (
    <header className="header-container">
      <img 
        src={src} 
        alt={alt} 
        className="header-image"
      />
    </header>
  );
}

