import React from 'react'
import Card from '@mui/material/Card';
import "./Connect.css"
import Connect from './Connect';
import data from "./data"


const Connects = () => {
  return (
    <Card className='connectsMain'>
        <h4 style={{marginTop:"10px",marginLeft:"10px",marginBottom:"15px"}}>People You Know</h4>
        <div className='connectGrid'>
          {
             data.map((connect)=>{
              return   <Connect connect={connect}/>
             })
          }
        </div>
    </Card>
  )
}

export default Connects
