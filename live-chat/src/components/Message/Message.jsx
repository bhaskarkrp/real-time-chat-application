import React from "react";
// import '../../assets/css/message.scss'

function Message({ message }) {
  return (
    <div className="message-box">
      <p
        style={{
          fontSize: "0.8rem",
          fontWeight: "bold",
          margin: "0.4rem 0 -0.5rem",
          color: "#3b89ed",
        }}
      >
        {message.user_id && message.user_id.name}
      </p>
      <p style={{ marginBottom: "0.4rem" }}>{message.message}</p>
    </div>
  );
}

export default Message;
