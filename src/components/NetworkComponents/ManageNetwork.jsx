import React from "react";
import Card from "@mui/material/Card";
import { HiOutlineUsers } from "react-icons/hi";
import { TiContacts } from "react-icons/ti";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineGroup } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { BiNews } from "react-icons/bi";
import { HiHashtag } from "react-icons/hi";
import "./Manage.css"

const ManageNetwork = () => {
  return (
    <div>
    <Card className="manageCradMain">
      <h4 style={{marginTop:"20px",marginLeft:"10px"}}>Manage You Network</h4>
      {/*  */}
      <div>
        {/*  */}
        <div className="manageFlex">
          <div className="manageFlexSmall">
            <HiOutlineUsers className="manageIcon"/>
            <a>Connections</a>
          </div>
          <a>789</a>
        </div>
        <div className="manageFlex">
          <div className="manageFlexSmall">
            <TiContacts className="manageIcon"/>
            <a>Contacts</a>
          </div>
          <a>789</a>
        </div>
        <div className="manageFlex">
          <div className="manageFlexSmall">
            <AiOutlineUser className="manageIcon"/>
            <a>Following & Followers</a>
          </div>
          <a>789</a>
        </div>
        <div className="manageFlex">
          <div className="manageFlexSmall">
            <AiOutlineGroup className="manageIcon"/>
            <a>Groups</a>
          </div>
          <a>789</a>
        </div>
        <div className="manageFlex">
          <div className="manageFlexSmall">
            <BsCalendarEvent className="manageIcon"/>
            <a>Evnet</a>
          </div>
          <a>789</a>
        </div>
        <div className="manageFlex">
          <div className="manageFlexSmall">
            <BiNews className="manageIcon"/>
            <a>Page</a>
          </div>
          <a>789</a>
        </div>
        <div className="manageFlex">
          <div className="manageFlexSmall">
            <HiHashtag className="manageIcon"/>
            <a>Network</a>
          </div>
          <a>789</a>
        </div>
        {/*  */}
      </div>
      {/*  */}
    </Card>

    {/* <div> */}
        <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" style={{width:"100%",marginTop:"20px"}} className="ImageCard"/>
    {/* </div> */}
    </div>
  );
};

export default ManageNetwork;
