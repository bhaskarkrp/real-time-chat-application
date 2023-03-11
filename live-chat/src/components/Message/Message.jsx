import React from "react";
import { convertToIST, format12hours } from "../../helpers/readableTime.helper";

function Message({ message }) {

  const readableTime = (createdAt) => {
    const { time } = convertToIST(createdAt);
    const readableTime = time ? time.split(':').slice(0, -1).join(':') : '';
    return format12hours(readableTime)
  }

  return (
    <div className="message-box">
      <div style={{
        display: 'flex',
        fontSize: '0.8rem',
        margin: '-0.4rem 0',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <p
          style={{
            fontSize: "0.8rem",
            fontWeight: "bold",
            margin: "0 rem 0 -0.5rem",
            color: "#3b89ed",
          }}
        >
          {message.user_id && message.user_id.name}
        </p>
        <p>{readableTime(message.createdAt)}</p>
      </div>

      <p style={{
        marginBottom: "0.4rem", marginTop: '-0.1rem'
      }}>{message.message}</p>
    </div >
  );
}

export default Message;
