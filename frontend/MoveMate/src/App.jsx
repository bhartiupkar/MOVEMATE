import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from "./pages/NotFound"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import LoginSignupFlip from "./pages/Auth/LoginSignupFlip"
import AuthProvider from "./context/AuthContext"
import Contact from './pages/Contact/Contact'
import SearchProduct from "./pages/Forms/SearchProduct"
import PostProduct from "./pages/Forms/PostProduct"
import VerifyTravel from "./pages/Forms/VerifyTravel"
function App() {
  

  return (
    <AuthProvider>

    <BrowserRouter>
    <Routes>
      

      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/search' element={<SearchProduct/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product-service" element={<PostProduct/>}/>
      <Route path="/travel-services" element={<VerifyTravel/>}/>
      <Route path="/auth" element={<LoginSignupFlip/>}/>
      <Route path="*" element={<NotFound/>}/>
    
    </Routes>
    </BrowserRouter>
    


    </AuthProvider>
   
  )
}

export default App
