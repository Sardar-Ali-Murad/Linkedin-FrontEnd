import React from "react";
import Linkedin from "../assets/Linkedin.png";
import Button from '@mui/material/Button';
import {AiOutlineCompass} from "react-icons/ai"
import {BsPeople}  from "react-icons/bs"
import {BsNewspaper}  from "react-icons/bs"
import {BsBagCheck}  from "react-icons/bs"
import "./LoginHeader.css"


const Headers = () => {

  return (
    <div className="headersMain">
      {/*  */}
      <div className="headerSection1">
        <img src={Linkedin} className="linkedinImage" />
      </div>

      {/*  */}
      <div className="headerIcons">
        <div className="singleIconContainer singleIconContainerLogin">
          <AiOutlineCompass className="headerIcon" />
          <p style={{color:"black"}}>Discover</p>
        </div>
        <div className="singleIconContainer singleIconContainerLogin ">
          <BsPeople className="headerIcon" />
          <p style={{color:"black",textDecoration:"none",listStyleType:"none"}}>People</p>
        </div>
        <div className="singleIconContainer singleIconContainerLogin">
          <BsNewspaper className="headerIcon" />
               <p>Learning</p>
        </div>
        <div className="singleIconContainer singleIconContainerLogin">
          <BsBagCheck className="headerIcon" />
          <p>Jobs</p>
        </div>

        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
        <Button variant="text"style={{borderRadius:"20px"}}>Join Now</Button>
      <Button variant="outlined"style={{borderRadius:"20px"}}>Sign In</Button>
        </div>
   
      </div>
      {/*  */}
    </div>
  );
};

export default Headers;
