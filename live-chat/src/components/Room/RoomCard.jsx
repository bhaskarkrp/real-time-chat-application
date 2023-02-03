import React from "react";
import "../../assets/css/roomCard.scss";

function RoomCard() {
  return (
    <div className="room-card">
      <div className="room-thumbnail-box">
        <div className="avatar-container">
            <span>R</span>
        </div>
      </div>

      <div className="room-card-details">
        <h4 className="room-name">room name</h4>
      </div>
    </div>
  );
}

export default RoomCard;
