import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register_page from './pages/Register_page'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Register_page />
  )
  
}

export default App
