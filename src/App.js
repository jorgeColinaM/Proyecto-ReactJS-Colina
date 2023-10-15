import LayoutComponent from "./components/LayoutComponent/LayoutComponent"
import React from 'react'
import Navbar from './components/navbar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './components/pages/Products'
import AboutUs from './components/pages/AboutUs'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import CartWidget from "./components/CartWidget/CartWidget"

function App() {
return (
    <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      < Route path='/' element={< Home />} />
      < Route path='/category/:categoryId' element={< ItemListContainer />} />
      < Route path='/aboutUs' element={< AboutUs />} />
      < Route path='/contact' element={< Contact />} />
      < Route path='/detail/:detailId' element={<ItemDetailContainer/>} />
      < Route path='/cart' element={< CartWidget />} />
    </Routes>

    <LayoutComponent />
    
    </BrowserRouter>


    </>
)};

export default App;
