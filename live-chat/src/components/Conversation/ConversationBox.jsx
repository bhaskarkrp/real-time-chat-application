import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../../store/features/message/messageSlice";
import Message from "../Message/Message";
import "../../assets/css/dashboard.scss";

function ConversationBox() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const bottomRef = React.useRef(null);

  React.useEffect(() => {
    dispatch(
      fetchMessages({
        roomId: state.room.selectedRoom._id,
      })
    );
  }, [state.room.selectedRoom._id]);

  React.useEffect(() => {
    // scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.message.data]);

  if (state.message.isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="conversationBox">
        {state.message.data &&
          state.message.data.map((message) => {
            return (
              <div key={message._id} className="right">
                <Message key={message._id} message={message} />
              </div>
            );
            // }
          })}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default ConversationBox;
