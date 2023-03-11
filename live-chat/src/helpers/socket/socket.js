import { store } from "../../store";
import { io } from "socket.io-client";
import { addMessage } from "../../store/features/message/messageSlice";
const socketURI = io("localhost:5000");

export const connectSocket = () => {
  socketURI.on("connect", () => {
    console.log("Client connected - " + socketURI.id);

    socketURI.on("message_created", (message) => {
      //   console.log({ message });
      store.dispatch(addMessage(message));
    });
  });
};
