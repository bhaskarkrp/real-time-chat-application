import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../../store/features/message/messageSlice";
import Message from "../Message/Message";
import "../../assets/css/dashboard.scss";

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
      <div className="conversationBox">
        {state.message.data &&
          state.message.data.map((message) => {
            if (message.user_id === "63d98f8e1c0b7f6ffb8effa1") {
              return (
                <div key={message._id}  className="right">
                  <Message content={message.message} />
                </div>
              );
            } else {
              return (
                <div key={message._id}  className="left">
                  <Message key={message._id} content={message.message} />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export default ConversationBox;
