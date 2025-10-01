
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Beneficios from '../components/Beneficios'
import Carousels from '../components/Carousels'
import Card from '../components/Card'
import Boton from '../components/Boton'
import Header from '../components/Header'
import Boletin from '../components/Boletin'
import Resena from '../components/Resena'
import '../css/Home.css'

export default function Home() {
  const handlePromociones = () => {
    window.location.href = "/promosiones"; // cambia por el link real
  };

  return (
    <body className=''>
      
      <Navbar />
      
      <Header />
      
      <Carousels />
      {/* Sección Promociones */}
      <section className="promocion text-center mb-5 bg-custom2">
        <h2 className="mb-3">Promociones</h2>
        <h4>20% de ofertas por las frutas</h4>
        <Boton 
          text="Ver Promociones" 
          variant="success" 
          size="lg" 
          onClick={handlePromociones} 
        />
      </section>
      
      <Resena />
      <Boletin />
      
      <Beneficios />
      <Footer />
    </body>
  )
}

