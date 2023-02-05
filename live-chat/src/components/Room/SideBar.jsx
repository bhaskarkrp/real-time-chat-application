import React from "react";
import RoomCard from "./RoomCard";
import "../../assets/css/roomCard.scss";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="Avatar">
          <h2>Chat Application</h2>
          <h3>Sachin</h3>
        </div>
      </div>
      <div className="room">
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </div>
    </div>
  );
}

export default SideBar;
