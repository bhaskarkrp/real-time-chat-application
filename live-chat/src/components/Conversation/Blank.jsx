import React from "react";
import "../../assets/css/dashboard.scss";
import Input from "../Input";
import ConversationBox from "./ConversationBox";

function Blank({ socket }) {
  return (
    <div className="conversation-wrap">
      <div className="blank">
      <div className="avatar">
          <span>S</span>
        </div>
        <h2>Blank</h2> 
       
      </div>
    
      <div>
        <ConversationBox/>
        <Input socket={socket} />
      </div>
    </div>
  );
}

export default Blank;
