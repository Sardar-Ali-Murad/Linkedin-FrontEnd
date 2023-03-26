import React from "react";
import Banner from "../assets/Banner.jpg";
import User from "../assets/murad.jpg";
import "./UserInfoCard.css";
// import {FiFlag}  from "react-icons/fi"

const UserInfoCard = () => {
  return (
    <div className="userInfoCardMain">
      <div className="cardImages">
        <img src={Banner} className="bannerImage" />
        <img src={User} className="userImage" />
      </div>
      <div className="content">
        <h3>Sardar Ali Murad</h3>
        <p>
          Seeking Junior-Level React+Node+Next Opportunities | React Js
          Developer | Node Js, Express Js & MongoDb & Next Js | Software
          Engineer Student | Islamia University Bahawalpur | 2025 Expected
          Graduation
        </p>
      </div>
      <div className="line"></div>

      <div className="userActivityInfo">
        <div className="userActivityInfoContainer">
          <p className="text">Who's viewed your profile</p>
          <p className="number">50</p>
        </div>
        <div className="userActivityInfoContainer">
          <p className="text">Impression of your post</p>
          <p className="number">80</p>
        </div>
      </div>

      <div className="line"></div>

      <div className="premiurInfo">
        <p>Access Exclusive tools & insights</p>
        <div className="tryFree">
          <p>Try Premium For Free</p>
        </div>
      </div>
      {/* 
       <div className='MyItems'>
          <FiFlag/>
          <p>Mt items</p>
       </div> */}
    </div>
  );
};

export default UserInfoCard;
