import React from "react";
// import '../../assets/css/message.scss'

function Message({ content }) {
  return (
    <div className="message-box">
      <p
        style={{
          fontSize: "0.8rem",
          fontWeight: "bold",
          margin: "0.4rem 0 -0.8rem",
          color: "#3b89ed",
        }}
      >
        Sachin
      </p>
      <p>{content}</p>
    </div>
  );
}

export default Message;
