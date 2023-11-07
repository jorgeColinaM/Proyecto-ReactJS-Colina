import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import Navbar from "./components/NavBar/NavBar"
import LayoutGrid from "./components/ItemListContainer/ItemListContainer"
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
return (
    <>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      < Route path='/' element={<LayoutGrid/>} />
      < Route path='/products' element={<LayoutGrid/>} />
      < Route path='/category/:categoryId' element={<LayoutGrid/>} />
      < Route path='/aboutUs' element={< AboutUs />} />
      < Route path='/contact' element={< Contact />} />
      < Route path='/detail/:detailId' element={<ItemDetailContainer/>} />
    </Routes>

    </BrowserRouter>


    </>
)};

export default App;
