import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Home from './pages/Home.jsx'
import Login_page from './pages/Login_page.jsx'
import CustomCarousel from './components/Carousels.jsx'
import Beneficios from './components/Beneficios.jsx'
import Boletin from './components/Boletin.jsx'
import Boton from './components/Boton.jsx'
import InfoSection from './components/InfoSection.jsx'
import Resena from './components/Resena'
import SearchBar from './components/SearchBar.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
function App() {
  const [count, setCount] = useState(0) 

  return (
    <body>
      <Navbar />
      <CustomCarousel />
    <Login_page />
    <Beneficios />
    <Boletin />
    <Boton text="Click me" onClick={() => alert('Button clicked!')} />
    <InfoSection text={"Welcome to our website! We offer a variety of products and services to meet your needs."} />
    <Resena />
    <SearchBar />
    <Footer />
    </body>
    
  )
  
}

export default App
