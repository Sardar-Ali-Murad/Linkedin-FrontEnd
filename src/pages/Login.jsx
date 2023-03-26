import React from 'react'
import {LoginHeader,AuthMain} from "../components/LoginComponents/index"
import "./Login.css"

const Login = () => {
  return (
    <div className='loginMain'>
      <LoginHeader/>
      <AuthMain/>
    </div>
  )
}

export default Login
