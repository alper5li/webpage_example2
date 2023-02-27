import { useState } from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Footer from './components/Footer'
import "./css/bootstrap.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
