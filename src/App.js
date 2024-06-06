import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Contacts from './Pages/Contacts'
import SingleProduct from './Pages/SingleProduct'
import Card from './Pages/Card'
import Errorpage from './Pages/Errorpage'
import Header from './Components/Header/Header'
import Footer from './Pages/Footer'
const App = () => {
  return (
  <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/Contact' element={<Contacts/>}/>
      <Route path='/SingleProduct/:id' element={<SingleProduct/>}/>
      <Route path='/Card' element={<Card/>}/>
      <Route path='*' element={<Errorpage/>}/>
     </Routes>
    <Footer/>
  
  </>
  )
}

export default App;