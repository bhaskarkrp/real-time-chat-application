import React from "react";
import Blank from "./Conversation/Blank";
import SideBar from "./Room/SideBar";
import "../assets/css/dashboard.scss";

function Dashboard({ socket }) {
  return (
    <div>
      <div className="app-content">
        <SideBar />
        <Blank socket={socket} />
      </div>
    </div>  
  );
}

export default Dashboard;
