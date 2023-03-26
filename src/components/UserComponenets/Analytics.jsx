import React from "react";
import "./Analytics.css";
import Card from "@mui/material/Card";
import { BsPeople } from "react-icons/bs";
import { TbAntennaBars4 } from "react-icons/tb";
import { BsSearch } from "react-icons/bs";

const Analytics = () => {
  return (
    <Card className="analyticsMain">
      <div>
        <h2>Analytics</h2>
        <h5>Private To You</h5>
      </div>
      <div className="analyticsWrapper">
        <div className="userInfoCommonFlex">
          <BsPeople className="icon" />
          <div>
            <h3>50 Profile Views</h3>
            <h4>Discover who's viewed your profile.</h4>
          </div>
        </div>
        <div className="userInfoCommonFlex">
          <TbAntennaBars4  className="icon"/>
          <div>
            <h3> 168 post impressions</h3>
            <h4>
              168 post impressions Check out who's engaging with your posts{" "}
            </h4>
          </div>
        </div>
        <div className="userInfoCommonFlex">
          <BsSearch className="icon" />
          <div>
            <h3>16 search prefreences</h3>
            <h4>See how often you appear in search results</h4>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Analytics;
