import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import Navbar from "./components/NavBar/NavBar"
import LayoutGrid from "./components/ItemListContainer/ItemListContainer"
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { CartProvider } from './CartContext/CartContext'
import Categories from './components/Category/Category'

function App() {
return (
    <>
    <BrowserRouter>
    <CartProvider>
    <Navbar />
    <Routes>
      < Route path='/' element={<LayoutGrid/>} />
      < Route path='/products' element={<LayoutGrid/>} />
      < Route path='/categories' element={<Categories/>} />
      < Route path='/aboutUs' element={< AboutUs />} />
      < Route path='/contact' element={< Contact />} />
      < Route path='/detail/:detailId' element={<ItemDetailContainer/>} />
      < Route path='/cart' element={< Cart />} />
      <Route path="*" element= {<h1>ERROR 404 NOT FOUND </h1>}></Route>
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </>
)};

export default App;
