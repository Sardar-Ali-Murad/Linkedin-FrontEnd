import React from 'react'
import User from "../assets/murad.jpg"
import Banner from "../assets/Banner.jpg"
import Card from '@mui/material/Card';
import "./UserCard.css"
import Button from "@mui/material/Button";


const UserCard = () => {
  return (
    <Card className='userCardMain'>
        <div className='imageContainer'>
            <img src={Banner} className="Banner"/>
            <img src={User} style={{width:"120px",height:"120px",borderRadius:"50%",position:"relative",left:"50px"}}/>
        </div>
        <div className='userCardContent'>
             <h2>Sardar Ali Murad Ali</h2>
             <h5>Seeking Junior-Level React+Node+Next Opportunities | React Js Developer | Node Js, Express Js & MongoDb & Next Js | Software Engineer Student | Islamia University Bahawalpur | 2025 Expected Graduation</h5>
             <h5> Bahawalpur, Punjab, Pakistan <span>Contact info </span></h5>
             <span>500+ connections</span>
        </div>
        <div className='userCardBtns'>
        <Button
              variant="contained"
              className="viewProfile"
              style={{ borderRadius: "20px"}}
              >
              Open
            </Button>
            <Button
              variant="outlined"
              className="viewProfile"
              style={{ borderRadius: "20px", marginLeft: "10px" }}
              >
              Add Profile 
            </Button>
            <Button
              variant="outlined"
              className="viewProfile"
              style={{ borderRadius: "20px", marginLeft: "10px" }}
              >
              More
            </Button>
        </div>

    </Card>
  )
}

export default UserCard
