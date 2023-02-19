import React from "react";
import { useSelector } from "react-redux";
import "../../assets/css/dashboard.scss";
import Input from "../Input";
import ConversationBox from "./ConversationBox";

function Blank({ socket }) {
  const state = useSelector((state) => state);

  if (!state.room.selectedRoom._id) {
    return (
      <div className="conversation-wrap">
        <h3 style={{ margin: "auto" }}>Select any room</h3>
      </div>
    );
  }

  return (
    <div className="conversation-wrap">
      <div className="blank">
        <div className="avatar">
          <span>
            {state.room.selectedRoom.room_name &&
              state.room.selectedRoom.room_name[0]}
          </span>
        </div>
        <h2>{state.room.selectedRoom.room_name}</h2>
      </div>

      <div>
        <ConversationBox />
        <Input socket={socket} />
      </div>
    </div>
  );
}

export default Blank;
