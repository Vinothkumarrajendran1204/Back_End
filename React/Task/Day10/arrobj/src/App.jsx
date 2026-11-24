import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Fetch from './components/pages/fetch'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/fetch' element={<Fetch />} />
      </Routes>
    </div>
  )
}

export default App