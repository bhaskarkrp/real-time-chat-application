import React from "react";
import Blank from "./Conversation/Blank";
import SideBar from "./Room/SideBar";

function Dashboard({ socket }) {
  return (
    <div>
      <div className="app-content">
        <SideBar />
        <Blank socket={socket} />
      </div>
      {/* <h3>Dashboard</h3> */}
    </div>
  );
}

export default Dashboard;
