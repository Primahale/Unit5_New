import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './componants/Navbar'
import {Routes, Route} from "react-router-dom"
import Home from "./componants/Home";
import Product from './componants/Product';
import ProductDetail from './componants/ProductDetail'

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  )
}

export default App
