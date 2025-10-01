import React from "react";
import Button from "react-bootstrap/Button"; // Usando React Bootstrap

export default function Boton({ text, variant = "primary", size = "md", onClick }) {
  return (
    <div className="btn mb-5">
      <Button variant={variant} size={size} onClick={onClick}>
      {text}
    </Button>
    </div>
    
  );
}


// import React from "react";
// import Boton from "../components/Boton";

// function Home() {
//   const handleClick = () => {
//     alert("¡Botón presionado!");
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Prueba del Botón</h2>
//       <Boton text="Agregar al carrito" variant="success" size="lg" onClick={handleClick} />
//       <Boton text="Cancelar" variant="danger" size="sm" onClick={handleClick} />
//     </div>
//   );
// }

// export default Home;

