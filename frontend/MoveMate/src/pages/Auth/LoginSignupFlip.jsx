import React,{useState} from 'react'
import Login from './Login'
import Register from './Register'


const LoginSignupFlip = () => {
  const[page,setPage]=useState("login")

  

  

  return (
    <div>
      
      {page==="login"?(<Login page={page} setPage={setPage}/>):(<Register page={page} setPage={setPage}/>)}
    </div>
  )
}

export default LoginSignupFlip
