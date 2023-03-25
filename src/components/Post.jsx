import React from "react";
import "./Post.css";
import User from "../assets/murad.jpg";
import { AiOutlineUserAdd } from "react-icons/ai";
import aws from "../assets/aws.png";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import {SlLike}  from "react-icons/sl"
import {FaRegCommentDots}  from "react-icons/fa"
import {BiRepost, BiSend}  from "react-icons/bi"
import {BsSend}  from "react-icons/bs"

const Post = () => {
  let [seeMore, setSeeMore] = React.useState(false);

  return (
    <div className="postMain">
      <div className="postHeaderMain">
        <img src={User} />
        <div>
          <div className="postFlex">
            <h5>John Doe</h5>
            <p>. 2nd</p>
          </div>
          <p className="postInfoText">
            Frontend Developer | React Js| Redux| Typescript...
          </p>
          <p className="edited postInfoDate">1day.Edited .</p>
        </div>
        <div className="postFlex postFlexConnect">
          <h5>Connect</h5>
          <AiOutlineUserAdd />
        </div>
      </div>
      {/*  */}
      <div className="postInfoContent">
        <p>
          I've created a handy app that lists security checklists for various
          AWS services, ensuring all controls are in place. More services coming
          soon!
          <div>
            {!seeMore && (
              <a onClick={() => setSeeMore(true)} className="postLinks">
                See More...
              </a>
            )}
          </div>
          {seeMore && (
            <p>
              Quickly review checklists, download PDFs, and improve your AWS
              security. Check it out:
              <br />
              https://lnkd.in/ejmvybpF
              <br />
              #security #aws
              <br />
              <a onClick={() => setSeeMore(false)} className="postLinks">
                See Less...
              </a>
            </p>
          )}
        </p>
      </div>

      {/* The Image */}
      <div className="postMainImageContainer">
        <img src={aws} className="postMainImage" />
      </div>

      {/* The Comment History */}
      <div className="postCommentsInfo">
        <div className="postFlex">
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src={User} />
            <Avatar alt="Travis Howard" src={User} />
            <Avatar alt="Cindy Baker" src={User} />
            <Avatar alt="Agnes Walker" src={User} />
            <Avatar alt="Trevor Henderson" src={User} />
          </AvatarGroup>
          <p>Junaid Bukhari and 200,123 others</p>
        </div>
        <div className="postFlex">
          <p>234,233 comments</p>.
          <p>11,123 reposts</p>
        </div>
      </div>

      <div className="postLine"></div>


      {/* DO Action on the post */}
      <div className="uploadWrappers uploadWrappersPost">
        <div className="uploadWrappersSingle">
          <SlLike className="uploadWrapperImage"/>
          <p>Photo</p>
        </div>
        <div className="uploadWrappersSingle">
          <FaRegCommentDots className="uploadWrapperImage"/>
          <p>Video</p>
        </div>
        <div className="uploadWrappersSingle">
          <BiRepost className="uploadWrapperImage"/>
          <p>Event</p>
        </div>
        <div className="uploadWrappersSingle">
          <BiSend className="uploadWrapperImage"/>
          <p>Write Article</p>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Post;
