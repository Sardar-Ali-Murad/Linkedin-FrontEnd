import React from "react";
import Linkedin from "../assets/Linkedin.png";
import "./Header.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { AiFillHome } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { IoBagSharp } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import Murad from "../assets/murad.jpg";
import { TbGridDots } from "react-icons/tb";

const Headers = () => {
  return (
    <div className="headersMain">
      {/*  */}
      <div className="headerSection1">
        <img src={Linkedin} className="linkedinImage" />
        <div className="textField">
        <TextField
          sx={{
            width: { sm: 200, md: 300 },
            "& .MuiInputBase-root": {
              height: 40,
            },
          }}
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          />
          </div>
      </div>

      {/*  */}
      <div className="headerIcons">
        <div className="singleIconContainer">
          <AiFillHome className="headerIcon" />
          <p>Home</p>
        </div>
        <div className="singleIconContainer">
          <SlPeople className="headerIcon" />
          <p>My Network</p>
        </div>
        <div className="singleIconContainer">
          <IoBagSharp className="headerIcon" />
          <p>Jobs</p>
        </div>
        <div className="singleIconContainer">
          <AiOutlineMessage className="headerIcon" />
          <p>Messaging</p>
        </div>
        <div className="singleIconContainer">
          <IoIosNotificationsOutline className="headerIcon" />
          <p>Notification</p>
        </div>
        <div className="singleIconContainer">
          <img className="headerIcon muradImg" src={Murad} />
          <div className="headerFlex">
            <p>Me</p>
            <AiFillCaretDown className="meDown" />
          </div>
        </div>
        <div className="headerLine"></div>
        {/*  */}
        <div className="singleIconContainer QrCode">
          <TbGridDots className="headerIcon" />
          <div className="headerFlex">
            <p>Tools</p>
            <AiFillCaretDown />
          </div>
        </div>
        <p className="premiur">
          Try Premiur for <br /> free
        </p>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};

export default Headers;
