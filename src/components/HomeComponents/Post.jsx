import React from "react";
import "./Post.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost, BiSend } from "react-icons/bi";
import man1 from "../assets/men1.avif";
import man2 from "../assets/men2.jpg";
import man3 from "../assets/men3.jpg";
import man4 from "../assets/men4.jpg";
import man5 from "../assets/men5.jpg";

const Post = ({ post }) => {
  console.log(post);
  let [seeMore, setSeeMore] = React.useState(false);

  return (
    <div className="postMain">
      <div className="postHeaderMain">
        <img src={post?.userImage} />
        <div>
          <div className="postFlex">
            <h5>{post?.name}</h5>
            <p>. 2nd</p>
          </div>
          <p className="postInfoText">{post?.role.slice(0, 50)}...</p>
          <p className="edited postInfoDate">{post?.time}</p>
        </div>
        <div className="postFlex postFlexConnect">
          <h5>Connect</h5>
          <AiOutlineUserAdd />
        </div>
      </div>
      {/*  */}
      <div className="postInfoContent">
        <div>
          <div>
            {!seeMore && (
              <div>
                <p>{post?.text.slice(0, 300)}...</p>
                <a onClick={() => setSeeMore(true)} className="postLinks">
                  See More...
                </a>
              </div>
            )}
          </div>
          <div>
            {seeMore && (
              <div>
                <p>{post?.text.slice(0, -1)}...</p>
                <a onClick={() => setSeeMore(false)} className="postLinks">
                  Show Less...
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* The Image */}
      <div className="postMainImageContainer">
        <img src={post?.postImage} className="postMainImage" />
      </div>

      {/* The Comment History */}
      <div className="postCommentsInfo">
        <div className="postFlex">
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src={man4} />
            <Avatar alt="Travis Howard" src={man1} />
            <Avatar alt="Cindy Baker" src={man2} />
            <Avatar alt="Agnes Walker" src={man3} />
            <Avatar alt="Trevor Henderson" src={man5} />
          </AvatarGroup>
          <p>Junaid Bukhari and 200,123 others</p>
        </div>
        <div className="postFlex">
          <p>234,233 comments</p>.<p>11,123 reposts</p>
        </div>
      </div>

      <div className="postLine"></div>

      {/* DO Action on the post */}
      <div className="uploadWrappers uploadWrappersPost">
        <div className="uploadWrappersSingle">
          <SlLike className="uploadWrapperImage" />
          <p>Photo</p>
        </div>
        <div className="uploadWrappersSingle">
          <FaRegCommentDots className="uploadWrapperImage" />
          <p>Video</p>
        </div>
        <div className="uploadWrappersSingle">
          <BiRepost className="uploadWrapperImage" />
          <p>Event</p>
        </div>
        <div className="uploadWrappersSingle writeArticleWrapper">
          <BiSend className="uploadWrapperImage" />
          <p>Write Article</p>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Post;
