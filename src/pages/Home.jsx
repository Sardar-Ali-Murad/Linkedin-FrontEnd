import React from "react";
import {
  UserInfoCard,
  UploadPost,
  Posts,
  Feed,
  Header
} from "../components/HomeComponents/index"
import "./Home.css";

const App = () => {
  return (
    <div className="AppMain">
       <Header/>
      <div className="bodyWrapper">
        <div className="user">
          <UserInfoCard />
        </div>
        <div className="posts">
          <UploadPost />
          <Posts />
        </div>
        <div className="feed">
        <Feed />
        </div>
      </div>
    </div>
  );
};

export default App;
