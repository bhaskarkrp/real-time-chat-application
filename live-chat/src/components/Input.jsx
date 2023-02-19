import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMessage } from "../store/features/message/messageSlice";
import "../assets/css/dashboard.scss";

function Input({ socket }) {
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const onSubmitMessage = () => {
    if (content.length > 0) {
      const { id } = JSON.parse(localStorage.getItem("loggedIn"));
      dispatch(
        createMessage({
          roomId: state.room.selectedRoom._id,
          userId: id,
          message: content,
        })
      );
      setContent("");
    }
  };

  return (
    <div className="inputdiv">
      <input
        placeholder="Type a message"
        type="text"
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
        name="content"
        className="input"
      />
      <input
        type="submit"
        value="SEND"
        className="sendbutton"
        onClick={onSubmitMessage}
      />
    </div>
  );
}

export default Input;
