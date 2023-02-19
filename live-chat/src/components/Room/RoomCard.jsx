import React from "react";
import { useDispatch } from "react-redux";
import "../../assets/css/roomCard.scss";
import { selectRoom } from "../../store/features/room/roomSlice";

function RoomCard({ room }) {
  const dispatch = useDispatch();

  const setRoom = () => {
    dispatch(selectRoom(room));
  };

  return (
    <div className="room-card" onClick={setRoom}>
      <div className="room-thumbnail-box">
        <div className="avatar-container">
          <span>{room && room.room_name.trim()[0]}</span>
        </div>
      </div>

      <div className="room-card-details">
        <h4 className="room-name">{room.room_name}</h4>
      </div>
    </div>
  );
}

export default RoomCard;
