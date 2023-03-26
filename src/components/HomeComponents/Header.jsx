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
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import murad from "../assets/murad.jpg";
import { Link } from "react-router-dom";

const Headers = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        <Link to="/">
        <div className="singleIconContainer">
          <AiFillHome className="headerIcon" />
          <p style={{color:"black"}}>Home</p>
        </div>
        </Link>
        <Link to="/network">
        <div className="singleIconContainer">
          <SlPeople className="headerIcon" />
          <p style={{color:"black",textDecoration:"none",listStyleType:"none"}}>My Network</p>
        </div>
        </Link>
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

        {/*  */}
        <div className="singleIconContainer" onClick={handleClick}>
          <img className="headerIcon muradImg" src={Murad} />
          <div className="headerFlex">
            <p>Me</p>
            <AiFillCaretDown className="meDown" />
          </div>
        </div>

        {/*  */}

        {/* The PopOver  Starts*/}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          style={{  padding: "20px" }}
          className="popOverMain"
        >
          <div style={{padding
          :"15px"}}>
            <div className="popOverContent">
              <img
                src={murad}
                style={{ height: "80px", width: "80px", borderRadius: "50%" }}
              />
              <div>
                <h3>Sardar Ali Murad Ali</h3>
                <Typography sx={{ p: 2 }}>
                  Seeking Junior-Level React+Node+Next Opportunities | React Js
                  Developer | Node Js, Express Js & MongoDb & Next Js | Software
                  Engineer Student | Islamia University Bahawalpur | 2025
                  Expected Graduation
                </Typography>
              </div>
            </div>
            <Link to="/in/user">
            <Button
              variant="outlined"
              className="viewProfile"
              style={{ borderRadius: "20px", marginLeft: "10px" }}
              >
              View Profile
            </Button>
              </Link>
          </div>
          {/* <div className="headerLine"></div> */}
          <div className="PopOverFlex">
            <h2>Account</h2>
            <p>Try prinium for free</p>
            <p>Setting & Privacy</p>
            <p>Help</p>
            <p>Language</p>
          </div>
          <div className="headerLine"></div>
          <div className="PopOverFlex">
            <h2>Manage</h2>
            <p>Post & Activity</p>
            <p>job Posting Account</p>
          </div>
          {/* <div className="headerLine"></div> */}
          {/* <p>Sign Out</p> */}
        </Popover>
        {/* The PopOver  Ends*/}

        {/* <div className="headerLine"></div> */}
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
