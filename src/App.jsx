import React from 'react'
import {Home,User,Network,Login} from "./pages/index"
import {BrowserRouter,Routes,Route}  from "react-router-dom"
import "./App.css"


const App = () => {
  return (
    <div className='mainWrapper'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/in/user' element={<User/>}/>
        <Route path='/network' element={<Network/>}/>
        <Route path="/login"  element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
