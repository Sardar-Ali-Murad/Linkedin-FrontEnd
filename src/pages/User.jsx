import React from 'react'
import Header from "../components/HomeComponents/Header"
import "./User.css"
import {UserCard,Analytics,Reasources,About,UserSuggestions}  from "../components/UserComponenets/index" 

const User = () => {
  return (
    <div>
      <Header/>
      <div className='userInfoWrapper'>
         <div className='userInfo'>
            <UserCard/>
            <Analytics/>
            <Reasources/>
            <About/>
         </div>
         <div className='userSuggestions'>
          <UserSuggestions/>
         </div>
      </div>
    </div>
  )
}

export default User
