import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import ServicesPage from './Pages/ServicesPage'
import WhyChooseUs from './Pages/WhyChooseUs'
import CarousalPage from './Pages/CarousalPage'
import ConnectWithUs from './Pages/ConnectWithUs'

function App() {


  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <ServicesPage/>
      <WhyChooseUs/>
      <CarousalPage/>
      <ConnectWithUs/>
    </div>
  )
}

export default App
