import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../../store/features/message/messageSlice";
import Message from "../Message/Message";

function ConversationBox() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  // console.log({ state });
  React.useEffect(() => {
    dispatch(
      fetchMessages({
        roomId: "63d98f9d1c0b7f6ffb8effa4",
        userId: "63d98f8e1c0b7f6ffb8effa1",
      })
    );
  }, []);

  if (state.message.isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Conversation box</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {state.message.data &&
          state.message.data.map((message) => (
            <Message key={message._id} content={message.message} />
          ))}
      </div>
    </div>
  );
}

export default ConversationBox;
