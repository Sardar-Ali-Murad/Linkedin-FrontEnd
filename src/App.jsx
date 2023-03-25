import React from 'react'
import {Header,UserInfoCard,UploadPost,Post}  from "./components/index"
import "./App.css"

const App = () => {
  return (
    <div className='AppMain'>
      <Header/>
      <div className='bodyWrapper'>
      <UserInfoCard/>
      <div>
         <UploadPost/>
         <Post/>
      </div>
      </div>
    </div>
  )
}

export default App
