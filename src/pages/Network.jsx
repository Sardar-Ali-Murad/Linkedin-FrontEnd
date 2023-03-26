import React from "react";
import { ManageNetwork,Connects} from "../components/NetworkComponents/index";
import "./Network.css";
import Header from "../components/HomeComponents/Header";

const Network = () => {
  return (
    <div>
      <Header />
      <div className="networkMain">
        <div className="manageNetwork">
        <ManageNetwork />
        </div>
        <div className="connectNetwork">
            <Connects/>
        </div>
      </div>
    </div>
  );
};

export default Network;
