import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from "./pages/NotFound"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import LoginSignupFlip from './pages/Auth/LoginSignupFlip'
import ScrollToTop from "./components/Animations/ScrollToTop"
import Profile from "./pages/Profile/Profile"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/auth" element={<LoginSignupFlip/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="*" element={<NotFound/>}/>
    
    </Routes>
    </BrowserRouter>
    
    

    </>
  )
}

export default App
