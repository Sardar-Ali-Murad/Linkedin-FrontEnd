import React from 'react'
import {postData}  from "./data"
import Post from "./Post"

const Posts = () => {
  return (
    <div>
      {
        postData?.map((post)=>{
            return  <Post post={post}/>
        })
      }
    </div>
  )
}

export default Posts
