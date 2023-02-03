import React from "react";
import "../../assets/css/dashboard.scss";
import Input from "../Input";
import ConversationBox from "./ConversationBox";

function Blank({ socket }) {
  return (
    <div className="conversation-wrap">
      <h1>Blank</h1>
      <div>
        <ConversationBox />
        <Input socket={socket} />
      </div>
    </div>
  );
}

export default Blank;
