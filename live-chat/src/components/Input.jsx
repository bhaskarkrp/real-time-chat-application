import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createMessage } from "../store/features/message/messageSlice";

function Input({ socket }) {
  const [content, setContent] = useState("");

  // React.useEffect(() => {
  //   socket.on("FromAPI", (data) => {
  //     setResponse(data);
  //   });
  // }, []);

  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
        name="content"
      />
      <input
        type="button"
        value="Send"
        onClick={() => {
          if (content.length > 0) {
            dispatch(
              createMessage({
                roomId: "63d98f9d1c0b7f6ffb8effa4",
                userId: "63d98f8e1c0b7f6ffb8effa1",
                message: content,
              })
            );
            setContent("");
          }
        }}
      />
    </div>
  );
}

export default Input;
