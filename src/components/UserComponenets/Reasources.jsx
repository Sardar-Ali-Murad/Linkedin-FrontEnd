import React from "react";
import Card from "@mui/material/Card";
import "./Resources.css"
import {SiNintendonetwork} from "react-icons/si"
import {BsPeople}  from "react-icons/bs"

const Reasources = () => {
  return (
    <Card className="analyticsMain">
      <div>
        <h2>Resources</h2>
        <h5>Private To You</h5>
      </div>
      <div className="resourcesWrapper">
        <div className="userInfoCommonFlex">
            <SiNintendonetwork className="icon"/>
            <div>
          <h3>Creator mode</h3>
          <h4>
            Get discovered, showcase content on your profile, and get access to
            creator tools
          </h4>
            </div>
        </div>
        <div className="userInfoCommonFlex">
            <BsPeople className="icon"/>
            <div>
          <h3>My network</h3>
          <h4>See and manage your connections and interests.</h4>
            </div>
        </div>
      </div>
    </Card>
  );
};

export default Reasources;
