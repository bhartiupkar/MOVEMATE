import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from "./components/Animations/ScrollToTop"
import About from "./pages/About/About"
import LoginSignupFlip from './pages/Auth/LoginSignupFlip'
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound"
import Profile from "./pages/Profile/Profile"

import AuthProvider from "./context/AuthContext"
import PostProduct from "./pages/Forms/PostProduct"
import SearchProduct from "./pages/Forms/SearchProduct"
import VerifyTravel from "./pages/Forms/VerifyTravel"
function App() {
  

  return (
    <AuthProvider>

    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/search' element={<SearchProduct/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product-service" element={<PostProduct/>}/>
      <Route path="/travel-services" element={<VerifyTravel/>}/>
      <Route path="/auth" element={<LoginSignupFlip/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="*" element={<NotFound/>}/>
    
    </Routes>
    </BrowserRouter>
    


    </AuthProvider>
   
  )
}

export default App
