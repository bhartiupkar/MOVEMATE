import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from "./pages/NotFound"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Footer from "./components/Layout/Footer"
import Contact from "./pages/Contact/Contact"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path="/contact" element={<Contact/>} />      
      <Route path="*" element={<NotFound/>}/>
    
    </Routes>
    </BrowserRouter>
    

    </>
  )
}

export default App
