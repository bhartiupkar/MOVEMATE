import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from "./pages/NotFound"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import LoginSignupFlip from "./pages/Auth/LoginSignupFlip"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      

      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path="/auth" element={<LoginSignupFlip/>}/>
      
      <Route path="*" element={<NotFound/>}/>

    </Routes>
    </BrowserRouter>
    
    

    </>
  )
}

export default App
