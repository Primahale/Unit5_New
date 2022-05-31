import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Navbar from './componants/Navbar'
import Home from "./componants/Home"
import Shop from "./componants/Shop"
import ShopDetail from './componants/ShopDetails'
import Login from './componants/Login'
import Cart from './componants/Cart'
import PrivateRoute from './componants/PrivetRoute'
import { Footer } from './componants/Footer'


function App() {
 

  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        
          <Route path="/shop" element={<PrivateRoute to="/login"><Shop/></PrivateRoute>}></Route>
        
        <Route path="/shop/:id" element={<ShopDetail/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
