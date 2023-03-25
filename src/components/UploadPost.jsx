import React from "react";
import User from "../assets/murad.jpg";
import { HiPhoto } from "react-icons/hi2";
import { RxVideo } from "react-icons/rx";
import { BsCalendar4Event } from "react-icons/bs";
import { TbArticle } from "react-icons/tb";
import "./UploadPost.css";

const UploadPost = () => {
  return (
    <div className="UserInfoCard">
      <div className="writePost">
        <img src={User} />
        <input placeholder="Start A Post" className="UserInfoCardTextField" />
      </div>
      <div className="uploadWrappers">
        <div className="uploadWrappersSingle">
          <HiPhoto className="uploadWrapperImage photo" />
          <p>Photo</p>
        </div>
        <div className="uploadWrappersSingle">
          <RxVideo className="uploadWrapperImage video"/>
          <p>Video</p>
        </div>
        <div className="uploadWrappersSingle">
          <BsCalendar4Event className="uploadWrapperImage event"/>
          <p>Event</p>
        </div>
        <div className="uploadWrappersSingle">
          <TbArticle className="uploadWrapperImage article"/>
          <p>Write Article</p>
        </div>
      </div>
    </div>
  );
};

export default UploadPost;
